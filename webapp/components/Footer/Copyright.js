const Copyright = () => {
  return (
    <>

    <div className="text-sm text-gray-100 font-semibold py-1">
      Copyright © {new Date().getFullYear()} Anitium React by{" "}
      <a
        href="https://www.anitium.com"
        className="text-gray-300 hover:text-gray-100"
      >
        Anitium Team
      </a>
      .
    </div>

    </>
  );
}

export default Copyright;