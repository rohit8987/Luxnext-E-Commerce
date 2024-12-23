import { Link, useNavigate } from "react-router-dom";

const Footer = () => { 
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0); // Scroll to the top of the page
    };

    return (
        <div>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                <div>
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                        <h1 className="w-36 text-2xl mb-5">LUXNEST.</h1>
                    </Link>
                    <p className="w-full md:w-2/3 text-gray-600">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio delectus nulla dicta, exercitationem
                        qui in modi debitis facilis hic ut voluptate obcaecati tempora porro doloremque?
                    </p>
                </div>
                <div>
                    <p className="uppercase text-xl font-medium mb-5">Company</p>
                    <ul className="flex flex-col gap-1 text-gray-600 cursor-pointer">
                        <li onClick={() => handleNavigation('/')}>Home</li>
                        <li onClick={() => handleNavigation('/about')}>About us</li>
                        <li onClick={() => handleNavigation('/orders')}>Delivery</li>
                        <li onClick={() => handleNavigation('/contact')}>Privacy policy</li>
                    </ul>
                </div>
                <div>
                    <p className="uppercase text-xl font-medium mb-5">Get in touch</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>+91-652-485-3285</li>
                        <li>contact@luxnest.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className="py-5 text-sm text-center">© CopyRight 2024 @ luxnest.com - All Right Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
