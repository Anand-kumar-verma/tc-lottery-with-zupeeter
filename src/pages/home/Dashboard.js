import Layout from "../../component/layout/Layout"
import React, { useRef, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Box, Button, Stack, Typography, Grid } from "@mui/material";
import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpg'
import banner3 from '../../assets/images/banner3.jpg'
import banner4 from '../../assets/images/banner4.jpg'
import banner5 from '../../assets/images/banner5.jpg'
import banner6 from '../../assets/images/banner6.jpg'
import banner7 from '../../assets/images/banner7.jpg'
import VolumeUpIcon from '@mui/icons-material/VolumeUpOutlined';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import theme from "../../utils/theme";
import { NavLink } from "react-router-dom";
import game1 from '../../assets/images/game1.png'
import game2 from '../../assets/images/game2.png'
import game3 from '../../assets/images/game3.png'
import game4 from '../../assets/images/game4.png'
import game5 from '../../assets/images/game5.png'
import game6 from '../../assets/images/game6.png'
import game7 from '../../assets/images/game7.png'
import game8 from '../../assets/images/game8.png'
import Lottery from './component/Lottery'
import Slots from "./component/Slots";
import Sports from "./component/Sports";
import Casino from "./component/Casino";
import PVC from "./component/PVC";
import Fishing from "./component/Fishing";
import MiniGames from "./component/MiniGames";
import Populer from "./component/Populer";
import profile1 from '../../assets/images/profile1.png'
import profile2 from '../../assets/images/profile2.png'
import profile3 from '../../assets/images/profile3.png'
import profile4 from '../../assets/images/profile4.png'
import profile5 from '../../assets/images/profile5.png'
import profile6 from '../../assets/images/profile6.png'





