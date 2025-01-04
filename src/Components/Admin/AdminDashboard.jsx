import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ProductDetail from './ProductDetail';
import OrderDetail from './OrderDetail';
import UserDetail from './UserDetail';
import MyContext from '../../Context/MyContext';
import { useContext } from 'react';



const AdminDashboard = () => {

    const user = JSON.parse(localStorage.getItem('users'))
    
    const context = useContext(MyContext);
    const {getAllProduct,getAllOrder,getAllUser} =  context;
   

    return (
        <div>
            {/* Top */}
            <div className="top mb-5 px-5 mt-5">
                <div className=" bg-gray-50 py-5 border border-gray-100 rounded-lg">
                    <h1 className=" text-center text-2xl font-bold text-black-500">Admin Dashboard</h1>
                </div>
            </div>

            <div className="px-5">
                {/* Mid  */}
                <div className="mid mb-5">
                    {/* main  */}
                    <div className=" bg-gray-50 py-5 rounded-xl border border-gray-100">
                        {/* image  */}
                        <div className="flex justify-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="" />
                        </div>
                        {/* text  */}
                        <div className="">
                            <h1 className=" text-center text-lg"><span className=" font-bold">Name :</span>{user?.name} </h1>
                            <h1 className=" text-center text-lg "><span className=" font-bold">Email :</span> {user?.email}</h1>
                            <h1 className=" text-center text-lg "><span className=" font-bold">Date :</span> {user?.date}</h1>
                            <h1 className=" text-center text-lg "><span className=" font-bold">Role :</span> {user?.role}</h1>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="">
                    <Tabs>
                        <TabList className="flex flex-wrap -m-4 text-center justify-center">
                            {/* Total Products */}
                            <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                                <div className=" border bg-gray-50 hover:bg-gray-100 border-gray-100 px-4 py-3 rounded-xl" >
                                    <div className="text-black text-3xl mb-3 inline-block">
                                        <ShoppingBagOutlinedIcon style={{ fontSize: '3rem' }} />
                                    </div>
                                    <h2 className="title-font font-medium text-3xl text-black-400 fonts1" >{getAllProduct.length}</h2>
                                    <p className=" text-black-500  font-bold" >Total Products</p>
                                </div>
                            </Tab>

                            {/* Total Order  */}
                            <Tab className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
                                <div className=" border bg-gray-50 hover:bg-gray-100 border-gray-100 px-4 py-3 rounded-xl" >
                                    <div className="text-black text-3xl mb-3 inline-block">
                                        <MenuOutlinedIcon style={{ fontSize: '3rem' }} />
                                    </div>
                                    <h2 className="title-font font-medium text-3xl text-black-400 fonts1" >{getAllOrder.length}</h2>
                                    <p className=" text-black-500  font-bold" >Total Order</p>
                                </div>
                            </Tab>

                            {/* Total User  */}
                            <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                                <div className=" border bg-gray-50 hover:bg-gray-100 border-gray-100 px-4 py-3 rounded-xl" >
                                    <div className="text-black text-3xl mb-3 inline-block">
                                        <PersonIcon style={{ fontSize: '3rem' }} />
                                    </div>

                                    <h2 className="title-font font-medium text-3xl text-black-400 fonts1" >{getAllUser.length}</h2>
                                    <p className=" text-black-500  font-bold" >Total Users</p>
                                </div>
                            </Tab>
                        </TabList>

                        <TabPanel>
                            <ProductDetail />
                        </TabPanel>

                        <TabPanel>
                           <OrderDetail/>
                        </TabPanel>

                        <TabPanel>
                            <UserDetail/>
                        </TabPanel>
                    </Tabs>

                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;