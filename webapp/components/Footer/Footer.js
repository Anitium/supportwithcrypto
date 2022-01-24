import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-8 flex flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-indigo-500">
      <div className='text-xs text-gray-100'>
        <a><div className="rounded-full h-8 w-8 bg-blue-300"></div></a>
      </div>
      <div className="container mx-auto flex space items-center justify-between h-64 px-4 xl:px-24">
        <div className="flex space-x-4 justify-center items-center">
          <label className="font-medium text-gray-100">Follow us in </label>
          <a><div className="rounded-full h-8 w-8 bg-blue-300"></div></a>
          <a><div className="rounded-full h-8 w-8 bg-blue-300"></div></a>
        </div>
        <div className="flex">
          <a><div className="rounded-full h-8 w-8 bg-blue-300"></div></a>
        </div>
      </div>
      <div className='text-xs text-gray-100'>
        <a href="https://www.freepik.com/vectors/people">People vector created by vectorjuice - www.freepik.com</a>
      </div>
    </footer>
  );
}

export default Footer;
