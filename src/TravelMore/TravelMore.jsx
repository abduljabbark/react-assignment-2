import { Box } from '@mui/material';
import React from 'react';
import SecondSectionImg from '../images/GeniusGeneric.png';

const TravelMore = () => {
    return (
        <Box
            sx={{
                maxWidth: { xs: "100%", sm: "80%", md: "60%" }, // Responsive max-width
                marginTop: "100px",
                px: { xs: 2, sm: 3 }, // Padding adjustments
                py: { xs: 2, sm: 3 },
            }}
            className="container-lg gap-3 align-items-center"
        >
            <div>
                <h4 style={{ fontSize: "21px" }} className="fw-bold text-center text-sm-start">Travel more, spend less</h4>
            </div>
            <Box
                className="border rounded-1 p-3 d-flex align-items-center"
                sx={{
                    flexDirection: { xs: "column", sm: "row" }, // Stack elements for smaller screens
                    gap: { xs: 2, sm: 3 },
                    alignItems: { xs: "center", sm: "flex-start" },
                    justifyContent: { xs: "center", sm: "space-between" },
                }}
            >
                <Box sx={{ textAlign: { xs: "center", sm: "left" }, flex: 1 }}>
                    <h5 style={{ fontSize: "15px" }} className="fw-bold">Sign in, save money</h5>
                    <p style={{ fontSize: "12px" }}>
                        Save 10% or more at participating properties – just look for the blue Genius label
                    </p>
                    <div className="d-flex gap-2 justify-content-center justify-content-sm-start h-25">
                        <button style={{ fontSize: "15px" }} className="btn btn-primary fw-bold">Sign In</button>
                        <button style={{ fontSize: "15px" }} className="btn fw-bold btn-outline-primary border-0">Register</button>
                    </div>
                </Box>
                <Box
                    sx={{
                        mt: { xs: 2, sm: 0 }, // Add spacing only for smaller screens
                        textAlign: "center",
                        flexShrink: 0,
                    }}
                >
                    <img
                        className="rounded-1"
                        src={SecondSectionImg}
                        alt="Offer Image"
                        style={{
                            width: "100%",
                            maxWidth: "100px", // Slightly larger for better visibility
                            height: "auto",
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default TravelMore;
