const globals = {

  // get configuraiton
  getConfig: ({ activate, deactivate, chainId }) => ({
    infuraId: 'b81e3dcbe77441e8a80b56961e5b7dd9',
    signInMessage: `Get your audience support with crypto!
With SupportWithCrypto your audience can support you with cryptocurrency.`,
    activate: activate,
    deactivate: deactivate,
    chainId: chainId
  }),

};

export default globals;
