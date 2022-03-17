import React from 'react';
import Slider from 'react-slick/lib/slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

export default function HomeCarousel() {

  const settings = {
    accessibility: false,
    touchMove: false,
    swipe: false,
    pauseOnHover: false,
    draggable: false,
    className: "home-carousel-item",
    dots: false,
    arrows: false,

    speed: 1000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
  };

  return (
    <section className='home-carousel position-absolute'>
      <Slider {...settings}>
        <div>
          <img src='https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049970/bg-hero-5-1792-x1.png'></img>
          <div className='home-carousel-info'>
            <p>
              <i className="fa fa-star" style={{ color: "#ffbe5b" }}></i>
              <i className="fa fa-star" style={{ color: "#ffbe5b" }}></i>
              <i className="fa fa-star" style={{ color: "#ffbe5b" }}></i>
              <i className="fa fa-star" style={{ color: "#ffbe5b" }}></i>
              <i className="fa fa-star" style={{ color: "#ffbe5b" }}></i>
            </p>
            <p>Gabrielle, <b>Video Editor</b></p>
          </div>
        </div>
        <div>
          <img src='https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/93085acc959671e9e9e77f3ca8147f82-1599427734108/bg-hero-4-1792-x1.png'></img>
          <div className='home-carousel-info'>
            <p>Zach, <b>Bar Owner</b></p>
          </div>
        </div>
        <div>
          <img src='https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/d14871e2d118f46db2c18ad882619ea8-1599835783966/bg-hero-3-1792-x1.png'></img>
          <div className='home-carousel-info'>
            <p>
              <i className="fa fa-star" style={{ color: "#ffbe5b" }}></i>
              <i className="fa fa-star" style={{ color: "#ffbe5b" }}></i>
              <i className="fa fa-star" style={{ color: "#ffbe5b" }}></i>
              <i className="fa fa-star" style={{ color: "#ffbe5b" }}></i>
              <i className="fa fa-star" style={{ color: "#ffbe5b" }}></i>
            </p>
            <p>Ritika, <b>Shoemaker and Designer</b></p>
          </div>
        </div>
        <div>
          <img src='https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203045/bg-hero-2-1792-x1.png'></img>
          <div className='home-carousel-info'>
            <p>Moon, <b>Marketing Expert</b></p>
          </div>
        </div>
        <div>
          <img src='https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049983/bg-hero-1-1792-x1.png'></img>
          <div className='home-carousel-info'>
            <p>Andrea, <b>Fashion Designer</b></p>
          </div>
        </div>
      </Slider>
    </section>
  );
}
