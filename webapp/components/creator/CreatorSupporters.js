import React from 'react';
import PropTypes, { symbol } from 'prop-types';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Blockies from "react-blockies";
import colors from 'tailwindcss/colors'

import { formatCurrency, formatAccount, findChainById, getChainScanner } from '../../utils/web3utils';
import { ChainIcon } from '../icons';

const CreatorSupporters = ({creator}) => {
  // hooks
  const router = useRouter();

  // calculations
  const address = (router.query.creatorid == undefined? '':router.query.creatorid);

  const twitterurl = 'https://twitter.com/intent/tweet?text=You can support my work here => https://supportwithcrypto.com/' + address
  const whatsappurl = 'https://wa.me/?text=Hi, you can now support my work here => https://supportwithcrypto.com/' + address

  return (
    <>        
      <div className="flex flex-col space-y-10 shadow-sm rounded-md p-6 bg-white">
        <h2 className="border-b border-gray-100 text-xl font-medium text-gray-800">Supporters</h2>
        <div className="flex flex-col space-y-6">
        	{creator && creator.transactions && creator.transactions.map(tx =>(
	          <div key={tx.transactionid} className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-3 p-4 rounded-md gradient-clear text-gray-700">
              <div className='flex w-full sm:w-1/3'>
                <div className='flex flex-col space-y-2'>
                  <div className='flex flex-row justify-center space-x-3 items-stretch'>
                    <div className="flex w-8 md:w-8">
                      <Blockies className="max-h-8 md:max-h-8 min-w-full border-2 border-gray-50 rounded-full" 
                        seed={tx.from} size={10} scale={10} color={colors.blue[500]} bgColor={colors.cyan[500]} />
                    </div>
                    <div className='flex bg-white/30 items-center p-1 text-xs rounded-md'>
                        {formatAccount(tx.from)}
                    </div>
                    <div className='flex'>
                      <Link href={getChainScanner(tx.chain).url + '/tx/' + tx.transactionid}>
                        <a target='_blank' className="flex w-6 h-6 bg-white/40 rounded-full p-1 text-gray-600">
                          <ChainIcon />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className='flex flex-row items-start space-x-2 justify-start'>
                    <div className="flex text-lg">{formatCurrency(tx.amount)} {(tx.chain != undefined) ? findChainById(tx.chain).nativeCurrency.symbol : 'ETH'}</div>
                  </div>
                </div>
              </div>
              <div className='flex w-full sm:w-2/3 border bg-white/40 rounded-md h-full text-center items-center p-2 '>
                <p>{tx.message}</p>
              </div>
	          </div>              		
        	))}  
          { (!creator ||  !creator.transactions || creator.transactions == 0) && 
              <div className='flex flex-col space-x-4 spache-y-4 items-center justify-center'>
                <div className='flex flex-col items-center text-gray-700 text-xs sm:text-base'>
                  <p>No supporters yet?</p>
                   <p>Share on your social networks!</p>
                </div>
                <div className='flex flex-row items-center justify-center space-x-4 rounded-full'>
                <div className='flex flex-row items-center justify-center space-x-4 '
                 >
                  <div> 
                    <Link target='_blank' href={twitterurl} passHref>
                      <img className="w-16 p-1 lg:block " src="./assets/img/social/twitter-logo.png" alt="Share" />
                    </Link>
                  </div>
                  <div className=''> 
                    <Link target='_blank' href={whatsappurl} passHref>
                      <img className="w-16 p-1 lg:block " src="./assets/img/social/whatsapp-logo.png" alt="Share" />
                    </Link>
                  </div>
                </div>
                </div>
                <div className='flex'>
                  <img className="p-8 lg:block w-auto" src="./assets/img/no-supporters-yet.png" alt="Share" />
                </div>
              </div>
          }        
        </div>
      </div>
    </>
  );
}

CreatorSupporters.propTypes = {
  creator: PropTypes.any,
};

export default CreatorSupporters;
