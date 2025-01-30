import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Typography } from "@mui/material";

const LoginPage = ({ setIsLoggedIn }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));
    if (registeredUser && registeredUser.email === data.email && registeredUser.password === data.password) {
      alert("Login successful!");
      localStorage.setItem("loggedInUser", JSON.stringify(data));
      setIsLoggedIn(true);
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h5" gutterBottom>Sign In</Typography>
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
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Sign In</Button>
      </form>
    </div>
  );
};

export default LoginPage;
