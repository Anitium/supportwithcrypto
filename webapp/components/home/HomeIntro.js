import React from 'react';
import { useRouter } from 'next/router';

import { useEthers } from "@usedapp/core";

import { doConnect } from '../../utils/web3auth';
import { globals } from '../../utils/constants';

const HomeIntro = () => {
  // hooks
  const { account, activate, deactivate, chainId } = useEthers();
  const router = useRouter();

  // function
  const handleGetStarted = e => {
    e.preventDefault();
    if(!account) {
      // doConnect
      doConnect( globals.getConfig({activate, deactivate, chainId}) );
    } else {
      router.push(`/${account}`);
    }
  };

  return (
    <>
        <div className='w-full lg:w-7/12'>
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-gray-900 ">
              <span className="block xl:inline">Start receiving your</span>{' '}
              <span className="block text-blue-500 xl:inline text-gradient ">crypto donations</span>
            </h1>
            <p className="mt-3 md:mt-5 text-base md:text-lg lg:text-xl text-gray-500 sm:max-w-xl mx-auto lg:mx-0">
              Help creators to meet their goals! It feels better helping others, helping together.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a 
                  href="#" 
                  className="primary-btn"
                  onClick={handleGetStarted}>
                  { account ? 'Claim Donation' : 'Get started' }
                </a>
              </div>
            </div>
            {/*product hunt badge*/}
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <a href="https://www.producthunt.com/posts/support-with-crypto?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-support&#0045;with&#0045;crypto" target="_blank" rel="noreferrer"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=342319&theme=light" alt="Support&#0032;with&#0032;Crypto - Bringing&#0032;crypto&#0032;donations&#0032;to&#0032;creators&#0032;worldwide | Product Hunt" style={{'width': '250px', 'height': '54px'}} width="250" height="54" /></a>
            </div>
            {/*product hunt badge*/}
          </div>
        </div>
        <div className='hidden lg:block lg:w-5/12'>
            <img
            className="w-auto"
            src="./assets/img/goals.png"
            alt="Workflow"
            />
        </div>
    </>
  );
}

export default HomeIntro;
