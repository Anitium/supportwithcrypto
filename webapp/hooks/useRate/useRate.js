import { useState, useEffect } from 'react';
import { findChainById } from '../../utils/cryptoutils';
import { getRate } from '../../api/exchangeapi'

const useRate = (chainId) => {
  const [rate, setRate] = useState(1000000);
  const [loadingRate, setLoadingRate] = useState(true);
  useEffect(() => {
    fetchExchangeRates(chainId);
  }, [chainId]);
  async function fetchExchangeRates(chainId) {
    try{
      setLoadingRate(true);
      if( findChainById(chainId) != undefined ) {
        const response = await getRate(
          findChainById(chainId).symbol
        );
        const rate = await response.payload;
        setRate(rate);
      } else 
        setRate(1000000)
    } catch (error) {
      
    }
    setLoadingRate(false);
  }
  //fetchExchangeRates(chainId)
  return [rate, loadingRate];
};


export default useRate;
