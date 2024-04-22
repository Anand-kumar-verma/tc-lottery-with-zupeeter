import { Box, Stack, Typography } from "@mui/material";
import React from 'react';
import { NavLink } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import lotteryimg from '../../../assets/images/lottery.png';
import lotterycategory1 from '../../../assets/images/lotterycategory1.png';
import lotterycategory2 from '../../../assets/images/lotterycategory2.png';
import lotterycategory3 from '../../../assets/images/lotterycategory3.png';
import lotterycategory4 from '../../../assets/images/lotterycategory4.png';
import win from '../../../assets/images/win.png';
import win2 from '../../../assets/images/win2.png';
import win3 from '../../../assets/images/win3.png';
import win4 from '../../../assets/images/win4.png';


function lottery() {

    const style = {
        winbox: { background: '#e9e9e9', borderRadius: '20px', height: '160px', marginBottom: '30px', position: 'relative', boxShadow: '0 0.05333rem 0.10667rem #c5c5da42', },
        positiongame: {
            position: 'absolute', top: '10px', left: '20px',
            '&>div>p': { fontSize: '12px', fontWeight: 400, color: 'white' }
        },
        gameheading: { fontSize: '20px', fontWeight: 700, color: 'white' },
    }

    return (
        <Box sx={{ padding: '15px' }}>
            <Stack direction='row' sx={{ alignItems: 'center', mb: 2 }}>
                <Box component='img' src={lotteryimg} width={25} ></Box>
                <Typography variant="body1" color="initial" sx={{ ml: 1, fontSize: '15px', fontWeight: 600 }}>
                    Lottery
                </Typography>
            </Stack>
            <NavLink to="/wingo">
                <Box sx={style.winbox}>
                    <Box component='img' src={win} sx={{ width: '100%', height: '70%' }}></Box>
                    <Box sx={style.positiongame}>
                        <Typography variant="body1" color="initial" sx={style.gameheading}>Win Go </Typography>
                        <Box sx={{ mt: '15px' }}>
                            <Typography variant="body1" color="initial" >Guess Number</Typography>
                            <Typography variant="body1" color="initial ">Green/Red/Purple to win</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ position: 'absolute', top: '-20px', right: '5px' }}>
                        <Box component='img' src={lotterycategory1} sx={{ width: '100px', }}></Box>
                    </Box>
                </Box>
            </NavLink>
            <NavLink>
                <Box sx={style.winbox}>
                    <Box component='img' src={win2} sx={{ width: '100%', height: '70%' }}></Box>
                    <Box sx={style.positiongame}>
                        <Typography variant="body1" color="initial" sx={style.gameheading}>K3 Lotre </Typography>
                        <Box sx={{ mt: '15px' }}>
                            <Typography variant="body1" color="initial" >Guess Number</Typography>
                            <Typography variant="body1" color="initial ">Big/Small/Odd/Even</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ position: 'absolute', top: '-20px', right: '5px' }}>
                        <Box component='img' src={lotterycategory2} sx={{ width: '100px', }}></Box>
                    </Box>
                </Box>
            </NavLink>
            <NavLink>
                <Box sx={style.winbox}>
                    <Box component='img' src={win3} sx={{ width: '100%', height: '70%' }}></Box>
                    <Box sx={style.positiongame}>
                        <Typography variant="body1" color="initial" sx={style.gameheading}>5D Lotre </Typography>
                        <Box sx={{ mt: '15px' }}>
                            <Typography variant="body1" color="initial" >Guess Number</Typography>
                            <Typography variant="body1" color="initial ">Big/Small/Odd/Even</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ position: 'absolute', top: '-20px', right: '5px' }}>
                        <Box component='img' src={lotterycategory3} sx={{ width: '100px', }}></Box>
                    </Box>
                </Box>
            </NavLink>
            <NavLink>
                <Box sx={style.winbox}>
                    <Box component='img' src={win4} sx={{ width: '100%', height: '70%' }}></Box>
                    <Box sx={style.positiongame}>
                        <Typography variant="body1" color="initial" sx={style.gameheading}>Trx Win </Typography>
                        <Box sx={{ mt: '15px' }}>
                            <Typography variant="body1" color="initial" >Guess Number</Typography>
                            <Typography variant="body1" color="initial ">Green/Red/Purple to win</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ position: 'absolute', top: '-20px', right: '5px' }}>
                        <Box component='img' src={lotterycategory4} sx={{ width: '100px', }}></Box>
                    </Box>
                </Box>
            </NavLink>
        </Box >
    )
}

export default lottery
