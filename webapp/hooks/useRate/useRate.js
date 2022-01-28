import { useMemo } from 'react';

import { findChainById } from '../../utils/cryptoutils/';

const useRate = (chainId) => {
  const rate = useMemo(()=> {
    return (chainId != undefined) ? findChainById(chainId).rate : 1; 
  }, [chainId]);

  return rate;
};

export default useRate;
