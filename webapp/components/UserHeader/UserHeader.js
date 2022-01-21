import React from 'react';
import PropTypes from 'prop-types';
const formatAccount = (account) => account && `${account.slice(0, 5)}...${account.slice(account.length - 4, account.length)}`;

const UserHeader = ({user}) => {

  return (
    <>
      <div className="flex flex-col" >
        {/* Top header image*/}
        <div className="max-h-72 overflow-hidden"> 
          <img src={user.headerImage} />
        </div>
        {/* Left (avatar, name, supporters count) Rigth (donate button) */}
        <div className="block relative" >
          <div className="flex flex-row max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 items-center text-center">
            {/* Left */}
            <div className='flex-1'>
              <div className="flex items-center">
                <img className="w-24 h-24 object-cover rounded-full border-4 border-white" src={user.profileImage} />
                <div className='flex flex-col pl-4'>
                  <label className='text-2xl font-bold'>{user.name}</label>
                  <label className='text-s text-gray-500 bg-gray-200 p-1 text-center rounded-md'>{formatAccount(user.address)}</label>
                </div>
              </div>
            </div>
            {/* Right */}
            <div className='flex-1'>
              <div className="max-w-xs mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-fuchsia-800 bg-fuchsia-100 hover:bg-fuchsia-200 md:py-4 md:text-lg md:px-10"
                >
                  Donate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

UserHeader.propTypes = {
    user: PropTypes.any,
};
  
export default UserHeader;
