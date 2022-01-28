import React from 'react';

const HomeIntro = () => {
  return (
    <>
        <div className='w-full lg:w-7/12'>
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-gray-900 ">
              <span className="block xl:inline">Start Today your</span>{' '}
              <span className="block text-blue-500 xl:inline">crypto donations.</span>
            </h1>
            <p className="mt-3 md:mt-5 text-base md:text-lg lg:text-xl text-gray-500 sm:max-w-xl mx-auto lg:mx-0">
              Help Creators to meet their goals! It feels better helping others, helping together.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a href="#" className="primary-btn">Get started</a>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden lg:block lg:w-5/12'>
            <img
            className="w-auto"
            src="./assets/img/goals.png"
            alt="Workflow"
            />
        </div>
    </>
  );
}

export default HomeIntro;
