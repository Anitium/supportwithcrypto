import { cryptoRate } from '../../../lib/service/exchange';

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'GET': {
      const { symbol } = req.query;
      const result = await cryptoRate(symbol);
      return res.json(result);
    }
  }
};
