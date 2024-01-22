import Slider from "react-slick";

import carousel1 from "../assets/carousel1.png";
import carousel2 from "../assets/carousel2.png";
import carousel3 from "../assets/carousel3.png";

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Slider {...settings}>
        <div>
          <img src={carousel1} style={{ width: "100vw", height: "100vh" }} />
        </div>
        <div>
          <img src={carousel2} style={{ width: "100vw", height: "100vh" }} />
        </div>
        <div>
          <img src={carousel3} style={{ width: "100vw", height: "100vh" }} />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselComponent;
