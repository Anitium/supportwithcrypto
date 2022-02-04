import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classutils'

const Logo = ({size, color, onClick, href}) => {
  return (
    <a href={href} onClick={onClick}>
      <svg  className={classNames( size + " mr-1 " + (color == undefined? "text-swc-right" : color))} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path d="M5.75 10L12 4.75L18.25 10M5.75 10L12 19.25L18.25 10M5.75 10L12 12.25L18.25 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    </a>
  );
};

Logo.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
};
  
export default Logo;
