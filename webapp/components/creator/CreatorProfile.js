import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { formatAccount } from '../../utils/web3utils';
import Blockies from "react-blockies";
import colors from 'tailwindcss/colors'

const CreatorProfile = ({creator}) => {
  
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col w-full">
        {/*<img className="w-full max-h-40 md:max-h-60 xl:max-h-72 object-cover overflow-hidden" src={(creator && creator.avatar) ? creator.avatar : "/assets/img/users/default/header.jpg"}></-img> */}
        <div className='w-full max-h-24 md:max-h-32 xl:max-h-44 object-cover overflow-hidden blur-md saturate-150'>
          <Blockies seed={router.query.creatorid == undefined? 'AABBCCDDEE':router.query.creatorid} size={500} scale={20}
            color={colors.blue[500]} bgColor={colors.cyan[500]} />
        </div>
      </div>
    
      <div className="flex max-w-6xl w-full">
        <div className="flex relative space-x-4 justify-end items-end">
          <div className="flex md:-mt-8 ">
            <div className="flex w-16 md:w-24">
              <Blockies className="max-h-16 md:max-h-24 min-w-full border-4 border-gray-50 rounded-full" 
                seed={router.query.creatorid == undefined? 'AABBCCDDEE':router.query.creatorid}   
                size={10}
                scale={10}
                color={colors.blue[500]} bgColor={colors.cyan[500]} />
            </div>
          </div>
          <div className="flex flex-col pb-1">
            { creator && creator.name && <div className="font-bold text-lg lg:text-2xl text-gray-500">{creator.name}</div> }
            { router.query.hasOwnProperty('creatorid') && <div className=" bg-gray-200 rounded-md p-1 text-xs lg:text-sm text-center text-gray-700">{formatAccount(router.query.creatorid)}</div> }
          </div>
        </div>
      </div>
    </>
  );
}

CreatorProfile.propTypes = {
  creator: PropTypes.any,
};

export default CreatorProfile;
