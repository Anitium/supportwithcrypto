import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

export default function HeaderLogin() {
  return (
    <>
      <div className="hidden ml-4 lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
        <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
          <FontAwesomeIcon icon={faSignInAlt} />
        </a>
        <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
          <FontAwesomeIcon icon={faUserPlus} />
        </a>
      </div>
    </>
  );
}
