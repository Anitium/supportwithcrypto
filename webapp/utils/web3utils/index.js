import { formatEther } from "@ethersproject/units";

import chains from './chains';

export const formatCurrency = (value) => value ? parseFloat(formatEther(value)).toFixed(4) : '0.000';

export const formatAccount = (account) => account ? `${account.slice(0, 5)}...${account.slice(account.length - 4, account.length)}` : '';

export const findChainById = (chainId) => {
  return chains.find((element) => {
    return element.chainId === chainId;
  })
}

export function filterMatches(array, condition, fallback) {
  let result = fallback;
  const matches = array.filter(condition);

  if (!!matches && matches.length) {
    result = matches[0];
  }

  return result;
};

export function getChainId(network) {
  console.log('network =>' + network)
  const c = Object.values(chains);
  const match = filterMatches(c, x => x.network === network, undefined);
  if (!match) {
    throw new Error(`No chainId found match ${network}`);
  }
  return match.chainId;
};

export function getChainScanner(chainId) {
  const c = Object.values(chains);
  const match = filterMatches(c, x => x.chainId === chainId, undefined);
  if (!match) {
    throw new Error(`No scanner found match ${chainId}`);
  }
  return match.explorers[0];
};

export function getChainRPCs(chainId, infuraId) {
  return {
    1: 'https://mainnet.infura.io/v3/b81e3dcbe77441e8a80b56961e5b7dd9',
    3: 'https://ropsten.infura.io/v3/b81e3dcbe77441e8a80b56961e5b7dd9',
    4: 'https://rinkeby.infura.io/v3/b81e3dcbe77441e8a80b56961e5b7dd9',
    5: 'https://goerli.infura.io/v3/b81e3dcbe77441e8a80b56961e5b7dd9',
    42: 'https://kovan.infura.io/v3/b81e3dcbe77441e8a80b56961e5b7dd9',
    137: 'https://polygon-mainnet.infura.io/v3/b81e3dcbe77441e8a80b56961e5b7dd9',
    80001: 'https://rpc-mumbai.matic.today',
  }
  /*
  const c = Object.values(chains);
  // ignore chainId 
  if( chainId == undefined ) return undefined

  const match = filterMatches(c, x => x.chainId === chainId, undefined);
  if (!match) {
    throw new Error(`No rpc found match ${chainId}`);
  }
  let result = {};
  result[chainId] = match.rpc[0].replace('${INFURA_API_KEY}', infuraId)
  console.log('getChainRPC - ' + JSON.stringify(result))
  return result;
  */
};
