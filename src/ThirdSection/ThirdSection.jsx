import React from "react";
import { Card, CardContent, CardMedia, Typography, Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import Karachi from "../images/secondsection.jpeg"

// Dummy data for cities
const cities = [
  {
    name: "Karachi",
    dates: "Jan 31 - Feb 1, 2 adults",
    properties: 161,
    image: Karachi, // Replace with the actual image URL
  },
  {
    name: "Karachi",
    dates: "Jan 31 - Feb 1, 2 adults",
    properties: 18,
    image:Karachi, // Replace with the actual image URL
  },
  {
    name: "Karachi",
    dates: "Jan 31 - Feb 1, 2 adults",
    properties: 142,
    image: Karachi, // Replace with the actual image URL
  },
  {
    name: "Karachi",
    dates: "Jan 31 - Feb 1, 2 adults",
    properties: 13,
    image: Karachi, // Replace with the actual image URL
  },
  {
    name: "Karachi",
    dates: "Jan 31 - Feb 1, 2 adults",
    properties: 25,
    image: Karachi, // Replace with the actual image URL
  },
  {
    name: "Karachi",
    dates: "Jan 31 - Feb 1, 2 adults",
    properties: 39,
    image: Karachi, // Replace with the actual image URL
  },
  {
    name: "Karachi",
    dates: "Jan 31 - Feb 1, 2 adults",
    properties: 39,
    image: Karachi, // Replace with the actual image URL
  },
  {
    name: "Karachi",
    dates: "Jan 31 - Feb 1, 2 adults",
    properties: 39,
    image: Karachi, // Replace with the actual image URL
  },
  {
    name: "Karachi",
    dates: "Jan 31 - Feb 1, 2 adults",
    properties: 39,
    image: Karachi, // Replace with the actual image URL
  },
  {
    name: "Karachi",
    dates: "Jan 31 - Feb 1, 2 adults",
    properties: 39,
    image: Karachi, // Replace with the actual image URL
  },
];


const ThirdSection = () => {
  const sliderRef = React.useRef();

  // Carousel settings
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 960, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <Box className="container-lg  align-items-center py-2" sx={{ maxWidth: "60%", overflow: "hidden",  mt: 4 }}>
    <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
      Explore Pakistan
    </Typography>
    <Box sx={{ position: "relative" }}>
      <IconButton
        onClick={() => sliderRef.current.slickPrev()}
        sx={{
          position: "absolute",
          top: "50%",
          left: "-20px",
          transform: "translateY(-50%)",
          zIndex: 10,
          background: "#fff",
         
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton
        onClick={() => sliderRef.current.slickNext()}
        sx={{
          position: "absolute",
          top: "50%",
          borderRadius: '100px',
          right: "-20px",
          transform: "translateY(-50%)",
          zIndex: 10,
          background: "#fff",
        

        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
      <Slider ref={sliderRef} {...settings}>
        {cities.map((city, index) => (
         <Card key={index} sx={{ borderRadius: 0, boxShadow: "none" }}>
         <CardMedia
           sx={{ padding: "0px 10px", borderRadius: "20px" }} // Remove border radius here as well
           component="img"
           height="250"
           image={city.image}
           alt={city.name}
         />
         <CardContent>
           <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
             {city.name}
           </Typography>
           <Typography variant="body2" color="text.secondary">
             {city.properties} properties
           </Typography>
           <Typography variant="body2" color="text.secondary">
             {city.dates} dates
           </Typography>
         </CardContent>
       </Card>
       
        ))}
      </Slider>
    </Box>
  </Box>
  );
}

export default ThirdSection;
