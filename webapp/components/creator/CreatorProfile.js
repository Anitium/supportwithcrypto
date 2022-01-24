import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { Hashicon } from '@emeraldpay/hashicon-react';
import { formatAccount } from '../../utils/etherutils';

const CreatorProfile = ({creator}) => {
  
  const router = useRouter();

  return (
    <>
      <div className="w-full">
        <img className="w-full max-h-40 md:max-h-60 xl:max-h-72 object-cover overflow-hidden" src={(creator && creator.avatar) ? creator.avatar : "/assets/img/users/default/header.jpg"}></img>
      </div>
    
      <div className="flex justify-between max-w-6xl w-full">
        <div className="flex relative space-y-4 space-x-4 justify-center items-center">
          <div className="lg:mt-4">
            <div className="w-8 h-8 lg:w-24 lg:h-24">
              { process.browser && <Hashicon value={router.query.creatorid} /> }
            </div>
          </div>
          <div className="flex flex-col">
            { creator && creator.name && <div className="font-bold text-lg lg:text-2xl text-gray-600">{creator.name}</div> }
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
