import { Box, Button, Typography, Grid, Stack, Container, TextField, Checkbox, ButtonGroup, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material'
import backbanner from '../../../assets/images/winbackbanner.png'
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
import Drawer from '@mui/material/Drawer';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import { useState } from 'react'
import Testpage from '../../Testpage'
import { NavLink } from 'react-router-dom'
import theme from '../../../utils/theme'
import Pagination from '@mui/material/Pagination';



function Wingo1Min() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const [value, setValue] = useState(1);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  return (
    <Box>


      <Box sx={{ px: 1, mt: 3 }}>
        <Box sx={{ backgroundImage: `url(${backbanner})`, backgroundSize: '100% 100%', padding: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button variant="text" color="primary" className='htpbutton'>
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
            <TableContainer component={Paper} >
              <Table sx={{ maxWidth: 400 }} aria-label="simple table">
                <TableHead sx={{ background: theme.palette.primary.main, '&>tr>th': { padding: 1, fontSize: '13px', fontWeight: 700, color: 'white' } }}>
                  <TableRow>
                    <TableCell align="start">Period</TableCell>
                    <TableCell align="start">Number</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody sx={{ '&>tr>td:nth-child(1)': { padding: '10px 5px !important', border: 'none', width: '25%', }, '&>tr>td:nth-child(2)': { padding: '10px 5px !important', border: 'none', }, '&>tr': { borderBottom: '1px solid #ced4d7', } }}>
                  <TableRow colSpan={2}>
                    <Box sx={{ width: '100%', padding: 1, }}>
                      <Typography variant="body1" color="initial">Statistic (last 100 Periods)</Typography>
                    </Box>
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
                <Typography component='a' sx={{
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
};
