import React from 'react';

import { ConnectButton } from '../ConnectButton';
import { Logo } from '../Logo';

const Navbar = () => {
  return (
    <header className="top-0 sticky z-40 lg:z-50 w-full backdrop-blur flex-none border-b border-slate-900/10 bg-white/80 supports-backdrop-blur:bg-white/60">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 xl:px-24">
        <div className="flex">
          <a href="/">
            <Logo size="w-12 h-12" />
          </a>
        </div>
        <div className="flex space-x-2">
          <ConnectButton />
        </div>     
      </div>
    </header>
  );
}

export default Navbar;
