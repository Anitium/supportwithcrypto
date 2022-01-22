import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";

import { DefaultLayout } from "../layout";
import { getCreator, updateCreator } from '../api/creatorsapi';
import { formatAccount } from '../utils/etherutils';
import classNames from '../utils/classutils';

const User = ({}) => {
  // state
  const [creator, setCreator] = useState({});
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
    console.log('--- creatorid:', creatorid);
    if(creatorid) {
      fetchData(creatorid);
    }
  }, [router.query, refresh]);

  // form management
  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  // functions
  const handleDonation = async (formData) => {
  	console.log('form formData:', formData);
  	const ts = new Date().getTime();
  	const { creatorid } = router.query;
  	const data = {...creator};
  	data.transactions.push({
        'amount': formData.amount,
        'message': formData.message,
        'created': ts,
        'from': creatorid,
        'to': '',
        'chain': '',
  	});
  	const response = await updateCreator(data);
  	console.log(response);
  	if(!response.success) {
  		setError(response.errorMessage);
  	}
  	reset();
  	setRefresh(!refresh);
  };

  return (
  <div className="container mx-auto flex flex-col">
    {/* User Profile Header */}
    <div className="flex flex-col justify-center items-center">
      {/* User Profile Header Image*/}
      <div className="w-full">
        <img className="w-full max-h-40 md:max-h-60 xl:max-h-72 object-cover overflow-hidden" src={(creator && creator.avatar) ? creator.avatar : "/assets/img/users/default/header.jpg"}></img>
      </div>
      {/* User Profile Info*/}
      <div className="flex justify-between max-w-5xl w-full">
        <div className="flex relative space-y-4 space-x-4 justify-center items-center">
          <div className="lg:-mt-4">
            <img className="w-14 h-14 lg:w-32 lg:h-32 object-cover rounded-full border-2 lg:border-4 border-indigo-50" src="/assets/img/users/default/avatar.png" />
          </div>
          <div className="flex flex-col">
            { creator && creator.name && <div className="font-bold text-lg lg:text-2xl text-gray-600">{creator.name}</div> }
            { router.query.hasOwnProperty('creatorid') && <div className=" bg-gray-200 rounded-md p-1 text-xs lg:text-sm text-center text-gray-700">{formatAccount(router.query.creatorid)}</div> }
          </div>
        </div>
      </div>
    </div>
    {/* User Content Left and Right */}
    <section className="flex flex-col justify-center items-center my-4">
      {/* User Content About Tab */}
      <div className="flex flex-col lg:flex-row max-w-5xl pt-3 lg:space-x-10 space-y-5 lg:space-y-0">
        {/* User Content About and Comments (Left Panel) */}
        <div className="basis-7/12 flex flex-col pt-5 space-y-5 order-2 lg:order-first">
            <div className="flex flex-col space-y-10 shadow-sm rounded-md p-6 bg-white">
              <h2 className="border-b border-gray-100 text-xl font-medium text-gray-800">Suporters</h2>
              <div className="flex flex-col space-y-6">
              	{creator && creator.transactions && creator.transactions.map(x =>(
	                <div className="flex h-14 items-center space-x-3 p-4 rounded-md bg-gradient-to-r from-cyan-500 to-blue-100 ">
	                  <a className="rounded-full h-8 w-8 border-2 border-blue-600 bg-blue-400"></a>
	                  <p>{x.message} - {x.amount}</p>
	                </div>              		
              	))}
              </div>
            </div>
        </div>
        {/* User Content Donate Botton (Right Panel & Top) */}
        <div className="basis-5/12 flex flex-col lg:pt-5 space-y-5 ">
          <div className="flex flex-col space-y-10 shadow-sm rounded-md p-6 bg-white">
            <h2 className="border-b border-gray-100 text-xl font-medium text-gray-800">Support <strong>{(creator && creator.name)? creator.name : 'the Creator'}</strong></h2>
            <div className="flex flex-col space-y-6">
              <form onSubmit={handleSubmit(handleDonation)}>
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
	                  {...register("amount", { required: true, valueAsNumber: true })}
	                />
	              </div>
	              <div>
	                <label htmlFor="message"
	                  className={classNames('block font-bold text-sm mb-2', errors && errors.message ? 'text-red-400' : 'text-blue-400')}
	                >
	                  In your words
	                </label>
	                <div className="mt-1">
	                  <textarea
	                    id="message"
	                    name="message"
	                    rows={3}
	                    className={classNames('block w-full bg-transparent outline-none border-b-2 py-2 focus:px-4 focus:bg-blue-600/40 focus:rounded-md', errors && errors.message ? "text-red-300 placeholder-red-500 border-red-400": "text-blue-700 placeholder-blue-500 border-blue-400")}
	                    placeholder="Your message..."
	                    {...register("message", { required: true })}
	                  />
	                </div>
	              </div>
	              <div className="flex items-center pr-12 mt-5">
	                <button
	                  type="submit"
	                  className="w-36 lg:w-64 flex items-center justify-center border border-transparent font-semibold text-xl md:py-4 rounded-3xl text-indigo-100 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-indigo-500"
	                >
	                  Donate
	                </button>
	              </div>
              </form>

            </div>
          </div>
          
          { creator && creator.about && <div className="flex flex-col space-y-10 shadow-sm rounded-md p-6 bg-white">
            <h2 className="border-b border-gray-100 text-xl font-medium text-gray-800">About</h2>
            <div className="flex flex-col space-y-6">
              <div className="">
                <p>{creator.about}</p>
              </div>
            </div>
          </div> }

        </div>
      </div>
    </section>
  </div>
  );
}
  
User.Layout = DefaultLayout;

export default User;  