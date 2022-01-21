
const MicroPage = ({}) => {
  return (
    <>
      <div className="flex flex-col bg-gray-100 h-screen">
        <div className=" bg-white top-0 sticky z-50">
          <div className="h-16 flex space items-center justify-between max-w-5xl container mx-auto">
            <div className="flex">
              <a><div className="rounded-full h-8 w-8 bg-blue-300"></div></a>
            </div>
            <div className="flex">
              <a><div className="rounded-full h-8 w-8 bg-blue-300"></div></a>
              <a><div className="rounded-full h-8 w-8 bg-blue-300"></div></a>
            </div>
            
          </div>
        </div>
        <div className="flex flex-col container mx-auto">
          <div className="flex flex-col justify-center">
            <div className="max-w-7xl h-64 bg-indigo-500 container mx-auto">
              Header Image
            </div>
            <div className="flex justify-between bg-indigo-200 max-w-5xl h-32 container mx-auto">
              <div className="flex space-x-4">
                <div className="rounded-full h-24 w-24 bg-indigo-700 border-4 border-indigo-400"></div>
                <div className="font-bold text-2xl text-gray-700">Avatar Name</div>
              </div>
              <div className="flex items-center pr-12">
                <a href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-100 bg-indigo-600 hover:bg-indigo-500 md:py-4 md:text-lg md:px-10"
                >Donate</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center m-4">
            <div className="flex flex-col max-w-7xl container mx-auto">
              <div className="justify-between items-center max-w-5xl">About</div>
              <div className="border-b border-gray-200"></div>
            </div>
            <div className="flex max-w-7xl lg:flex-row flex-col pt-10 space ">
              <div className="flex flex-col basis-2/3 pr-8 space-y-4">
                  <div className="shadow-xl rounded-md p-4 bg-white">
                    <h2 className="border-b border-gray-500">About</h2>
                    <p>Noted by The Root 100 as one of the most influential African Americans ages 25 to 45, Latoya Shauntay Snell is a sponsored endurance athlete, body politics activist, motivational speaker and the food and fitness blogger of Running Fat Chef. Featured on multiple platforms such as 3rd Hour Today, Good Morning America, Huffington Post, The Cut and SELF, Snell is quickly making a name </p>
                  </div>
                  <div className="flex flex-col space-y-2 shadow-xl rounded-md p-4 bg-white">
                    <h2 className="border-b border-gray-500">Suporters</h2>
                    <div className="flex h-14 items-center space-x-3 p-4 rounded-md border border-blue-400 bg-blue-100 ">
                      <a className="rounded-full h-8 w-8 border-2 border-blue-600 bg-blue-400"></a>
                      <p>Good luck!</p>
                    </div>
                    <div className="flex h-14 items-center space-x-3 p-4 rounded-md border border-blue-400 bg-blue-100 ">
                      <a className="rounded-full h-8 w-8 border-2 border-blue-600 bg-blue-400"></a>
                      <p>Good luck!</p>
                    </div>
                    <div className="flex h-14 items-center space-x-3 p-4 rounded-md border border-blue-400 bg-blue-100 ">
                      <a className="rounded-full h-8 w-8 border-2 border-blue-600 bg-blue-400"></a>
                      <p>Good luck!</p>
                    </div>
                  </div>
              </div>
              <div className="basis-1/3 pr-8">
                <div className="shadow-xl rounded-md p-4 bg-white">
                    <h2 className="border-b border-gray-500">Support Kina Jonne</h2>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Your donation
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 flex justify-center bg-indigo-500">
          Footer
        </div>
      </div>
    </>
  );
}
  
export default MicroPage;  