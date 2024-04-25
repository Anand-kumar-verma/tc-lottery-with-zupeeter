import VolumeUpIcon from "@mui/icons-material/VolumeUpOutlined";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import banner4 from "../../assets/images/banner4.jpg";
import banner5 from "../../assets/images/banner5.jpg";
import banner6 from "../../assets/images/banner6.jpg";
import banner7 from "../../assets/images/banner7.jpg";
import game1 from "../../assets/images/game1.png";
import game2 from "../../assets/images/game2.png";
import game3 from "../../assets/images/game3.png";
import game4 from "../../assets/images/game4.png";
import game5 from "../../assets/images/game5.png";
import game6 from "../../assets/images/game6.png";
import game7 from "../../assets/images/game7.png";
import game8 from "../../assets/images/game8.png";
import profile1 from "../../assets/images/profile1.png";
import profile2 from "../../assets/images/profile2.png";
import profile3 from "../../assets/images/profile3.png";
import profile4 from "../../assets/images/profile4.png";
import profile5 from "../../assets/images/profile5.png";
import winerbanner1 from "../../assets/images/winerbanner1.png";
import winerbanner2 from "../../assets/images/winerbanner2.png";
import Layout from "../../component/layout/Layout";
import theme from "../../utils/theme";
import Casino from "./component/Casino";
import Fishing from "./component/Fishing";
import Lottery from "./component/Lottery";
import MiniGames from "./component/MiniGames";
import PVC from "./component/PVC";
import Populer from "./component/Populer";
import Slots from "./component/Slots";
import Sports from "./component/Sports";
import podium from "../../assets/images/podium.png";
import place1 from "../../assets/images/place1.png";
import crown1 from "../../assets/images/crown1.png";
import place2 from "../../assets/images/place2.png";
import crown2 from "../../assets/images/crown2.png";
import place3 from "../../assets/images/place3.png";
import crown3 from "../../assets/images/crown3.png";

