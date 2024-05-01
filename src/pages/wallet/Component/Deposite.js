import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import atm from '../../../assets/images/atm.png';
import wallet from '../../../assets/images/atmw.png';
import backbtn from '../../../assets/images/backBtn.png';
import cip from '../../../assets/images/cip.png';
import user from '../../../assets/images/instruction.png';
import payment from '../../../assets/images/payment.png';
import refresh from '../../../assets/images/refwhite.png';
import trx from '../../../assets/images/trx.png';
import upiimg from '../../../assets/images/upiimg.png';
import withdravalhistory from '../../../assets/images/withdrawalhistory.png';
import theme from '../../../utils/theme';

function Deposite() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Container sx={{ background: '#F7F8FF' }}>
      <Box sx={{ background: 'linear-gradient(90deg, rgb(255, 153, 1) 0%, rgb(230, 115, 1) 100%)', padding: 1 }}>
        <Stack direction='row' sx={{ alignItems: 'end', justifyContent: 'space-between', position: 'relative' }}>
          <NavLink onClick={goBack}>
            <Box component='img' src={backbtn} width={25}>
            </Box>
          </NavLink>
          <Box sx={{ position: 'absolute', left: '40%', top: '10%' }}>
            <Typography variant="body1" sx={{ color: 'white', fontSize: '16px', fontWeight: '600' }}>Deposite</Typography>
          </Box>
          <NavLink to="/depositehistory">
            <Typography variant="body1" color="initial" sx={{ fontSize: '11px', color: 'white' }}>Deposite history</Typography>
          </NavLink>
        </Stack>
      </Box>

      <Box sx={{ mt: 2, px: 2 }}>
        <Box sx={{ backgroundImage: `url(${atm})`, backgroundSize: '100% 100%', padding: '20px 16px' }}>
          <Stack direction='row'>
            <Box component='img' src={wallet} width={20} sx={{ mr: 2 }}></Box>
            <Typography variant="body1" sx={{ color: 'white', fontSize: '14px', fontWeight: '500' }}>Available balance</Typography>
          </Stack>
          <Stack direction='row' alignItems={'center'} mt={1}>
            <Typography variant="body1" sx={{ color: 'white', fontSize: '24px', fontWeight: '500' }}>₹ 0.41</Typography>
            <Box component='img' src={refresh} width={20} height={16} sx={{ ml: 2 }}></Box>
          </Stack>
          <Stack direction='row' alignItems={'center'} mt={3} >
            <Box component='img' src={cip} width={40} height={25} ></Box>
          </Stack>
        </Box>
      </Box>

      <Box sx={{ mt: 2, px: 2 }}>
        <Stack direction='row' alignItems='center' justifyContent='space-between' flexWrap='wrap'>
          <Stack sx={{ background: '-webkit-linear-gradient(top, #e97e0f 0%, #fcbc42 100%)', padding: '16px 0px', borderRadius: 2, width: '32%' }}>
            <Box component='img' src={upiimg} width={40} sx={{ margin: '0px auto' }}></Box>
            <Typography variant="body1" sx={{ color: 'gray', fontSize: '11px', fontWeight: '500', textAlign: 'center', mt: 1 }}>
              UPI x QR
            </Typography>
          </Stack>
          <Stack sx={{
            width: '32%', background: '#FFFFFF', padding: '16px 0px', borderRadius: 2,
            boxShadow: ' rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
          }}>
            <Box component='img' src={upiimg} width={40} sx={{ margin: '0px auto' }}></Box>
            <Typography variant="body1" sx={{ color: 'gray', fontSize: '11px', fontWeight: '500', textAlign: 'center', mt: 1 }}>
              UPI x PAYTM
            </Typography>
          </Stack>
          <Stack sx={{
            width: '32%', background: '#FFFFFF', padding: '16px 0px', borderRadius: 2,
            boxShadow: ' rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
          }}>
            <Box component='img' src={trx} width={40} sx={{ margin: '0px auto' }}></Box>
            <Typography variant="body1" sx={{ color: 'gray', fontSize: '11px', fontWeight: '500', textAlign: 'center', mt: 1 }}>
              USDT
            </Typography>
          </Stack>
        </Stack>
      </Box>

      <Box sx={{ width: '92%', margin: 'auto', background: '#ffffff', mt: 2, borderRadius: '10px', padding: 1, boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>

        <Stack direction="row" sx={{ alignItems: "center", mb: "20px" }}>
          <Box component="img" src={payment} width={30}></Box>
          <Typography variant="body1" color="initial" sx={{ fontSize: "20px ", color: "black", ml: "10px", fontWeight: '600' }}>
            Deposit amount
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", mt: "10px", }}>
          <Button sx={style.paytmbtn}>
            ₹ 500
          </Button>
          <Button sx={style.paytmbtn}>
            ₹ 1K
          </Button>
          <Button sx={style.paytmbtn}>
            ₹ 5K
          </Button>
          <Button sx={style.paytmbtn}>
            ₹ 10K
          </Button>
          <Button sx={style.paytmbtn}>
            ₹ 15K
          </Button>
          <Button sx={style.paytmbtn}>
            ₹ 20K
          </Button>
        </Stack>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', background: '#F2F2F2', borderRadius: '20px', border: 'none', boxShadow: 'none' }}
        >
          <IconButton sx={{ p: '10px' }} aria-label="menu">
            <CurrencyRupeeIcon sx={{ color: theme.palette.primary.main }} />
          </IconButton>
          <InputBase
            sx={{ px: 1, flex: 1, borderLeft: '1px solid #888' }}
            placeholder="Please enter the amount"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
        </Paper>
        <Button sx={style.wdbtn}>Deposite</Button>
      </Box>


      <Box sx={{ width: '92%', margin: 'auto', background: '#ffffff', mt: 2, borderRadius: '10px', padding: 1, boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
        <Stack direction="row" sx={{ alignItems: "center", mb: "20px" }}>
          <Box component="img" src={user} width={30}></Box>
          <Typography variant="body1" color="initial" sx={{ fontSize: "15px ", color: "black", ml: "10px" }}>
            Recharge instructions
          </Typography>
        </Stack>
        <Box sx={{ border: "1px solid #d2d2d2", padding: 2, borderRadius: "10px", }}>
          <Stack direction="row" sx={style.rechargeinstext}>
            <Box sx={{ width: '5%' }}>
              <Box sx={{ width: '5px', height: '5px', background: theme.palette.primary.main, transform: 'rotate(45deg)', mr: 1 }}></Box>
            </Box>
            <Typography variant="body1" color="initial">
              If the transfer time is up, please fill out the deposit form
              again.
            </Typography>
          </Stack>
          <Stack direction="row" sx={style.rechargeinstext}>
            <Box sx={{ width: '5%' }}>
              <Box sx={{ width: '5px', height: '5px', background: theme.palette.primary.main, transform: 'rotate(45deg)', mr: 1 }}></Box>
            </Box>
            <Typography variant="body1" color="initial">
              The transfer amount must match the order you created, otherwise
              the money cannot be credited successfully.
            </Typography>
          </Stack>
          <Stack direction="row" sx={style.rechargeinstext}>
            <Box sx={{ width: '5%' }}>
              <Box sx={{ width: '5px', height: '5px', background: theme.palette.primary.main, transform: 'rotate(45deg)', mr: 1 }}></Box>
            </Box>
            <Typography variant="body1" color="initial">
              If you transfer the wrong amount, our company will not be
              responsible for the lost amount!
            </Typography>
          </Stack>
          <Stack direction="row" sx={style.rechargeinstext}>
            <Box sx={{ width: '5%' }}>
              <Box sx={{ width: '5px', height: '5px', background: theme.palette.primary.main, transform: 'rotate(45deg)', mr: 1 }}></Box>
            </Box>
            <Typography variant="body1" color="initial">
              Note: do not cancel the deposit order after the money has been
              transferred.
            </Typography>
          </Stack>
        </Box>
      </Box>

      <Stack direction="row" sx={{ alignItems: "center", margin: "20px" }}>
        <Box component="img" src={withdravalhistory} width={30}></Box>
        <Typography variant="body1" color="initial" sx={{ fontSize: "15px ", color: "#888", ml: "10px", fontWeight: '600' }}>
          Deposite history
        </Typography>
      </Stack>

      <Box sx={{ mb: 2, padding: "10px", borderRadius: "10px", background: '#fff', width: '92%', margin: 'auto', mt: 2 }}>
        <Stack direction="row"
          sx={{ paddingBottom: "10px", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #efefef", }}>
          <Box>
            <Button sx={{ background: theme.palette.primary.main, color: "white", textTransform: "capitalize", fontSize: '14px', fontWeight: '500' }}>deposite</Button>
          </Box>
          <Box sx={{ color: "#888", textTransform: "capitalize", fontSize: '14px', fontWeight: '600' }}>success</Box>
        </Stack>
        <Stack direction="row" sx={{
          alignItems: "center", justifyContent: "space-between",
          "&>p:nth-child(1)": { color: "#888", fontSize: '13px', fontWeight: '600', py: 1, },
          "&>p:nth-child(2)": { color: theme.palette.primary.main, fontSize: '13px', fontWeight: '600', py: 1, },
        }}>
          <Typography variant="body1" color="initial">Balance</Typography>
          <Typography variant="body1" >₹ 1500</Typography>
        </Stack>
        <Stack direction="row" sx={{
          alignItems: "center", justifyContent: "space-between",
          "&>p": { color: "#888", fontSize: '13px', fontWeight: '600', py: 1, },
        }}>
          <Typography variant="body1" color="initial">Type</Typography>
          <Typography variant="body1" color="initial">BANK CARD</Typography>
        </Stack>
        <Stack direction="row" sx={{
          alignItems: "center", justifyContent: "space-between",
          "&>p": { color: "#888", fontSize: '13px', fontWeight: '600', py: 1, },
        }}>
          <Typography variant="body1" color="initial">Time</Typography>
          <Typography variant="body1" color="initial" className="!text-green-500">19-04-1997 18:02:19</Typography>
        </Stack>
        <Stack direction="row" sx={{
          alignItems: "center", justifyContent: "space-between",
          "&>p": { color: "#888", fontSize: '13px', fontWeight: '600', py: 1, },
        }}>
          <Typography variant="body1" color="initial">Order number</Typography>
          <Stack direction="row" sx={{
            alignItems: "center", justifyContent: "space-between",
            "&>p:nth-child(1)": { color: "#888", fontSize: '13px', fontWeight: '600', py: 1, },
            "&>p:nth-child(2)": { color: theme.palette.primary.main, fontSize: '13px', fontWeight: '600', },
          }}>
            <Typography variant="body1" color="initial">WD202402121946087</Typography>
            <IconButton sx={{ padding: 0 }}><ContentCopyIcon sx={{ color: "#888", width: '15px', ml: 1 }} /></IconButton>
          </Stack>
        </Stack>
      </Box>
      <Box sx={{ mb: 2, padding: "10px", borderRadius: "10px", background: '#fff', width: '92%', margin: 'auto', mt: 2 }}>
        <Stack direction="row"
          sx={{ paddingBottom: "10px", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #efefef", }}>
          <Box>
            <Button sx={{ background: theme.palette.primary.main, color: "white", textTransform: "capitalize", fontSize: '14px', fontWeight: '500' }}>deposite</Button>
          </Box>
          <Box sx={{ color: "#888", textTransform: "capitalize", fontSize: '14px', fontWeight: '600' }}>success</Box>
        </Stack>
        <Stack direction="row" sx={{
          alignItems: "center", justifyContent: "space-between",
          "&>p:nth-child(1)": { color: "#888", fontSize: '13px', fontWeight: '600', py: 1, },
          "&>p:nth-child(2)": { color: theme.palette.primary.main, fontSize: '13px', fontWeight: '600', py: 1, },
        }}>
          <Typography variant="body1" color="initial">Balance</Typography>
          <Typography variant="body1" >₹ 1500</Typography>
        </Stack>
        <Stack direction="row" sx={{
          alignItems: "center", justifyContent: "space-between",
          "&>p": { color: "#888", fontSize: '13px', fontWeight: '600', py: 1, },
        }}>
          <Typography variant="body1" color="initial">Type</Typography>
          <Typography variant="body1" color="initial">BANK CARD</Typography>
        </Stack>
        <Stack direction="row" sx={{
          alignItems: "center", justifyContent: "space-between",
          "&>p": { color: "#888", fontSize: '13px', fontWeight: '600', py: 1, },
        }}>
          <Typography variant="body1" color="initial">Time</Typography>
          <Typography variant="body1" color="initial" className="!text-green-500">19-04-1997 18:02:19</Typography>
        </Stack>
        <Stack direction="row" sx={{
          alignItems: "center", justifyContent: "space-between",
          "&>p": { color: "#888", fontSize: '13px', fontWeight: '600', py: 1, },
        }}>
          <Typography variant="body1" color="initial">Order number</Typography>
          <Stack direction="row" sx={{
            alignItems: "center", justifyContent: "space-between",
            "&>p:nth-child(1)": { color: "#888", fontSize: '13px', fontWeight: '600', py: 1, },
            "&>p:nth-child(2)": { color: theme.palette.primary.main, fontSize: '13px', fontWeight: '600', },
          }}>
            <Typography variant="body1" color="initial">WD202402121946087</Typography>
            <IconButton sx={{ padding: 0 }}><ContentCopyIcon sx={{ color: "#888", width: '15px', ml: 1 }} /></IconButton>
          </Stack>
        </Stack>
      </Box>
      <Box sx={{ mb: 2, padding: "10px", borderRadius: "10px", background: '#fff', width: '92%', margin: 'auto', mt: 2 }}>
        <Stack direction="row"
          sx={{ paddingBottom: "10px", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #efefef", }}>
          <Box>
            <Button sx={{ background: theme.palette.primary.main, color: "white", textTransform: "capitalize", fontSize: '14px', fontWeight: '500' }}>deposite</Button>
          </Box>
          <Box sx={{ color: "#888", textTransform: "capitalize", fontSize: '14px', fontWeight: '600' }}>success</Box>
        </Stack>
        <Stack direction="row" sx={{
          alignItems: "center", justifyContent: "space-between",
          "&>p:nth-child(1)": { color: "#888", fontSize: '13px', fontWeight: '600', py: 1, },
          "&>p:nth-child(2)": { color: theme.palette.primary.main, fontSize: '13px', fontWeight: '600', py: 1, },
        }}>
          <Typography variant="body1" color="initial">Balance</Typography>
          <Typography variant="body1" >₹ 1500</Typography>
        </Stack>
        <Stack direction="row" sx={{
          alignItems: "center", justifyContent: "space-between",
          "&>p": { color: "#888", fontSize: '13px', fontWeight: '600', py: 1, },
        }}>
          <Typography variant="body1" color="initial">Type</Typography>
          <Typography variant="body1" color="initial">BANK CARD</Typography>
        </Stack>
        <Stack direction="row" sx={{
          alignItems: "center", justifyContent: "space-between",
          "&>p": { color: "#888", fontSize: '13px', fontWeight: '600', py: 1, },
        }}>
          <Typography variant="body1" color="initial">Time</Typography>
          <Typography variant="body1" color="initial" className="!text-green-500">19-04-1997 18:02:19</Typography>
        </Stack>
        <Stack direction="row" sx={{
          alignItems: "center", justifyContent: "space-between",
          "&>p": { color: "#888", fontSize: '13px', fontWeight: '600', py: 1, },
        }}>
          <Typography variant="body1" color="initial">Order number</Typography>
          <Stack direction="row" sx={{
            alignItems: "center", justifyContent: "space-between",
            "&>p:nth-child(1)": { color: "#888", fontSize: '13px', fontWeight: '600', py: 1, },
            "&>p:nth-child(2)": { color: theme.palette.primary.main, fontSize: '13px', fontWeight: '600', },
          }}>
            <Typography variant="body1" color="initial">WD202402121946087</Typography>
            <IconButton sx={{ padding: 0 }}><ContentCopyIcon sx={{ color: "#888", width: '15px', ml: 1 }} /></IconButton>
          </Stack>
        </Stack>
      </Box>
      <Box sx={{ mb: 2, padding: "10px", borderRadius: "10px", background: '#fff', width: '92%', margin: 'auto', mt: 2 }}>
        <Stack direction="row"
          sx={{ paddingBottom: "10px", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #efefef", }}>
          <Box>
            <Button sx={{ background: theme.palette.primary.main, color: "white", textTransform: "capitalize", fontSize: '14px', fontWeight: '500' }}>deposite</Button>
          </Box>
          <Box sx={{ color: "#888", textTransform: "capitalize", fontSize: '14px', fontWeight: '600' }}>success</Box>
        </Stack>
        <Stack direction="row" sx={{
          alignItems: "center", justifyContent: "space-between",
          "&>p:nth-child(1)": { color: "#888", fontSize: '13px', fontWeight: '600', py: 1, },
          "&>p:nth-child(2)": { color: theme.palette.primary.main, fontSize: '13px', fontWeight: '600', py: 1, },
        }}>
          <Typography variant="body1" color="initial">Balance</Typography>
          <Typography variant="body1" >₹ 1500</Typography>
        </Stack>
        <Stack direction="row" sx={{
          alignItems: "center", justifyContent: "space-between",
          "&>p": { color: "#888", fontSize: '13px', fontWeight: '600', py: 1, },
        }}>
          <Typography variant="body1" color="initial">Type</Typography>
          <Typography variant="body1" color="initial">BANK CARD</Typography>
        </Stack>
        <Stack direction="row" sx={{
          alignItems: "center", justifyContent: "space-between",
          "&>p": { color: "#888", fontSize: '13px', fontWeight: '600', py: 1, },
        }}>
          <Typography variant="body1" color="initial">Time</Typography>
          <Typography variant="body1" color="initial" className="!text-green-500">19-04-1997 18:02:19</Typography>
        </Stack>
        <Stack direction="row" sx={{
          alignItems: "center", justifyContent: "space-between",
          "&>p": { color: "#888", fontSize: '13px', fontWeight: '600', py: 1, },
        }}>
          <Typography variant="body1" color="initial">Order number</Typography>
          <Stack direction="row" sx={{
            alignItems: "center", justifyContent: "space-between",
            "&>p:nth-child(1)": { color: "#888", fontSize: '13px', fontWeight: '600', py: 1, },
            "&>p:nth-child(2)": { color: theme.palette.primary.main, fontSize: '13px', fontWeight: '600', },
          }}>
            <Typography variant="body1" color="initial">WD202402121946087</Typography>
            <IconButton sx={{ padding: 0 }}><ContentCopyIcon sx={{ color: "#888", width: '15px', ml: 1 }} /></IconButton>
          </Stack>
        </Stack>
      </Box>
      <Button sx={style.paytmbtntwo} variant='outlined'>All history</Button>
    </Container >);
}
export default Deposite;


const style = {


  paytmbtntwo: {
    borderRadius: "20px", textTransform: "capitalize", mb: 2,
    width: "92%", mt: 2, mx: 2, padding: "10px",
    "&:hover": { border: "1px solid transparent" },
  },
  wdbtn: {
    width: '95% !important',
    boxShadow: '0 0.05333rem #b6bad0',
    borderRadius: '20px',
    border: 'none',
    color: '#fff',
    letterSpacing: '0.13333rem',
    fontWeight: '700',
    fontSize: '15px',
    height: '0.93333rem',
    width: '100%',
    background:
      'linear-gradient(180deg, #cfd1de 0%, #c7c9d9 100%), linear-gradient(180deg, #cfd1de 0%, #c7c9d9 100%)',
    backgroundSize: '100% 100%, 100% 100%',
    backgroundPosition: 'center, center',
    backgroundRepeat: 'no-repeat, no-repeat',
    textShadow: '0 0.02667rem 0.01333rem #afb0be',
    padding: '20px',
    mt: 3,
  },
  paytmbtn: {
    mb: 2,
    color: theme.palette.primary.main,
    width: "31%",
    border: `1px solid  #eaeaea`,
    padding: "10px",
  },
  rechargeinstext: {
    mb: "10px",
    alignItems: "center",
    justifyContent: "start",
    "&>p": { color: "#939393 !important", fontSize: "13px" },
  },
};
