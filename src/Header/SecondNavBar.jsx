import React from "react";
import { Box, Button, Typography } from "@mui/material";
import BedIcon from "@mui/icons-material/Bed";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AttractionsIcon from "@mui/icons-material/Attractions";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";

const SecondNavBar = () => {
  return (
    <Box
      style={{ maxWidth: "60%" }}
      className="container-lg d-flex gap-2 align-items-center py-2"
    >
      {/* Stays */}
      <Button
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          color: "white",
          border: "1px solid white",
          borderRadius: "20px",
          padding: "5px 10px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          "&:hover": {

            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        }}
      >
        <BedIcon />
        <Typography className="text-capitalize" variant="body2" sx={{ fontSize: "12px", marginLeft: "10px" }}>
          Stays
        </Typography>
      </Button>

      {/* Flights */}
      <Button
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          color: "white",
          borderRadius: "20px",
          "&:hover": {

            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        }}
      >
        <FlightTakeoffIcon />
        <Typography  className="text-capitalize" variant="body2" sx={{ fontSize: "12px", marginLeft: "10px" }}>
          Flights
        </Typography>
      </Button>

      {/* Car Rentals */}
      <Button
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          color: "white",
          borderRadius: "20px",
          "&:hover": {

            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        }}
      >
        <DirectionsCarIcon />
        <Typography className="text-capitalize" variant="body2" sx={{ fontSize: "12px", marginLeft: "10px" }}>
          Car rentals
        </Typography>
      </Button>

      {/* Attractions */}
      <Button
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          color: "white",
          borderRadius: "20px",
          "&:hover": {
  
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        }}
      >
        <AttractionsIcon />
        <Typography className="text-capitalize" variant="body2" sx={{ fontSize: "12px", marginLeft: "10px" }}>
          Attractions
        </Typography>
      </Button>

      {/* Airport Taxis */}
      <Button
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          color: "white",
          borderRadius: "20px",
          "&:hover": {

            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        }}
      >
        <LocalTaxiIcon />
        <Typography className="text-capitalize" variant="body2" sx={{ fontSize: "12px", marginLeft: "10px" }}>
          Airport taxis
        </Typography>
      </Button>
    </Box>
  );
};

export default SecondNavBar;
