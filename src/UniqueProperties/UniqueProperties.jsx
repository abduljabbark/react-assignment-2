import React from "react";
import { Card, CardContent, CardMedia, Typography, Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from "@mui/icons-material/Favorite";
import Karachi from "../images/secondsection.jpeg"

// Dummy data for cities
const cities = [
    {
        name: "LemanLocke",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        deletedprice :123456,
        image: Karachi, // Replace with the actual image URL
    },
    {
        name: "Karachi",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        image: Karachi, // Replace with the actual image URL
    },
    {
        name: "Karachi",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        image: Karachi, // Replace with the actual image URL
    },
    {
        name: "Karachi",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        image: Karachi, // Replace with the actual image URL
    },
    {
        name: "Karachi",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        image: Karachi, // Replace with the actual image URL
    },
    {
        name: "Karachi",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        image: Karachi, // Replace with the actual image URL
    },
    {
        name: "Karachi",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        image: Karachi, // Replace with the actual image URL
    },
    {
        name: "Karachi",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        image: Karachi, // Replace with the actual image URL
    },
    {
        name: "Karachi",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        image: Karachi, // Replace with the actual image URL
    },
    {
        name: "Karachi",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        image: Karachi, // Replace with the actual image URL
    },
    {
        name: "Karachi",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        image: Karachi, // Replace with the actual image URL
    },
    // More cities here...
];

const UniqueProperties  = () => {
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
        <Box className="container-lg align-items-center py-2" sx={{ maxWidth: "60%", overflow: "hidden", mt: 4 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
            Homes guests love
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
                            <Box sx={{ position: "relative" }}>
                                <CardMedia
                                    sx={{ padding: "0px 10px", borderRadius: "15px 15px 0px 0px" }}
                                    component="img"
                                    height="250"
                                    image={city.image}
                                    alt={city.name}
                                />
                             <IconButton
    sx={{
        position: "absolute",
        top: "10px",
        right: "20px",
        zIndex: 10,
        backgroundColor: "rgba(255, 255, 255, 0.7)", // Initial background
        "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.9)", // Slightly more opaque background on hover
        },
    }}
>
    <FavoriteBorderIcon sx={{ color: "black" }} /> {/* Red color for the favorite icon */}
</IconButton>

                            </Box>
                            <CardContent>
                            <button
                                        style={{
                                            fontSize: "9px",
                                            backgroundColor: "#003B95",
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: "5px",
                                            padding: "3px 5px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        Genius
                                    </button>
                                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                                    {city.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ fontSize: "13px" }}>
                                    {city.place}
                                </Typography>
                                <div className="d-flex gap-2 align-items-center">
                                    <button
                                        style={{
                                            fontSize: "13px",
                                            backgroundColor: "#003B95",
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: "5px",
                                            padding: "3px 5px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        {city.value}
                                    </button>
                                    <Typography sx={{ fontSize: "13px", color: "gray" }}>{city.work}</Typography>
                                    <Typography sx={{ fontSize: "13px", color: "gray" }}>.</Typography>
                                    <Typography sx={{ fontSize: "13px", color: "gray" }}>{city.review} review</Typography>
                                </div>
                                <button className="mt-lg-1"
                                        style={{
                                            fontSize: "13px",
                                            backgroundColor: "#008234",
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: "5px",
                                            padding: "3px 5px",
                                            cursor: "pointer",
                                        }}
                                    >
                                       Early 2025 Deals
                                    </button>
                                <div className="d-flex align-items-center gap-1  justify-content-end mt-lg-3">
                                <Typography sx={{ fontSize: "11px", color: "gray" }}>2 nights</Typography>
                                <Typography className='text-decoration-line-through' sx={{ fontSize: "15px", fontWeight: "bold", color: "red" }}>
                                        PRK {city.deletedprice}
                                    </Typography>


                             
                                    <Typography sx={{ fontSize: "15px", fontWeight: "bold", color: "black" }}>
                                        PRK {city.price}
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </Slider>
            </Box>
        </Box>
    );
};

export default UniqueProperties;
