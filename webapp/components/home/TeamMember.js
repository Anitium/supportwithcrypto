import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { LinkedInIcon, WalletIcon, TwitterIcon } from '../icons';

const TeamMember = ({name, avatar, title, summary, address, twitter, linkedin}) => {
  return (
    <div className='flex flex-col'>
      <img className="w-full rounded-xl object-left-top overflow-hidden object-cover contrast-125 drop-shadow-xl -hue-rotate-15" src={avatar}></img>
      <h1 className='text-2xl text-gray-500 font-bold pt-4'>{name}</h1>
      <h1 className='text-2xl text-blue-600 font-bold'>{title}</h1>
      <p className='text-lg text-gray-400 pt-4'>{summary}</p>
      <div className="flex flex-row space-x-3 pt-2 items-center">
        <Link href={address}>
          <a className="flex w-6 h-6 text-gray-400">
            <WalletIcon />
          </a>
        </Link>
        <Link href={twitter}>
          <a target='_blank' className="flex w-6 h-6 text-gray-400">
            <TwitterIcon />
          </a>
        </Link>
        <Link href={linkedin}>
          <a target='_blank' className="flex w-6 h-6 text-gray-400">
            <LinkedInIcon />
          </a>
        </Link>
      </div>
    </div>
);
}

TeamMember.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  address: PropTypes.string,
  twitter: PropTypes.string,
  linkedin: PropTypes.string,
};
  
export default TeamMember;
