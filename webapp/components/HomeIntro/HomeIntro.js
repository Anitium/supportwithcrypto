import React from 'react';

import SectionLayout from '../../layout/SectionLayout';
import HomeIntroLeft from './HomeIntroLeft';
import HomeIntroRight from './HomeIntroRight';

const HomeIntro = () => {
  return (
    <>
    <SectionLayout>
      <div className="w-full grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 xl:gap-x-8">
        <div className="mt-8 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <HomeIntroLeft/>
        </div>
        <div className="mt-8 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <HomeIntroRight/>
        </div>
      </div>
    </SectionLayout>
    
    </>
  
  );
}

export default HomeIntro;
