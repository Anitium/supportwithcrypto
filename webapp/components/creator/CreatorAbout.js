import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';


const CreatorAbout = ({creator}) => {
  
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col space-y-10 shadow-sm rounded-md p-6 bg-white">
        <h2 className="border-b border-gray-100 text-xl font-medium text-gray-800">About</h2>
        <div className="flex flex-col space-y-6">
          <div className="">
            <p>{creator.about}</p>
          </div>
        </div>
      </div>
    </>
  );
}

CreatorAbout.propTypes = {
  creator: PropTypes.any,
};

export default CreatorAbout;
