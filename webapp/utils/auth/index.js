import { ethers } from "ethers";

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
