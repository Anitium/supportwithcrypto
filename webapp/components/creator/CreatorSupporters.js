import React from 'react';
import PropTypes from 'prop-types';

const CreatorSupporters = ({creator}) => {

  return (
    <>        
      <div className="flex flex-col space-y-10 shadow-sm rounded-md p-6 bg-white">
        <h2 className="border-b border-gray-100 text-xl font-medium text-gray-800">Suporters</h2>
        <div className="flex flex-col space-y-6">
        	{creator && creator.transactions && creator.transactions.map(x =>(
	          <div key={x.transactionid} className="flex h-14 items-center space-x-3 p-4 rounded-md bg-gradient-to-r from-cyan-500 to-blue-100 ">
	            <a className="rounded-full h-8 w-8 border-2 border-blue-600 bg-blue-400"></a>
	            <p>{x.message} - {formatCurrency(x.amount)}</p>
	          </div>              		
        	))}          
        </div>
      </div>
    </>
  );
}

CreatorSupporters.propTypes = {
  creator: PropTypes.any,
};

export default CreatorSupporters;
