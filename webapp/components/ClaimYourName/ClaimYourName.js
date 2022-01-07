import React from 'react';

const ClaimYourName = ({}) => {
  return (
    <>
      <div className="py-4">
        <div className="not-prose relative bg-gray-50 rounded-xl overflow-hidden dark:bg-gray-800/25">
          <div className="relative rounded-xl overflow-auto p-4">
            <div className="flex flex-row space-x-1 font-mono text-gray-700 text-2xl font-bold leading-6">
              <div className="basis-1/6 h-14 flex items-center justify-end ">supportwithcrypto.com/</div>
              <div className="basis-2/3 h-14 rounded-lg flex items-center justify-start">
                <input type="text" placeholder="YourName" className="bg-gray-50"></input>
              </div>
              <div className="basis-1/6 h-14 rounded-lg flex items-center justify-center bg-fuchsia-700 shadow-lg text-gray-100">Claim</div>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5">
          </div>
        </div>
      </div>
    </>
  );
};

export default ClaimYourName;
