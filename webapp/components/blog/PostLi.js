import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'

const PostLi = ({title,summary}) => {
  return (
    <>
     <div className='flex flex-col px-8 pt-8 space-y-2'>
         <div className='flex font-bold text-sm text-gray-700'>
           {title}
         </div>
         <div className='flex text-xs text-gray-600'>
           {summary.substring(0, 80) + ' ...'}
         </div>
         <div className='flex font-bold text-xs text-blue-700'>
           Read full
         </div>
     </div>
    </>
  );
}


PostLi.propTypes = {

  title: PropTypes.string,
  summary: PropTypes.string,
};

export default PostLi;
