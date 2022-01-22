import { updateCreator } from '../../../lib/service/creatorsvc';

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'POST': {
      const post = req.body;
      const result = await updateCreator(post);
      return res.json(result);
    }

  }
};
