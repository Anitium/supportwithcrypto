import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons';

export default function HeaderWallet() {
  return (
    <>
    {/* Wallet */}
      <div className="hidden md:flex ml-4 lg:ml-6">
        <a href="#" className="group -m-2 p-2 flex items-center">
          <FontAwesomeIcon icon={faWallet} className="fas fa-wallet" />
          <span className="sr-only">view wallet</span>
        </a>
      </div>
    </>
  );
}
