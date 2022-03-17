import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useRouter } from 'next/router';

import { useEthers, useEtherBalance } from "@usedapp/core";

import { WalletIcon, LogoutIcon, SettingsIcon, BlogIcon } from '../icons';
import { useSymbol } from '../../hooks/useSymbol';
import { formatCurrency, formatAccount } from '../../utils/web3utils/';
import { Logo } from '../Logo';

import { doConnect, useRefreshConnection, doDisconnect } from '../../utils/web3auth';
import { globals } from '../../utils/constants';
import Link from 'next/link';

const ConnectButton = ({label}) => {
  // hooks
  const router = useRouter();

  const { deactivate, account, activate, chainId } = useEthers();
  const etherBalance = useEtherBalance(account);

  const symbol = useSymbol(chainId);

  // onload - refresh the connection
  useRefreshConnection( globals.getConfig({ activate, deactivate, chainId }) );
  
  // functions
  const handleConnect = async () => {
    // doConnect
    doConnect( globals.getConfig({activate, deactivate, chainId}) );
  };
  
  const handleDisconnect = (e) => {
    e.preventDefault();

    // doDisconnect
    doDisconnect( globals.getConfig({activate, deactivate, chainId}) );
  };

  const handleRedirect = (e) => {
    e.preventDefault();
    router.push(`/${account}`);
  };

  const handleGoSettings = (e) => {
    e.preventDefault();
    router.push(`/settings`);
  };
  
  // log
  console.log('--- account:', account);
  // render out
  return (
  <div className="flex w-full space-x-4 text-sm leading-4 font-medium text-green-900">
    <div className="flex items-center">
      <Link href='/crypto' >
        <a className="flex w-4 h-4 text-gray-500">
          <BlogIcon />
        </a>
      </Link>
    </div>
    { account ? (
        <div className="flex item-center justify-center space-x-6">
          <a href="#" onClick={handleRedirect}>
            <div className="flex items-center justify-center">
              <span>{`${formatCurrency(etherBalance)} ${symbol}`} -</span>
              <div className="flex w-4 h-4 text-blue-300 mx-1">
                <WalletIcon />
              </div>
              <span>{`${formatAccount(account)}`}</span>
            </div>
          </a>
          <div className="flex flex-row space-x-2">
            <a href="#" onClick={handleGoSettings} className="w-4 h-4 text-gray-500">
              <SettingsIcon />
            </a>
            <a href="#" onClick={handleDisconnect} className="w-4 h-4 text-gray-500">
              <LogoutIcon />
            </a>
          </div>
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
