import React from "react";
import PropTypes from 'prop-types';
import Link from 'next/link';

const GuideCard = ({icon, title, description, link, variations}) => {
  return (
    <>
      <div className="p-4">
        <Link href={link}>
          <div className="mb-2">
            <img className="mx-auto w-10 h-10 " src={icon} alt="Sunset in the mountains" />
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
