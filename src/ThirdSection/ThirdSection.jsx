import React from "react";
import { Card, CardContent, CardMedia, Typography, Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import Karachi from "../images/secondsection.jpeg";

const cities = [
  { name: "Karachi", dates: "Jan 31 - Feb 1, 2 adults", properties: 161, image: Karachi },
  { name: "Karachi", dates: "Jan 31 - Feb 1, 2 adults", properties: 18, image: Karachi },
  { name: "Karachi", dates: "Jan 31 - Feb 1, 2 adults", properties: 142, image: Karachi },
  { name: "Karachi", dates: "Jan 31 - Feb 1, 2 adults", properties: 13, image: Karachi },
  { name: "Karachi", dates: "Jan 31 - Feb 1, 2 adults", properties: 25, image: Karachi },
  { name: "Karachi", dates: "Jan 31 - Feb 1, 2 adults", properties: 39, image: Karachi }
];

const ThirdSection = () => {
  const sliderRef = React.useRef();

  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 960, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <Box className="container-lg align-items-center py-2" sx={{ width: "100%", maxWidth: { xs: "100%", sm: "100%", md: "60%" }, overflow: "hidden", mt: 4 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>Explore Pakistan</Typography>
      <Box sx={{ position: "relative" }}>
      <IconButton
  onClick={() => sliderRef.current.slickPrev()}
  sx={{
    position: "absolute",
    top: "50%",
    left: "-10px",
    transform: "translateY(-50%)",
    zIndex: 10,
    background: "#fff", // Background constant rahega
    transition: "background 0.3s, box-shadow 0.3s",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Light shadow
    "&:hover": { 
      background: "#f0f0f0", // Slightly darker shade on hover
      boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.2)" // Stronger shadow on hover
    },
    display: { xs: "flex", md: "flex" }
  }}
>
  <ArrowBackIosNewIcon />
</IconButton>
        <IconButton
          onClick={() => sliderRef.current.slickNext()}
          sx={{
            position: "absolute",
            top: "50%",
            right: "-10px",
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "#fff", // Background constant rahega
            transition: "background 0.3s, box-shadow 0.3s",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Light shadow
            "&:hover": { 
              background: "#f0f0f0", // Slightly darker shade on hover
              boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.2)" // Stronger shadow on hover
            },
            display: { xs: "flex", md: "flex" }
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
        <Slider ref={sliderRef} {...settings}>
          {cities.map((city, index) => (
            <Card key={index} sx={{ borderRadius: 0, boxShadow: "none" }}>
              <CardMedia
                sx={{ padding: "0px 10px", borderRadius: "20px" }}
                component="img"
                height="250"
                image={city.image}
                alt={city.name}
              />
              <CardContent>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>{city.name}</Typography>
                <Typography variant="body2" color="text.secondary">{city.properties} properties</Typography>
                <Typography variant="body2" color="text.secondary">{city.dates} dates</Typography>
              </CardContent>
            </Card>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ThirdSection;
