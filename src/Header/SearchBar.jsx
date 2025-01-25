import React, { useState } from "react";
import { Box, Button, TextField, Typography, Divider, Switch, Menu, MenuItem } from "@mui/material";
import BedIcon from "@mui/icons-material/Bed";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const SearchBar = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [guestDropdownOpen, setGuestDropdownOpen] = useState(false);
  const [travelingWithPets, setTravelingWithPets] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // Anchor for destination dropdown
  const [selectedDestination, setSelectedDestination] = useState("");
  
  const destinations = ["New York", "Paris", "Tokyo", "London"];
  const country = "USA"; // Example country
  
  // Toggle guest dropdown
  const toggleGuestDropdown = () => setGuestDropdownOpen((prev) => !prev);

  // Increment value function
  const increment = (setState, stateValue) => setState(stateValue + 1);

  // Decrement value function
  const decrement = (setState, stateValue) => {
    if (stateValue > 0) {
      setState(stateValue - 1);
    }
  };

  // Open destination dropdown
  const handleDestinationClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close destination dropdown
  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  // Handle destination selection
  const handleMenuClose = (destination) => {
    setSelectedDestination(destination);
    handleDropdownClose();
  };

  return (
    <Box
      className="container-lg d-flex gap-2 align-items-center py-2"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "2px solid orange",
        borderRadius: "10px",
        padding: "10px",
        backgroundColor: "white",
        maxWidth: "75%",
        margin: "20px auto",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Destination Dropdown Menu */}
      <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
        <BedIcon sx={{ color: "black" }} />
        <Button onClick={handleDestinationClick} sx={{ fontSize: "14px", color: "black",flexGrow: 1 }}>
          {selectedDestination || "Where are you going?"} {selectedDestination && country && `, ${country}`}
        </Button>
        <KeyboardArrowDownIcon sx={{ color: "black" }} />
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleDropdownClose}
          MenuListProps={{ sx: { minWidth: "335px" } }}
        >
          {destinations.map((destination) => (
            <MenuItem
              key={destination}
              onClick={() => handleMenuClose(destination)}
              sx={{
                padding: "10px 15px",
                fontSize: "14px",
                "&:hover": { backgroundColor: "#f5f5f5" },
              }}
            >
              <LocationOnIcon sx={{ color: "black", marginTop: "-10px" }} />
              <div>
                {destination}
                <Typography sx={{ fontSize: "14px", color: "black", flexGrow: 1 }}>
                  {destination}, {country}
                </Typography>
              </div>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      {/* Divider */}
      <Box
        sx={{
          height: "40px",
          width: "2px",
          backgroundColor: "orange",
          marginX: "10px",
        }}
      ></Box>

      {/* Check-in/Check-out Date */}
      <Box sx={{ display: "flex", alignItems: "center", flex: 1, gap: 1 }}>
        <CalendarTodayIcon sx={{ color: "gray" }} />
        <Typography sx={{ fontSize: "14px", color: "gray" }}>
          Check-in Date — Check-out Date
        </Typography>
      </Box>

      {/* Divider */}
      <Box
        sx={{
          height: "40px",
          width: "2px",
          backgroundColor: "orange",
          marginX: "10px",
        }}
      ></Box>

      {/* Guests and Rooms */}
      <Box
        sx={{ display: "flex", alignItems: "center", flex: 1, cursor: "pointer" }}
        onClick={toggleGuestDropdown}
      >
        <PersonIcon sx={{ color: "black" }} />
        <Typography sx={{ fontSize: "14px", color: "black", flexGrow: 1 }}>
          {adults} adults · {children} children · {rooms} room
        </Typography>
        <KeyboardArrowDownIcon sx={{ color: "black" }} />
      </Box>

      {/* Dropdown for Guests and Rooms */}
      {guestDropdownOpen && (
        <Box
          sx={{
            position: "absolute",
            top: "80%",
            left: "58%",
            zIndex: 10,
            backgroundColor: "white",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            padding: "15px",
            width: "350px",
          }}
        >
          {/* Adults */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <Typography>Adults</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Button variant="outlined" onClick={() => decrement(setAdults, adults)}>-</Button>
              <Typography>{adults}</Typography>
              <Button variant="outlined" onClick={() => increment(setAdults, adults)}>+</Button>
            </Box>
          </Box>

          {/* Children */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <Typography>Children</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Button variant="outlined" onClick={() => decrement(setChildren, children)}>-</Button>
              <Typography>{children}</Typography>
              <Button variant="outlined" onClick={() => increment(setChildren, children)}>+</Button>
            </Box>
          </Box>

          {/* Rooms */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <Typography>Rooms</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Button variant="outlined" onClick={() => decrement(setRooms, rooms)}>-</Button>
              <Typography>{rooms}</Typography>
              <Button variant="outlined" onClick={() => increment(setRooms, rooms)}>+</Button>
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Pets Option */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography>Traveling with pets?</Typography>
            <Switch
              checked={travelingWithPets}
              onChange={() => setTravelingWithPets(!travelingWithPets)}
            />
          </Box>

          <Typography variant="body2" sx={{ mt: 1, color: "gray" }}>
            Assistance animals aren’t considered pets.
          </Typography>
          <Typography variant="body2" sx={{ color: "#0066cc", cursor: "pointer", mt: 1 }}>
            Read more about traveling with assistance animals
          </Typography>

          <Button
            variant="contained"
            fullWidth
            onClick={toggleGuestDropdown}
            sx={{
              mt: 2,
              backgroundColor: "#0066cc",
              color: "white",
              "&:hover": { backgroundColor: "#005bb5" },
            }}
          >
            Done
          </Button>
        </Box>
      )}

      {/* Search Button */}
      <Button
        sx={{
          backgroundColor: "#0066cc",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          marginLeft: "10px",
          "&:hover": {
            backgroundColor: "#005bb5",
          },
        }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
