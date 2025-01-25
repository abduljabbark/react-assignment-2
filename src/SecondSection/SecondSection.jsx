import { Box } from '@mui/material'
import React from 'react'
import SecondSectionImg from '../images/secondsection.jpeg'

const SecondSection = () => {
    return (
        <Box
            sx={{
                maxWidth: { xs: "100%", sm: "80%", md: "60%" }, // Responsively adjust max-width
                marginTop: "100px",
                px: { xs: 2, sm: 3 }, // Adjust padding on different screen sizes
                py: { xs: 2, sm: 3 },  // Adjust padding for mobile and larger devices
            }}
            className="container-lg gap-2 align-items-center"
        >
            <div>
                <h4 className='fw-bold'>Offers</h4>
                <p style={{ color: "gray" }}>Promotions, deals, and special offers for you</p>
            </div>
            <Box
                className='border rounded-1 p-3 d-flex align-items-center justify-content-between'
                sx={{
                    flexDirection: { xs: "column", sm: "row" },  // Stack elements on smaller screens
                    alignItems: { xs: "center", sm: "flex-start" }, // Center content on small screens
                    justifyContent: { xs: "center", sm: "space-between" }, // Adjust layout for smaller screens
                }}
            >
                <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
                    <h5 className='fw-bold'>Save on stays worldwide</h5>
                    <p style={{ fontSize: "15px" }}>Start your year with an adventure, saving 15% or more with Early 2025 Deals.</p>
                    <button className='btn btn-primary'>Save 50% or More</button>
                </Box>
                <Box
                    sx={{
                        mt: { xs: 2, sm: 0 },  // Margin top for smaller screens
                        textAlign: "center",
                    }}
                >
                    <img
                        className='rounded-1'
                        src={SecondSectionImg}
                        alt="Offer Image"
                        style={{
                            width: "100%",
                            maxWidth: "150px",  // Adjust the max width of the image
                            height: "auto",
                        }}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default SecondSection
