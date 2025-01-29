import React from 'react';
import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, Button, Grid, Link, List, ListItem, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';






const FirstFooter = () => {
  return (
    <>

      <Box  style={{ maxWidth: "60%" }}
      className="container-lg gap-2 align-items-center py-2 mt-lg-5">
        <h3 className='fw-bold'>Popular with travelers from Pakistan</h3>


        <Box
       
          className=" d-flex gap-2  py-2"
        >
          {/* Stays */}
          <Button
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              color: "#006CE4",
              border: "1px solid #006CE4",
              borderRadius: "20px",
              padding: "10px 20px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              "&:hover": {

                backgroundColor: "rgba(51, 121, 161, 0.1)",
              },
            }}
          >

            <Typography className="text-capitalize" variant="body2" sx={{ fontSize: "15px", marginLeft: "0px" }}>
              Domestic cities
            </Typography>
          </Button>

          {/* Flights */}
          <Button
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "10px 20px",
              color: "black",
              borderRadius: "20px",
              "&:hover": {

                backgroundColor: "rgba(51, 121, 161, 0.1)",
              },
            }}
          >

            <Typography className="text-capitalize" variant="body2" sx={{ fontSize: "15px", marginLeft: "0px" }}>
             International cities
            </Typography>
          </Button>

          {/* Car Rentals */}
          <Button
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "10px 20px",
              color: "black",
              borderRadius: "20px",
              "&:hover": {

                backgroundColor: "rgba(51, 121, 161, 0.1)",
              },
            }}
          >

            <Typography className="text-capitalize" variant="body2" sx={{ fontSize: "15px", marginLeft: "10px" }}>
             Regions
            </Typography>
          </Button>

          {/* Attractions */}
          <Button
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "10px 20px",
              color: "black",
              borderRadius: "20px",
              "&:hover": {
                backgroundColor: "rgba(51, 121, 161, 0.1)",
              },
            }}
          >

            <Typography className="text-capitalize" variant="body2" sx={{ fontSize: "15px", marginLeft: "0px" }}>
         Countries
            </Typography>
          </Button>

          {/* Airport Taxis */}
          <Button
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "10px 20px",
              color: "black",
              borderRadius: "20px",
              "&:hover": {

                backgroundColor: "rgba(51, 121, 161, 0.1)",
              },
            }}
          >

            <Typography className="text-capitalize" variant="body2" sx={{ fontSize: "15px", marginLeft: "0px" }}>
            Place to stay
            </Typography>
          </Button>
        </Box>
        <hr />

        <Box className="row" sx={{ gap: 4 }}>
  <Box sx={{ fontSize: "12px" }} className="col-md-2">
    
    <List sx={{ listStyleType: "none", padding: 0 }}>
 
            
          
             
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  foodpanda Vouchers & Coupons
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  pandamart Grocery Delivery
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Become an Affiliate
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Gujranwala
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Peshawar
                </Link>
              </ListItem>
    </List>
  </Box>

  <Box sx={{ fontSize: "12px" }} className="col-md-2">
  
    <List sx={{ listStyleType: "none", padding: 0 }}>

           
           
             
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  foodpanda Vouchers & Coupons
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  pandamart Grocery Delivery
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Become an Affiliate
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Gujranwala
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Peshawar
                </Link>
              </ListItem>
    </List>
  </Box>

  <Box sx={{ fontSize: "12px" }} className="col-md-2">
   
    <List sx={{ listStyleType: "none", padding: 0 }}>
 
            
           
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  foodpanda Vouchers & Coupons
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  pandamart Grocery Delivery
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Become an Affiliate
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Gujranwala
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Peshawar
                </Link>
              </ListItem>
    </List>
  </Box>

  <Box sx={{ fontSize: "12px" }} className="col-md-2">

    <List sx={{ listStyleType: "none", padding: 0 }}>

          
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  foodpanda Vouchers & Coupons
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  pandamart Grocery Delivery
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Become an Affiliate
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Gujranwala
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Peshawar
                </Link>
              </ListItem>
    </List>
  </Box>

  <Box sx={{ fontSize: "12px" }} className="col-md-2">

    <List sx={{ listStyleType: "none", padding: 0 }}>

           
          
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  foodpanda Vouchers & Coupons
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  pandamart Grocery Delivery
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Become an Affiliate
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Gujranwala
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Peshawar
                </Link>
              </ListItem>
    </List>
  </Box>

  <Box className="col-md-2" />