function Dashboard() {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    const [value, setValue] = useState(1);

    const handleChange = (newValue) => {
        console.log(newValue)
        setValue(newValue);
    };


    const style = {
        banner: { height: '180px !important' },
        gamecattext: { textAlign: 'center', textDecoration: 'none !important', fontSize: '11px', fontWeight: 500, mt: 1 },
        winbox: { background: '#F4F5F8', borderRadius: '20px', height: '160px', marginBottom: '20px', position: 'relative' },
        positiongame: { position: 'absolute', top: '10px', left: '20px' },
        gameheading: { fontSize: '20px', fontWeight: 700, color: 'white' },
    }


    return (
        <Layout>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide><Box component='img' src={banner1} sx={style.banner}></Box></SwiperSlide>
                <SwiperSlide><Box component='img' src={banner2} sx={style.banner}></Box></SwiperSlide>
                <SwiperSlide><Box component='img' src={banner3} sx={style.banner}></Box></SwiperSlide>
                <SwiperSlide><Box component='img' src={banner4} sx={style.banner}></Box></SwiperSlide>
                <SwiperSlide><Box component='img' src={banner5} sx={style.banner}></Box></SwiperSlide>
                <SwiperSlide><Box component='img' src={banner6} sx={style.banner}></Box></SwiperSlide>
                <SwiperSlide><Box component='img' src={banner7} sx={style.banner}></Box></SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
            <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between', px: 1, py: 1, background: '#FFFBE8' }}>
                < VolumeUpIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />
                <Typography variant="body1" color="initial" sx={{ fontWeight: 500, fontSize: '10px', mr: 1, textAlign: 'center', color: theme.palette.primary.main }}>1.All recharge methods only available in RECHARGE menu on OFFICIAL

                </Typography>
                <Button sx={{ background: theme.palette.primary.main, color: 'white', }} className="detailsbutton"><WhatshotIcon /> Details</Button>
            </Stack>
            <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between', padding: '4px 15px', mt: 1 }}>
                <NavLink onClick={() => handleChange(1)}>
                    <Box className="gamecategory " sx={{
                        background: value === 1 && ' linear-gradient(157deg, #FF9902 0%, #FFD058 100%) !important;',
                        borderRadius: value === 1 && '10px !important',
                    }}>
                        <Box component='img' src={game1}></Box>
                    </Box>
                    <Typography variant="body1" color="initial" sx={style.gamecattext}>Lottery</Typography>
                </NavLink>
                <NavLink onClick={() => handleChange(2)}>
                    <Box className="gamecategory" sx={{
                        background: value === 2 && ' linear-gradient(157deg, #FF9902 0%, #FFD058 100%) !important;',
                        borderRadius: value === 2 && '10px !important',
                    }}>
                        <Box component='img' src={game2}></Box>
                    </Box>
                    <Typography variant="body1" color="initial" sx={style.gamecattext}>Slots</Typography>
                </NavLink>
                <NavLink onClick={() => handleChange(3)}>
                    <Box className="gamecategory" sx={{
                        background: value === 3 && ' linear-gradient(157deg, #FF9902 0%, #FFD058 100%) !important;',
                        borderRadius: value === 3 && '10px !important',
                    }}>
                        <Box component='img' src={game3}></Box>
                    </Box>
                    <Typography variant="body1" color="initial" sx={style.gamecattext}>Sports</Typography>
                </NavLink>
                <NavLink onClick={() => handleChange(4)}>
                    <Box className="gamecategory" sx={{
                        background: value === 4 && ' linear-gradient(157deg, #FF9902 0%, #FFD058 100%) !important;',
                        borderRadius: value === 4 && '10px !important',
                    }}>
                        <Box component='img' src={game4}></Box>
                    </Box>
                    <Typography variant="body1" color="initial" sx={style.gamecattext}>Casino</Typography>
                </NavLink>
            </Stack>
            <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between', padding: '4px 15px' }}>
                <NavLink onClick={() => handleChange(5)}>
                    <Box className="gamecategory" sx={{
                        background: value === 5 && ' linear-gradient(157deg, #FF9902 0%, #FFD058 100%) !important;',
                        borderRadius: value === 5 && '10px !important',
                    }}>
                        <Box component='img' src={game8}></Box>
                    </Box>
                    <Typography variant="body1" color="initial" sx={style.gamecattext}>PVC</Typography>
                </NavLink>
                <NavLink onClick={() => handleChange(6)}>
                    <Box className="gamecategory" sx={{
                        background: value === 6 && ' linear-gradient(157deg, #FF9902 0%, #FFD058 100%) !important;',
                        borderRadius: value === 6 && '10px !important',
                    }}>
                        <Box component='img' src={game7}></Box>
                    </Box>
                    <Typography variant="body1" color="initial" sx={style.gamecattext}>Fishing</Typography>
                </NavLink>
                <NavLink onClick={() => handleChange(7)}>
                    <Box className="gamecategory" sx={{
                        background: value === 7 && ' linear-gradient(157deg, #FF9902 0%, #FFD058 100%) !important;',
                        borderRadius: value === 7 && '10px !important',
                    }}>
                        <Box component='img' src={game6}></Box>
                    </Box>
                    <Typography variant="body1" color="initial" sx={style.gamecattext}>Mini games</Typography>
                </NavLink>
                <NavLink onClick={() => handleChange(8)}>
                    <Box className="gamecategory" sx={{
                        background: value === 8 && ' linear-gradient(157deg, #FF9902 0%, #FFD058 100%) !important;',
                        borderRadius: value === 8 && '10px !important',
                    }}>
                        <Box component='img' src={game5}></Box>
                    </Box>
                    <Typography variant="body1" color="initial" sx={style.gamecattext}>Popular</Typography>
                </NavLink>
            </Stack>
            {value == 1 &&
                <Lottery />
            }
            {
                value == 2 &&
                <Slots />
            }
            {
                value == 3 &&
                <Sports />
            }
            {
                value == 4 &&
                <Casino />
            }
            {
                value == 5 &&
                <PVC />
            }
            {
                value == 6 &&
                <Fishing />
            }
            {
                value == 7 &&
                <MiniGames />
            }
            {
                value == 8 &&
                <Populer />
            }
            <Box sx={{ px: 2 }}>
                <Stack direction={'row'} sx={{ alignItems: 'center' }}>
                    <Box sx={{ background: theme.palette.primary.main, width: '4px', height: '16px' }}></Box>
                    <Typography variant="body1" color="initial" sx={{ fontSize: '18px', fontWeight: 700, ml: 1 }}>Winning information</Typography>
                </Stack>
                <Box>
                    <Stack direction='row' sx={{ alignItems: 'center', py: 1, px: 1, background: '#fff', borderRadius: '10px', my: 2, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', }}>
                        <Box width={45} height={45} component={'img'} src={profile1} sx={{ borderRadius: '50%', objectPosition: 'center' }}></Box>
                        <Typography variant="body1" color="initial" sx={{ fontSize: '12px', fontWeight: 600, mx: 1, }}>mrm***iop</Typography>
                        <Box width={70} height={45} component={'img'} src={profile1} sx={{ borderRadius: '10px', objectPosition: 'center' }}></Box>
                        <Box sx={{ mx: 1 }}>
                            <Typography variant="body1" color="initial" sx={{ fontSize: '13px', fontWeight: 700, mx: 1, }}>Receive ₹338.88</Typography>
                            <Typography variant="body1" color="initial" sx={{ fontSize: '12px', fontWeight: 600, mx: 1, }}>Winning amount</Typography>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Layout >
    )

}

export default Dashboard


