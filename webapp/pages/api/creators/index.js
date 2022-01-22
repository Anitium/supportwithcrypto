import { updateCreator } from '../../../lib/service/creatorsvc';

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'POST': {
      const data = req.body;
      const result = await updateCreator(data);
      return res.json(result);
    }

  }
};