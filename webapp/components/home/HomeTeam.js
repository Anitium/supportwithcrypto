import React from 'react';
import Link from 'next/link';

import { TwitterIcon, WalletIcon } from '../icons';
import TeamMember from './TeamMember';

const HomeTeam = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row  w-full items-center space-y-10 space-x-0 lg:space-x-10 px-10 lg:px-0 lg:items-start lg:justify-start lg:space-y-0'>
        <div className='flex flex-col items-start justify-start align-top space-y-2 lg:w-1/3 '>
          <h1 className='flex text-4xl font-extrabold text-gray-600'>Our Team</h1>
          <p className='flex text-2xl text-gray-400'>Meet our team of digital warriors, ready to harness the Force for good.</p>
          <div className="flex flex-row space-x-3 pt-2 items-center">
            <Link href='/'>
              <a  className="flex w-6 h-6 text-gray-400">
                <WalletIcon />
              </a>
            </Link>
            <Link href='/' >
              <a target='_blank' className="flex w-6 h-6 text-gray-400">
                <TwitterIcon />
              </a>
            </Link>
          </div>
        </div>
        <div className='flex lg:w-2/3'>
          <div className='flex flex-col space-y-10 sm:flex-row sm:space-x-16 sm:space-y-0'>
            <div className="flex md:w-1/2">
              <TeamMember name='Karel Becerra' title='Entrepreneur' avatar='/assets/img/team/karel.jpg'
                summary='Crypto/Web3 Ξ · Find me coding or fishing at Caribean Sea 🐟  🏖  🇺🇸 🌴  · wagmi 🙏'
                address='https://www.supportwithcrypto.com/0xdbF335F4AaF2E04439975C7b7F3bF32343A5d5fe'
                twitter='http://twitter.com/karelbecerra'
                linkedin='https://www.linkedin.com/in/karelbecerra'
              />
            </div>
            <div className="flex md:w-1/2">
              <TeamMember name='Juan C Olamendy' title='Entrepreneur' avatar='/assets/img/team/juanc.jpg'
                summary='Indie Hacker · Talking about SaaS 🚀 · Building AI/Web3 Ξ products 🛠️ in public · '
                address='https://www.supportwithcrypto.com/0xd91b8f46ed2cfAd0f379392145F8d6420153852e'
                twitter='http://twitter.com/juancolamendy'
                linkedin='https://www.linkedin.com/in/juancolamendy'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeTeam;
