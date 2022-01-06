const UsefulLinks = () => {
  return (
    <>

      <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">
        Useful Links
      </span>
      <ul className="list-unstyled">
        <li>
          <a
            className="text-gray-400 hover:text-gray-50 font-semibold block pb-2 text-sm"
            href="https://www.creative-tim.com/presentation?ref=nr-footer"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            className="text-gray-400 hover:text-gray-50 font-semibold block pb-2 text-sm"
            href="https://blog.creative-tim.com?ref=nr-footer"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            className="text-gray-400 hover:text-gray-50 font-semibold block pb-2 text-sm"
            href="https://www.github.com/creativetimofficial?ref=nr-footer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            className="text-gray-400 hover:text-gray-50 font-semibold block pb-2 text-sm"
            href="https://www.creative-tim.com/bootstrap-themes/free?ref=nr-footer"
          >
            Free Products
          </a>
        </li>
      </ul>


    </>
  );
}

export default UsefulLinks;