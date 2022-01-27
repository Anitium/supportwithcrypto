import { useMemo } from 'react';

import { findChainById } from '../../utils/cryptoutils/';

const useSymbol = (chainId) => {
  const symbol = useMemo(()=> {
    return (chainId != undefined) ? findChainById(chainId).symbol : 'EHT'; 
  }, [chainId]);

  return symbol;
};

export default useSymbol;
