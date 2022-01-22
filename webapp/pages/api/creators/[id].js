import { findCreatorByAddressOrEns } from '../../../lib/service/creatorsvc';

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'GET': {
      const { id } = req.query;
      console.log('get creators id:', id);
      const result = await findCreatorByAddressOrEns(id);
      return res.json(result);
    }

  }
};
