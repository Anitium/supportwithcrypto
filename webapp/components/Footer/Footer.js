import React from 'react';
import Copyright from './Copyright';
import Resources from './Resources';
import Social from './Social';
import UsefulLinks from './UsefulLinks';

const Footer = () => {
  return (
    <>
      <footer className="relative bg-gray-800 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-gray-300">Let&apos;s keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-400">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <Social/>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <UsefulLinks/>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <Resources/>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-700" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <Copyright/>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
