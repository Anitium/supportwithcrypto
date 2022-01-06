import React from 'react';

import SectionLayout from '../../layout/SectionLayout';

const HomeIntro = () => {
  return (
    <>
    <SectionLayout>
      <div className="w-full grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 xl:gap-x-8">
        <div className="px-4 py-2 rounded-lg text-center text-cyan-100 h-96">
          <div>
            <h2 className="text-3xl font-extrabold text-left tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Ready to dive in?</span>
              <span className="block text-fuchsia-700">We Take 0% of Your Donations.</span>
            </h2>
            <p className="text-sm font-bold text-left tracking-tight text-gray-500 sm:text-l">
              @ build by Angels
            </p>
            <p className="text-base text-left text-gray-900 sm:text-lg">
              While other platforms take a fee, we don’t.
            </p>
          </div>
          <div className="text-left pt-14"> 
            <a key="{item.name}" href="{item.href}" className='bg-fuchsia-800 text-white px-6 py-3 rounded-md text-sm font-medium'>
              Get Started
            </a>            
          </div>
        </div>
        <div className=" px-4 py-2  text-center text-cyan-100">
          <img
            className="hidden lg:block w-auto"
            src="./assets/img/group-people.png"
            alt="Workflow"
          />
        </div>
      </div>
    </SectionLayout>
    
    </>
  
  );
}

export default HomeIntro;
