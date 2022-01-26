import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import { ethers } from 'ethers';
import Web3Modal from "web3modal";
import WalletConnectProvider from '@walletconnect/web3-provider';

import { findChainById } from '../../utils/cryptoutils'
import { Logo } from '../Logo';

const formatCurrency = (value) => value ? parseFloat(formatEther(value)).toFixed(4) : '0.000';

const formatAccount = (account) => account && `${account.slice(0, 5)}...${account.slice(account.length - 4, account.length)}`;

const ConnectButton = ({label}) => {
  // hooks
  const { account, chainId } = useEthers();
  const etherBalance = useEtherBalance(account);

  const symbol = useMemo(()=> { 
    return (chainId != undefined) ? findChainById(chainId).symbol : 'EHT'; 
  }, [chainId]) 
  
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
  
  // render out
  return (
  <div className="w-full text-sm leading-4 font-medium text-green-900">
    { account ? (
      <div className="flex items-center justify-center">
        <span>{`${formatCurrency(etherBalance)} ${symbol}`} -</span>
        <svg width="24" height="24" stroke="currentColor" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1 text-cyan-500">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.25 8.25V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75"></path>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 13C16.5 13.2761 16.2761 13.5 16 13.5C15.7239 13.5 15.5 13.2761 15.5 13C15.5 12.7239 15.7239 12.5 16 12.5C16.2761 12.5 16.5 12.7239 16.5 13Z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 8.25H6.5C5.5335 8.25 4.75 7.4665 4.75 6.5C4.75 5.5335 5.5335 4.75 6.5 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V8.25ZM17.25 8.25H19.25"></path>
        </svg>
        <span>{`${formatAccount(account)}`}</span>
      </div>
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
