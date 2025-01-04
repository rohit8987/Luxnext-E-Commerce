


const MyProfile = () => {

    const user = JSON.parse(localStorage.getItem('users'));
    
    return (
      
      <div className=" container mx-auto px-4 py-5 lg:py-8">
      {/* Top  */}
      <div className="top ">
          {/* main  */}
          <div className=" py-5 rounded-xl border ">
              {/* image  */}
              <div className="flex justify-center">
                  <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="" />
              </div>
              {/* text  */}
              <div className="">
                  <h1 className=" text-center text-lg"><span className=" font-bold">Name :</span>{user?.name}</h1>
                  <h1 className=" text-center text-lg"><span className=" font-bold">Email :</span> {user?.email}</h1>
                  <h1 className=" text-center text-lg"><span className=" font-bold">Date :</span> {user?.date}</h1>
                  <h1 className=" text-center text-lg"><span className=" font-bold">Role :</span> {user?.role}</h1>
              </div>
          </div>
      </div>

      {/* bottom  */}
      <div className="bottom">
          {/* main 1 */}
          <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
              {/* text  */}
              <h2 className=" text-2xl lg:text-3xl font-bold">Order Details</h2>

              {/* main 2 */}
              <div className="mt-5 flex flex-col overflow-hidden rounded-xl border  md:flex-row">
                  {/* main 3  */}
                  <div className="w-full border-r  md:max-w-xs">
                      {/* left  */}
                      <div className="p-8">
                          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                              <div className="mb-4">
                                  <div className="text-sm font-semibold text-black">Order Id</div>
                                  <div className="text-sm font-medium text-gray-900">#74557994327</div>
                              </div>

                              <div className="mb-4">
                                  <div className="text-sm font-semibold">Date</div>
                                  <div className="text-sm font-medium text-gray-900">{user?.date}</div>
                              </div>

                              <div className="mb-4">
                                  <div className="text-sm font-semibold">Total Amount</div>
                                  <div className="text-sm font-medium text-gray-900">₹84,499</div>
                              </div>

                              <div className="mb-4">
                                  <div className="text-sm font-semibold">Order Status</div>
                                  <div className="text-sm font-medium text-green-800">Confirmed</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  {/* right  */}
                  
              </div>
          </div>
      </div>
  </div>
    );
}

export default MyProfile;