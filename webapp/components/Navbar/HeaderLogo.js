export default function HeaderLogo(props) {
  return (
    <>
      <div className="flex-shrink-0 flex self-center">
        <img
          className="block lg:hidden h-10 w-auto"
          src="./assets/img/logo.png"
          alt="CryptoBean"
        />
        <img
          className="hidden lg:block h-14 w-auto"
          src="./assets/img/logo-text.png"
          alt="CryptoBean"
        />
      </div>
    </>
  );
}
