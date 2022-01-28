import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const DefaultLayout = ({children}) => (
    <div className="flex flex-col bg-gray-50 antialiased font-mono bg-no-repeat bg-[url('./../public/assets/img/rainbow.png')]">
    	<Header />
    	{children}
		  <Footer />
    </div>
);

DefaultLayout.propTypes = {
	children: PropTypes.node
};

export default DefaultLayout;
