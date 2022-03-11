import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'

const BlogSummary = ({image,title,summary}) => {
  return (
    <>
     <div className='flex bg-white/70 rounded-lg'>
       <div className='flex relative w-1/3'>
         <Image className='flex relative w-1/3 rounded-l-lg' src={image} layout="fill" objectPosition='left top' objectFit="cover" ></Image>
       </div>
       <div className='flex w-2/3 flex-col space-y-2 p-6'>
         <div className='flex font-bold text-gray-800 text-lg'>
           {title}
         </div>
         <div className='flex text-gray-700 text-sm'>
            <div className="" dangerouslySetInnerHTML={{__html: summary}}></div>
         </div>
         <div className='flex font-bold text-base text-blue-700'>
           Read full
         </div>

       </div>

     </div>
    </>
  );
}


BlogSummary.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
};

export default BlogSummary;
