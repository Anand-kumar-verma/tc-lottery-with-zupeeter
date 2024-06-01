import React, { useEffect, useState } from "react";
import splash_screen from "./assets/images/splash_screen.PNG";
import { useNavigate } from "react-router-dom";
import { Box, Container } from "@mui/material";
const BeforeLogin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  }, []);

  return (
    <Container
      sx={{
        height: "100vh",
      }}
    >
      <Box>
        <img src={splash_screen} className="!h-[100vh]" />
      </Box>
    </Container>
  );
};

export default BeforeLogin;
