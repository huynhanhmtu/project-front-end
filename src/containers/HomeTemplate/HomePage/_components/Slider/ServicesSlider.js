import React from 'react';
import Slider from 'react-slick/lib/slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

export default function HomeServicesSlider() {
  const settings = {
    infinite: true,
    className: "home-slider",
    slidesToShow: 5,
    slidesToScroll: 5,
    speed: 500,
  };

  return (
    <Slider {...settings}>
      <div className='position-relative slider-item'>
        <img src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png'></img>
        <div className='slider-info position-absolute'>
          <p className='font-weight-bold mb-1'>Build your brand</p>
          <h4>Logo Design</h4>
        </div>
      </div>
      <div className='position-relative slider-item'>
        <img src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png'></img>
        <div className='slider-info position-absolute'>
          <p className='font-weight-bold mb-1'>Customize your site</p>
          <h4>WordPress</h4>
        </div>
      </div>
      <div className='position-relative slider-item'>
        <img src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png'></img>
        <div className='slider-info position-absolute'>
          <p className='font-weight-bold mb-1'>Share your message</p>
          <h4>Voice Over</h4>
        </div>
      </div>
      <div className='position-relative slider-item'>
        <img src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png'></img>
        <div className='slider-info position-absolute'>
          <p className='font-weight-bold mb-1'>Engage your audience</p>
          <h4>Video Explainer</h4>
        </div>
      </div>
      <div className='position-relative slider-item'>
        <img src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png'></img>
        <div className='slider-info position-absolute'>
          <p className='font-weight-bold mb-1'>Reach more customers</p>
          <h4>Social Media</h4>
        </div>
      </div>
      <div className='position-relative slider-item'>
        <img src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png'></img>
        <div className='slider-info position-absolute'>
          <p className='font-weight-bold mb-1'>Unlock growth online</p>
          <h4>SEO</h4>
        </div>
      </div>
      <div className='position-relative slider-item'>
        <img src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png'></img>
        <div className='slider-info position-absolute'>
          <p className='font-weight-bold mb-1'>Customize your site</p>
          <h4>Illustration</h4>
        </div>
      </div>
      <div className='position-relative slider-item'>
        <img src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png'></img>
        <div className='slider-info position-absolute'>
          <p className='font-weight-bold mb-1'>Go global</p>
          <h4>Translation</h4>
        </div>
      </div>
      <div className='position-relative slider-item'>
        <img src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png'></img>
        <div className='slider-info position-absolute'>
          <p className='font-weight-bold mb-1'>Learn your business</p>
          <h4>Data Entry</h4>
        </div>
      </div>
      <div className='position-relative slider-item'>
        <img src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png'></img>
        <div className='slider-info position-absolute'>
          <p className='font-weight-bold mb-1'>Showcase your story</p>
          <h4>Book Covers</h4>
        </div>
      </div>
    </Slider>
  );
}
