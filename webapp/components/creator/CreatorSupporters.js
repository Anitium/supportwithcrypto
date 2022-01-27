import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import {formatCurrency} from '../../utils/cryptoutils';

const CreatorSupporters = ({creator}) => {
  const router = useRouter();
  const address = (router.query.creatorid == undefined? '':router.query.creatorid)

  const twitterurl = 'https://twitter.com/intent/tweet?text=You can support my work here => https://supportwithcrypto.com/' + address
  const whatsappurl = 'https://wa.me/?text=Hi, you can now support my work here => https://supportwithcrypto.com/' + address

  return (
    <>        
      <div className="flex flex-col space-y-10 shadow-sm rounded-md p-6 bg-white">
        <h2 className="border-b border-gray-100 text-xl font-medium text-gray-800">Suporters</h2>
        <div className="flex flex-col space-y-6">
        	{creator && creator.transactions && creator.transactions.map(x =>(
	          <div key={x.transactionid} className="flex h-14 items-center space-x-3 p-4 rounded-md bg-gradient-to-r from-cyan-500 to-blue-100 ">
	            <a className="rounded-full h-8 w-8 border-2 border-blue-600 bg-blue-400"></a>
	            <p>{x.message} - {formatCurrency(x.amount)}</p>
	          </div>              		
        	))}  
          { (!creator || creator.transactions == 0) && 
              <div className='flex flex-col space-x-4 spache-y-4 items-center justify-center'>
                <div className='flex flex-col items-center'>
                  <p>No supporters yet?</p>
                   <p>Share on your social networks!</p>
                </div>
                <div className='flex flex-row items-center justify-center space-x-4 rounded-full'>
                <div className='flex flex-row items-center justify-center space-x-4 '
                 >
                  <div> 
                    <a href={twitterurl} target='_blank'>
                      <img className="w-16 p-1 lg:block " src="./assets/img/social/twitter-logo.png" alt="Share" />
                    </a>
                  </div>
                  <div className=''> 
                    <a href={whatsappurl} target='_blank'>
                      <img className="w-16 p-1 lg:block " src="./assets/img/social/whatsapp-logo.png" alt="Share" />
                    </a>
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
