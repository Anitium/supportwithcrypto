import { updateCreator } from '../../../lib/service/creatorsvc';
import { verifyAuthHttpReq } from '../../../utils/web3auth';

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'POST': {
      const data = req.body;

      const isValidAuth = await verifyAuthHttpReq(req);
      const isValidCreatorId = verifyCreatorId(data)
      if(!isValidAuth || !isValidCreatorId) {
        res.status(403).json({message: 'HTTP 403 Forbidden'});
        return;
      }

      // execute action
      // save data
      const result = await updateCreator(data);
      return res.json(result);
    }

  }
};

const verifyCreatorId = data => {
  return data.creatorid == data.auth.authData.signer
}
