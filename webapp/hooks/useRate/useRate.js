import { useState, useEffect } from 'react';
import { findChainById } from '../../utils/cryptoutils';
import { getRate } from '../../api/exchangeapi'

const useRate = (chainId) => {
  const [rate, setRate] = useState(1000000);
  //const [loadingRate, setLoadingRate] = useState(false);
  useEffect(() => {
    async function fetchExchangeRates(chainId) {
      try{
        //setLoadingRate(true);
        if( findChainById(chainId) != undefined ) {
          const response = await getRate(
            findChainById(chainId).symbol
          );
          //const rate = await response.payload;
          console.log('setRate=' + response.payload)
          setRate(response.payload);
        } else 
          setRate(1000000)
      } catch (error) {
        
      }
      //setLoadingRate(false);
    }
    fetchExchangeRates(chainId)
  }, [chainId]);
  console.log('useRate=' + rate);// + ' loadingRate=' + loadingRate)
  //return [rate, loadingRate];
  return rate;
};


export default useRate;