function Dashboard() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const [value, setValue] = useState(1);

  const handleChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

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
        <SwiperSlide>
          <Box component="img" src={banner1} sx={style.banner}></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src={banner2} sx={style.banner}></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src={banner3} sx={style.banner}></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src={banner4} sx={style.banner}></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src={banner5} sx={style.banner}></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src={banner6} sx={style.banner}></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src={banner7} sx={style.banner}></Box>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          px: 1,
          py: 1,
          background: "#FFFBE8",
        }}
      >
        <VolumeUpIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />
        <Typography
          variant="body1"
          color="initial"
          sx={{
            fontWeight: 500,
            fontSize: "10px",
            mr: 1,
            textAlign: "center",
            color: theme.palette.primary.main,
          }}
        >
          1.All recharge methods only available in RECHARGE menu on OFFICIAL
        </Typography>
        <Button
          sx={{ background: theme.palette.primary.main, color: "white" }}
          className="detailsbutton"
        >
          <WhatshotIcon /> Details
        </Button>
      </Stack>
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          padding: "4px 15px",
          mt: 1,
        }}
      >
        <NavLink onClick={() => handleChange(1)}>
          <Box
            className="gamecategory "
            sx={{
              background:
                value === 1 &&
                " linear-gradient(157deg, #FF9902 0%, #FFD058 100%) !important;",
              borderRadius: value === 1 && "10px !important",
            }}
          >
            <Box component="img" src={game1}></Box>
          </Box>
          <Typography variant="body1" color="initial" sx={style.gamecattext}>
            Lottery
          </Typography>
        </NavLink>
        <NavLink onClick={() => handleChange(2)}>
          <Box
            className="gamecategory"
            sx={{
              background:
                value === 2 &&
                " linear-gradient(157deg, #FF9902 0%, #FFD058 100%) !important;",
              borderRadius: value === 2 && "10px !important",
            }}
          >
            <Box component="img" src={game2}></Box>
          </Box>
          <Typography variant="body1" color="initial" sx={style.gamecattext}>
            Slots
          </Typography>
        </NavLink>
        <NavLink onClick={() => handleChange(3)}>
          <Box
            className="gamecategory"
            sx={{
              background:
                value === 3 &&
                " linear-gradient(157deg, #FF9902 0%, #FFD058 100%) !important;",
              borderRadius: value === 3 && "10px !important",
            }}
          >
            <Box component="img" src={game3}></Box>
          </Box>
          <Typography variant="body1" color="initial" sx={style.gamecattext}>
            Sports
          </Typography>
        </NavLink>
        <NavLink onClick={() => handleChange(4)}>
          <Box
            className="gamecategory"
            sx={{
              background:
                value === 4 &&
                " linear-gradient(157deg, #FF9902 0%, #FFD058 100%) !important;",
              borderRadius: value === 4 && "10px !important",
            }}
          >
            <Box component="img" src={game4}></Box>
          </Box>
          <Typography variant="body1" color="initial" sx={style.gamecattext}>
            Casino
          </Typography>
        </NavLink>
      </Stack>
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          padding: "4px 15px",
        }}
      >
        <NavLink onClick={() => handleChange(5)}>
          <Box
            className="gamecategory"
            sx={{
              background:
                value === 5 &&
                " linear-gradient(157deg, #FF9902 0%, #FFD058 100%) !important;",
              borderRadius: value === 5 && "10px !important",
            }}
          >
            <Box component="img" src={game8}></Box>
          </Box>
          <Typography variant="body1" color="initial" sx={style.gamecattext}>
            PVC
          </Typography>
        </NavLink>
        <NavLink onClick={() => handleChange(6)}>
          <Box
            className="gamecategory"
            sx={{
              background:
                value === 6 &&
                " linear-gradient(157deg, #FF9902 0%, #FFD058 100%) !important;",
              borderRadius: value === 6 && "10px !important",
            }}
          >
            <Box component="img" src={game7}></Box>
          </Box>
          <Typography variant="body1" color="initial" sx={style.gamecattext}>
            Fishing
          </Typography>
        </NavLink>
        <NavLink onClick={() => handleChange(7)}>
          <Box
            className="gamecategory"
            sx={{
              background:
                value === 7 &&
                " linear-gradient(157deg, #FF9902 0%, #FFD058 100%) !important;",
              borderRadius: value === 7 && "10px !important",
            }}
          >
            <Box component="img" src={game6}></Box>
          </Box>
          <Typography variant="body1" color="initial" sx={style.gamecattext}>
            Mini games
          </Typography>
        </NavLink>
        <NavLink onClick={() => handleChange(8)}>
          <Box
            className="gamecategory"
            sx={{
              background:
                value === 8 &&
                " linear-gradient(157deg, #FF9902 0%, #FFD058 100%) !important;",
              borderRadius: value === 8 && "10px !important",
            }}
          >
            <Box component="img" src={game5}></Box>
          </Box>
          <Typography variant="body1" color="initial" sx={style.gamecattext}>
            Popular
          </Typography>
        </NavLink>
      </Stack>
      {value === 1 && <Lottery />}
      {value === 2 && <Slots />}
      {value === 3 && <Sports />}
      {value === 4 && <Casino />}
      {value === 5 && <PVC />}
      {value === 6 && <Fishing />}
      {value === 7 && <MiniGames />}
      {value === 8 && <Populer />}
      <Box sx={{ px: 2 }}>
        <Stack direction={"row"} sx={{ alignItems: "center" }}>
          <Box
            sx={{
              background: theme.palette.primary.main,
              width: "4px",
              height: "16px",
            }}
          ></Box>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: "18px", fontWeight: 700, ml: 1 }}
          >
            Winning information
          </Typography>
        </Stack>
        <Box>
          <Stack direction="row" sx={style.winnerslider}>
            <Box
              width={45}
              height={45}
              component={"img"}
              src={profile1}
              sx={style.winnerprofile}
            ></Box>
            <Typography variant="body1" color="initial" sx={style.winnername}>
              mrm***iop
            </Typography>
            <Box sx={style.winnerbannerouter}>
              <Box
                height={45}
                component={"img"}
                src={winerbanner1}
                sx={style.winnerbannerinner}
              ></Box>
            </Box>
            <Box>
              <Typography
                variant="body1"
                color="initial"
                sx={style.winneramout}
              >
                Receive ₹338.88
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={style.winnertitle}
              >
                Winning amount
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" sx={style.winnerslider}>
            <Box
              width={45}
              height={45}
              component={"img"}
              src={profile2}
              sx={style.winnerprofile}
            ></Box>
            <Typography variant="body1" color="initial" sx={style.winnername}>
              mrm***iop
            </Typography>
            <Box sx={style.winnerbannerouter}>
              <Box
                height={45}
                component={"img"}
                src={winerbanner2}
                sx={style.winnerbannerinner}
              ></Box>
            </Box>
            <Box>
              <Typography
                variant="body1"
                color="initial"
                sx={style.winneramout}
              >
                Receive ₹338.88
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={style.winnertitle}
              >
                Winning amount
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" sx={style.winnerslider}>
            <Box
              width={45}
              height={45}
              component={"img"}
              src={profile3}
              sx={style.winnerprofile}
            ></Box>
            <Typography variant="body1" color="initial" sx={style.winnername}>
              mrm***iop
            </Typography>
            <Box sx={style.winnerbannerouter}>
              <Box
                height={45}
                component={"img"}
                src={winerbanner1}
                sx={style.winnerbannerinner}
              ></Box>
            </Box>
            <Box>
              <Typography
                variant="body1"
                color="initial"
                sx={style.winneramout}
              >
                Receive ₹338.88
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={style.winnertitle}
              >
                Winning amount
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" sx={style.winnerslider}>
            <Box
              width={45}
              height={45}
              component={"img"}
              src={profile4}
              sx={style.winnerprofile}
            ></Box>
            <Typography variant="body1" color="initial" sx={style.winnername}>
              mrm***iop
            </Typography>
            <Box sx={style.winnerbannerouter}>
              <Box
                height={45}
                component={"img"}
                src={winerbanner2}
                sx={style.winnerbannerinner}
              ></Box>
            </Box>
            <Box>
              <Typography
                variant="body1"
                color="initial"
                sx={style.winneramout}
              >
                Receive ₹338.88
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={style.winnertitle}
              >
                Winning amount
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" sx={style.winnerslider}>
            <Box
              width={45}
              height={45}
              component={"img"}
              src={profile5}
              sx={style.winnerprofile}
            ></Box>
            <Typography variant="body1" color="initial" sx={style.winnername}>
              mrm***iop
            </Typography>
            <Box sx={style.winnerbannerouter}>
              <Box
                height={45}
                component={"img"}
                src={winerbanner1}
                sx={style.winnerbannerinner}
              ></Box>
            </Box>
            <Box>
              <Typography
                variant="body1"
                color="initial"
                sx={style.winneramout}
              >
                Receive ₹338.88
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={style.winnertitle}
              >
                Winning amount
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
      <Box sx={{ px: 2, py: 3 }}>
        <Stack direction={"row"} sx={{ alignItems: "center" }}>
          <Box
            sx={{
              background: theme.palette.primary.main,
              width: "4px",
              height: "16px",
            }}
          ></Box>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: "18px", fontWeight: 700, ml: 1 }}
          >
            Today's earnings chart
          </Typography>
        </Stack>
        <Box sx={{ mt: 5 }}>
          <Box sx={style.podiumbox}>
            <Stack direction="row" sx={style.podiumtextouterbox}>
              <Box sx={style.winner2box}>
                <Box
                  component={"img"}
                  src={crown2}
                  sx={style.winnercroun}
                ></Box>
                <Box
                  component={"img"}
                  src={profile1}
                  sx={style.winnerprofilepod}
                ></Box>
                <Box
                  component={"img"}
                  src={place2}
                  sx={style.winnerposition}
                ></Box>
                <Box sx={style.winner2amt}>
                  <Typography variant="body1" color="initial">
                    Mem***SMJ
                  </Typography>
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={style.winningamount}
                  >
                    ₹97,974,520.00
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "30%",
                  position: "absolute",
                  zIndex: 30,
                  top: "-18%",
                  left: "33.33%",
                  height: "100%",
                }}
              >
                <Box
                  component={"img"}
                  src={crown1}
                  sx={style.winnercroun}
                ></Box>
                <Box
                  component={"img"}
                  src={profile2}
                  sx={style.winnerprofilepod}
                ></Box>
                <Box
                  component={"img"}
                  src={place1}
                  sx={style.winnerposition}
                ></Box>
                <Box sx={style.winner2amt}>
                  <Typography variant="body1" color="initial">
                    Mem***SMJ
                  </Typography>
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={style.winningamount}
                  >
                    ₹97,974,520.00
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  width: "30%",
                  position: "absolute",
                  zIndex: 30,
                  top: 0,
                  right: 0,
                  height: "100%",
                }}
              >
                <Box
                  component={"img"}
                  src={crown3}
                  sx={style.winnercroun}
                ></Box>
                <Box
                  component={"img"}
                  src={profile3}
                  sx={style.winnerprofilepod}
                ></Box>
                <Box
                  component={"img"}
                  src={place3}
                  sx={style.winnerposition}
                ></Box>
                <Box sx={style.winner2amt}>
                  <Typography variant="body1" color="initial">
                    Mem***SMJ
                  </Typography>
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={style.winningamount}
                  >
                    ₹97,974,520.00
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Box>
          <Stack
            direction="row"
            sx={{
              ...style.winnerslider,
              marginTop: "-15px",
              position: "relative",
              zIndex: 20,
            }}
          >
            <Box
              width={45}
              height={45}
              component={"img"}
              src={profile4}
              sx={style.winnerprofile}
            ></Box>
            <Typography variant="body1" color="initial" sx={style.winnername}>
              mrm***iop
            </Typography>
            <Box sx={style.winnerbannerouter}>
              <Box
                height={45}
                component={"img"}
                src={winerbanner2}
                sx={style.winnerbannerinner}
              ></Box>
            </Box>
            <Box>
              <Typography
                variant="body1"
                color="initial"
                sx={style.winneramout}
              >
                Receive ₹338.88
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={style.winnertitle}
              >
                Winning amount
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" sx={style.winnerslider}>
            <Box
              width={45}
              height={45}
              component={"img"}
              src={profile5}
              sx={style.winnerprofile}
            ></Box>
            <Typography variant="body1" color="initial" sx={style.winnername}>
              mrm***iop
            </Typography>
            <Box sx={style.winnerbannerouter}>
              <Box
                height={45}
                component={"img"}
                src={winerbanner1}
                sx={style.winnerbannerinner}
              ></Box>
            </Box>
            <Box>
              <Typography
                variant="body1"
                color="initial"
                sx={style.winneramout}
              >
                Receive ₹338.88
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={style.winnertitle}
              >
                Winning amount
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Layout>
  );
}

