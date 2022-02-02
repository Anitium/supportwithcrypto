import { useState, useEffect } from 'react';

import { findChainById } from '../../utils/cryptoutils';
import { getRate } from '../../api/exchangeapi'

const useRate = (chainId) => {
  const [rate, setRate] = useState(1000000);
  
  useEffect(() => {
    async function fetchExchangeRates(chainId) {
      try{
        if( findChainById(chainId) != undefined ) {
          const response = await getRate(findChainById(chainId).symbol);
          setRate(response.payload);
        } else 
          setRate(1000000)
      } catch (error) {
       console.log('error on fetching exchange rates: err', err); 
      }
    }
    // fetch data
    fetchExchangeRates(chainId)
  }, [chainId]);
  return rate;
};

export default useRate;
