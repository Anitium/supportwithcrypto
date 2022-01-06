export default function Social(props) {
  return (
    <>

      <div className="mt-6 lg:mb-0 mb-6">
        <button
          className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
          type="button"
        >
          <i className="fab fa-twitter"></i>
        </button>
        <button
          className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
          type="button"
        >
          <i className="fab fa-facebook-square"></i>
        </button>
        <button
          className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
          type="button"
        >
          <i className="fab fa-dribbble"></i>
        </button>
        <button
          className="bg-white text-gray-50 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
          type="button"
        >
          <i className="fab fa-instagram"></i>
        </button>
      </div>

    </>
  );
}
