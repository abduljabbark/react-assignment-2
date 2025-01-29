import React from "react";
import Rawalpindi from "../images/Rawalpindi.jpg";
import Islamabad from "../images/Islamabad.jpg";
import Lahore from "../images/Lahore.jpg";
import Karachi from "../images/Karachi.jpg";
import Macca from "../images/Macca.jpg";
import { Grid, Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

const TrendingDestinations = () => {
  return (
    <Box style={{ maxWidth: "60%" }} className="container-lg gap-2 align-items-center py-2 mt-lg-5" sx={{ p: 4 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Trending destinations
      </Typography>

      <Grid container spacing={2}>
        {/* First Row - Big Cards */}
        <Grid item xs={12} sm={6} md={6}>
          <Card sx={{ position: "relative", borderRadius: "12px", overflow: "hidden" }}>
            <CardMedia component="img" height="250" image={Rawalpindi} alt="Rawalpindi" />
            <CardContent
  sx={{
    position: "absolute",
    top: 10,
    left: 10,
    color: "white",
    px: 1,
  }}
>
  <Typography fontWeight="bold" fontSize="25px">
    Rawalpindi
  </Typography>
</CardContent>

          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Card sx={{ position: "relative", borderRadius: "12px", overflow: "hidden" }}>
            <CardMedia component="img" height="250" image={Islamabad} alt="Islamabad" />
            <CardContent
  sx={{
    position: "absolute",
    top: 10,
    left: 10,
    color: "white",
    px: 1,
  }}
>
  <Typography fontWeight="bold" fontSize="25px">
    Islamabad
  </Typography>
</CardContent>
          </Card>
        </Grid>

        {/* Second Row - 3 Smaller Cards */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ position: "relative", borderRadius: "12px", overflow: "hidden" }}>
            <CardMedia component="img" height="250" image={Lahore} alt="Lahore" />
            <CardContent
  sx={{
    position: "absolute",
    top: 10,
    left: 10,
    color: "white",
    px: 1,
  }}
>
  <Typography fontWeight="bold" fontSize="25px">
    Lahore
  </Typography>
</CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ position: "relative", borderRadius: "12px", overflow: "hidden" }}>
            <CardMedia component="img" height="250" image={Karachi} alt="Karachi" />
            <CardContent
  sx={{
    position: "absolute",
    top: 10,
    left: 10,
    color: "white",
    px: 1,
  }}
>
  <Typography fontWeight="bold" fontSize="25px">
    Karachi
  </Typography>
</CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ position: "relative", borderRadius: "12px", overflow: "hidden" }}>
            <CardMedia component="img" height="250" image={Macca} alt="Macca" />
            <CardContent
  sx={{
    position: "absolute",
    top: 10,
    left: 10,
    color: "white",
    px: 1,
  }}
>
  <Typography fontWeight="bold" fontSize="25px">
    Macca
  </Typography>
</CardContent>
          </Card>
        </Grid>

      </Grid>
    </Box>
  );
};

export default TrendingDestinations;
