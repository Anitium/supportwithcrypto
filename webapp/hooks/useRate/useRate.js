import { useState, useEffect } from 'react';

import { findChainById } from '../../utils/cryptoutils';
import { getRate } from '../../api/exchangeapi'

const useRate = (chainId) => {
  const [rate, setRate] = useState(1000000);
  const [rateDate, setRateDate] = useState('1970-01-01 00:00:00.000Z');
  
  useEffect(() => {
    async function fetchExchangeRates(chainId) {
      try{
        if( findChainById(chainId) != undefined ) {
          const response = await getRate(findChainById(chainId).symbol);
          setRate(response.payload.rate);
          setRateDate(response.payload.rateDate);
        } else{
          setRate(1000000)
          setRateDate('1970-01-01 00:00:00.000Z')
        }
      } catch (error) {
        console.log('error on fetching exchange rates: err', error); 
      }
    }
    // fetch data
    // set deefault chainid to 1 (EHT Mainnet) to get some 'real rates'
    fetchExchangeRates( chainId == undefined ? 1 : chainId )
  }, [chainId]);
  return [rate, rateDate];
};

export default useRate;
