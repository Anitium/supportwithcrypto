const UsefulLinks = () => {
  return (
    <>

      <span className="block uppercase text-gray-300 text-sm font-semibold mb-2">
        Useful Links
      </span>
      <ul className="list-unstyled">
        <li>
          <a
            className="text-gray-100 hover:text-gray-50 font-semibold block pb-2 text-sm"
            href="https://www.anitium.com/"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            className="text-gray-100 hover:text-gray-50 font-semibold block pb-2 text-sm"
            href="https://www.github.com/Anitium"
          >
            Github
          </a>
        </li>
        <li>
          <a
            className="text-gray-100 hover:text-gray-50 font-semibold block pb-2 text-sm"
            href="https://www.anitium.com"
          >
            Free Products
          </a>
        </li>
      </ul>


    </>
  );
}

export default UsefulLinks;