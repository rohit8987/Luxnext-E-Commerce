import NewsletterBox from "../Components/NewsletterBox"
import Title from "../Components/Title"


const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className=" my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-[480px]" src="https://plus.unsplash.com/premium_photo-1661299251279-117a49a32548?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FsbCUyMGNlbnRlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">16461 station <br />dist 285,gcobiqwi,UK</p>
          <p className="text-gray-500">Tel:(2514) 15446-41254 <br />Email:luxnest09@gmail.com</p>
          <p className="font-semibold text-xl text-gray-600">Careers at Luxnest.</p>
          <p className="text-gray-500">Learn more about our teams and job openings.</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact