import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Make sure you import these CSS files

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    cssEase: "linear",
   
  };

  return (
    <div className="flex flex-col sm:flex-row ">
      {/* Text Section */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141] px-4">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base uppercase">
              Our Bestsellers
            </p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2 mt-1">
            <p className="font-semibold text-sm md:text-base uppercase">
              Shop Now
            </p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <div className="w-full sm:w-1/2 relative ">
        <Slider {...settings}>
          <div>
            <img
              className="w-full  object-cover"
              src="https://img.hollisterco.com/is/image/anf/KIC_515-4083-00120-900_model1.jpg?policy=product-large"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full  object-cover"
              src="https://img.hollisterco.com/is/image/anf/KIC_344-5019-00050-900_model2?policy=product-medium"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full  object-cover"
              src="https://img.hollisterco.com/is/image/anf/KIC_344-4605-00038-901_model2?policy=product-medium"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
