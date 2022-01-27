import { formatEther } from "@ethersproject/units";

export const formatCurrency = (value) => value ? parseFloat(formatEther(value)).toFixed(4) : '0.000';

export const formatAccount = (account) => account ? `${account.slice(0, 5)}...${account.slice(account.length - 4, account.length)}` : '';

const chains = [
  {chainId: 1, name : 'Ethereum Mainnet', symbol: 'ETH', rate : 2500},
  {chainId: 3, name : 'Ropsten Test Network', symbol: 'ETH', rate : 2500},
  {chainId: 4, name : 'Rinkeby Test Network', symbol: 'ETH', rate : 2500},
  {chainId: 42, name : 'Kovan Test Network', symbol: 'ETH', rate : 2500},
  {chainId: 80001, name : 'Mumbai Testnet', symbol: 'MATIC', rate : 2},
  {chainId: 137, name : 'Polygon Mainnet', symbol: 'MATIC', rate : 2},
]

export const findChainById = (chainId) => {
  return chains.find((element) => {
    return element.chainId === chainId;
  })
}