export default Dashboard;
const style = {
  banner: { height: "180px !important" },
  gamecattext: {
    textAlign: "center",
    textDecoration: "none !important",
    fontSize: "11px",
    fontWeight: 500,
    mt: 1,
  },
  winbox: {
    background: "#F4F5F8",
    borderRadius: "20px",
    height: "160px",
    marginBottom: "20px",
    position: "relative",
  },
  positiongame: { position: "absolute", top: "10px", left: "20px" },
  gameheading: { fontSize: "20px", fontWeight: 700, color: "white" },
  winnerslider: {
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px 0px 10px 5px",
    background: "#fff",
    borderRadius: "10px",
    my: 1.5,
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },
  winnerprofile: {
    borderRadius: "50%",
    objectPosition: "center",
    objectFit: "cover",
  },
  winnername: { fontSize: "12px", fontWeight: 400, mx: 1 },
  winnerbannerouter: {
    background: theme.palette.primary.main,
    width: "23%",
    borderRadius: "10px",
    objectPosition: "center",
  },
  winnerbannerinner: {
    width: "100%",
    borderRadius: "10px",
    objectPosition: "center",
    objectFit: "cover",
  },
  winneramout: { fontSize: "12px", fontWeight: 600, marginLeft: 1 },
  winnertitle: { fontSize: "11px", fontWeight: 400, marginLeft: 1 },
  podiumbox: {
    backgroundImage: `url(${podium})`,
    width: "100%",
    height: "140px",
    marginTop: "65px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    position: "relative",
    zIndex: 10,
  },
  podiumtextouterbox: { width: "100%", height: "100%", position: "relative" },
  winner2box: {
    width: "30%",
    position: "absolute",
    zIndex: 30,
    top: 0,
    left: 0,
    height: "100%",
  },
  winnerposition: {
    width: "70px",
    height: "50px",
    objectFit: "contain",
    position: "absolute",
    left: "21%",
    top: "14%",
  },
  winnerprofilepod: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    objectFit: "cover",
    position: "absolute",
    left: "25%",
    top: "-11%",
  },
  winnercroun: {
    width: "50px",
    height: "50px",
    objectFit: "contain",
    position: "absolute",
    left: "11%",
    top: "-25%",
    zIndex: 1000,
  },
  winner2amt: {
    width: "100%",
    position: "absolute",
    left: 0,
    bottom: "22%",
    textAlign: "center",
    "&>p": { color: "white", fontWeight: 400, fontSize: "11px" },
  },
  winningamount: {
    marginTop: "5px",
    padding: "5px",
    borderRadius: "10px",
    background: "linear-gradient(90deg, #F79400 0%, #E67401 100%)",
  },
};