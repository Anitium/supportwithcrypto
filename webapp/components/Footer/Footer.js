import React from 'react';

import Link from 'next/link';
import { Logo } from '../Logo';

const Footer = () => {
  return (
    <footer className="pt-8 flex flex-col items-center justify-center gradient-via-transparent">
      <div className='text-xs text-gray-100'>
        <Link href='/' passHref>
          <Logo size="w-12 h-12" color="text-gray-100"/>
        </Link>
      </div>
      <div className="container mx-auto flex space items-center justify-between h-32 px-4 xl:px-24">
        <div className="flex space-x-4 justify-center items-center">
          <label className="font-medium text-gray-100">Follow us in </label>
          <a><div className="rounded-full h-8 w-8 bg-blue-300"></div></a>
          <a><div className="rounded-full h-8 w-8 bg-blue-300"></div></a>
        </div>
        <div className="flex">
          <a href='/terms-conditions' className='text-gray-200'>Terms & Conditions</a>
        </div>
      </div>
      <div className='text-xs text-gray-100'>
        <a href="https://www.freepik.com/vectors/people">People vector created by vectorjuice - www.freepik.com</a>
      </div>
    </footer>
  );
}

export default Footer;
