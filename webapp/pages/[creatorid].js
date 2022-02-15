import React, { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import { ethers } from 'ethers';
import { useEthers, useEtherBalance, useSendTransaction } from "@usedapp/core";

import classNames from '../utils/classutils';
import { useSymbol, useRate } from '../hooks';
import { DefaultLayout } from "../layout";
import { getCreator, updateCreator } from '../api/creatorsapi';
import { CreatorProfile, CreatorSupporters, CreatorAbout, CreatorEmbedCode} from '../components/creator';
import { Spinner } from '../components/Spinner';

const User = ({}) => {
  // state
  const [creator, setCreator] = useState({
  	transactions:[],
  });
  const [, setError] = useState('');
  const [refresh, setRefresh] = useState(true);
  
  // ethers management
  const { account, chainId } = useEthers();
  const etherBalance = useEtherBalance(account);

  // transaction management
  const { sendTransaction, state:transactionState } = useSendTransaction();

  // hooks
  // router
  const router = useRouter();

  // form management
  const [dollar, setDollar] = useState(5);
  const [crypto, setCrypto] = useState(0);
  const [message, setMessage] = useState('');
  const [rate, rateDate] = useRate(chainId);
  const symbol = useSymbol(chainId);
  const [tick, setTick] = useState(true);
  const [inputSize, setInputSize] = useState(1);
  

  useEffect(() => {
    setCrypto( !dollar ? 0: ((parseFloat(dollar)/rate).toFixed(10)) );
  },[rate, dollar]);

  const animateTick = () => {
    setTick(true);
    setTimeout(() => {setTick(false)}, 80);
  }

  const updateInputSize = () => {
    setInputSize(dollar.toString().length > 9 ? 10 : (dollar.toString().length < 1? 1:dollar.toString().length));
  }

  useEffect(() => {
    animateTick();
    updateInputSize()
  },[dollar]);


  // effect for onloading the page
  useEffect(() => {
    const fetchData = async (creatorid) => {
      const response = await getCreator(creatorid);
      if(response.success) {
	      if(!response.payload.transactions) {
	          response.payload.transactions = [];
	      }
	      response.payload.creatorid = creatorid;
	      setCreator(response.payload);
      } else {
      	setError(response.errorMessage);
      }
  	};
    const { creatorid } = router.query;
    if(creatorid) {
      fetchData(creatorid);
    }
  }, [router.query, refresh]);

  // input validation
  const enableBtn = useMemo(() => {
    if(!account) {
      return false;
    }
    if( isNaN(crypto) ) {
      return false;
    }
    if(transactionState.status.toLowerCase() === 'mining') {
      return false;
    }
    return true;
  }, [account, crypto, transactionState]);

  // handle transaction
  useEffect(() => {
	  const handleRecordTransaction = async (id, transaction) => {
	  	// init
	  	const ts = new Date().getTime();
	  	const { creatorid } = router.query;
	  	const data = {...creator};

	  	// register transaction
	  	data.transactions.push({
	  		'transactionid': id,
        'amount': transaction.value,
        'message': message,
        'created': ts,
        'from': account,
        'to': creatorid,
        'chain': chainId,
	  	});
	  	const response = await updateCreator(data);
	  	
	  	// handle response
	  	console.log(response);
	  	if(!response.success) {
	  		setError(response.errorMessage);
	  	}

      // update state
      setMessage('');
      setDollar(5);
	  	setRefresh(!refresh);
	  };

  	console.log('--- transactionState:', transactionState);
  	if(transactionState.status == 'Success') {
  		handleRecordTransaction(transactionState.receipt.blockHash, transactionState.transaction);
  	}
  }, [transactionState]);

  // functions
  const handleDonation = async (e) => {
    // prevent bubble up the event
    e.preventDefault();

  	// validation
  	if(!enableBtn) {
  		return;
  	}
  	// init
  	const { creatorid } = router.query;
    const value = ethers.utils.parseUnits(crypto.toString(), 'ether');

  	// send transaction
    sendTransaction({ 'from': account, 'to': creatorid, value });
  };
  
  // logs
  // console.log('--- account, chainId, balance, crypto, enableBtn, transactionState', account, chainId, etherBalance, crypto, enableBtn, transactionState, creator);  
  return (
  <content className="container mx-auto flex flex-col">
    {/* User Profile Header */}
	  <section className="flex flex-col justify-center items-center">
	    <CreatorProfile creator={creator} />
	  </section>
    {/* User Content Left and Right */}
    <section className="flex flex-col justify-center items-center my-4">
	  {/* User Content Tab */}
	    <div className="flex flex-col w-full justify-center items-center">
        <div className="flex space-x-4 justify-start items-start w-full max-w-6xl">
          <label className='text-xl text-gray-700 font-semibold border-b-4 border-swc-right px-2'>About</label>
          <label className='text-xl text-gray-700 font-semibold border-b-4 border-gray-200 px-2'>Posts</label>
        </div>
        <div className="w-full border-b border-gray-200"></div>
      </div>	
      {/* User Content About Tab */}
      <div className="w-full flex flex-col lg:flex-row max-w-6xl pt-3 lg:space-x-10 space-y-5 lg:space-y-0">
        {/* User Content About and Comments (Left Panel) */}
        <div className="basis-1/2 xl:basis-7/12 flex flex-col pt-5 space-y-5 order-2 lg:order-first">
          <CreatorSupporters creator={creator} />
        </div>
        {/* User Content Donate Botton (Right Panel & Top) */}
        <div className="basis-1/2 xl:basis-5/12 flex flex-col lg:pt-5 space-y-5 ">
          <div className="flex flex-col space-y-10 shadow-sm rounded-md p-6 bg-white">
            <h2 className="border-b border-gray-100 text-xl font-medium text-gray-700">Support <strong>{(creator && creator.name)? creator.name : 'the Creator'}</strong></h2>
			      <form>
              <div className="flex flex-col space-y-6">
				        <div className="flex flex-col w-full justify-between items-center">
                  <div className='flex w-full border border-swc-left rounded-2xl flex-col' >
                    <div className="flex items-center justify-center h-20 text-gray-500">
                      <div className='flex w-1/4 items-center justify-center'>
                        <button onClick={e => { e.preventDefault(); setDollar( !dollar ? 0 : (parseFloat(dollar) - 5 <=0 ? 0 : parseFloat(dollar) - 5)) }}>
                          <div className="flex text-3xl text-blue-500 font-extrabold rounded-full h-12 w-12 border-2 border-swc-left justify-center items-center">-</div>
                        </button>
				      	      </div>
                      <div className="flex w-1/2 items-center justify-center">
                        <div className="flex w-6 items-center justify-end">
                          <span className='text-gray-400 text-4xl font-bold'>$</span>
                        </div>
                        <div className="flex">
                          <input type="text" name="dollars" id="dollars" placeholder='0' 
                            size={inputSize} 
                            className='text-center  text-gray-500 text-5xl font-bold focus:outline-none'
                            value={dollar} onChange={e => setDollar(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className='flex w-1/4 items-center justify-center'>
                        <button onClick={e => { e.preventDefault(); setDollar( !dollar ? 5: parseFloat(dollar) + 5) }}>
                          <div className="flex text-3xl text-blue-500 font-extrabold rounded-full h-12 w-12 border-2 border-swc-left justify-center items-center">+</div>
                        </button>
    				      	  </div>
                    </div>
                    <div className="flex items-center justify-center h-20 text-white gradient rounded-b-2xl">
                      <div className="flex w-32 items-center justify-end">
                        <span className="text-2xl font-bold ">
                          {symbol}
                        </span>
                      </div>
                      <div className={'flex pl-2 pr-2 ' + (tick?'animate-crypto-tick':'')}>
                        <input disabled
                          type="text"
                          name="amount"
                          id="amount"
                          value={!crypto?crypto:crypto.substr(0,12)}
                          //onChange={e => (e.target.value.length > 0) ? setDollar(parseFloat(e.target.value) * rate) : setDollar(0)}
                          placeholder='0'
                          className='w-full pl-1 text-4xl font-bold focus:outline-none bg-transparent'
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <div className='flex text-xs text-left text-gray-400 pt-2'>
                      rate {rate} on {rateDate} 
                    </div>
                  </div>
			          </div>
	              <div>
	                <div className="mx-auto block relative mt-0 font-normal">
				      	    <label className="top-0 left-0 absolute pt-2 px-3 text-left text-xs text-gray-600 font-normal">Your message to creator...</label>
                    <textarea
                      id="message" 
                      name="message"
                      rows={3}
	                    className='w-full border rounded-md border-swc-left pt-7 pb-2 px-3 hover:ring-swc-right text-base text-blue-700 placeholder-blue-500'      
                      value={message}
                      onChange={e => setMessage(e.target.value)}
	                  />
	                </div>
	              </div>
	              <div className="flex items-center">
                  <button 
                    type="submit" 
                    className={classNames("flex items-center justify-center primary-btn hover:scale-110 transform transition-all duration-700 ease-in-out cursor-pointer", enableBtn ? '' : 'cursor-not-allowed opacity-50')}
                    onClick={handleDonation}
                  >
                    { transactionState.status.toLowerCase() === 'mining' && <Spinner color="pink" /> }
                    <span>{ transactionState.status.toLowerCase() === 'mining' ? 'Donating ...' : 'Donate'}</span>
	                </button>
	              </div>
              </div>
			      </form>
          </div>
          { creator && creator.about && <CreatorAbout creator={creator} /> }
        </div>
      </div>
    </section>
  </content>
  );
}
  
User.Layout = DefaultLayout;

export default User;  
