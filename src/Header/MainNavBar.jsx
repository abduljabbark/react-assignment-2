import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Typography,
  Modal,
  TextField,
  IconButton,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Flag from "../images/Flag.png";

const MainNavBar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setIsLoggedIn(true);
      setUser(storedUser);
    }
  }, []);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    if (modalType === "register") {
      localStorage.setItem("registeredUser", JSON.stringify(data));
      alert("Registration successful! Please Sign In.");
  
      // Automatically open Sign In modal
      setModalType("login");
      setOpenModal(true);
    } else if (modalType === "login") {
      const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));
      if (registeredUser && registeredUser.email === data.email && registeredUser.password === data.password) {
        alert("Login successful!");
        localStorage.setItem("loggedInUser", JSON.stringify(data));
        setIsLoggedIn(true);
        setUser(data);
        setOpenModal(false);
      } else {
        alert("Invalid email or password!");
      }
    }
  };
  

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <div style={{ width: "100%", height: "350px", backgroundColor: "#003B95", position: "relative" }}>
      {/* Top Navbar */}
      <div className="container-lg d-flex justify-content-between align-items-center py-2" style={{ maxWidth: "60%" }}>
        <h4 className="fw-bold m-0 text-white">Booking.com</h4>
        <div className="d-flex align-items-center gap-4 d-none d-md-flex">
          <div className="d-flex align-items-center gap-4">
            <h6 className="m-0 text-white">PRK</h6>
            <img className="rounded-5" src={Flag} alt="Flag" style={{ width: "20px", height: "20px", objectFit: "cover" }} />
          </div>
          <HelpOutlineIcon className="text-white" style={{ cursor: "pointer" }} />

          {isLoggedIn ? (
            <div className="d-flex align-items-center gap-3">
              <Avatar sx={{ bgcolor: "white", color: "#003B95" }}>{user.email.charAt(0).toUpperCase()}</Avatar>
              <Button onClick={handleLogout} variant="outlined" sx={{ color: "white", borderColor: "white" }}>
                Logout
              </Button>
            </div>
          ) : (
            <>
              <button className="btn border-0 text-white fs-6 fw-semibold">List Your Property</button>
              <button
                className="border-0 rounded-1 fw-semibold px-3"
                style={{ backgroundColor: "white", color: "#003B95" }}
                onClick={() => {
                  setModalType("register");
                  setOpenModal(true);
                }}
              >
                Register
              </button>
              <button
                className="border-0 rounded-1 fw-semibold px-3"
                style={{ backgroundColor: "white", color: "#003B95" }}
                onClick={() => {
                  setModalType("login");
                  setOpenModal(true);
                }}
              >
                Sign In
              </button>
            </>
          )}
        </div>
        <IconButton className="d-md-none" style={{ color: "white" }}>
          <MenuIcon />
        </IconButton>
      </div>

      {/* Modal for Login & Register */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "white",
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" className="fw-bold">
            {modalType === "login" ? "Sign In" : "Register"}
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              {...register("email", { required: "Email is required" })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              type="password"
              {...register("password", { required: "Password is required" })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            {modalType === "register" && (
              <TextField
                fullWidth
                margin="normal"
                label="Confirm Password"
                type="password"
                {...register("confirmPassword", { required: "Confirm Password is required" })}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
              />
            )}
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              {modalType === "login" ? "Sign In" : "Register"}
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default MainNavBar;
