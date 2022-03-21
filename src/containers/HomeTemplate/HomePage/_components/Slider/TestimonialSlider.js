import React from 'react';
import Slider from 'react-slick/lib/slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

export default function HomeTestimonialSlider() {
  const settings = {
    infinite: true,
    className: "home-testimonial-slider",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  };

  return (
    <Slider {...settings}>
      <div className='slider-testimonial-item'>
        <div className='row w-100 m-0 align-items-center'>
          <div className='col-5 p-0 slider-testimonial-img'>
            <img className='w-100' src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg'></img>
          </div>
          <div className='col-7 slider-testimonial-content' style={{ padding: "0 60px" }}>
            <h5>Brighid Gannon (DNP, PMHNP-BC), Co-Founder<span>
              <img alt="Company logo" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lavender-logo-x2.89c5e2e.png"></img>
            </span></h5>
            <blockquote><i>"We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world."</i></blockquote>
          </div>
        </div>
      </div>
    </Slider>
  );
}
