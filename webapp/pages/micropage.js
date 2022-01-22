import { DefaultLayout } from '../layout';

const MicroPage = ({}) => {
  return (
  <content className="container mx-auto flex flex-col">
    {/* User Profile Header */}
    <div className="flex flex-col justify-center items-center">
      {/* User Profile Header Image*/}
      <div className="w-full">
        <img className="w-full max-h-40 md:max-h-60 xl:max-h-72 object-cover overflow-hidden" src="/assets/img/users/anitium/header.jpg"></img>
      </div>
      {/* User Profile Info*/}
      <div className="flex justify-between max-w-5xl w-full">
        <div className="flex relative space-y-4 space-x-4 justify-center items-center">
          <div className="lg:-mt-4">
            <img className="w-14 h-14 lg:w-32 lg:h-32 object-cover rounded-full border-2 lg:border-4 border-indigo-50" src="/assets/img/users/karelbecerra/profile.jpg" />
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-lg lg:text-2xl text-gray-600">Karel Becerra</div>
            <div className=" bg-gray-200 rounded-md p-1 text-xs lg:text-sm text-center text-gray-700">0xdbF3...d5fe</div>
          </div>
        </div>
        <div className="flex items-center pr-12">
          <a href="#"
            className="w-36 lg:w-64 flex items-center justify-center border border-transparent font-semibold text-xl md:py-4 rounded-3xl text-indigo-100 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-indigo-500"
          >Donate</a>
        </div>
      </div>
    </div>
    {/* User Content Left and Right */}
    <section className="flex flex-col justify-center items-center my-4">
      {/* User Content Tab */}
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex justify-start items-start w-full max-w-5xl">
          About
        </div>
        <div className="w-full border-b border-gray-200"></div>
      </div>
      {/* User Content About Tab */}
      <div className="flex flex-col lg:flex-row max-w-5xl pt-3 lg:space-x-10 space-y-5 lg:space-y-0">
        {/* User Content About and Comments (Left Panel) */}
        <div className="basis-7/12 flex flex-col pt-5 space-y-5 order-2 lg:order-first">
            <div className="flex flex-col space-y-10 shadow-sm rounded-md p-6 bg-white">
              <h2 className="border-b border-gray-100 text-xl font-medium text-gray-800">Suporters</h2>
              <div className="flex flex-col space-y-6">
                <div className="flex h-14 items-center space-x-3 p-4 rounded-md bg-gradient-to-r from-cyan-500 to-blue-100 ">
                  <a className="rounded-full h-8 w-8 border-2 border-blue-600 bg-blue-400"></a>
                  <p>Good luck!</p>
                </div>
                <div className="flex h-14 items-center space-x-3 p-4 rounded-md bg-gradient-to-r from-cyan-500 to-blue-100 ">
                  <a className="rounded-full h-8 w-8 border-2 border-blue-600 bg-blue-400"></a>
                  <p>You did it!</p>
                </div>
                <div className="flex h-14 items-center space-x-3 p-4 rounded-md bg-gradient-to-r from-cyan-500 to-blue-100 ">
                  <a className="rounded-full h-8 w-8 border-2 border-blue-600 bg-blue-400"></a>
                  <p>Best project I ever seen!</p>
                </div>
                <div className="flex h-14 items-center space-x-3 p-4 rounded-md bg-gradient-to-r from-cyan-500 to-blue-100 ">
                  <a className="rounded-full h-8 w-8 border-2 border-blue-600 bg-blue-400"></a>
                  <p>WOO!</p>
                </div>
                <div className="flex h-14 items-center space-x-3 p-4 rounded-md bg-gradient-to-r from-cyan-500 to-blue-100 ">
                  <a className="rounded-full h-8 w-8 border-2 border-blue-600 bg-blue-400"></a>
                  <p>Thank you sir.</p>
                </div>
              </div>
            </div>
        </div>
        {/* User Content Donate Botton (Right Panel & Top) */}
        <div className="basis-5/12 flex flex-col lg:pt-5 space-y-5 ">
          <div className="flex flex-col space-y-10 shadow-sm rounded-md p-6 bg-white">
            <h2 className="border-b border-gray-100 text-xl font-medium text-gray-800">Support <strong>Kina Jonne</strong></h2>
            <div className="flex flex-col space-y-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  Your donation (in dollars)
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block border h-8 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  Your donation (in crypto)
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block border h-8 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                  In your words
                </label>
                <div className="mt-1">
                  <textarea
                    id="comment"
                    name="comment"
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="Your message..."
                    defaultValue={''}
                  />
                </div>
              </div>
              <div className="flex items-center pr-12">
                <a href="#"
                  className="w-36 lg:w-64 flex items-center justify-center border border-transparent font-semibold text-xl md:py-4 rounded-3xl text-indigo-100 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-indigo-500"
                >Donate</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-10 shadow-sm rounded-md p-6 bg-white">
            <h2 className="border-b border-gray-100 text-xl font-medium text-gray-800">About</h2>
            <div className="flex flex-col space-y-6">
              <div className="">
                <p>Noted by The Root 100 as one of the most influential African Americans ages 25 to 45, Latoya Shauntay Snell is a sponsored endurance athlete, body politics activist, motivational speaker and the food and fitness blogger of Running Fat Chef. Featured on multiple platforms such as 3rd Hour Today, Good Morning America, Huffington Post, The Cut and SELF, Snell is quickly making a name </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </content>
  );
}
  
MicroPage.Layout = DefaultLayout;

export default MicroPage;  