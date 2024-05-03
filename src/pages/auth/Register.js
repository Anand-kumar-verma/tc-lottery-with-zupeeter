import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, Checkbox, Container, FilledInput, FormControl, FormControlLabel, FormGroup, IconButton, InputAdornment, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import backbtn from "../../assets/images/backBtn.png";
import custom from "../../assets/images/custom.png";
import invite from "../../assets/images/invite.png";
import logemailactive from "../../assets/images/logemailactive.png";
import logemaildeactive from "../../assets/images/logemaildeactive.png";
import logphoneactive from "../../assets/images/logphoneactive.png";
import logphonedeactive from "../../assets/images/logphonedeactive.png";
import password from "../../assets/images/password.png";
import phoneaa from "../../assets/images/phoneaa.png";
import theme from "../../utils/theme";


function Login() {
  const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const [country, setCountry] = React.useState('');

  const handleChangesetCountry = (event) => {
    setCountry(event.target.value);
  };

  return (
    <Container>
      <Box sx={{ padding: 1, background: "linear-gradient(90deg, rgb(255, 153, 1) 0%, rgb(230, 115, 1) 100%)", padding: '16px 16px 50px 16px', '&>p': { color: 'white' }, }}>
        <NavLink to="/">
          <Box component="img" src={backbtn} width={25}></Box>
        </NavLink>
        <Typography variant="body1" color="initial" sx={{ fontWeight: '600', mt: 2, mb: 1, fontSize: '14px' }}>Register</Typography>
        <Typography variant="body1" color="initial" sx={{ fontWeight: '400', fontSize: '12px' }}>Please register by phone number or emails</Typography>
      </Box>
      <Box sx={{ width: '92%', margin: 'auto' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab sx={{ width: '50%' }} value="one" label=
            {
              <Box>
                {
                  value === 'one' ?
                    <Box component='img' src={logphoneactive} sx={{ margin: 'auto', width: '25px', mb: '10px !important', }}></Box>
                    :
                    <Box component='img' src={logphonedeactive} sx={{ margin: 'auto', width: '25px', mb: '10px !important', }}></Box>
                }
                Register your phone
              </Box>
            }
          />
          <Tab sx={{ width: '50%' }} value="two" label=
            {
              <Box>
                {
                  value === 'two' ?
                    <Box component='img' src={logemaildeactive} sx={{ margin: 'auto', width: '25px', mb: '10px !important', }}></Box>
                    :
                    <Box component='img' src={logemailactive} sx={{ margin: 'auto', width: '25px', mb: '10px !important', }}></Box>
                }
                email registration
              </Box>
            }
          />
        </Tabs>
      </Box>
      <Box sx={{ width: '92%', margin: 'auto', mt: 3 }}>
        {
          value === 'one' &&
          <Box component='form'>
            <Stack direction='row' alignItems='center'>
              <Box component='img' src={phoneaa} sx={{ width: '25px', mr: 1 }}></Box>
              <Typography variant="body1" color="initial" sx={{ fontSize: '15px', fontWeight: '500', color: 'gray' }}>Phone number</Typography>
            </Stack>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
              <Box sx={{ width: '30%' }}>
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
              <Box sx={{ width: '65%' }}>
                <FormControl fullWidth sx={{ ...style.inputfield }}>
                  <TextField
                    id=""
                    label=""
                    placeholder=" Enter number"
                    fullWidth
                    type="number"
                  />
                </FormControl>
              </Box>
            </Stack>

            <Box mt={2}>
              <Stack direction='row' alignItems='center'>
                <Box component='img' src={password} sx={{ width: '25px', mr: 1 }}></Box>
                <Typography variant="body1" color="initial" sx={{ fontSize: '15px', fontWeight: '500', color: 'gray' }}>Set password</Typography>
              </Stack>
              <FormControl fullWidth sx={{ ...style.passwordfield }}>
                <FilledInput
                  placeholder="Set password"
                  id="filled-adornment-password"
                  type={showPassword ? 'text' : 'password'}
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
            <Box mt={2}>
              <Stack direction='row' alignItems='center'>
                <Box component='img' src={password} sx={{ width: '25px', mr: 1 }}></Box>
                <Typography variant="body1" color="initial" sx={{ fontSize: '15px', fontWeight: '500', color: 'gray' }}>Confirm password</Typography>
              </Stack>
              <FormControl fullWidth sx={{ ...style.passwordfield }}>
                <FilledInput
                  placeholder="Confirm password"
                  id="filled-adornment-password"
                  type={showPassword ? 'text' : 'password'}
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
            <Box mt={2}>
              <Stack direction='row' alignItems='center'>
                <Box component='img' src={invite} sx={{ width: '25px', mr: 1 }}></Box>
                <Typography variant="body1" color="initial" sx={{ fontSize: '15px', fontWeight: '500', color: 'gray' }}>Invite code</Typography>
              </Stack>
              <FormControl fullWidth sx={{ ...style.inputfield }}>
                <TextField
                  id=""
                  label=""
                  placeholder="please input Invite code"
                  fullWidth
                  type="text"
                />
              </FormControl>
            </Box>
          </Box>
        }
        {
          value === 'two' &&
          <Box component='form'>
            <Box mt={2}>
              <Stack direction='row' alignItems='center'>
                <Box component='img' src={logemaildeactive} sx={{ width: '25px', mr: 1 }}></Box>
                <Typography variant="body1" color="initial" sx={{ fontSize: '15px', fontWeight: '500', color: 'gray' }}>Mail</Typography>
              </Stack>
              <FormControl fullWidth sx={{ ...style.inputfield }}>
                <TextField
                  id=""
                  label=""
                  placeholder="please input your mail"
                  fullWidth
                  type="text"
                />
              </FormControl>
            </Box>

            <Box mt={2}>
              <Stack direction='row' alignItems='center'>
                <Box component='img' src={password} sx={{ width: '25px', mr: 1 }}></Box>
                <Typography variant="body1" color="initial" sx={{ fontSize: '15px', fontWeight: '500', color: 'gray' }}>Set password</Typography>
              </Stack>
              <FormControl fullWidth sx={{ ...style.passwordfield }}>
                <FilledInput
                  placeholder="Set password"
                  id="filled-adornment-password"
                  type={showPassword ? 'text' : 'password'}
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
            <Box mt={2}>
              <Stack direction='row' alignItems='center'>
                <Box component='img' src={password} sx={{ width: '25px', mr: 1 }}></Box>
                <Typography variant="body1" color="initial" sx={{ fontSize: '15px', fontWeight: '500', color: 'gray' }}>Confirm password</Typography>
              </Stack>
              <FormControl fullWidth sx={{ ...style.passwordfield }}>
                <FilledInput
                  placeholder="Confirm password"
                  id="filled-adornment-password"
                  type={showPassword ? 'text' : 'password'}
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
            <Box mt={2}>
              <Stack direction='row' alignItems='center'>
                <Box component='img' src={invite} sx={{ width: '25px', mr: 1 }}></Box>
                <Typography variant="body1" color="initial" sx={{ fontSize: '15px', fontWeight: '500', color: 'gray' }}>Invite code</Typography>
              </Stack>
              <FormControl fullWidth sx={{ ...style.inputfield }}>
                <TextField
                  id=""
                  label=""
                  placeholder="please input Invite code"
                  fullWidth
                  type="text"
                />
              </FormControl>
            </Box>
          </Box>
        }
        <Box mt={3}>

          <FormGroup >
            <FormControlLabel control={<Checkbox defaultChecked />} label={
              <Stack direction='row'>
                <Typography variant="body1" color="initial" sx={{ fontSize: '13px' }}>I have read and agree </Typography>
                <NavLink to='/RiskDisclosureAgreement'>
                  <Typography variant="body1" color="initial" sx={{ fontSize: '14px', color: '#EB8A1F' }}>【Privacy Agreement】</Typography>
                </NavLink>
              </Stack>
            } />
          </FormGroup>

        </Box>
        <Box sx={{ width: '80%', margin: 'auto', mt: 3 }}>
          <Button sx={{ boxShadow: ' 0px 3px #b6bad0', padding: '10px', width: '100%', background: '#CACCDB', color: 'white', borderRadius: '20px', mb: 2, fontWeight: '700', '&:hover': { background: '#CACCDB' } }} disableElevation>Register</Button>
          <NavLink to='/Login'>
            <Button sx={{ width: '100%', borderRadius: '20px', fontSize: '13px', fontWeight: '500', color: 'black', '&>span': { color: theme.palette.primary.main, ml: 1, fontSize: '16px', fontWeight: '700', } }} variant="outlined">I have an account <span> Login</span></Button>
          </NavLink>
        </Box>
      </Box>
    </Container >
  );
}

export default Login;

const style = {
  inputfield: {
    mt: 2,
    '&>div>div>input': { background: 'white', padding: 3, borderRadius: '10px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;', },
    '&>div>div>fieldset ': { border: 'none !important', },
    '&>div>div>input:focus': { outline: '1px solid #F18401' },
  },
  passwordfield: {
    '&>div>input': { padding: 3, },
    '&>div': { mt: 2, background: 'white', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;', borderRadius: '10px', },
    '&>div::before': { border: 'none !important', },
    '&>div::after:focus': { border: 'none !important', border: '1px solid #F18401  !important', },
  },
  selectfield: {
    '&>div>div': { background: 'white', borderRadius: '10px', padding: '11px 3px', borderRadius: '10px', },
    '&>div>fieldset': { border: '1px solid white', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;', borderRadius: '10px', },
    '&>div': { mt: 2, },
  },
};
