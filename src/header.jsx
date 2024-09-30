import React from 'react'
import LOGO from "./images/logo.png"
import Bike from './images/bike.png'
import Bground from './images/round.png'
const Header = () => {
  return (
    <>
      <div class="">
        <nav class="navbar navbar-expand-lg ">
          <div class="container">
            <img className='img-fluid' src={LOGO} alt="" />
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link fw-semibold text-black " href="">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link fw-semibold text-black " href="">Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link fw-semibold text-black" href="">Contact Us</a>
                </li>
              </ul>
              <button className='border-0 bg-body px-4 fw-semibold'type="submit">Login</button>
              <button className='border-0 p-3 rounded-5 text-white fw-semibold bg-warning' type="submit">Book Scooter</button>

            </div>
          </div>
        </nav>
      </div>
      <div className='position-relative'>
        <div className='position-absolute mt-5 ms-5 pt-5 ps-5'>
        <img className='ps-5 ms-5 mt-5 img-fluid' src={Bground} alt="" />
        </div>
      <div className='container'>
        <div className='row align-items-center'>
<div className='col-lg-7 col col-md-6 col-sm-12'>

<h1 className='text-light-emphasis fw-medium'>Fair price ride</h1>

<h1 className='text-light-emphasis display-1 fw-bold'>Rent our <span className='text-warning'>Scooter</span></h1>
<p className='text-light-emphasis'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
</div>
<div className='col-lg-5 col col-md-6 col-sm-12'>
<img className='img-fluid' src={Bike} alt="" />
</div>
        </div>
      </div>
      </div>
    </>

  )
}

export default Header