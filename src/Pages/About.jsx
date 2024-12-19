import NewsletterBox from "../Components/NewsletterBox"
import Title from "../Components/Title"


const About = () => {
  return (
    <div className="">
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src="https://img.hollisterco.com/is/image/anf/KIC_344-4631-00081-412_life1.jpg?policy=product-large" alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p> Consectetur adipisicing elit. Nam nobis, labore dolores est possimus iste non! Et odio quatum dolor sapiente beatae itaque error rem! Dolorem, dicta.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  pariatur quibusdam? Suscipit eligendi nam veritatis, tenetur facere aliquid eveniet aspernatur ducimus possimus eos aliquam maxime dolorum sit.</p>
        <b className="text-gray-800">Our Mission</b>
        <p className="">Our Mission sit amet consectetur adipisicing elit. Nemo corporis earum, doloremque unde molestiae reprehenderit molestias iure, quibusdam corrupti tempora tenetur aut.</p>
        </div>
      </div>
      <div className="text-4xl py-4">
<Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-6 py-8 sm:py-10 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">We select and vet each Lorem dolore, exercitationem accusamus reiciendis officiis quos!</p>

        </div>
        <div className="border px-10 md:px-6 py-8 sm:py-10 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">With our user-friendly interface minus! Amet dolore, exercitationem accusamus reiciendis officiis quos!</p>
        </div>
        <div className="border px-10 md:px-6 py-8 sm:py-10 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">With our user-friendly interface minus! Amet dolore, exercitationem accusamus reiciendis officiis quos!</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About