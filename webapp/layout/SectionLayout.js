import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../utils/classutils';

const SectionLayout = ({children, bgColor}) => (
  <div className="block relative pt-8" >
    <div className={classNames(bgColor?bgColor:" ")}>
      <div className="container max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  </div>
)

SectionLayout.propTypes = {
  children: PropTypes.node,
  bgColor: PropTypes.string
};

export default SectionLayout;
