import {
  Box,
  Container,
  Typography
} from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useFormik } from "formik";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import backbtn from "../../assets/images/backBtn.png";
import logemailactive from "../../assets/images/logemailactive.png";
import logemaildeactive from "../../assets/images/logemaildeactive.png";
import logphoneactive from "../../assets/images/logphoneactive.png";
import logphonedeactive from "../../assets/images/logphonedeactive.png";
import { signupSchemaValidataon } from "../../services/validation";
import RegistrationByEmail from "./RegistrationByEmail";
import RegistrationByMobile from "./RegistrationByMobile";

function Login() {
  const [value, setValue] = useState("one");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const initialValue = {
    email: "",
    password: "",
    mobile: "",
  };

  const fk = useFormik({
    initialValues: initialValue,
    validationSchema: signupSchemaValidataon,
    onSubmit: () => {
      console.log(fk.values);
      // loginSubmit(fk.values);
    },
  });

  return (
    <Container>
      <Box
        sx={{
          padding: 1,
          background:
            "linear-gradient(90deg, rgb(255, 153, 1) 0%, rgb(230, 115, 1) 100%)",
          padding: "16px 16px 50px 16px",
          "&>p": { color: "white" },
        }}
      >
        <NavLink to="/">
          <Box component="img" src={backbtn} width={25}></Box>
        </NavLink>
        <Typography
          variant="body1"
          color="initial"
          sx={{ fontWeight: "600", mt: 2, mb: 1, fontSize: "14px" }}
        >
          Register
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{ fontWeight: "400", fontSize: "12px" }}
        >
          Please register by phone number or emails
        </Typography>
      </Box>
      <Box sx={{ width: "92%", margin: "auto" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab
            sx={{ width: "50%" }}
            value="one"
            label={
              <Box>
                {value === "one" ? (
                  <Box
                    component="img"
                    src={logphoneactive}
                    sx={{
                      margin: "auto",
                      width: "25px",
                      mb: "10px !important",
                    }}
                  ></Box>
                ) : (
                  <Box
                    component="img"
                    src={logphonedeactive}
                    sx={{
                      margin: "auto",
                      width: "25px",
                      mb: "10px !important",
                    }}
                  ></Box>
                )}
                Register your phone
              </Box>
            }
          />
          <Tab
            sx={{ width: "50%" }}
            value="two"
            label={
              <Box>
                {value === "two" ? (
                  <Box
                    component="img"
                    src={logemaildeactive}
                    sx={{
                      margin: "auto",
                      width: "25px",
                      mb: "10px !important",
                    }}
                  ></Box>
                ) : (
                  <Box
                    component="img"
                    src={logemailactive}
                    sx={{
                      margin: "auto",
                      width: "25px",
                      mb: "10px !important",
                    }}
                  ></Box>
                )}
                email registration
              </Box>
            }
          />
        </Tabs>
      </Box>
      <Box sx={{ width: "92%", margin: "auto", mt: 3 }}>
        {value === "one" && <RegistrationByMobile />}
        {value === "two" && <RegistrationByEmail />}
      </Box>
    </Container>
  );
}

export default Login;
