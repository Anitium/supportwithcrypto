import { useMemo } from 'react';

import { findChainById } from '../../utils/cryptoutils/';

const useRate = (chainId) => {
  const rate = useMemo(()=> {
    return (chainId != undefined) ? findChainById(chainId).rate : 10000000000; 
  }, [chainId]);

  return rate;
};

export default useRate;
