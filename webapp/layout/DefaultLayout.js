import React from 'react';
import PropTypes from 'prop-types';

import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const DefaultLayout = ({children}) => (
    <div className="bg-white">
    	<Navbar/>
    	{children}
		<Footer/>
    </div>
);

DefaultLayout.propTypes = {
	children: PropTypes.node
};

export default DefaultLayout;
