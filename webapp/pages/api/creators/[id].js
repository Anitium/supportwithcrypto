import { findCreatorById } from '../../../lib/service/creatorsvc';

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'GET': {
      const { id } = req.query;
      const result = await findCreatorById(id);
      return res.json(result);
    }

  }
};