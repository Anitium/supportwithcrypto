import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useEthers, useEtherBalance } from "@usedapp/core";
import { ethers } from 'ethers';
import Web3Modal from "web3modal";
import WalletConnectProvider from '@walletconnect/web3-provider';

import { WalletIcon, LogoutIcon } from '../icons';
import { useSymbol } from '../../hooks/useSymbol';
import { formatCurrency, formatAccount } from '../../utils/cryptoutils/';
import { Logo } from '../Logo';

import { signMessage, getAuthKey } from '../../utils/auth';
import { getItem, removeItem, setItem } from '../../utils/storage';
import { globals } from '../../utils/constants';

const ConnectButton = ({label}) => {
  // hooks
  const { deactivate, account, chainId, library: connection } = useEthers();
  const etherBalance = useEtherBalance(account);

  const symbol = useSymbol(chainId);

  useEffect(() => {
    const handleAcctChange = async () => {
      if(!account){
        return;
      }

      const key = getAuthKey('swc');
      const item = getItem(key);
      if(!item || (item.authData && item.authData.address!==account)) {
        console.log('sign a new message - key:', key);
        const sig = await signMessage({message: globals.signatureMessage, connection});
        if(sig.success) {
          console.log('saving authData- key:', key);
          setItem(key, {
            authData: {
              'message': sig.message,
              'address': sig.address,
              'signature': sig.signature,
            }
          })
        }
      }      
    };
    console.log('--- account change event:', account);
    handleAcctChange();
  }, [account, connection]);

  // functions
  const handleConnect = async () => {
    try {
      const providerOptions = {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            // test key - don't copy as your mileage may vary
            infuraId: "8043bb2cf99347b1bfadfb233c5325c0",
          }
        },
      }; 
      // web3Modal support multiple providers/wallets
      const web3Modal = new Web3Modal({
        cacheProvider: false, // optional
        providerOptions, // required        
      });
      const connection = await web3Modal.connect();
      // Get providers
      const provider = new ethers.providers.Web3Provider(connection);
      console.log('provider:', provider);
      // reload the window
      window.location.reload();
    } catch(err) {
      console.log('connection error:', err);
    }    
  };
  
  const handleDisconnect = (e) => {
    e.preventDefault();

    // remove stored auth info
    const key = getAuthKey('swc');
    removeItem(key);

    // deactivate
    deactivate();
  };

  // render out
  return (
  <div className="w-full text-sm leading-4 font-medium text-green-900">
    { account ? (
      <a type="button" href={'/' + account}>
        <div className="flex item-center justify-center space-x-6">
          <div className="flex items-center justify-center">
            <span>{`${formatCurrency(etherBalance)} ${symbol}`} -</span>
            <div className="flex w-4 h-4 text-blue-300 mx-1">
              <WalletIcon />
            </div>
            <span>{`${formatAccount(account)}`}</span>
          </div>
          <div className="flex">
            <a href="#" onClick={handleDisconnect} className="w-4 h-4 text-gray-500">
              <LogoutIcon />
            </a>
          </div>
        </div>
      </a>
    ) : (
      <button
        type="button" 
        onClick={handleConnect}
        className="flex items-center justify-center px-3 py-2 border border-gray-300 shadow-lg rounded-md bg-gray-100 bg-opacity-10 hover:border-gray-400 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        <Logo size="w-4 h-4" />
        <span className="text-sm leading-4 font-medium">{label}</span>
      </button>
    )}
  </div>
  );
};

ConnectButton.propTypes = {
  label: PropTypes.string,
};

ConnectButton.defaultProps = {
  label: 'Connect Wallet',
};

export default ConnectButton;
