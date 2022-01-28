import React, { useEffect, useState, useMemo, useRef } from 'react';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import { ethers } from 'ethers';
import { useEthers, useEtherBalance, useSendTransaction } from "@usedapp/core";

import classNames from '../utils/classutils';
import { useSymbol, useRate } from '../hooks';
import { DefaultLayout } from "../layout";
import { getCreator, updateCreator } from '../api/creatorsapi';
import { CreatorProfile, CreatorSupporters, CreatorAbout, CreatorEmbedCode} from '../components/creator';

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

  // handle transaction
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

  const [dollar, setDollar] = useState(5);
  const [crypto, setCrypto] = useState(0);

  const symbol = useSymbol(chainId);
  const rate = useRate(chainId);

  useEffect(() => {
    updateDollar(dollar);
  },[rate]);

  // functions
  const handleDollarChange = (event) => {
    updateDollar(event.target.value)
  };

  const updateDollar = (value) => {
    setDollar(value);
    setCrypto( value == '' ? '': parseFloat(value)/rate );
  }

  const handleCryptoChange = (e) => {
    if(e.target.value.length > 0) {
      setDollar(parseFloat(e.target.value) * rate);
      setCrypto(e.target.value);
    } else {
      setDollar('')
      setCrypto('')
    }
  }; 

  const addDonation = (event) => {
    setDollar( dollar == ''? 5: parseFloat(dollar) + 5);
    setCrypto( (dollar == ''? 5: parseFloat(dollar) + 5)/rate );
  }

  const lessDonation = (event) => {
    setDollar( dollar == ''? '' : parseFloat(dollar) - 5 <=0 ? 0 : parseFloat(dollar) - 5);
    setCrypto( dollar == ''? '' : ( parseFloat(dollar) - 5 <=0 ? 0 : parseFloat(dollar) - 5)/rate );
  }

  const handleDonation = async (formData) => {
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
          <CreatorSupporters creator={creator} />
        </div>
        {/* User Content Donate Botton (Right Panel & Top) */}
        <div className="basis-5/12 flex flex-col lg:pt-5 space-y-5 ">
          <div className="flex flex-col space-y-10 shadow-sm rounded-md p-6 bg-white">
            <h2 className="border-b border-gray-100 text-xl font-medium text-gray-700">Support <strong>{(creator && creator.name)? creator.name : 'the Creator'}</strong></h2>
			      <form onSubmit={handleSubmit(handleDonation)}>
              <div className="flex flex-col space-y-6">
				        <div className="flex flex-row w-full justify-between items-center space-x-6">
                  <div className='flex'>
                    <button onClick={lessDonation}><div className="flex text-3xl text-blue-500 font-extrabold rounded-full h-12 w-12 border-2 border-swc-left justify-center items-center">-</div></button>
				      	  </div>
				      	  <div className="flex relative rounded-md shadow-sm text-gray-500">
				      			<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
				      			  <span className={classNames('text-gray-400 text-4xl font-bold ', errors && errors.amount ? 'text-red-400' : 'text-gray-400')}>
                        $
				      			  </span>
				      			</div>
				      			<input type="text" name="dollars" id="dollars" value={dollar} onChange={handleDollarChange}
                      placeholder='5'
				      			  className={classNames('border border-swc-left h-20 focus:ring-swc-right block w-48 pl-10 pr-12 rounded-3xl text-gray-500 text-5xl font-bold')}
				      			/>
				      		</div>
                  <div className='flex'>
                    <button onClick={addDonation}><div className="flex text-3xl text-blue-500 font-extrabold rounded-full h-12 w-12 border-2 border-swc-left justify-center items-center">+</div></button>
				      	  </div>
			          </div>
                <div className="flex flex-row w-full">
                  <div className="flex relative w-full rounded-md shadow-sm">
                    <span className="gradient inline-flex h-full w-32 items-center justify-center rounded-l-md text-2xl font-bold text-gray-100">
                      {symbol}
                    </span>
                    <input type="text" name="amount" id="amount" value={crypto} onChange={handleCryptoChange}
                      placeholder='0'
                      className={classNames('border border-swc-left h-12 focus:ring-swc-right block w-full pl-4 pr-12 rounded-r-lg text-gray-500 text-2xl font-bold', errors && errors.amount ? "text-red-300 border-red-400": "text-gray-500 border-swc-left")}
                    />
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
          <CreatorEmbedCode />
        </div>
      </div>
    </section>
  </content>
  );
}
  
User.Layout = DefaultLayout;

export default User;  
