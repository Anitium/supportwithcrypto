import React from "react";
import PropTypes from 'prop-types';
import Link from 'next/link';

const GuideCard = ({icon, title, description, link, variations}) => {
  return (
    <>
      <div className="p-4">
        <Link href={link}>
          <div className="flex justify-center">
            <img className="w-16 h-16 object-cover rounded-full border-4 border-white" src={icon} />
          </div>          
        </Link>
        <div className="text-center font-bold text-l mb-3 text-gray-800">
            {title}
        </div>
        <p className="text-gray-600 text-base">
            {description}
        </p>
      </div>

    </>
  );
}


GuideCard.propTypes = {
  icon: PropTypes.string,
	title: PropTypes.string,	
  description: PropTypes.string,
  link: PropTypes.string,
  variations: PropTypes.string
};

export default GuideCard;
