import React from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Flag from '../images/Flag.png';

const NavBar = () => {
  return (
    <div 
      className="container-lg d-flex justify-content-between align-items-center py-2"
      style={{ maxWidth: '60%' }} // Adjusted the container width
    >
      {/* Left Section */}
      <div>
        <h4 className="fw-bold m-0 text-white">Booking.com</h4>
      </div>

      {/* Right Section */}
      <div className="d-flex align-items-center gap-4">
        {/* Country Code and Flag */}
        <div className="d-flex align-items-center gap-4">
          <h6 className="m-0 text-white">PRK</h6>
          <img
            className="rounded-5"
            src={Flag}
            alt="Flag"
            style={{ width: '20px', height: '20px', objectFit: 'cover' }}
          />
        </div>

        {/* Help Icon */}
        <HelpOutlineIcon className="text-white" style={{ cursor: 'pointer' }} />

        {/* Buttons */}
        <button
          style={{ cursor: 'pointer' }}
          className="btn border-0 text-white fs-6 fw-semibold"
        >
          List Your Property
        </button>
        <button
          style={{ cursor: 'pointer', backgroundColor: 'white', color: '#003B95' }}
          className="border-0 rounded-1 fw-semibold px-3"
        >
          Register
        </button>
        <button
          style={{ cursor: 'pointer', backgroundColor: 'white', color: '#003B95' }}
          className="border-0 rounded-1 fw-semibold px-3"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default NavBar;
