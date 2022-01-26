import React, { useEffect, useState, useMemo, useRef } from 'react';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import { ethers } from 'ethers';
import { useEthers, useEtherBalance, useSendTransaction } from "@usedapp/core";

import { DefaultLayout } from "../layout";
import { getCreator, updateCreator } from '../api/creatorsapi';
import classNames from '../utils/classutils';
import CreatorProfile from '../components/creator/CreatorProfile';
import CreatorComments from '../components/creator/CreatorSupporters';
import CreatorAbout from '../components/creator/CreatorAbout';

const User = ({}) => {
  // var
  const lastFormData = useRef({});

  // state
  const [creator, setCreator] = useState({
  	transactions:[],
  });
  const [error, setError] = useState('');
  const [refresh, setRefresh] = useState(true);

  // hooks
  // router
  const router = useRouter();

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

  // form management
  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  // ethers management
  const { account, chainId } = useEthers();
  const etherBalance = useEtherBalance(account);

  // transaction management
  const { sendTransaction, state:transactionState } = useSendTransaction();

  // input validation
  const enableBtn = useMemo(() => {
  	return account ? true : false;
  }, [account]);

  useEffect(() => {
	  const handleRecordTransaction = async (id, transaction) => {
	  	// init
	  	const formData = lastFormData.current;
	  	const ts = new Date().getTime();
	  	const { creatorid } = router.query;
	  	const data = {...creator};

	  	// register transaction
	  	data.transactions.push({
	  		'transactionid': id,
	        'amount': transaction.value,
	        'message': formData.message,
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
	  	reset();
	  	setRefresh(!refresh);
	  };

  	console.log('--- transactionState:', transactionState);
  	if(transactionState.status == 'Success') {
  		handleRecordTransaction(transactionState.receipt.blockHash, transactionState.transaction);
  	}
  }, [transactionState]);

  // logs
  console.log('--- account, chainId, balance, enableBtn, transactionState', account, chainId, etherBalance, enableBtn, transactionState, creator);

  const [dollars, setDollars] = useState(5);
  const [crypto, setCrypto] = useState(0);
  const [currency, setCurrency] = useState('ETH');
  const [symbol, setSymbol] = useState('ETH');
  
  const exchange = [
    {id: 'ETH', symbol: 'ETH', value : 2500},
    {id: 'MATIC', symbol: 'MAT', value : 2}
  ]

  function findRateByCrypto(id) {
    return exchange.find((element) => {
      return element.id === id;
    })
  }
  
  function handleChangeEmpty(e) {
  }

  const addDonation = (event) => {
    setDollars(dollars + 5);
  }

  const lessDonation = (event) => {
    setDollars((dollars - 5) <=0 ? 0 : dollars - 5);
  }

  const updateDollars = (event) => {
    setDollars(event.target.value);
  }

  const updateCurrency = (event) => {
    setCurrency(event.target.value);
  }

  useMemo(() => {
    return dollars / findRateByCrypto(currency).values
  }, [crypto]);

  useEffect(() => {
    updateFields()
  }, [dollars]);

  useEffect(() => {
    updateFields()
  }, [currency]);
  
  const updateFields = () => {
    var rate = findRateByCrypto(currency)
    console.log('USD=' + dollars)
    setCrypto(dollars / rate.value)
    setSymbol(rate.symbol);
  }

  // functions
  const handleDonation = async (formData) => {
  	console.log('form formData:', formData);
  	console.log('form enableBtn:', enableBtn);
  	// validation
  	if(!enableBtn) {
  		alert('Must connect to the wallet first');
  		return
  	}
  	// init
  	const { creatorid } = router.query;
  	const value = ethers.utils.parseUnits(formData.amount, 'ether');

  	// send transaction
  	lastFormData.current = formData;
  	sendTransaction({ 'from': account, 'to': creatorid, value });
  };

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
        <div className="basis-7/12 flex flex-col pt-5 space-y-5 order-2 lg:order-first">
          <CreatorComments creator={creator} />
        </div>
        {/* User Content Donate Botton (Right Panel & Top) */}
        <div className="basis-5/12 flex flex-col lg:pt-5 space-y-5 ">
          <div className="flex flex-col space-y-10 shadow-sm rounded-md p-6 bg-white">
            <h2 className="border-b border-gray-100 text-xl font-medium text-gray-800">Support <strong>{(creator && creator.name)? creator.name : 'the Creator'}</strong></h2>
			      <form onSubmit={handleSubmit(handleDonation)}>
              <div className="flex flex-col space-y-6">
				        <div className="flex flex-row w-full justify-between items-center space-x-6">
                  <div className='flex'>
                    <button onClick={lessDonation}><div className="flex text-3xl text-blue-500 font-extrabold rounded-full h-12 w-12 border-2 border-swc-left justify-center items-center">-</div></button>
				      	  </div>
				      	  <div className="flex relative rounded-md shadow-sm text-gray-500">
				      			<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
				      			  <span className={classNames('text-gray-500 lg:text-2xl font-bold ', errors && errors.amount ? 'text-red-400' : 'text-blue-400')}>
                        $
				      			  </span>
				      			</div>
				      			<input type="text" name="dollars" id="dollars" value={dollars} onChange={updateDollars}
				      			  className={classNames('border border-swc-left h-12 focus:ring-swc-right block w-full pl-8 pr-12 sm:text-sm rounded-3xl text-gray-500 lg:text-2xl font-bold')}
				      			/>
				      		</div>
                  <div className='flex'>
                    <button onClick={addDonation}><div className="flex text-3xl text-blue-500 font-extrabold rounded-full h-12 w-12 border-2 border-swc-left justify-center items-center">+</div></button>
				      	  </div>
			          </div>
				        <div className="flex flex-row w-full">
				      	  <div className="flex relative w-full rounded-md shadow-sm ">
				      			<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
				      			  <span className={classNames('text-gray-500 lg:text-2xl font-bold ', errors && errors.amount ? 'text-red-400' : 'text-blue-400')}>
                        {symbol}
				      			  </span>
				      			</div>
				      			<input type="text" name="amount" id="amount" value={crypto} onChange={handleChangeEmpty}
				      			  className={classNames('border border-swc-left h-12 focus:ring-swc-right block w-full pl-16 pr-12 sm:text-sm rounded-lg text-gray-500 lg:text-2xl font-bold', errors && errors.amount ? "text-red-300 border-red-400": "text-blue-700 border-blue-400")}
				      			  {...register("amount", { required: true })}
				      			/>
                    <div className="absolute inset-y-0 right-0 flex rounded-r-lg items-center gradient">
                      <label htmlFor="currency" className="sr-only">
                        Currency
                      </label>
                      <select id="currency" name="currency" defaultValue={currency} onChange={updateCurrency}
                        className="text-3xl font-bold focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-100 sm:text-sm "
                      >
                        <option>ETH</option>
                        <option>MATIC</option>
                      </select>
                    </div>
				      		</div>
			          </div>
	              <div>
	                <div className="mx-auto block relative mt-0 font-normal">
				      	    <label className="top-0 left-0 absolute pt-2 px-3 text-left text-xs text-gray-600 font-normal">Your message to creator...</label>
	                  <textarea id="message" name="message" rows={3}
	                    className={classNames('w-full border rounded-md border-swc-left pt-7 pb-2 px-3 hover:ring-swc-right text-base  ', errors && errors.message ? "text-red-300 placeholder-red-500 border-red-400": "text-blue-700 placeholder-blue-500 border-blue-400")}      
	                    {...register("message", { required: true })}
	                  />
	                </div>
	              </div>
	              <div className="flex items-center">
	                <button type="submit" className="primary-btn">
	                  Donate
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
