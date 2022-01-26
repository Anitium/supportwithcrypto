import React from 'react';

import { ConnectButton } from '../ConnectButton';
import { Logo } from '../Logo';

const Navbar = () => {
  return (
    <header className="bg-white top-0 sticky z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 xl:px-24">
        <div className="flex">
          <Logo size="w-12 h-12" />        
        </div>
        <div className="flex space-x-2">
          <ConnectButton />
        </div>     
      </div>
    </header>
  );
}

export default Navbar;
