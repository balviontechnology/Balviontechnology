import React from "react";
import Slider from "react-slick";
import assets from "../assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <section id="home" className="relative h-[100vh] overflow-hidden">
      <Slider {...settings}>
        {assets.heroSlides.map((img, index) => (
          <div key={index} className="relative">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-[100vh] object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-6">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeInUp">
                Empowering Future Innovators 🚀
              </h1>
              <p className="text-lg md:text-xl max-w-2xl animate-fadeIn delay-500">
                Inspiring young minds through Robotics & STEM education across
                schools and colleges.
              </p>
            </div>
          </div>
        ))}

        <div className="relative">
          <video
            autoPlay
            loop
            muted
            className="w-full h-[100vh] object-cover brightness-90"
          >
            <source src={assets.videoBg} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeInUp">
              Connecting Talent with Opportunity 🌍
            </h1>
            <p className="text-lg md:text-xl max-w-2xl animate-fadeIn delay-500">
              Providing innovative HR solutions that build stronger,
              future-ready teams.
            </p>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default HeroSection;
