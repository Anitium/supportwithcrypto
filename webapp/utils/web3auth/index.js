import { useEffect } from 'react';

import { ethers } from "ethers";
import WalletConnectProvider from '@walletconnect/web3-provider';

import { getChainId } from './helpers';

export const connectToInjected = async () => {
  let provider = null;
  if (typeof window.ethereum !== 'undefined') {
    provider = window.ethereum;
    try {
      await provider.request({ method: 'eth_requestAccounts' })
    } catch (error) {
      throw new Error("connectToInjected - User Rejected");
    }
  } else if (window.web3) {
    provider = window.web3.currentProvider;
  } else {
    throw new Error("connectToInjected - No Web3 Provider found");
  }
  return provider;
};

export const connectToWalletConnect = async opts => {
  return new Promise(async (resolve, reject) => {
    let bridge = "https://bridge.walletconnect.org";
    let qrcode = true;
    let infuraId = "";
    let rpc = undefined;
    let chainId = 1;
    let qrcodeModalOptions = undefined;
    
    if (opts) {
      bridge = opts.bridge || bridge;
      qrcode = typeof opts.qrcode !== "undefined" ? opts.qrcode : qrcode;
      infuraId = opts.infuraId || "";
      rpc = opts.rpc || undefined;
      chainId = opts.network && getChainId(opts.network) ? getChainId(opts.network) : 1;
      qrcodeModalOptions = opts.qrcodeModalOptions || undefined;
    }

    const provider = new WalletConnectProvider({
      bridge,
      qrcode,
      infuraId,
      rpc,
      chainId,
      qrcodeModalOptions
    });
    try {
      await provider.enable();
      resolve(provider);
    } catch (e) {
      reject(e);
    }
  });
};

export const signMessage = async ({ provider, message }) => {
  // console.log({ message });
  if (!provider){
    throw new Error("signMessage - provider is required");
  }
  if (!message){
    throw new Error("signMessage - message is required");
  }

  const s = provider.getSigner();
  const signature = await s.signMessage(message);
  const signer = await s.getAddress();

  return {
    message,
    signature,
    signer,
    success: true,
  };
};

export const verifyMessage = async ({ message, signer, signature }) => {
  // console.log('message, signer, signature:', message, signer, signature);
  if (!message){
    throw new Error("verifyMessage - message is required");
  }
  if (!signer){
    throw new Error("verifyMessage - signer is required");
  }
  if (!signature){
    throw new Error("verifyMessage - signature is required");
  }
  
  const signerAddr = await ethers.utils.verifyMessage(message, signature);
  if (signerAddr !== signer) {
    return false;
  }
  return true;
};

export const verifyAuthHttpReq = async req => {
  const data = req.body;
  console.log('request data:', data);

  // protect endpoint
  let isValid = false;
  if(data.auth && data.auth.authData){
    isValid = await verifyMessage({
      message: data.auth.authData.message,
      signer: data.auth.authData.signer,
      signature: data.auth.authData.signature
    });
  }
  return isValid;
};

export const getAuthKey = app => {
  return `authData/${app}`;
};

export const getAuthData = () => {
  const key = getAuthKey('swc');
  const item = JSON.parse(window.localStorage.getItem(key));
  return item;
};

export const doSignature = async ({ provider, message }) => {
  if (!provider){
    throw new Error("doSignature - provider is required");
  }
  if (!message){
    throw new Error("doSignature - message is required");
  }
  
  const key = getAuthKey('swc');
  const item = JSON.parse(window.localStorage.getItem(key));
  const web3Provider = new ethers.providers.Web3Provider(provider);
  const accounts = await web3Provider.listAccounts();
  if(!item || (accounts.length > 0 && item.authData && item.authData.signer!==accounts[0])) {
    // console.log('sign a new message - key:', key);
    const sig = await signMessage({provider: web3Provider, message});
    if(sig.success) {
      // console.log('saving authData- key:', key);
      const item = {
        authData: {
          'message': sig.message,
          'signer': sig.signer,
          'signature': sig.signature,
        }
      };
      window.localStorage.setItem(key, JSON.stringify(item));
    }
  }
};

export const doWallectConnect = async opts => {
  if (!opts.activate || !(typeof opts.activate === 'function')){
    console.log("doWallectConnect - activate is required");
    return false;
  }
  if (!opts.infuraId){
    console.log("doWallectConnect - infuraId is required");
    return false;
  }
  if (!opts.signInMessage){
    console.log("doWallectConnect - signInMessage is required");
    return false;
  }
  
  try {
    // get provider from wallect connect
    const provider = await connectToWalletConnect(opts);
    await opts.activate(provider);
    await doSignature({ provider, message: opts.signInMessage });
    return true;
  } catch(e) {
    console.log('doWallectConnect - error:', e);
    return true;
  }
};

export const doMetamaskConnect = async opts => {
  if (!opts.activate || !(typeof opts.activate === 'function')){
    console.log("doMetamaskConnect - activate is required");
    return false;
  }
  if (!opts.signInMessage){
    console.log("doMetamaskConnect - signInMessage is required");
    return false;
  }

  try {
    // get provider from injected
    const provider = await connectToInjected();
    await opts.activate(provider);
    await doSignature({ provider, message: opts.signInMessage });
    return true;
  } catch(e) {
    console.log('doMetamaskConnect - error:', e);
    return false;
  }
};

export const doConnect = async opts => {
  console.log('--- doConnect - window.ethereum:', window.ethereum);
  try {
    if(!window.ethereum) {
     return await doWallectConnect(opts);
    } else {
     return await doMetamaskConnect(opts);
    }
  } catch(e) {
    console.log('doConnect - error:', e);
  }
};

export const doDisconnect = async opts => {
  // delete the key
  const key = getAuthKey('swc');
  window.localStorage.removeItem(key);

  // deactivate
  if(opts.deactivate && typeof opts.deactivate === 'function') {
    opts.deactivate();
  }
};

export const useRefreshConnection = opts => {
  // listen for page loading
  useEffect(() => {
    doConnect(opts);
  }, []);
};
