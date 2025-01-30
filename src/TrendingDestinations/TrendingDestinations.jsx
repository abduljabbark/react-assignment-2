import React from "react";
import Rawalpindi from "../images/Rawalpindi.jpg";
import Islamabad from "../images/Islamabad.jpg";
import Lahore from "../images/Lahore.jpg";
import Karachi from "../images/Karachi.jpg";
import Macca from "../images/Macca.jpg";
import { Grid, Card, CardMedia, CardContent, Typography, Box, useMediaQuery } from "@mui/material";

const TrendingDestinations = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: isSmallScreen ? "95%" : "60%",
        margin: "auto",
        py: 4,
      }}
      className="container-lg"
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom textAlign="center">
        Trending Destinations
      </Typography>

      <Grid container spacing={2}>
        {/* First Row - Big Cards */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ position: "relative", borderRadius: "12px", overflow: "hidden" }}>
            <CardMedia component="img" height={isSmallScreen ? "200" : "250"} image={Rawalpindi} alt="Rawalpindi" />
            <CardContent
              sx={{
                position: "absolute",
                top: 10,
                left: 10,
                color: "white",
                px: 1,
   
                borderRadius: "5px",
              }}
            >
              <Typography fontWeight="bold" fontSize={isSmallScreen ? "20px" : "25px"}>
                Rawalpindi
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card sx={{ position: "relative", borderRadius: "12px", overflow: "hidden" }}>
            <CardMedia component="img" height={isSmallScreen ? "200" : "250"} image={Islamabad} alt="Islamabad" />
            <CardContent
              sx={{
                position: "absolute",
                top: 10,
                left: 10,
                color: "white",
                px: 1,
               
                borderRadius: "5px",
              }}
            >
              <Typography fontWeight="bold" fontSize={isSmallScreen ? "20px" : "25px"}>
                Islamabad
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Second Row - 3 Smaller Cards */}
        {[
          { name: "Lahore", image: Lahore },
          { name: "Karachi", image: Karachi },
          { name: "Macca", image: Macca },
        ].map((destination, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ position: "relative", borderRadius: "12px", overflow: "hidden" }}>
              <CardMedia component="img" height={isSmallScreen ? "180" : "250"} image={destination.image} alt={destination.name} />
              <CardContent
                sx={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  color: "white",
                  px: 1,
           
                  borderRadius: "5px",
                }}
              >
                <Typography fontWeight="bold" fontSize={isSmallScreen ? "18px" : "25px"}>
                  {destination.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TrendingDestinations;
