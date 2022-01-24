import React from 'react';

import { ConnectButton } from '../ConnectButton';

const Navbar = () => {
  return (
    <header className="bg-white top-0 sticky z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 xl:px-24">
        <div className="flex space-x-2">
          <a><div className="rounded-full h-8 w-8 bg-blue-300"></div></a>
        </div>
        <div className="flex space-x-2">
          <ConnectButton />
        </div>     
      </div>
    </header>
  );
}

export default Navbar;
