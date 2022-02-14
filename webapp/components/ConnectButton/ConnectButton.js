import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useRouter } from 'next/router';

import { useEthers, useEtherBalance } from "@usedapp/core";

import { WalletIcon, LogoutIcon } from '../icons';
import { useSymbol } from '../../hooks/useSymbol';
import { formatCurrency, formatAccount } from '../../utils/cryptoutils/';
import { Logo } from '../Logo';

import { signMessage, getAuthKey, connectToWallet } from '../../utils/auth';
import { getItem, removeItem, setItem } from '../../utils/storage';
import { globals } from '../../utils/constants';

const ConnectButton = ({label}) => {
  // hooks
  const router = useRouter();

  const { deactivate, account, activate, chainId, library: connection } = useEthers();
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
    connectToWallet(activate);    
  };
  
  const handleDisconnect = (e) => {
    e.preventDefault();

    // remove stored auth info
    const key = getAuthKey('swc');
    removeItem(key);

    // deactivate
    deactivate();
  };

  const handleRedirect = (e) => {
    e.preventDefault();
    router.push(`/${account}`);
  };

  // log
  console.log('--- account:', account);
  // render out
  return (
  <div className="w-full text-sm leading-4 font-medium text-green-900">
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
          <div className="flex">
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
