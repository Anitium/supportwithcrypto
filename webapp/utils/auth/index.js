import Web3Modal from "web3modal";
import WalletConnectProvider from '@walletconnect/web3-provider';

import { globals } from '../constants';

export const signMessage = async ({ message, connection }) => {
  try {
    console.log({ message });
    if (!connection){
      console.log('no connection: No crypto wallet found. Please install it.' );
      return {success: false, error: 'No crypto wallet found. Please install it.'};
    }

    const signer = connection.getSigner();
    const signature = await signer.signMessage(message);
    const address = await signer.getAddress();

    return {
      message,
      signature,
      address,
      success: true,
    };
  } catch (err) {
    console.log('signMessage error:', err);
    return {success: false, error: err};
  }
};

export const verifyMessage = async ({ message, signer, signature }) => {
  console.log('message, signer, signature:', message, signer, signature);
  try {
    const signerAddr = await ethers.utils.verifyMessage(message, signature);
    if (signerAddr !== signer) {
      return false;
    }

    return true;
  } catch (err) {
    console.log('verifyMessage error:', err);
    return false;
  }
};

export const getAuthKey = app => {
  return `authData/${app}`;
};

export const verifyAuthHttpReq = async req => {
  const data = req.body;
  console.log('request data:', data);

  // protect endpoint
  let isValid = false;
  if(data.auth && data.auth.authData){
    isValid = await verifyMessage({
      message: data.auth.authData.message,
      signer: data.auth.authData.address,
      signature: data.auth.authData.signature
    });
  }
  return isValid;
};

export const connectToWallet = async (activate) => {
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        bridge: globals.infuraBridge,
        infuraId: globals.infuraId,
      }
    },
  };
  // web3Modal support multiple providers/wallets
  const web3Modal = new Web3Modal({
    providerOptions, // required
  });  
  try {
    const provider = await web3Modal.connect();
    await activate(provider);
    // reload the window
    window.location.reload();
  } catch(err) {
    console.log('connection error:', err);
  }    
};
