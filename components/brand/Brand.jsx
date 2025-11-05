import Image from "next/image";
import Slider from "react-slick";
import brandSlideData from "../../data/brandSlideData";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brand = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 5000,          // smooth continuous scroll
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    swipeToSlide: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="overflow-hidden py-6">
      {/* Wrapper to fix left spacing */}
      <div className="bg-gray-50 rounded-xl py-4 px-0 relative">
        <div className="absolute left-0 top-0 bottom-0 w-[5%] bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-[5%] bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

        <Slider {...settings} className="!ml-0"> {/* remove slick default margin */}
          {brandSlideData.map((item) => (
            <div
              key={item.id}
              className="flex justify-center items-center"
            >
              <div className="w-28 h-28 flex justify-center items-center">
                <Image
                  className="object-contain transition-transform duration-300 hover:scale-105"
                  src={item.img}
                  width={110}
                  height={110}
                  alt="brand"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Brand;
