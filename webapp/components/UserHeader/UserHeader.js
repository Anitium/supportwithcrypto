import React from 'react';
import PropTypes from 'prop-types';
import { items } from './items';

const UserHeader = ({user}) => {
  const userDetails = {
    id: 'karelbecerra',
    name: 'KarelBecerra',
    profileImage: '/assets/img/users/karelbecerra/profile.jpg',
    headerImage: '/assets/img/users/karelbecerra/header.jpg',
    count: 493,
  }

  function findUserById(id) {
    return items.find((element) => {
      return element.id === id;
    })
  }

  return (
    <>
      <div className="" >
        <div className="max-h-64 overflow-hidden">
          <img src={userDetails.headerImage} />
        </div>
        <div className="block relative" >
          <div className="bg-gray-100">
              <div className="container max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="p-4">
                  <div className="flex justify-center">
                    <img className="w-16 h-16 object-cover rounded-full border-4 border-white" src={userDetails.profileImage} />
                  </div>          
                  <div className="text-center font-bold text-l mb-3 text-gray-800">
                      {userDetails.name}
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

UserHeader.propTypes = {
    user: PropTypes.string,
};
  
export default UserHeader;
