import React from 'react';
import HomeCarousel from '../_components/Carousel';
import HomeServicesSlider from './_components/Slider/ServicesSlider';
import HomeTestimonialSlider from './_components/Slider/TestimonialSlider';
import './style.css';

export default function HomePage(props) {
  const handleOnSubmit = e => {
    e.preventDefault();
    props.history.push("/search");
  }
  const handleOnChange = e => {
    localStorage.setItem("job-keyword", JSON.stringify(e.target.value.trim()));
  }

  const select = item => { return document.querySelector(item) };
  const handlePlayVideo = () => {
    select(".home-video-bg")?.classList.add("show-video");
    select(".freelance-video").autoplay = true;
    select(".freelance-video").load();
  }

  window.addEventListener('mouseup', function (e) {
    if (select(".home-video-bg") && select(".freelance-video") && e.target != select(".freelance-video")) {
      select(".home-video-bg").classList.remove("show-video");
      select(".freelance-video").autoplay = false;
      select(".freelance-video").pause();
    }
  });

  const marketplaceData = [
    {
      img: 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg',
      title: 'Graphics & Design'
    },
    {
      img: 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg',
      title: 'Digital Marketing'
    },
    {
      img: 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg',
      title: 'Writing & Translation'
    },
    {
      img: 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg',
      title: 'Video & Animation'
    },
    {
      img: 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg',
      title: 'Music & Audio'
    },
    {
      img: 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg',
      title: 'Programming & Tech'
    },
    {
      img: 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg',
      title: 'Business'
    },
    {
      img: 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg',
      title: 'Lifestyle'
    },
    {
      img: 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg',
      title: 'Data'
    },
  ];
  const handleRenderMarketplace = () => {
    return marketplaceData.map((item, index) => {
      return (
        <div key={index} className='home-explore-item'>
          <a>
            <img src={item.img}></img>
            <p className='m-0'>{item.title}</p>
          </a>
        </div>
      );
    });
  };

  return (
    <section className='home-page'>
      <header>
        <HomeCarousel />
        <div className='container position-relative' style={{ height: 680, background: "transparent" }}>
          <div className='position-absolute home-search'>
            <p className='home-title font-weight-bold'>Find the perfect <i>freelance</i> services for your business</p>
            <form className="form-inline my-2 my-lg-0" onSubmit={handleOnSubmit}>
              <input className="form-control mr-sm-2" type="search" placeholder="Find Services" aria-label="Search" onChange={handleOnChange} />
              <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <p className='d-flex'>Popular:
              <span>Website Design</span>
              <span>WordPress</span>
              <span>Logo Design</span>
              <span>NTF Art</span>
            </p>
          </div>
        </div>
      </header>
      <section className='home-partner'>
        <div className='container d-flex justify-content-center align-items-center'>
          <p className='m-0'>Trusted by:</p>
          <img src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.31d5f92.png' alt='Facebook'></img>
          <img src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png' alt='Google'></img>
          <img src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png' alt='Netflix'></img>
          <img src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png' alt='P&G'></img>
          <img src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png' alt='Paypal'></img>
        </div>
      </section>
      <section className='container'>
        <div className='home-slider-container'>
          <h2>Popular professional services</h2>
          <HomeServicesSlider />
        </div>
      </section>
      <section className='home-introduce'>
        <div className='container d-flex'>
          <div className='col-5 home-introduce-left'>
            <h2>A whole world of freelance talent at your fingertips</h2>
            <div className='mb-4'>
              <h5><span className="mr-2" aria-hidden="true" style={{ width: "24px", height: "24px", fill: "rgb(122, 125, 133)" }}><svg width="20" height="20" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path></svg></span>The best for every budget</h5>
              <span>Find high-quality services at every price point. No hourly rates, just project-based pricing.</span>
            </div>
            <div className='mb-4'>
              <h5><span className="mr-2" aria-hidden="true" style={{ width: "24px", height: "24px", fill: "rgb(122, 125, 133)" }}><svg width="20" height="20" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path></svg></span>Quality work done quickly</h5>
              <span>Find the right freelancer to begin working on your project within minutes.</span>
            </div>
            <div className='mb-4'>
              <h5><span className="mr-2" aria-hidden="true" style={{ width: "24px", height: "24px", fill: "rgb(122, 125, 133)" }}><svg width="20" height="20" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path></svg></span>Protected payments, every time</h5>
              <span>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</span>
            </div>
            <div className='mb-4'>
              <h5><span className="mr-2" aria-hidden="true" style={{ width: "24px", height: "24px", fill: "rgb(122, 125, 133)" }}><svg width="20" height="20" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path></svg></span>24/7 support</h5>
              <span>Questions? Our round-the-clock support team is available to help anytime, anywhere.</span>
            </div>
          </div>
          <div className='col-7 home-introduce-right'>
            <img src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png' onClick={handlePlayVideo}></img>
            <span onClick={handlePlayVideo}></span>
          </div>
        </div>
        <div className='home-video-bg'>
          <div className='home-video'>
            <video className="freelance-video" controls preload="metadata" crossOrigin="anonymous">
              <source src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <section className='container'>
        <div className='home-slider-container'>
          <HomeTestimonialSlider />
        </div>
      </section>
      <section className='home-explore'>
        <div className='container'>
          <h2>Explore the marketplace</h2>
          <div className='row'>
            {handleRenderMarketplace()}
          </div>
        </div>
      </section>
    </section>
  )
}
