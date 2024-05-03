import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Box, Button, Container, FormControl, IconButton, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import allinactive from '../../../assets/images/allactive.png';
import allactive from '../../../assets/images/allinactive.png';
import backbtn from '../../../assets/images/backBtn.png';
import bankcardactive from '../../../assets/images/bankcardactive.png';
import bankcardinactive from '../../../assets/images/bankcardinactive.png';
import trx from '../../../assets/images/trx.png';
import theme from '../../../utils/theme';


function Withdrawlhistory() {

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const [value, setValue] = useState(1);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const [transection, setTransection] = useState('All');

  const handleChangeTransection = (event) => {
    setTransection(event.target.value);
  };
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Container sx={{ background: '#F7F8FF' }}>
      <Box sx={{ background: 'linear-gradient(90deg, rgb(255, 153, 1) 0%, rgb(230, 115, 1) 100%)', padding: 1 }}>
        <Stack direction='row' sx={{ alignItems: 'end', justifyContent: 'space-between', position: 'relative' }}>
          <NavLink onClick={goBack}>
            <Box component='img' src={backbtn} width={25}>
            </Box>
          </NavLink>
          <Box sx={{ position: 'absolute', left: '30%', top: '10%' }}>
            <Typography variant="body1" sx={{ color: 'white', fontSize: '16px', fontWeight: '600' }}>Withdrawal history</Typography>
          </Box>
          <NavLink >
          </NavLink>
        </Stack>
      </Box>
      <Box sx={{ padding: 1 }}>
        <Stack direction="row" justifyContent="space-between" mt={2}>
          <Button
            className={
              value === 1 ? " gametableactive gametable" : " gametable"
            }
            onClick={() => handleChange(1)}
          >
            {value === 1 ?
              <Box component='img' src={allactive} width={20} mr={1}></Box>
              :
              <Box component='img' src={allinactive} width={20} mr={1}></Box>
            }
            All
          </Button>
          <Button
            className={
              value === 2 ? " gametableactive gametable" : " gametable"
            }
            onClick={() => handleChange(2)}
          >
            {value === 2 ?
              <Box component='img' src={bankcardinactive} width={20} mr={1}></Box>
              :
              <Box component='img' src={bankcardactive} width={20} mr={1}></Box>
            }
            BANK CARD
          </Button>
          <Button
            className={
              value === 3 ? " gametableactive gametable" : " gametable"
            }
            onClick={() => handleChange(3)}
          >
            <Box component='img' src={trx} width={20} mr={1}></Box>
            USDT 0
          </Button>
        </Stack>
      </Box>

      <Stack sx={{ padding: 1 }} >
        <Box sx={{ width: '100%' }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">All</InputLabel>
            <Select
              value={transection}
              label="All"
              onChange={handleChangeTransection}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: '100%', mt: 1 }}>
        </Box>
      </Stack>
      <Box sx={{ mb: 2, padding: "10px", borderRadius: "10px", background: '#fff', width: '92%', margin: 'auto', mt: 2 }}>
        <Stack direction="row"
          sx={{ paddingBottom: "10px", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #efefef", }}>
          <Box>
            <Button sx={{ background: theme.palette.primary.main, color: "white", textTransform: "capitalize", fontSize: '14px', fontWeight: '500' }}>Withdrawl</Button>
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
            <Button sx={{ background: theme.palette.primary.main, color: "white", textTransform: "capitalize", fontSize: '14px', fontWeight: '500' }}>Withdrawl</Button>
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
            <Button sx={{ background: theme.palette.primary.main, color: "white", textTransform: "capitalize", fontSize: '14px', fontWeight: '500' }}>Withdrawl</Button>
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
export default Withdrawlhistory;


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
    background: 'linear-gradient(180deg, #cfd1de 0%, #c7c9d9 100%), linear-gradient(180deg, #cfd1de 0%, #c7c9d9 100%)',
    backgroundSize: '100% 100%, 100% 100%',
    backgroundPosition: 'center, center',
    backgroundRepeat: 'no-repeat, no-repeat',
    textShadow: '0 0.02667rem 0.01333rem #afb0be',
    padding: '20px',
    mt: 3,
  }
};