</Box> 
       <Box sx={{ fontSize: "12px" }}className="d-flex flex-wrap gap-1  pt-3">
          <Typography sx={{ fontSize: "12px" }} className='custum text-decoration-none text-black'> Laos </Typography >  .    <Typography sx={{ fontSize: "12px" }} className='custum text-decoration-none text-black'> Cambodia </Typography >     . <Typography sx={{ fontSize: "12px" }}className='custum text-decoration-none text-black'> Myanmar </Typography>      . <Typography sx={{ fontSize: "12px" }}className='custum text-decoration-none text-black'> Thailand </Typography >     . <Typography sx={{ fontSize: "12px" }}className='custum text-decoration-none text-black'> Kong </Typography>      .  <Typography sx={{ fontSize: "12px" }}className='custum text-decoration-none text-black'> Taiwan </Typography>    .  <Typography sx={{ fontSize: "12px" }}className='custum text-decoration-none text-black'> Malaysia </Typography>    . <Typography sx={{ fontSize: "12px" }}className='custum text-decoration-none text-black'> Philippines </Typography>     .  <Typography sx={{ fontSize: "12px" }}className='custum text-decoration-none text-black'> Singapore </Typography>.<Typography sx={{ fontSize: "12px" }}className='custum text-decoration-none text-black'> Bangladesh </Typography>
          <Typography sx={{ fontSize: "12px" }} className='custum text-decoration-none text-black'> Laos </Typography >  .    <Typography sx={{ fontSize: "12px" }} className='custum text-decoration-none text-black'> Cambodia </Typography >     . <Typography sx={{ fontSize: "12px" }}className='custum text-decoration-none text-black'> Myanmar </Typography>      . <Typography sx={{ fontSize: "12px" }}className='custum text-decoration-none text-black'> Thailand </Typography >     . <Typography sx={{ fontSize: "12px" }}className='custum text-decoration-none text-black'> Kong </Typography>      .  <Typography sx={{ fontSize: "12px" }}className='custum text-decoration-none text-black'> Taiwan </Typography>    .  <Typography sx={{ fontSize: "12px" }}className='custum text-decoration-none text-black'> Malaysia </Typography>    . <Typography sx={{ fontSize: "12px" }}className='custum text-decoration-none text-black'> Philippines </Typography>     .  <Typography sx={{ fontSize: "12px" }}className='custum text-decoration-none text-black'> Singapore </Typography>
        </Box>
       <Box sx={{ fontSize: "12px" }}className="d-flex flex-wrap gap-1  pb-5">
          <Typography sx={{ fontSize: "12px" }} className='custum text-decoration-none text-black'> Laos </Typography >  .    <Typography sx={{ fontSize: "12px" }} className='custum text-decoration-none text-black'> Cambodia </Typography >     . <Typography sx={{ fontSize: "12px" }}className='custum text-decoration-none text-black'> Myanmar </Typography>      . <Typography sx={{ fontSize: "12px" }}className='custum text-decoration-none text-black'> Thailand </Typography >     . <Typography sx={{ fontSize: "12px" }}className='custum text-decoration-none text-black'> Kong </Typography>      .  <Typography sx={{ fontSize: "12px" }}className='custum text-decoration-none text-black'> Taiwan </Typography>    .  <Typography sx={{ fontSize: "12px" }}className='custum text-decoration-none text-black'> Malaysia </Typography>    . <Typography sx={{ fontSize: "12px" }}className='custum text-decoration-none text-black'> Philippines </Typography>     .  <Typography sx={{ fontSize: "12px" }}className='custum text-decoration-none text-black'> Singapore </Typography>.<Typography sx={{ fontSize: "12px" }}className='custum text-decoration-none text-black'> Bangladesh </Typography>
<Typography sx={{ fontSize: "12px" }}className='custum text-decoration-none text-black'> Malaysia </Typography>    . <Typography sx={{ fontSize: "12px" }}className='custum text-decoration-none text-black'> Philippines </Typography>     .  <Typography sx={{ fontSize: "12px" }}className='custum text-decoration-none text-black'> Singapore </Typography>
        </Box>
      
      <footer>
      <Box className="row" sx={{ gap: 4 }}>
  <Box sx={{ fontSize: "12px" }} className="col-md-2">
    <Typography className='fw-bold'>Support</Typography>
    <List sx={{ listStyleType: "none", padding: 0 }}>
 
            
          
             
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  foodpanda Vouchers & Coupons
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  pandamart Grocery Delivery
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Become an Affiliate
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Gujranwala
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Peshawar
                </Link>
              </ListItem>
    </List>
  </Box>

  <Box sx={{ fontSize: "12px" }} className="col-md-2">
    <Typography className='fw-bold'>Terms and settings</Typography>
    <List sx={{ listStyleType: "none", padding: 0 }}>

           
           
             
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  foodpanda Vouchers & Coupons
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  pandamart Grocery Delivery
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Become an Affiliate
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Gujranwala
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Peshawar
                </Link>
              </ListItem>
    </List>
  </Box>

  <Box sx={{ fontSize: "12px" }} className="col-md-2">
    <Typography className='fw-bold'>Terms and settings</Typography>
    <List sx={{ listStyleType: "none", padding: 0 }}>
 
            
           
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  foodpanda Vouchers & Coupons
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  pandamart Grocery Delivery
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Become an Affiliate
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Gujranwala
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Peshawar
                </Link>
              </ListItem>
    </List>
  </Box>

  <Box sx={{ fontSize: "12px" }} className="col-md-2">
    <Typography className='fw-bold'>Partners</Typography>
    <List sx={{ listStyleType: "none", padding: 0 }}>

          
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  foodpanda Vouchers & Coupons
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  pandamart Grocery Delivery
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Become an Affiliate
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Gujranwala
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Peshawar
                </Link>
              </ListItem>
    </List>
  </Box>

  <Box sx={{ fontSize: "12px" }} className="col-md-2">
    <Typography className='fw-bold'>About</Typography>
    <List sx={{ listStyleType: "none", padding: 0 }}>

           
          
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  foodpanda Vouchers & Coupons
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  pandamart Grocery Delivery
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Become an Affiliate
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Gujranwala
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Peshawar
                </Link>
              </ListItem>
    </List>
  </Box>

  <Box className="col-md-2" />
</Box>

        <hr />
      </footer>

      </Box>


    </>
  );
};

export default FirstFooter;