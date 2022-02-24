import chains from './chains';

export function filterMatches(array, condition, fallback) {
  let result = fallback;
  const matches = array.filter(condition);

  if (!!matches && matches.length) {
    result = matches[0];
  }

  return result;
};

export function getChainId(network) {
  const c = Object.values(chains);
  const match = filterMatches(c, x => x.network === network, undefined);
  if (!match) {
    throw new Error(`No chainId found match ${network}`);
  }
  return match.chainId;
};
