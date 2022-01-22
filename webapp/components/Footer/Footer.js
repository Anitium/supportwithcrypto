import React from 'react';

const Footer = () => {
  return (
  <footer className="p-4 flex justify-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-indigo-500">
    <div className="container mx-auto flex space items-center justify-between h-16 px-4 xl:px-24">
      <div className="flex space-x-4">
        <label className="font-medium">Follow us in </label>
        <a><div className="rounded-full h-8 w-8 bg-blue-300"></div></a>
        <a><div className="rounded-full h-8 w-8 bg-blue-300"></div></a>
      </div>
      <div className="flex">
        <a><div className="rounded-full h-8 w-8 bg-blue-300"></div></a>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
