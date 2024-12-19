import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <div className="">
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                <div className="">
                    <Link to="/">
                        <h1 className='w-36 text-2xl mb-5'>LUXNEST.</h1>
                    </Link>
                    <p className="w-full md:w-2/3 text-gray-600">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio delectus nulla dicta, exercitationem
                        qui in modi debitis facilis hic ut voluptate obcaecati tempora porro doloremque?
                    </p>
                </div>
                <div className="">
                    <p className="uppercase text-xl font-medium mb-5">company</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="">
                    <p className="uppercase text-xl font-medium mb-5">get in touch </p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>+91-652-485-3285</li>
                        <li>contact@luxnest.com</li>
                    </ul>
                </div>
            </div>
            <div className="">
                <hr />
                <p className="py-5 text-sm text-center ">©CopyRight 2024@ luxnest.com - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer