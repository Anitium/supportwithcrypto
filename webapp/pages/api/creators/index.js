import { updateCreator } from '../../../lib/service/creatorsvc';
import { verifyMessage } from '../../../utils/auth';

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'POST': {
      const data = req.body;
      console.log(data);

      // protect endpoint
      let isValid = false;
      if(data.auth && data.auth.authData){
        isValid = await verifyMessage({
          message: data.auth.authData.message,
          signer: data.auth.authData.address,
          signature: data.auth.authData.signature
        });
      }
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
