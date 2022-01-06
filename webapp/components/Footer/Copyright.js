const Copyright = () => {
  return (
    <>

    <div className="text-sm text-gray-100 font-semibold py-1">
      Copyright © {new Date().getFullYear()} Anitium React by{" "}
      <a
        href="https://www.creative-tim.com?ref=nr-footer"
        className="text-gray-400 hover:text-gray-100"
      >
        Anitium Tim
      </a>
      .
    </div>

    </>
  );
}

export default Copyright;