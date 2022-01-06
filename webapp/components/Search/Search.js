import React from 'react';
import PropTypes from 'prop-types';

const Search = ({value, onChange}) => {
  return (
    <>
      <div className="flex items-center w-full">
        <div className=" mx-10 md:block w-full">
            <div className="relative w-full">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" ></path>
                    </svg>
                </span>
                <input value={value} onChange={onChange} type="text" placeholder="Search Creator by: address or domain" className="leading-8 w-full py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" >
                </input>
            </div>
        </div>
      </div>
 
    </>
  );
};

Search.propTypes = {
	value: PropTypes.string,	
	onChange: PropTypes.func,
};

export default Search;
