import {
  Box,
  Container,
  FormControl,
  Stack,
  Typography,
  TextField,
  FilledInput,
  InputAdornment,
  IconButton,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Select,
  Button,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import backbtn from "../../assets/images/backBtn.png";
import logphonedeactive from "../../assets/images/logphonedeactive.png";
import logphoneactive from "../../assets/images/logphoneactive.png";
import logemailactive from "../../assets/images/logemailactive.png";
import logemaildeactive from "../../assets/images/logemaildeactive.png";
import custom from "../../assets/images/custom.png";
import phoneaa from "../../assets/images/phoneaa.png";
import password from "../../assets/images/password.png";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { BorderRight, Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { endpoint } from "../../services/urls";
import { useFormik } from "formik";

function Login() {
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [country, setCountry] = React.useState("");

  const handleChangesetCountry = (event) => {
    setCountry(event.target.value);
  };

  const initialValue = {
    email: "",
    password: "",
    mobile: "",
  };

  const fk = useFormik({
    initialValues: initialValue,
    onSubmit: () => {
      console.log(fk.values);
    },
  });

  async function loginSubmit(reqBody) {
    try {
      const res = await axios.post(endpoint.newlogin, reqBody);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <Container>
      <Box
        sx={{
          padding: 1,
          background:
            "linear-gradient(90deg, rgb(255, 153, 1) 0%, rgb(230, 115, 1) 100%)",
          px: 2,
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
          Log in
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{ fontWeight: "400", fontSize: "12px" }}
        >
          Please log in with your phone number or email
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{ fontWeight: "400", fontSize: "12px", mb: 3 }}
        >
          If you forget your password, please contact customer service
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
                Log in with phone
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
                Log in with email
              </Box>
            }
          />
        </Tabs>
      </Box>
      <Box sx={{ width: "92%", margin: "auto", mt: 3 }}>
        {value === "one" && (
          <Box component="form">
            <Stack direction="row" alignItems="center">
              <Box
                component="img"
                src={phoneaa}
                sx={{ width: "25px", mr: 1 }}
              ></Box>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: "15px", fontWeight: "500", color: "gray" }}
              >
                Phone number
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box sx={{ width: "30%" }}>
                <FormControl fullWidth sx={{ ...style.selectfield }}>
                  <Select
                    value={country}
                    onChange={handleChangesetCountry}
                    displayEmpty
                  >
                    <MenuItem value="">
                      <em>+91 India</em>
                    </MenuItem>
                    <MenuItem value={+971}>+971 UAE </MenuItem>
                    <MenuItem value={+977}>+977 Nepal</MenuItem>
                    <MenuItem value={+92}>+92 Pakistan</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ width: "65%" }}>
                <FormControl fullWidth sx={{ ...style.inputfield }}>
                  <TextField
                    id="mobile"
                    name="mobile"
                    onChange={fk.handleChange}
                    label=""
                    placeholder=" Enter number"
                    fullWidth
                    type="number"
                  />
                </FormControl>
              </Box>
            </Stack>

            <Box mt={2}>
              <Stack direction="row" alignItems="center">
                <Box
                  component="img"
                  src={password}
                  sx={{ width: "25px", mr: 1 }}
                ></Box>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ fontSize: "15px", fontWeight: "500", color: "gray" }}
                >
                  Password
                </Typography>
              </Stack>
              <FormControl fullWidth sx={{ ...style.passwordfield }}>
                <FilledInput
                  placeholder="Enter password"
                  id="filled-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
          </Box>
        )}
        {value === "two" && (
          <Box component="form">
            <Box>
              <Stack direction="row" alignItems="center">
                <Box
                  component="img"
                  src={logemaildeactive}
                  sx={{ width: "25px", mr: 1 }}
                ></Box>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ fontSize: "15px", fontWeight: "500", color: "gray" }}
                >
                  Mail
                </Typography>
              </Stack>
              <FormControl fullWidth sx={{ ...style.inputfield }}>
                <TextField
                  id=""
                  label=""
                  placeholder="please input your email"
                  fullWidth
                  type="email"
                />
              </FormControl>
            </Box>
            <Box mt={2}>
              <Stack direction="row" alignItems="center">
                <Box
                  component="img"
                  src={password}
                  sx={{ width: "25px", mr: 1 }}
                ></Box>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ fontSize: "15px", fontWeight: "500", color: "gray" }}
                >
                  Password
                </Typography>
              </Stack>
              <FormControl fullWidth sx={{ ...style.passwordfield }}>
                <FilledInput
                  placeholder="please input your password"
                  id="filled-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
          </Box>
        )}
        <Box mt={3}>
          <FormGroup mt={3}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember password"
            />
          </FormGroup>
        </Box>
        <Box sx={{ width: "80%", margin: "auto", mt: 3 }}>
          <Button
            sx={{
              boxShadow: " 0px 3px #b6bad0",
              padding: "10px",
              width: "100%",
              background: "#CACCDB",
              color: "white",
              borderRadius: "20px",
              mb: 2,
              fontWeight: "700",
              "&:hover": { background: "#CACCDB" },
            }}
            disableElevation
          >
            Log in
          </Button>
          <NavLink to="/register">
            <Button
              sx={{
                width: "100%",
                borderRadius: "20px",
                fontSize: "17px",
                fontWeight: "700",
              }}
              variant="outlined"
            >
              Register
            </Button>
          </NavLink>
        </Box>
        <Box sx={{ mt: 3 }}></Box>
        <Box
          sx={{ width: "80%", margin: "auto" }}
          component={NavLink}
          to="/CustomerService"
        >
          <Box
            component="img"
            src={custom}
            sx={{ width: "50px", margin: "auto" }}
          ></Box>
          <Typography
            variant="body1"
            color="initial"
            sx={{ textAlign: "center" }}
          >
            Customer Service
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;

const style = {
  inputfield: {
    mt: 2,
    "&>div>div>input": {
      background: "white",
      padding: 3,
      borderRadius: "10px",
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
    },
    "&>div>div>fieldset ": { border: "none !important" },
    "&>div>div>input:focus": { outline: "1px solid #F18401" },
  },
  passwordfield: {
    "&>div>input": { padding: 3 },
    "&>div": {
      mt: 2,
      background: "white",
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
      borderRadius: "10px",
    },
    "&>div::before": { border: "none !important" },
    "&>div::after:focus": {
      border: "none !important",
      border: "1px solid #F18401  !important",
    },
  },
  selectfield: {
    "&>div>div": {
      background: "white",
      borderRadius: "10px",
      padding: "11px 3px",
      borderRadius: "10px",
    },
    "&>div>fieldset": {
      border: "1px solid white",
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
      borderRadius: "10px",
    },
    "&>div": { mt: 2 },
  },
};
