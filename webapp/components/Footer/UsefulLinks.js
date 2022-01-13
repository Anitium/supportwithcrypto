const links = [
  {
    title: 'About Us',
    link: 'https://www.supportwithcrypto.com/'
  },
  {
    title: 'Github',
    link: 'https://www.github.com/supportwithcrypto'
  },
  {
    title: 'Free Products',
    link: 'https://www.supportwithcrypto.com'
  }  
];

const UsefulLinks = () => {
  return (
    <>
      <span className="block uppercase text-gray-300 text-sm font-semibold mb-2">
        Useful Links
      </span>
      <ul className="list-unstyled">
        { links.map((x,i) => (<li key={i}>
          <a
            className="text-gray-100 hover:text-gray-50 font-semibold block pb-2 text-sm"
            href={x.link}
          >
            {x.title}
          </a>
        </li>)) }
      </ul>
    </>
  );
}

export default UsefulLinks;
