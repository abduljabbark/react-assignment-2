import React from 'react'
import NavBar from './NavBar';
import SecondNavBar from './SecondNavBar';
import Headings from './Headings';
import SearchBar from './SearchBar';

const MainNavBar = () => {
    return (
        <div
          style={{
            width: "100%",
            height: "350px",
            backgroundColor: "#003B95",
            position: "relative", // Added for positioning child elements
          }}
        >
          <NavBar />
          <SecondNavBar />
          <Headings />
          {/* Positioning the SearchBar */}
          <div
            style={{
              position: "absolute", // Positions the SearchBar relative to the parent div
              top: "300px", // Adjust the distance from the bottom
              left: "50%", // Centers horizontally
              transform: "translateX(-50%)", // Centers horizontally
              width: "80%", // Adjusts the width of the SearchBar
            }}
          >
            <SearchBar />
          </div>
    
          {/* Responsive Styling using Media Queries */}
          <style jsx>{`
            @media (max-width: 768px) {
              div {
                height: 450px; /* Increase height for mobile */
              }
    
              .search-bar {
                position: absolute;
                top: 230px; /* Adjust the SearchBar's position on smaller screens */
                width: 90%; /* Adjust width for mobile */
              }
            }
          `}</style>
        </div>
      );
}

export default MainNavBar