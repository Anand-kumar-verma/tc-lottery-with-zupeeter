
import { Box, Container, Dialog, IconButton, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { ProfileDataFunction, logOutFunction } from "../../services/apiCallings";
import pr from "../../assets/images/pr.png";
import vip from "../../assets/images/vip.png";
import w1 from "../../assets/images/w1.png";
import wal from "../../assets/images/wal.png";
import dep from "../../assets/images/dep.png";
import wih from "../../assets/images/with.png";
import trx from "../../assets/images/trx.png";
import game from "../../assets/images/game.png";
import trans from "../../assets/images/trans.png";
import depo from "../../assets/images/depo.png";
import wit from "../../assets/images/witt.png";
import not from "../../assets/images/not.png";
import lang from "../../assets/images/lang.png";
import star from "../../assets/images/star.png";
import g from "../../assets/images/gift.png";
import b1 from "../../assets/images/b1.png";
import c1 from "../../assets/images/c1.png";
import a1 from "../../assets/images/a1.png";
import f1 from "../../assets/images/f1.png";
import n1 from "../../assets/images/n1.png";
import s1 from "../../assets/images/s1.png";
import l1 from "../../assets/images/l1.png";
import { ArrowForwardIos, CopyAll, GroupAddRounded } from "@mui/icons-material";
import { useQuery } from "react-query";
import CustomCircularProgress from "../../shared/loder/CustomCircularProgress";

function Account() {
  const user_id = localStorage.getItem("user_id");
  const navigate = useNavigate();

  const { isLoading, data } = useQuery(["profile"], () => ProfileDataFunction(), {
    refetchOnMount: false,
    refetchOnReconnect: true,
  });
  const profile = data?.data?.earning || [];

  return (
    <Container>
      <CustomCircularProgress isLoading={isLoading} />
      <Box
        sx={{
          padding: 1,
          background:
            "linear-gradient(90deg, rgb(255, 153, 1) 0%, rgb(230, 115, 1) 100%)",
          px: 2,
        }}
      >
        <Box className="flex justify-start items-center gap-1 mt-5">
          <Typography>
            <img src={pr} alt="" className="rounded-full w-20 h-18 mt-5" />
          </Typography>
          <Box className="flex flex-col gap-1">
            <Box className="flex justify-start items-center">
              <Typography className="!mt-5 !font-bold text-white">{profile?.rec?.Associate_Name}</Typography>
              <Typography>
                <img src={vip} alt="" className=" w-10 mt-6" />
              </Typography>
            </Box>
            <Box className="bg-[#ffd058] w-40 h-6 rounded-full p-1   realtive !left-40 flex gap-3 justify-center">
              <Typography className="text-white !text-xs">UID </Typography>
              <Typography className="text-white !text-xs">| </Typography>
              <Typography className="text-white !text-xs">{profile?.rec?.Login_Id} <CopyAll fontSize="small" /> </Typography>
            </Box>
            <Box className="flex justify-center items-center gap-1 text-white">
              <Typography className="!text-xs">Last login:</Typography>
              <Typography className="!text-xs">{profile?.rec?.Joining_Date} </Typography>

            </Box>
          </Box>
        </Box>
        <Box className="bg-white shadow-xl rounded-lg py-5 relative top-14">
          <Typography className="!text-gray-500 px-3">Total Balance</Typography>
          <Typography className="!font-bold px-3">₹{profile?.user?.tota_earning}
          </Typography>
          <Box className="flex justify-center gap-5 pt-5">
            <NavLink to="/wallet">
              <Box className="flex flex-col justify-center items-center">
                <Typography><img src={wal} alt="" className="w-16" /></Typography>
                <Typography>Wallet</Typography>
              </Box>
            </NavLink>
            <NavLink to="/deposit">
              <Box className="flex flex-col justify-center items-center">
                <Typography><img src={dep} alt="" className="w-16" /></Typography>
                <Typography>Deposit</Typography>
              </Box>
            </NavLink>
            <NavLink to="/withdraw">
              <Box className="flex flex-col justify-center items-center">
                <Typography><img src={wih} alt="" className="w-16" /></Typography>
                <Typography>Withdraw</Typography>
              </Box>
            </NavLink>
            <Box className="flex flex-col justify-center cursor-pointer items-center" onClick={() => document.location.href = `https://zupeegame.info/?user_id=${user_id}`}>
              <Typography><img src={trx} alt="" className="w-16" /></Typography>
              <Typography className="!ml-5">USTD</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="flex justify-center py-1 m-5 !mt-20 shadow rounded-lg bg-orange-400">
        <img src={w1} alt="" className="mt-5 h-10 m-1" />
        <Typography className="!text-white !font-bold !mt-2 ">SAFE</Typography>
        <Typography className="text-white !font-bold !text-sm !-ml-8 !mt-8">
          Daily interest rate 0.1%  + VIP extra income safe, calculated every 1 minute
        </Typography>
      </Box>
      <Box className="grid grid-cols-2 gap-3 m-4 !my-8">
        <Box className="flex gap-1 justify-center p-1 items-center  shadow-xl bg-white rounded-lg">
          <Typography><img src={game} alt="" className="w-16" /></Typography>
          <Typography className="">Game History <br /><span className="!text-xs !text-gray-500"> My game history</span></Typography>
        </Box>
        <Box className="flex gap-1 p-1 justify-center items-center shadow-xl bg-white rounded-lg">
          <Typography><img src={trans} alt="" className="w-16" /></Typography>
          <Typography>Transaction <br /><span className="!text-xs !text-gray-500"> My Transaction history</span></Typography>
        </Box>
        <NavLink to="/depositehistory">
          <Box className="flex gap-1 p-1 justify-center items-center shadow-xl bg-white rounded-lg">
            <Typography><img src={depo} alt="" className="w-16" /></Typography>
            <Typography>Deposit <br /><span className="!text-xs !text-gray-500"> My Deposit history</span></Typography>
          </Box>
        </NavLink>
        <NavLink to="/withdrawlhistory">
          <Box className="flex gap-1 p-1 justify-center items-center shadow-xl bg-white rounded-lg">
            <Typography><img src={wit} alt="" className="w-16" /></Typography>
            <Typography>Withdraw <br /><span className="!text-xs !text-gray-500"> My Withdraw history</span></Typography>
          </Box>
        </NavLink>

      </Box>
      <Box className="flex justify-center gap-2 border-b-2 p-2 m-3 py-5 bg-white shadow rounded-lg "
        onClick={() => navigate("/account/Teamincome")}>
        <Typography> <GroupAddRounded className="text-[#F48901] !mt-1" /></Typography>
        <Typography className="!mt-1 !text-lg text-gray-700"> Team/Income</Typography>
      </Box>
      <Box className="bg-white shadow rounded-lg flex flex-col justify-start p-1 m-3 !my-8">
        <Box className="flex justify-between gap-1 border-b-2 p-2">
        <Box className="flex items-center gap-1">
        <Typography> <img src={not} alt="" className="w-10" /></Typography>
          <Typography className="!mt-1 text-gray-500"> Notification</Typography>
        </Box>
         
          <IconButton> <ArrowForwardIos className="text-gray-500  " fontSize="small" /></IconButton>
        </Box>
        <Box className="flex justify-between gap-1 border-b-2 p-2">
          <Box className="flex items-center gap-1">
            <Typography> <img src={g} alt="" className="w-10" /></Typography>
            <Typography className="!mt-1 text-gray-500"> Gifts</Typography></Box>


          <IconButton> <ArrowForwardIos className="text-gray-500  " fontSize="small" /></IconButton>
        </Box>
        <Box className="flex justify-between gap-1 border-b-2 p-2">
          <Box className="flex items-center gap-1">
            <Typography> <img src={star} alt="" className="w-10" /></Typography>
            <Typography className="!mt-1 text-gray-500">Game Statics</Typography>
          </Box>
          <IconButton> <ArrowForwardIos className="text-gray-500  " fontSize="small" /></IconButton>
        </Box>
        <Box className="flex justify-between gap-1  p-2">
          <Box className="flex items-center gap-1">
            <Typography> <img src={lang} alt="" className="w-10" /></Typography>
            <Typography className="!mt-1 text-gray-500"> Language </Typography>
          </Box>
          <IconButton><ArrowForwardIos className="text-gray-500  " fontSize="small" /></IconButton>
        </Box>
      </Box>
      <Box className="bg-white shadow-xl rounded-lg !m-3 py-5">
        <Typography className=" px-3">Service Center</Typography>
        <Box className="grid grid-cols-3 m-5 justify-center gap-5">
          <Box className="flex flex-col justify-center items-center m-2">
            <Typography><img src={s1} alt="" className="w-8 " /></Typography>
            <Typography className="!text-sm">Settings</Typography>
          </Box>
          <Box className="flex flex-col justify-center items-center">
            <Typography><img src={f1} alt="" className="w-8 " /></Typography>
            <Typography className="!text-sm">Feedback</Typography>
          </Box>
          <Box className="flex flex-col justify-center items-center">
            <Typography><img src={n1} alt="" className="w-8 " /></Typography>
            <Typography className="!text-sm">Notification</Typography>
          </Box>
          <Box className="flex flex-col justify-center items-center">
            <Typography><img src={c1} alt="" className="w-8 " /></Typography>
            <Typography className=" !text-sm ml-2"> Service</Typography>
          </Box>
          <Box className="flex flex-col justify-center items-center">
            <Typography><img src={b1} alt="" className="w-8 " /></Typography>
            <Typography className=" !text-sm"> Guide</Typography>
          </Box>
          <Box className="flex flex-col justify-center items-center">
            <Typography><img src={a1} alt="" className="w-8 " /></Typography>
            <Typography className="!text-sm">About us</Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <button className="m-5 text-gray-500 flex w-80 p-1 bg-white shadow-2xl rounded-full gap-1 justify-center border border-gray-600"
          onClick={() => logOutFunction()}>
          <img src={l1} alt="" className="w-5 !mt-1" />
          Logout
        </button>
      </Box>
    </Container>
  );
}

export default Account;

