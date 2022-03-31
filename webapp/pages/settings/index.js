import React, { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useEthers } from "@usedapp/core";

import { DefaultLayout } from "../../layout";
import { getCreator, updateCreator } from '../../api/creatorsapi';

const Settings = ({}) => {
  // state
  const [creator, setCreator] = useState({
  	name: '',
    about: '',
    website: '',
    twitter: '',
  });

  const [error ,setError] = useState('');
  
  // ethers management
  const { account } = useEthers();

  // hooks
  // router
  const router = useRouter();

  // effect for onloading the page
  useEffect(() => {
    const fetchData = async (creatorid) => {
      const response = await getCreator(creatorid);
      if(response.success) {
	      setCreator(response.payload);
      } else {
      	setError(response.errorMessage);
      }
  	};
    if(account) {
      fetchData(account);
    } else {
      router.push('/');
    }
  }, [account]);

  // functions
  const handleSettings = async (e) => {
    // prevent bubble up the event
    e.preventDefault();

  	// logic
    creator.updated = new Date();
    const response = await updateCreator(creator);
    // handle response
    console.log(response);
    if(!response.success) {
      setError(response.errorMessage);
    }
  };

  return (
  <content className="container mx-auto flex flex-col">
    {/* User Content Left and Right */}
    <section className="flex flex-col justify-center items-center my-4">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div>
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
                <p className="mt-1 text-sm text-gray-600">
                  This information will be displayed in your Creator page.
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    {/* Name */}
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          Name
                        </label>
                        <input className="form-input mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          type="text" name="name" id="name"
                          value={!creator.name?'':creator.name}
                          onChange={e => setCreator({...creator, name: e.target.value})}
                        />
                      </div>
                    </div>
                    {/* Twitter */}
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                          Twitter
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                            https://twitter.com/
                          </span>
                          <input className="form-input focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            type="text" name="twitter" id="twitter"
                            value={!creator.twitter?'':creator.twitter}
                            onChange={e => setCreator({...creator, twitter: e.target.value})}
                          />
                        </div>
                      </div>
                    </div>
                    {/* Website */}
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                          Website
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                            https://
                          </span>
                          <input className="form-input focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            type="text" name="company-website" id="company-website"
                            placeholder="www.example.com"
                            value={!creator.website?'':creator.website}
                            onChange={e => setCreator({...creator, website: e.target.value})}
                          />
                        </div>
                      </div>
                    </div>
                    {/* About */}
                    <div>
                      <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                        About
                      </label>
                      <div className="mt-1">
                        <textarea className="form-textarea shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          id="about" name="about" rows={3}
                          placeholder="you@example.com"
                          value={!creator.about?'':creator.about}
                          onChange={e => setCreator({...creator, about: e.target.value})}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Brief description for your profile. URLs are hyperlinked.
                      </p>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      onClick={handleSettings}
                      className="inline-flex w-40 justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white gradient hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>    
    </section>
  </content>
  );
}
  
Settings.Layout = DefaultLayout;

export default Settings;  
