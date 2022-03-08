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
