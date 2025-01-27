import React from "react";
import { Card, CardContent, CardMedia, Typography, Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import Karachi from "../images/secondsection.jpeg"
// Dummy data for cities
const cities = [
  { name: "Karachi", properties: 161, image: Karachi},
  { name: "Karachi", properties: 18, image: Karachi},
  { name: "Karachi", properties: 142, image: Karachi},
  { name: "Karachi", properties: 13, image: Karachi },
  { name: "Karachi", properties: 25, image: Karachi },
  { name: "Karachi", properties: 39, image: Karachi },
  { name: "Karachi", properties: 39, image: Karachi },
  { name: "Karachi", properties: 39, image: Karachi },
  { name: "Karachi", properties: 39, image: Karachi },
  { name: "Karachi", properties: 39, image: Karachi },
];

const ExplorePakistan = () => {
  const sliderRef = React.useRef();

  // Carousel settings
  const settings = {
    infinite: false,
    slidesToShow: 5,
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
            boxShadow: 2,
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton
          onClick={() => sliderRef.current.slickNext()}
          sx={{
            position: "absolute",
            top: "50%",
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
            <Card key={index} sx={{ mx: 1,borderRadius: 0, boxShadow: "none"  }}>
              <CardMedia
                component="img"
                height="140"
                image={city.image}
                alt={city.name}
                sx={{ borderRadius: "20px", padding:'0px 5px' }}
              />
              <CardContent>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  {city.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {city.properties} properties
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ExplorePakistan;
