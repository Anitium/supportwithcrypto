import React from 'react';
import SectionLayout from '../../layout/SectionLayout';
import { GuideCard } from '../cards/GuideCard'
import { items } from './items'

const SupportBy = () => {
  return (
    <>
      <SectionLayout>
        <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4">
              <div className="justify-center text-center flex flex-wrap mt-24 mb-12">
                <div className="w-full md:w-6/12 px-12 md:px-4">
                  <h2 className="font-semibold text-4xl">Make with <span className="text-fuchsia-700 font-extrabold">Love</span>.</h2>
                </div>
              </div>

              <div className="flex flex-wrap">
                {items.list.map((item) => (
                  <div key={item.id} className="w-full p-4 md:w-1/2 lg:w-1/4">
                    <GuideCard 
                      icon = {item.icon}
                      title = {item.title}
                      description = {item.description}
                      link = {item.link}
                      variations = 'text-m'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

      </SectionLayout>    
    </>
  );
}

export default SupportBy;
