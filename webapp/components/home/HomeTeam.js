import React from 'react';
import Link from 'next/link';

import { TwitterIcon, WalletIcon } from '../icons';
import TeamMember from './TeamMember';

const HomeTeam = () => {
  return (
    <>
      <div className='flex flex-row w-full items-star justify-start space-x-10'>
        <div className='flex flex-col items-top justify-start align-top w-1/3 space-y-2'>
          <h1 className='flex text-4xl font-extrabold text-gray-600'>Our Team</h1>
          <p className='flex text-2xl text-gray-400'>Meet our team of digital warriors, ready to harness the Force for good.</p>
          <div className="flex flex-row space-x-3 pt-2 items-center">
            <Link href=''>
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
        <div className='flex w-2/3 space-x-16'>
          <TeamMember name='Karel Becerra' title='Entrepeneur' avatar='/assets/img/team/karel.jpg'
            summary='Fast learner, hard worker and team player with strong critical thinking, problem solving and time management skills.'
            address=''
            twitter='karelbecerra'
            linkedin='karelbecerra'
          />
          <TeamMember name='Juan C Olamendy' title='Entrepeneur' avatar='/assets/img/team/juanc.jpg'
            summary='Fast learner, hard worker and team player with strong critical thinking, problem solving and time management skills.'
            address=''
            twitter='juancolamendy'
            linkedin='juancolamendy'
          />
        </div>
      </div>
    </>
  );
}

export default HomeTeam;
