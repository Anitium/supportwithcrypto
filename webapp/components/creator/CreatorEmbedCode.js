import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';


const CreatorEmbedCode = ({creator}) => {
  
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col space-y-10 shadow-sm rounded-md p-6 bg-white">
        <h2 className="border-b border-gray-100 text-xl font-medium text-gray-800">Share your button</h2>
        <div className="flex flex-col items-center space-y-6">
          <div className="flex">
            <p>If you are the Creator you can share your page on your website</p>
          </div>
          <div className="flex rounded-md shadow w-full">
            <button className="primary-btn">Share</button>
          </div>
        </div>
      </div>
    </>
  );
}

CreatorEmbedCode.propTypes = {
  creator: PropTypes.any,
};

export default CreatorEmbedCode;
