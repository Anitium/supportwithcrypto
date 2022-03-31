import { addTransaction } from '../../../lib/service/creatorsvc';
import { verifyAuthHttpReq } from '../../../utils/web3auth';

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
      // save data
      const result = await addTransaction(data);
      return res.json(result);
    }

  }
};
