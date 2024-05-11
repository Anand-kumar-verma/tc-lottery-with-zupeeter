import React, { useState } from "react";
import splash_screen from "./assets/images/splash_screen.PNG";
import theme from "./utils/theme";
import { Box, Container } from "@mui/material";


const SplashScreen = () => {
  // const [message, setMessage] = useState('');
  // const timeoutId = setTimeout(() => {
  //   setMessage('Delayed message after 2 seconds!');
  // }, 2000);


  return (
    <Container 
    sx={{
      height:"100vh"
    }}>  
      <Box >
    <img src={splash_screen} className="" />
  </Box></Container>
  
  );
};

export default SplashScreen;

