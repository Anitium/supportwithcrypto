import { updateCreator } from '../../../lib/service/creatorsvc';
import { verifyAuthHttpReq } from '../../../utils/auth';

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'POST': {
      const data = req.body;

      const isValid = await verifyAuthHttpReq(req);
      if(!isValid) {
        res.status(403).json({message: 'HTTP 403 Forbidden'});
        return;
      }

      // execute action
      const result = await updateCreator(data);
      return res.json(result);
    }

  }
};
