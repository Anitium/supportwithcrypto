import { useMemo } from 'react';

import { findChainById } from '../../utils/web3utils/';

const useSymbol = (chainId) => {
  const symbol = useMemo(()=> {
    return (chainId != undefined) ? findChainById(chainId).nativeCurrency.symbol : 'ETH'; 
  }, [chainId]);

  return symbol;
};

export default useSymbol;
