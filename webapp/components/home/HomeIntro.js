import React from 'react';

const HomeIntro = () => {
  return (
    <>
        <div className='w-7/12'>
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Start Today your</span>{' '}
              <span className="block text-blue-500 xl:inline">crypto donations.</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Help Creators to meet their goals! It feels better helping others, helping together.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a href="#" className="primary-btn">Get started</a>
              </div>
            </div>
          </div>
        </div>
        <div className='w-5/12'>
            <img
            className="hidden lg:block w-auto"
            src="./assets/img/goals.png"
            alt="Workflow"
            />
        </div>
    </>
  );
}

export default HomeIntro;
