const Resources = () => {
  return (
    <>

      <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">
        Other Resources
      </span>
      <ul className="list-unstyled">
        <li>
          <a
            className="text-gray-400 hover:text-gray-50 font-semibold block pb-2 text-sm"
            href="https://github.com/creativetimofficial/notus-react/blob/main/LICENSE.md?ref=nr-footer"
          >
            MIT License
          </a>
        </li>
        <li>
          <a
            className="text-gray-400 hover:text-gray-50 font-semibold block pb-2 text-sm"
            href="https://creative-tim.com/terms?ref=nr-footer"
          >
            Terms & Conditions
          </a>
        </li>
        <li>
          <a
            className="text-gray-400 hover:text-gray-50 font-semibold block pb-2 text-sm"
            href="https://creative-tim.com/privacy?ref=nr-footer"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            className="text-gray-400 hover:text-gray-50 font-semibold block pb-2 text-sm"
            href="https://creative-tim.com/contact-us?ref=nr-footer"
          >
            Contact Us
          </a>
        </li>
      </ul>


    </>
  );
}

export default Resources;