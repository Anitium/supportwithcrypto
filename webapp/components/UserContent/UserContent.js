import React from 'react';
import PropTypes from 'prop-types';

const UserContent = ({user}) => {
  return (
    <>
        <div className="block relative pt-8" >
          <div className=" ">
            <div className="container max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              {user}
            </div>
          </div>
        </div>
    </>
  );
}

UserContent.propTypes = {
    user: PropTypes.string,
  };
  
export default UserContent;
