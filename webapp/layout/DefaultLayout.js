import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const DefaultLayout = ({children}) => (
    <div className="flex flex-col bg-gray-100 antialiased font-mono default-bg">
    	<Header />
    	{children}
		  <Footer />
    </div>
);

DefaultLayout.propTypes = {
	children: PropTypes.node
};

export default DefaultLayout;
