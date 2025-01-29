import React from "react";
import { Box, Button, Typography } from "@mui/material";
import SSSS from "../images/BgImage.png";

const VillaSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${SSSS})`, // Set the background image here
        backgroundSize: "cover", // Make the image cover the entire box
        backgroundPosition: "center", // Center the image
        maxWidth: { xs: "90%", sm: "80%", lg: "60%" }, // Responsive width
        margin: "auto", // Center the box horizontally
        padding: "3rem", // Add some padding
        borderRadius: "8px", // Optional: Add rounded corners
        height: { xs: "250px", sm: "300px" }, // Responsive height
        display: "flex",
        alignItems: "flex-start", // Start items vertically
        justifyContent: "flex-start", // Start items horizontally
        position: "relative",
      }}
      className="container-lg gap-2 align-items-center py-2 mt-lg-5"
    >
      <Box
        sx={{
          position: "absolute",
          top: { xs: "60%", sm: "50%" }, // Adjust vertical position for smaller screens
          left: { xs: "10%", sm: "20%", lg: "25%" }, // Adjust horizontal position
          transform: "translate(-10%, -50%)", // Ensure proper alignment
          textAlign: "left", // Align text to the left
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "20px", sm: "25px", lg: "30px" }, // Responsive font size
            color: "white",
            marginBottom: "1rem",
            fontWeight: "bold",
          }}
        >
          Find Homes <br /> For Your New Trips
        </Typography>
        <Button
          variant="contained"
          sx={{
            color: "#0057B8",
            fontWeight: "bold",
            backgroundColor: "white",
            padding: { xs: "0.3rem 1rem", sm: "0.5rem 2rem" }, // Responsive button padding
          }}
        >
          Discover Homes
        </Button>
      </Box>
    </Box>
  );
};

export default VillaSection;
