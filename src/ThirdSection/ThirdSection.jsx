import React from 'react';
import IMAGE from '../images/secondsection.jpeg';
import Slider from 'react-slick';
import { ArrowLeft, ArrowRight } from '@mui/icons-material'; // Importing Material UI icons

const ThirdSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <button className="slick-next">
        <ArrowRight style={{ fontSize: '40px', color: '#000', position: 'absolute', right: '-50px', top: '50%' }} />
      </button>
    ),
    prevArrow: (
      <button className="slick-prev">
        <ArrowLeft style={{ fontSize: '40px', color: '#000', position: 'absolute', left: '-50px', top: '50%' }} />
      </button>
    ),
  };

  return (
    <div style={{ maxWidth: "60%" }} className="container-lg gap-2 align-items-center py-2">
      <h4 className='fw-bold'>Browse by property type in Gānji</h4>
      <Slider {...settings} className="d-flex position-relative">
        {/* Dummy Cards */}
        <div className="text-center">
          <img src={IMAGE} alt="Vacation Home 1" style={{ maxWidth: '300px' }} />
          <p>Vacation Homes</p>
        </div>
        <div className="text-center">
          <img src={IMAGE} alt="Vacation Home 2" style={{ maxWidth: '300px' }} />
          <p>Vacation Homes</p>
        </div>
        <div className="text-center">
          <img src={IMAGE} alt="Vacation Home 3" style={{ maxWidth: '300px' }} />
          <p>Vacation Homes</p>
        </div>
        <div className="text-center">
          <img src={IMAGE} alt="Vacation Home 4" style={{ maxWidth: '300px' }} />
          <p>Vacation Homes</p>
        </div>
        <div className="text-center">
          <img src={IMAGE} alt="Vacation Home 5" style={{ maxWidth: '300px' }} />
          <p>Vacation Homes</p>
        </div>
        <div className="text-center">
          <img src={IMAGE} alt="Vacation Home 6" style={{ maxWidth: '300px' }} />
          <p>Vacation Homes</p>
        </div>
        <div className="text-center">
          <img src={IMAGE} alt="Vacation Home 7" style={{ maxWidth: '300px' }} />
          <p>Vacation Homes</p>
        </div>
        <div className="text-center">
          <img src={IMAGE} alt="Vacation Home 8" style={{ maxWidth: '300px' }} />
          <p>Vacation Homes</p>
        </div>
        <div className="text-center">
          <img src={IMAGE} alt="Vacation Home 9" style={{ maxWidth: '300px' }} />
          <p>Vacation Homes</p>
        </div>
        <div className="text-center">
          <img src={IMAGE} alt="Vacation Home 10" style={{ maxWidth: '300px' }} />
          <p>Vacation Homes</p>
        </div>
      </Slider>
    </div>
  );
}

export default ThirdSection;
