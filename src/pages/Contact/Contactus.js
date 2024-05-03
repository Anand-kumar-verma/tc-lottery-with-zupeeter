import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { Box, Container, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import CStype from '../../assets/images/CStype.png'
import backbtn from '../../assets/images/backBtn.png'
import customerBg from '../../assets/images/customerBg.png'
import theme from '../../utils/theme'



function Contactus() {

  const navigatea = useNavigate();
  const goBack = () => {
    navigatea(-1);
  };

  return (
    <Container sx={{ height: '100vh' }}>
      <Box sx={{ padding: 1, background: 'linear-gradient(90deg, rgb(255, 153, 1) 0%, rgb(230, 115, 1) 100%)', px: 2, }}>
        <Stack direction='row' sx={{ alignItems: 'end', justifyContent: 'space-between' }}>
          <NavLink onClick={() => goBack()}>
            <Box component='img' src={backbtn} width={25}></Box>
          </NavLink>
          <NavLink>
            <Typography variant="body1" color="initial" sx={{ color: 'white', fontSize: '20px', fontWeight: '400' }}>Customer Service</Typography>
          </NavLink>
          <NavLink>
          </NavLink>
        </Stack>
      </Box>
      <Box sx={{ padding: 1, background: 'linear-gradient(90deg, rgb(255, 153, 1) 0%, rgb(230, 115, 1) 100%)', }}>
        <Box component='img' src={customerBg} sx={{ width: '100%', height: '200px' }}></Box>
      </Box>
      <NavLink to='/ServiceCollections'>
        <Box sx={{ marginTop: '-30px', background: '#fff', borderRadius: '20px 20px 0px 0px', padding: 2 }}>
          <Stack direction='row' sx={{ background: '#f4f4f4', padding: 2, textAlign: 'center', alignItems: 'center', justifyContent: 'space-between', }}>
            <Stack direction='row' alignItems={'center'}>
              <Box component='img' src={CStype} width={30}></Box>
              <Typography variant="body1" color="initial" ml={2}>LiveChat</Typography>
            </Stack>

            <KeyboardArrowRightIcon sx={{ color: 'gray' }} />
          </Stack>
        </Box>
      </NavLink>
    </Container >
  )
}

export default Contactus

const style = {
  withdrawalbtn: {
    border: `1px solid ${theme.palette.primary.main}`, borderRadius: '20px', textTransform: 'capitalize',
    fontSize: '14px', fontWeight: '600', padding: '5px 25px'
  },
  depositebtn: {
    background: theme.palette.primary.main, borderRadius: '20px', textTransform: 'capitalize',
    fontSize: '14px', fontWeight: '600', padding: '5px 25px', color: 'white'
  },
};
