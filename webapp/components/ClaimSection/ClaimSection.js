import React from 'react';
import SectionLayout from '../../layout/SectionLayout';
import { GuideCard } from '../cards/GuideCard'
import { ClaimYourName } from '../ClaimYourName';
import { items } from './items'

const ClaimSection = () => {
  return (
    <>
      <SectionLayout bgColor={"bg-fuchsia-50"}>
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4">

              <div className="justify-center text-center flex flex-wrap mt-24 mb-4">
                <div className="w-full md:w-6/12 px-12 md:px-4">
                  <h2 className="font-semibold text-4xl">Create your <span className="text-fuchsia-700 font-extrabold">Crypto Bean</span> page in just seconds.</h2>
                  <h2 className="">Grow your income and receive payments.</h2>
                </div>
              </div>
              <div>
                <ClaimYourName/>
              </div>
            </div>
          </div>
      </SectionLayout>
    </>
  
  );
}

export default ClaimSection;
