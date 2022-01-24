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
        <div className="flex justify-start items-start w-full max-w-6xl">
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
	              <div className="col-span-6 sm:col-span-3">
	                <label htmlFor="amount"
	            	  className={classNames('block font-bold text-sm mb-2', errors && errors.amount ? 'text-red-400' : 'text-blue-400')}
	                >
	                  Your donation (in crypto)
	                </label>
	                <input
	                  type="text"
	                  name="amount"
	                  id="amount"
	                  className={classNames('block w-full bg-transparent outline-none border-b-2 py-2 placeholder-blue-500 focus:px-4 focus:bg-blue-600/40 focus:rounded-md', errors && errors.amount ? "text-red-300 border-red-400": "text-blue-700 border-blue-400")}
	                  {...register("amount", { required: true })}
	                />
	              </div>
	              <div>
	                <div className="mt-1">
	                  <textarea
	                    id="message"
	                    name="message"
	                    rows={3}
	                    className={classNames('block w-full bg-transparent outline-none border-b-2 py-2 focus:px-4 focus:bg-blue-600/40 focus:rounded-md', errors && errors.message ? "text-red-300 placeholder-red-500 border-red-400": "text-blue-700 placeholder-blue-500 border-blue-400")}
	                    placeholder="Your message to creator..."
	                    {...register("message", { required: true })}
	                  />
	                </div>
	              </div>
	              <div className="flex items-center">
	                <button
	                  type="submit"
	                  className="primary-btn"
	                >
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