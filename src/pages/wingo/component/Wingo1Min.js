import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined'
import { Box, Button, ButtonGroup, Checkbox, Grid, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import Drawer from '@mui/material/Drawer'
import Pagination from '@mui/material/Pagination'
import { useState } from 'react'
import zero from '../../../assets/images/n0-30bd92d1.png'
import one from '../../../assets/images/n1-dfccbff5.png'
import two from '../../../assets/images/n2-c2913607.png'
import three from '../../../assets/images/n3-f92c313f.png'
import four from '../../../assets/images/n4-cb84933b.png'
import five from '../../../assets/images/n5-49d0e9c5.png'
import six from '../../../assets/images/n6-a56e0b9a.png'
import seven from '../../../assets/images/n7-5961a17f.png'
import eight from '../../../assets/images/n8-d4d951a4.png'
import nine from '../../../assets/images/n9-a20f6f42 (1).png'
import PreSaleBg from '../../../assets/images/PreSaleBg.png'
import backbanner from '../../../assets/images/winbackbanner.png'
import theme from '../../../utils/theme'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { NavLink } from 'react-router-dom'



function Wingo1Min() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const [value, setValue] = useState(1);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const [HTP, setHTP] = useState(false);

  const handleClickHTP = () => {
    setHTP(true);
  };

  const handleCloseHTP = () => {
    setHTP(false);
  };


  const [PSR, setPSR] = useState(false);

  const handleClickPSR = () => {
    setPSR(true);
  };

  const handleClosePSR = () => {
    setPSR(false);
  };


  return (
    <Box>


      <Box sx={{ px: 1, mt: 3 }}>
        <Box sx={{ backgroundImage: `url(${backbanner})`, backgroundSize: '100% 100%', padding: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button variant="text" color="primary" className='htpbutton' onClick={handleClickHTP}>
                <StickyNote2OutlinedIcon /> How To Play
              </Button>
              <Typography variant="body1" color="initial" className='psize' mt={1}>Win Go 1Min</Typography>
              <Stack direction="row" alignItems='center' justifyContent='space-between' sx={{ width: '100%', padding: '8px 0px' }}>
                <Box component='img' src={one} width={25}></Box>
                <Box component='img' src={two} width={25}></Box>
                <Box component='img' src={five} width={25}></Box>
                <Box component='img' src={eight} width={25}></Box>
                <Box component='img' src={nine} width={25}></Box>

              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end', }}>
                <Typography variant="body1" color="initial" className="timername">Time remaining </Typography>
                <Box sx={{ display: 'flex', }}>
                  <Box className="timer">0</Box>
                  <Box className="timer1">1</Box>
                  <Box className="timer1">:</Box>
                  <Box className="timer1">0</Box>
                  <Box className="timer2">9</Box>
                </Box>
                <Typography variant="body1" color="initial" className="idnumber" >20240420010668 </Typography>
              </Box>
            </Grid>
          </Grid>

        </Box>

        <Box sx={{ padding: 1, background: '#FFFFFF', mt: 2, borderRadius: '10px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;' }}>
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Button onClick={toggleDrawer(true)} className="greenbtn">Green</Button>
            <Button onClick={toggleDrawer(true)} className="violetbtn">Violet</Button>
            <Button onClick={toggleDrawer(true)} className="redbtn">Red</Button>
          </Stack>
          <Box sx={{ background: '#EEEEEE', padding: '8px 8px 0px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', borderRadius: '10px', mt: 2 }}>
            <Box sx={{ width: '17%', mb: 1, }} component='img' src={zero} onClick={toggleDrawer(true)}></Box>
            <Box sx={{ width: '17%', mb: 1, }} component='img' src={one} onClick={toggleDrawer(true)}></Box>
            <Box sx={{ width: '17%', mb: 1, }} component='img' src={two} onClick={toggleDrawer(true)}></Box>
            <Box sx={{ width: '17%', mb: 1, }} component='img' src={three} onClick={toggleDrawer(true)}></Box>
            <Box sx={{ width: '17%', mb: 1, }} component='img' src={four} onClick={toggleDrawer(true)}></Box>
            <Box sx={{ width: '17%', mb: 1, }} component='img' src={five} onClick={toggleDrawer(true)}></Box>
            <Box sx={{ width: '17%', mb: 1, }} component='img' src={six} onClick={toggleDrawer(true)}></Box>
            <Box sx={{ width: '17%', mb: 1, }} component='img' src={seven} onClick={toggleDrawer(true)}></Box>
            <Box sx={{ width: '17%', mb: 1, }} component='img' src={eight} onClick={toggleDrawer(true)}></Box>
            <Box sx={{ width: '17%', mb: 1, }} component='img' src={nine} onClick={toggleDrawer(true)}></Box>
          </Box>
          <Stack direction='row' my={1} alignItems='center' justifyContent='space-between'>
            <Button variant='outlined'>Random</Button>
            <Box sx={style.bacancebtn3}>X1</Box>
            <Box sx={style.bacancebtn3}>X5</Box>
            <Box sx={style.bacancebtn3}>X10</Box>
            <Box sx={style.bacancebtn3}>X20</Box>
            <Box sx={style.bacancebtn3}>X50</Box>
            <Box sx={style.bacancebtn3}>X100</Box>
          </Stack>
          <ButtonGroup disableElevation variant="contained" sx={{ width: '100%' }} >
            <Button sx={style.bigbtn} onClick={toggleDrawer(true)}>One</Button>
            <Button sx={style.smlbtn} onClick={toggleDrawer(true)}>Two</Button>
          </ButtonGroup>
        </Box>
        <Stack direction='row' justifyContent='space-between' mt={2}>
          <Button className={value === 1 ? " gametableactive gametable" : " gametable"} onClick={() => handleChange(1)}>
            Game history</Button>
          <Button className={value === 2 ? " gametableactive gametable" : " gametable"} onClick={() => handleChange(2)}>
            Chart
          </Button>
          <Button className={value === 3 ? " gametableactive gametable" : " gametable"} onClick={() => handleChange(3)}>
            My history
          </Button>

        </Stack>
        {value === 1 &&
          <Box mt={2}>
            <TableContainer component={Paper} >
              <Table sx={{ maxWidth: 400 }} aria-label="simple table">
                <TableHead sx={{ background: theme.palette.primary.main, '&>tr>th': { padding: 1, fontSize: '13px', fontWeight: 700, color: 'white' } }}>
                  <TableRow>
                    <TableCell align="center">Period</TableCell>
                    <TableCell align="center">Number</TableCell>
                    <TableCell align="center">Big Small</TableCell>
                    <TableCell align="center">Color</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody sx={{ '&>tr>td': { padding: '10px 5px', border: 'none' }, '&>tr': { borderBottom: '1px solid #ced4d7' } }}>
                  <TableRow >
                    <TableCell align="center"> 20240420010994</TableCell>
                    <TableCell align="center" sx={{ fontSize: '20px', fontWeight: 900, color: 'red' }}>6</TableCell>
                    <TableCell align="center"> small</TableCell>
                    <TableCell align="center" sx={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                      <Typography sx={{ width: '10px', height: '10px', background: 'red', borderRadius: "50%", mt: '10px', mx: '4px' }}></Typography>
                      <Typography sx={{ width: '10px', height: '10px', background: 'red', borderRadius: "50%", mt: '10px', mx: '4px' }}></Typography>

                    </TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell align="center"> 20240420010994</TableCell>
                    <TableCell align="center" sx={{ fontSize: '20px', fontWeight: 900, color: 'red' }}>6</TableCell>
                    <TableCell align="center"> small</TableCell>
                    <TableCell align="center" sx={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                      <Typography sx={{ width: '10px', height: '10px', background: 'red', borderRadius: "50%", mt: '10px', mx: '4px' }}></Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell align="center"> 20240420010994</TableCell>
                    <TableCell align="center" sx={{ fontSize: '20px', fontWeight: 900, color: 'red' }}>6</TableCell>
                    <TableCell align="center"> small</TableCell>
                    <TableCell align="center" sx={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                      <Typography sx={{ width: '10px', height: '10px', background: 'red', borderRadius: "50%", mt: '10px', mx: '4px' }}></Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Box padding={2} sx={{ background: 'white', mt: 3 }}>
              <Stack spacing={2}>
                <Pagination count={6} variant="outlined" shape="rounded" />
              </Stack>
            </Box>
          </Box>
        }
        {value === 2 &&
          <Box mt={2}>
            <Stack direction='row' sx={{ background: theme.palette.primary.main, borderRadius: '5px 5px 0px 0px', '&>div>p': { padding: 1, fontSize: '13px', fontWeight: 700, color: 'white' }, '&>div': { textAlign: 'center' } }}>
              <Box sx={{ width: '30%' }}>
                <Typography variant="body1" color="initial">Period</Typography>
              </Box>
              <Box sx={{ width: '70%' }}>
                <Typography variant="body1" color="initial">Number</Typography>
              </Box>
            </Stack>
            <Box sx={{ width: '100%', background: 'white', px: '4px' }}>
              <Typography variant="body1" color="initial" sx={{ fontSize: '13px', py: 1 }}>Statistic (last 100 Periods)</Typography>
              <Stack direction='row' >
                <Box sx={{ '&>p': { fontSize: '13px', }, width: '35%', }}>
                  <Typography variant="body1" color="initial">Winning numbers</Typography>
                </Box>
                <Stack direction='row' sx={{ ...style.linetable2, width: '65%', color: 'red !important' }}>
                  <Typography variant="body1" color="initial">0</Typography>
                  <Typography variant="body1" color="initial">1</Typography>
                  <Typography variant="body1" color="initial">2</Typography>
                  <Typography variant="body1" color="initial">3</Typography>
                  <Typography variant="body1" color="initial">4</Typography>
                  <Typography variant="body1" color="initial">5</Typography>
                  <Typography variant="body1" color="initial">6</Typography>
                  <Typography variant="body1" color="initial">7</Typography>
                  <Typography variant="body1" color="initial">8</Typography>
                  <Typography variant="body1" color="initial">9</Typography>
                </Stack>
              </Stack>
              <Stack direction='row' >
                <Box sx={{ '&>p': { fontSize: '13px', }, width: '35%', }}>
                  <Typography variant="body1" color="initial">Missing</Typography>
                </Box>
                <Stack direction='row' sx={{ ...style.linetable3, width: '65%', color: 'red !important' }}>
                  <Typography variant="body1" color="initial">0</Typography>
                  <Typography variant="body1" color="initial">1</Typography>
                  <Typography variant="body1" color="initial">2</Typography>
                  <Typography variant="body1" color="initial">3</Typography>
                  <Typography variant="body1" color="initial">4</Typography>
                  <Typography variant="body1" color="initial">5</Typography>
                  <Typography variant="body1" color="initial">6</Typography>
                  <Typography variant="body1" color="initial">7</Typography>
                  <Typography variant="body1" color="initial">8</Typography>
                  <Typography variant="body1" color="initial">9</Typography>
                </Stack>
              </Stack>
              <Stack direction='row' >
                <Box sx={{ '&>p': { fontSize: '13px', }, width: '35%', }}>
                  <Typography variant="body1" color="initial">Avg missing</Typography>
                </Box>
                <Stack direction='row' sx={{ ...style.linetable3, width: '65%', color: 'red !important' }}>
                  <Typography variant="body1" color="initial">0</Typography>
                  <Typography variant="body1" color="initial">1</Typography>
                  <Typography variant="body1" color="initial">2</Typography>
                  <Typography variant="body1" color="initial">3</Typography>
                  <Typography variant="body1" color="initial">4</Typography>
                  <Typography variant="body1" color="initial">5</Typography>
                  <Typography variant="body1" color="initial">6</Typography>
                  <Typography variant="body1" color="initial">7</Typography>
                  <Typography variant="body1" color="initial">8</Typography>
                  <Typography variant="body1" color="initial">9</Typography>
                </Stack>
              </Stack>
              <Stack direction='row' >
                <Box sx={{ '&>p': { fontSize: '13px', }, width: '35%', }}>
                  <Typography variant="body1" color="initial">Frequency</Typography>
                </Box>
                <Stack direction='row' sx={{ ...style.linetable3, width: '65%', color: 'red !important' }}>
                  <Typography variant="body1" color="initial">0</Typography>
                  <Typography variant="body1" color="initial">1</Typography>
                  <Typography variant="body1" color="initial">2</Typography>
                  <Typography variant="body1" color="initial">3</Typography>
                  <Typography variant="body1" color="initial">4</Typography>
                  <Typography variant="body1" color="initial">5</Typography>
                  <Typography variant="body1" color="initial">6</Typography>
                  <Typography variant="body1" color="initial">7</Typography>
                  <Typography variant="body1" color="initial">8</Typography>
                  <Typography variant="body1" color="initial">9</Typography>
                </Stack>
              </Stack>
              <Stack direction='row' >
                <Box sx={{ '&>p': { fontSize: '13px', }, width: '35%', }}>
                  <Typography variant="body1" color="initial">Max consecutive</Typography>
                </Box>
                <Stack direction='row' sx={{ ...style.linetable3, width: '65%', color: 'red !important' }}>
                  <Typography variant="body1" color="initial">0</Typography>
                  <Typography variant="body1" color="initial">1</Typography>
                  <Typography variant="body1" color="initial">2</Typography>
                  <Typography variant="body1" color="initial">3</Typography>
                  <Typography variant="body1" color="initial">4</Typography>
                  <Typography variant="body1" color="initial">5</Typography>
                  <Typography variant="body1" color="initial">6</Typography>
                  <Typography variant="body1" color="initial">7</Typography>
                  <Typography variant="body1" color="initial">8</Typography>
                  <Typography variant="body1" color="initial">9</Typography>
                </Stack>
              </Stack>
            </Box>
            <TableContainer component={Paper} >
              <Table sx={{ maxWidth: 400 }} aria-label="simple table">
                <TableBody sx={{ '&>tr>td:nth-child(1)': { padding: '10px 5px !important', border: 'none', width: '25%', }, '&>tr>td:nth-child(2)': { padding: '10px 5px !important', border: 'none', }, '&>tr': { borderBottom: '1px solid #ced4d7', } }}>
                  <TableRow >
                    <TableCell align="start"> 20240420010994</TableCell>
                    <TableCell>
                      <Stack direction='row' sx={style.linetable}>
                        <Typography variant="body1" color="initial">0</Typography>
                        <Typography variant="body1" color="initial">1</Typography>
                        <Typography variant="body1" color="initial">2</Typography>
                        <Typography variant="body1" color="initial">3</Typography>
                        <Typography variant="body1" color="initial">4</Typography>
                        <Typography variant="body1" color="initial">5</Typography>
                        <Typography variant="body1" color="initial">6</Typography>
                        <Typography variant="body1" color="initial">7</Typography>
                        <Typography variant="body1" color="initial">8</Typography>
                        <Typography variant="body1" color="initial">9</Typography>
                        <Typography variant="body1" color="initial" sx={{ marginLeft: '5px', background: '#F3BD14', fontSize: '15px !important', fontWeight: '500', border: 'none !important' }}>s</Typography>
                      </Stack>
                    </TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell align="start"> 20240420010994</TableCell>
                    <TableCell>
                      <Stack direction='row' sx={style.linetable}>
                        <Typography variant="body1" color="initial">0</Typography>
                        <Typography variant="body1" color="initial">1</Typography>
                        <Typography variant="body1" color="initial">2</Typography>
                        <Typography variant="body1" color="initial">3</Typography>
                        <Typography variant="body1" color="initial">4</Typography>
                        <Typography variant="body1" color="initial">5</Typography>
                        <Typography variant="body1" color="initial">6</Typography>
                        <Typography variant="body1" color="initial">7</Typography>
                        <Typography variant="body1" color="initial">8</Typography>
                        <Typography variant="body1" color="initial">9</Typography>
                        <Typography variant="body1" color="initial" sx={{ marginLeft: '5px', background: '#F3BD14', fontSize: '15px !important', fontWeight: '500', border: 'none !important' }}>s</Typography>
                      </Stack>
                    </TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell align="start"> 20240420010994</TableCell>
                    <TableCell>
                      <Stack direction='row' sx={style.linetable}>
                        <Typography variant="body1" color="initial">0</Typography>
                        <Typography variant="body1" color="initial">1</Typography>
                        <Typography variant="body1" color="initial">2</Typography>
                        <Typography variant="body1" color="initial">3</Typography>
                        <Typography variant="body1" color="initial">4</Typography>
                        <Typography variant="body1" color="initial">5</Typography>
                        <Typography variant="body1" color="initial">6</Typography>
                        <Typography variant="body1" color="initial">7</Typography>
                        <Typography variant="body1" color="initial">8</Typography>
                        <Typography variant="body1" color="initial">9</Typography>
                        <Typography variant="body1" color="initial" sx={{ marginLeft: '5px', background: '#F3BD14', fontSize: '15px !important', fontWeight: '500', border: 'none !important' }}>s</Typography>
                      </Stack>
                    </TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell align="start"> 20240420010994</TableCell>
                    <TableCell>
                      <Stack direction='row' sx={style.linetable}>
                        <Typography variant="body1" color="initial">0</Typography>
                        <Typography variant="body1" color="initial">1</Typography>
                        <Typography variant="body1" color="initial">2</Typography>
                        <Typography variant="body1" color="initial">3</Typography>
                        <Typography variant="body1" color="initial">4</Typography>
                        <Typography variant="body1" color="initial">5</Typography>
                        <Typography variant="body1" color="initial">6</Typography>
                        <Typography variant="body1" color="initial">7</Typography>
                        <Typography variant="body1" color="initial">8</Typography>
                        <Typography variant="body1" color="initial">9</Typography>
                        <Typography variant="body1" color="initial" sx={{ marginLeft: '5px', background: '#F3BD14', fontSize: '15px !important', fontWeight: '500', border: 'none !important' }}>s</Typography>
                      </Stack>
                    </TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell align="start"> 20240420010994</TableCell>
                    <TableCell>
                      <Stack direction='row' sx={style.linetable}>
                        <Typography variant="body1" color="initial">0</Typography>
                        <Typography variant="body1" color="initial">1</Typography>
                        <Typography variant="body1" color="initial">2</Typography>
                        <Typography variant="body1" color="initial">3</Typography>
                        <Typography variant="body1" color="initial">4</Typography>
                        <Typography variant="body1" color="initial">5</Typography>
                        <Typography variant="body1" color="initial">6</Typography>
                        <Typography variant="body1" color="initial">7</Typography>
                        <Typography variant="body1" color="initial">8</Typography>
                        <Typography variant="body1" color="initial">9</Typography>
                        <Typography variant="body1" color="initial" sx={{ marginLeft: '5px', background: '#F3BD14', fontSize: '15px !important', fontWeight: '500', border: 'none !important' }}>s</Typography>
                      </Stack>
                    </TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell align="start"> 20240420010994</TableCell>
                    <TableCell>
                      <Stack direction='row' sx={style.linetable}>
                        <Typography variant="body1" color="initial">0</Typography>
                        <Typography variant="body1" color="initial">1</Typography>
                        <Typography variant="body1" color="initial">2</Typography>
                        <Typography variant="body1" color="initial">3</Typography>
                        <Typography variant="body1" color="initial">4</Typography>
                        <Typography variant="body1" color="initial">5</Typography>
                        <Typography variant="body1" color="initial">6</Typography>
                        <Typography variant="body1" color="initial">7</Typography>
                        <Typography variant="body1" color="initial">8</Typography>
                        <Typography variant="body1" color="initial">9</Typography>
                        <Typography variant="body1" color="initial" sx={{ marginLeft: '5px', background: '#F3BD14', fontSize: '15px !important', fontWeight: '500', border: 'none !important' }}>s</Typography>
                      </Stack>
                    </TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell align="start"> 20240420010994</TableCell>
                    <TableCell>
                      <Stack direction='row' sx={style.linetable}>
                        <Typography variant="body1" color="initial">0</Typography>
                        <Typography variant="body1" color="initial">1</Typography>
                        <Typography variant="body1" color="initial">2</Typography>
                        <Typography variant="body1" color="initial">3</Typography>
                        <Typography variant="body1" color="initial">4</Typography>
                        <Typography variant="body1" color="initial">5</Typography>
                        <Typography variant="body1" color="initial">6</Typography>
                        <Typography variant="body1" color="initial">7</Typography>
                        <Typography variant="body1" color="initial">8</Typography>
                        <Typography variant="body1" color="initial">9</Typography>
                        <Typography variant="body1" color="initial" sx={{ marginLeft: '5px', background: '#F3BD14', fontSize: '15px !important', fontWeight: '500', border: 'none !important' }}>s</Typography>
                      </Stack>
                    </TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell align="start"> 20240420010994</TableCell>
                    <TableCell>
                      <Stack direction='row' sx={style.linetable}>
                        <Typography variant="body1" color="initial">0</Typography>
                        <Typography variant="body1" color="initial">1</Typography>
                        <Typography variant="body1" color="initial">2</Typography>
                        <Typography variant="body1" color="initial">3</Typography>
                        <Typography variant="body1" color="initial">4</Typography>
                        <Typography variant="body1" color="initial">5</Typography>
                        <Typography variant="body1" color="initial">6</Typography>
                        <Typography variant="body1" color="initial">7</Typography>
                        <Typography variant="body1" color="initial">8</Typography>
                        <Typography variant="body1" color="initial">9</Typography>
                        <Typography variant="body1" color="initial" sx={{ marginLeft: '5px', background: '#F3BD14', fontSize: '15px !important', fontWeight: '500', border: 'none !important' }}>s</Typography>
                      </Stack>
                    </TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell align="start"> 20240420010994</TableCell>
                    <TableCell>
                      <Stack direction='row' sx={style.linetable}>
                        <Typography variant="body1" color="initial">0</Typography>
                        <Typography variant="body1" color="initial">1</Typography>
                        <Typography variant="body1" color="initial">2</Typography>
                        <Typography variant="body1" color="initial">3</Typography>
                        <Typography variant="body1" color="initial">4</Typography>
                        <Typography variant="body1" color="initial">5</Typography>
                        <Typography variant="body1" color="initial">6</Typography>
                        <Typography variant="body1" color="initial">7</Typography>
                        <Typography variant="body1" color="initial">8</Typography>
                        <Typography variant="body1" color="initial">9</Typography>
                        <Typography variant="body1" color="initial" sx={{ marginLeft: '5px', background: '#F3BD14', fontSize: '15px !important', fontWeight: '500', border: 'none !important' }}>s</Typography>
                      </Stack>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Box padding={2} sx={{ background: 'white', mt: 3 }}>
              <Stack spacing={2}>
                <Pagination count={6} variant="outlined" shape="rounded" />
              </Stack>
            </Box>
          </Box>
        }
      </Box>

      {/*  BATTING BOX*/}
      <Drawer open={open} anchor={'bottom'} sx={{ maxWidth: '400px !important', width: '100%', margin: 'auto', padding: '10px 0px 0px 0px', }}>
        <Box sx={{ position: 'relative' }}>
          <Box sx={{
            position: 'absolute',
            clipPath: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)',
            backgroundColor: '#40AD72',
            width: '120%',
            height: '110px',
            top: '-16px',
            left: '-11%',
            zIndex: '-1',
          }}>  </Box>
          <Box px={1}>
            <Typography variant="body1" color="initial" sx={{ textAlign: 'center', color: 'white', fontWeight: '700 ' }}>Win Go 1Min</Typography>
            <Typography variant="body1" color="initial" sx={{ textAlign: 'center', color: 'black', fontWeight: '400 ', background: '#ffffff', mt: 1, borderRadius: '5px' }}>Select Green</Typography>
          </Box>
          <Box mt={5} px={2}>
            <Grid container mt={10}>
              <Grid item xs={4}>
                <Typography variant="body1" color="initial">Balance </Typography>
              </Grid>
              <Grid item xs={8}>
                <Stack direction='row' alignItems={'center'} justifyContent={'space-between'} >
                  <Box sx={style.bacancebtn}>1</Box>
                  <Box sx={style.bacancebtn}>10</Box>
                  <Box sx={style.bacancebtn}>100</Box>
                  <Box sx={style.bacancebtn}>1000</Box>
                </Stack>
              </Grid>
            </Grid>
            <Grid container mt={2}>
              <Grid item xs={4}>
                <Typography variant="body1" color="initial">Quantity  </Typography>
              </Grid>
              <Grid item xs={8}>
                <Stack direction='row' alignItems={'center'} justifyContent={'space-between'} >
                  <Box sx={style.addsumbtn}>-</Box>
                  <TextField value={10} className="inputamt" />
                  <Box sx={style.addsumbtn}>+</Box>
                </Stack>
              </Grid>
            </Grid>
            <Grid container mt={2}>
              <Grid item xs={1}></Grid>
              <Grid item xs={12}>
                <Stack direction='row' alignItems={'center'} justifyContent={'end'} >
                  <Box sx={style.bacancebtn2}>X1</Box>
                  <Box sx={style.bacancebtn2}>X5</Box>
                  <Box sx={style.bacancebtn2}>X10</Box>
                  <Box sx={style.bacancebtn2}>X20</Box>
                  <Box sx={style.bacancebtn2}>X50</Box>
                  <Box sx={style.bacancebtn2}>X100</Box>
                </Stack>
              </Grid>
            </Grid>
          </Box>
          <Grid container mt={2}>
            <Grid item xs={12}>
              <Stack direction='row' alignItems='center'>
                <Checkbox checked /> <Typography variant="body1" color="initial" sx={{ color: 'gray', fontSize: '14px' }}>I agree</Typography>
                <Typography component={NavLink} onClick={handleClickPSR} sx={{
                  color: `${theme.palette.primary.main} !important`, cursor: 'pointer', fontSize: '14px',
                }}>《Pre-sale rules》</Typography>
              </Stack>
            </Grid>
          </Grid>
          <Grid container mt={2}>
            <Grid item xs={4}>
              <Button variant='contained' sx={style.cancelbtn} onClick={toggleDrawer(false)}>Cancel</Button>
            </Grid>
            <Grid item xs={8}>
              <Button variant='contained' sx={style.submitbtn} onClick={toggleDrawer(false)}>Total amount ₹ 1.00</Button>
            </Grid>
          </Grid>
        </Box>
      </Drawer>
      {/*  BATTING BOX END*/}

      {/* HOW TO PLAY  */}
      <Dialog open={HTP} sx={{ borderRadius: '10px !important' }}>
        <DialogContent sx={{ maxWidth: '280px', padding: 0, borderRadius: '10px !important' }}>
          <Box sx={{ backgroundImage: `url(${PreSaleBg})`, width: '100%', height: '50px', backgroundSize: 'cover !important', backgroundRepeat: 'no-repeat', }} className="htpbox">
          </Box>
          <Box sx={{ px: 1, '&>p': { padding: '2px 0px', fontSize: '13px', lineHeight: '16px', fontWeight: '700', color: '#707070' } }}>
            <Typography variant="body1" color="initial">
              1 minutes 1 issue, 55 seconds to order, 5 seconds waiting for the draw. It opens all day. The total number of trade is 1440 issues.
            </Typography>
            <Typography variant="body1" color="initial">
              If you spend 100 to trade, after deducting service fee 2%, contract amount : 98
            </Typography>
            <Typography variant="body1" color="initial">
              1. Select green: if the result shows 1,3,7,9 you will get (98*2)=196;If the result shows 5, you will get (98*1.5) 147s
            </Typography>
            <Typography variant="body1" color="initial">
              2. Select red: if the result shows 2,4,6,8 you will get (98*2)=196
            </Typography>
            <Typography variant="body1" color="initial">;If the result shows 0, you will get     (98*1.5) 147</Typography>
            <Typography variant="body1" color="initial">3. Select violet: if the result shows 0 or 5, you will get      (98*4.5) 441</Typography>
            <Typography variant="body1" color="initial">4. Select number: if the result is the same as the number you selected, you will get     (98*9)=882</Typography>
            <Typography variant="body1" color="initial">5. Select big: if the result shows 5,6,7,8,9 you will get     (98*2)=196</Typography>
            <Typography variant="body1" color="initial">6. Select small: if the result shows 0,1,2,3,4 you will get     (98*2)=196</Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleCloseHTP} sx={{ color: 'white', borderRadius: '20px', padding: '10px 100px', margin: 'auto' }}>Close</Button>
        </DialogActions>
      </Dialog>
      {/* HOW TO PLAY END */}

      {/* HOW TO PLAY  */}
      <Dialog open={PSR} sx={{ borderRadius: '10px !important' }}>
        <DialogContent sx={{ maxWidth: '280px', padding: 0, borderRadius: '10px !important' }}>
          <Box sx={{ backgroundImage: `url(${PreSaleBg})`, width: '100%', height: '50px', backgroundSize: 'cover !important', backgroundRepeat: 'no-repeat', }} className="htpbox">
          </Box>
          <Box sx={{ px: 1, '&>p': { padding: '2px 0px', fontSize: '13px', lineHeight: '16px', fontWeight: '700', color: '#707070' } }}>
            <Typography variant="body1" color="initial">
              "In order to protect the legitimate rights and interests of users participating in the pre-sale and maintain the normal operating
              order of the pre-sale, these rules are formulated in accordance with relevant agreements and laws and regulations. country Chapter
              1 Definition1.1 Pre-sale definition: refers to a sales model in which a seller offers a bundle of a product or service, collects
              consumer orders through product tools before selling, and makes it available to customers. consumers of goods and/or services by
              prior agreement1.2 Presale mode is "deposit" mode. "Consignment" refers to the pre-delivery of a fixed number of items prior to
              sale. "Deposit" Scam Join mini games for a chance to win more deposits. Deposits can be exchanged directly for goods. Deposit is
              not refundable.1.3 Pre-sale product: A product that is shipped by the seller using the pre-sale product tool. Only highlight the
              word presale on the product name or product detail page, and products that do not use the presale product tool are not presale.
              1.4 Pre-sale system: refers to the system product tool that helps sellers to sell samples before selling.1.5 Product price before selling:
              is the selling price of the product before selling. The price of pre-sale items consists of two parts: deposit and final payment. "
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleClosePSR} sx={{ color: 'white', borderRadius: '20px', padding: '10px 100px', margin: 'auto' }}>I know</Button>
        </DialogActions>
      </Dialog>
      {/* HOW TO PLAY END */}
    </Box >
  )
}

export default Wingo1Min

const style = {
  bacancebtn: { backgroundColor: '#40AD72', padding: '4px 13px', borderRadius: '20px', color: 'white', fontSize: '17px', fontWeight: '500', marginLeft: '5px' },
  bacancebtn2: { backgroundColor: '#40AD72', padding: '4px 13px', borderRadius: '1px', color: 'white', fontSize: '17px', fontWeight: '500', marginLeft: '5px' },
  bacancebtn3: { backgroundColor: '#40AD72', padding: '1px 5px', borderRadius: '6px', color: 'white', fontSize: '14px', fontWeight: '500', marginLeft: '5px', display: 'flex', alignItems: 'center', height: '30px', ['@media (max-width:340px)']: { fontSize: '13px' } },
  addsumbtn: { backgroundColor: '#40AD72', padding: '4px 13px', color: 'white', fontSize: '17px', fontWeight: '500', margin: '0px 5px' },
  cancelbtn: { width: '100%', borderRadius: '0px', color: 'white', backgroundColor: '#25253C', padding: 1 },
  submitbtn: { width: '100%', borderRadius: '0px', color: 'white', backgroundColor: '#40AD72', padding: 1 },
  bigbtn: { width: '50%', borderRadius: '20px 0px 0px 20px', color: 'white', fontSize: '16px', fontWeight: '500' },
  smlbtn: { width: '50%', borderRadius: '0px 20px 20px 0px', color: 'white', fontSize: '16px', fontWeight: '500', background: '#6DA7F4' },
  linetable: { '&>p': { fontSize: '12px', color: 'gray', border: '1px solid gray', borderRadius: '50%', width: '15px', height: '15px', textAlign: 'center', padding: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }, alignItems: 'center', justifyContent: 'space-between', '&>p:nth-last-child(1)': { width: '20px !important', height: '20px !important', } },
  linetable2: { '&>p': { fontSize: '12px', color: 'red', border: '1px solid red', borderRadius: '50%', width: '15px', height: '15px', textAlign: 'center', padding: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }, alignItems: 'center', justifyContent: 'space-between', },
  linetable3: { '&>p': { fontSize: '13px', textAlign: 'center', color: 'gray', padding: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }, alignItems: 'center', justifyContent: 'space-between', },

};
