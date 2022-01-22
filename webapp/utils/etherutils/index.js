import { formatEther } from "@ethersproject/units";

export const formatCurrency = (value) => value ? parseFloat(formatEther(value)).toFixed(4) : '0.000';

export const formatAccount = (account) => account ? `${account.slice(0, 5)}...${account.slice(account.length - 4, account.length)}` : '';