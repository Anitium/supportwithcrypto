const links = [
  {
    title: 'Terms & Conditions',
    link: 'https://www.supportwithcrypto.com/'
  },
  {
    title: 'Terms & Conditions',
    link: 'https://www.supportwithcrypto.com/'
  },  
];

const Resources = () => {
  return (
    <>

      <span className="block uppercase text-gray-300 text-sm font-semibold mb-2">
        Other Resources
      </span>
      <ul className="list-unstyled">
        { links.map((x, i) => (<li key={i}>
          <a
            className="text-gray-100 hover:text-gray-50 font-semibold block pb-2 text-sm"
            href={x.link}
          >
            {x.title}
          </a>
        </li>
        )) }
      </ul>


    </>
  );
}

export default Resources;
