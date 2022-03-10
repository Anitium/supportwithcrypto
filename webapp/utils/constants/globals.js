import { getChainRPCs } from "../web3utils";

const infuraId = 'b81e3dcbe77441e8a80b56961e5b7dd9';

const globals = {

  // get configuraiton
  getConfig: ({ activate, deactivate, chainId }) => ({
    infuraId: infuraId,
    signInMessage: `Get your audience support with crypto!
With SupportWithCrypto your audience can support you with cryptocurrency.`,
    activate: activate,
    deactivate: deactivate,
    chainId: chainId,
    rpc: getChainRPCs(infuraId),
  }),

};

export default globals;
