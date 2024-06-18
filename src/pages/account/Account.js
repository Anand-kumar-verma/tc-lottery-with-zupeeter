
import { Box, Container, Dialog, IconButton, Typography } from "@mui/material";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ProfileDataFunction, Update_ProfileFn, getBalanceFunction, logOutFunction, showRank } from "../../services/apiCallings";
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
import { ArrowForwardIos, BorderColor, CopyAll, GroupAddRounded } from "@mui/icons-material";
import { useQuery, useQueryClient } from "react-query";
import CustomCircularProgress from "../../shared/loder/CustomCircularProgress";
import Layout from "../../component/layout/Layout";
import { useEffect, useState } from "react";
import { endpoint, front_end_domain } from "../../services/urls";
import axios from "axios";
import ImageSelectorModal from "./ImageSelectorModal";
import toast from "react-hot-toast";

function Account() {
  const or_m_user_type = localStorage.getItem("or_m_user_type");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const transactionId = searchParams?.get("orderid");
  const client = useQueryClient();
  const user_id = localStorage.getItem("user_id");
  const navigate = useNavigate();
  const [opend, setOpend] = useState(false);
  const [selectedImages, setselectedImages] = useState("");
  console.log(selectedImages)
  const images = [
    "https://mui.com/static/images/avatar/2.jpg",
    "https://mui.com/static/images/avatar/3.jpg",
    "https://mui.com/static/images/avatar/4.jpg",
    "https://mui.com/static/images/avatar/1.jpg" ,
   "https://mui.com/static/images/avatar/5.jpg"
  ];
  const { isLoading, data } = useQuery(["profile"], () => ProfileDataFunction(), {
    refetchOnMount: false,
    refetchOnReconnect: true,
  });
  const profile = data?.data?.earning || [];

  const [balance, setBalance] = useState("");
  const { data: wallet_amount } = useQuery(
    ["wallet_amount_amount"],
    () => getBalanceFunction(setBalance),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );
  const wallet_amount_data = wallet_amount?.data?.earning || 0;

  const { data: update_pic } = useQuery(
    ["Update_pic", selectedImages],
    () => Update_ProfileFn(selectedImages, client),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );

  async function sendUrlCallBackToBackend(transactionId) {
    try {
      const res = await axios.get(
        `${endpoint?.payin_response_akash}?orderid=${transactionId}`
      );

      if (res?.data?.status === "200") {
        window.location.href = `${front_end_domain}/account`
      }
      console.log(res);
    } catch (e) {
      console.log(e);
    }
    client.removeQueries("profile");
    client.removeQueries("wallet_amount_amount");
  }

  useEffect(() => {
    if (transactionId) {
      sendUrlCallBackToBackend(transactionId);
    }
  }, []);

  return (
    <Layout header={false}>
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
          <Box className="flex justify-start items-center gap-1 ">
            <Typography className=" !mt-10 !mr-1"
              onClick={() => setOpend(true)}>
              <img src={profile?.rec?.User_image} alt="" className='!rounded-full  w-[72px] h-[72px]' />
              <BorderColor fontSize="small" className="!text-white !-mt-10 !ml-10 !rounded-full !bg-gray-400  " />
            </Typography>
            <ImageSelectorModal
              setOpend={setOpend}
              setselectedImages={setselectedImages}
              open={opend}
              onClose={() => setOpend(false)}
              images={images} />
            <Box className="flex flex-col gap-1">
              <Box className="flex justify-start items-center">
                <Typography className="!mt-5 !font-bold text-white">{profile?.rec?.Associate_Name}</Typography>
                <Typography>
                  <img src={vip} alt="" className=" w-10 mt-6" />
                </Typography>
              </Box>
              <Box className="bg-gray-600 w-40 h-6 rounded-full p-1   realtive !left-40 flex gap-3 justify-center">
                <Typography className="text-white !text-xs">UID </Typography>
                <Typography className="text-white !text-xs">| </Typography>
                <Typography className="text-white !text-xs">{profile?.rec?.Login_Id} <CopyAll fontSize="small" /> </Typography>
              </Box>
              {profile?.rec?.Club !== 0 && 
              <Box className="  realtive !left-36 flex gap-3 justify-center">
                <Typography className="text-white !text-sm">Rank: </Typography>
                <Typography className="text-white !text-sm">{showRank(profile?.rec?.Club)}</Typography>
              </Box>}
            </Box>
          </Box>
          <Box className="bg-white shadow-xl rounded-lg py-5 relative top-8">
            <Typography className="!text-gray-500 px-3">Total Balance</Typography>
            <Typography className="!font-bold px-3"> ₹ {Number(wallet_amount_data || 0)?.toFixed(2)}
            </Typography>
            <Box className="flex justify-center gap-8 pt-5">
              <NavLink to="/wallet">
                <Box className="flex flex-col justify-center items-center">
                  <Typography><img src={wal} alt="" className="w-8" /></Typography>
                  <Typography>Wallet</Typography>
                </Box>
              </NavLink>
              {or_m_user_type === "Dummy User" ? 
             
                <Box className="flex flex-col justify-center items-center"
                onClick={() => toast(" Dummy User")}>
                  <Typography><img src={dep} alt="" className="w-8" /></Typography>
                  <Typography>Deposit</Typography>
                </Box>:(  
                <NavLink to="/deposit">
                <Box className="flex flex-col justify-center items-center">
                  <Typography><img src={dep} alt="" className="w-8" /></Typography>
                  <Typography>Deposit</Typography>
                </Box>
              </NavLink>)}
             
              {or_m_user_type === "Dummy User" ? 
                <Box className="flex flex-col justify-center items-center"
                onClick={() => toast(" Dummy User")}>
                  <Typography><img src={wih} alt="" className="w-8" /></Typography>
                  <Typography>Withdraw</Typography>
                </Box> :(
                  <NavLink to="/withdraw">
                  <Box className="flex flex-col justify-center items-center">
                    <Typography><img src={wih} alt="" className="w-8" /></Typography>
                    <Typography>Withdraw</Typography>
                  </Box>
                </NavLink>
                )}
             
              
              <Box className="flex flex-col justify-center cursor-pointer items-center"
                onClick={() => document.location.href = `https://zupeegame.info/?user_id=${user_id}`}
              >
                <Typography><img src={trx} alt="" className="w-8" /></Typography>
                <Typography className="">USDT</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="flex justify-center  m-5 !mt-10 !p-5 rounded-lg bg-orange-400 shadow-xl">
          <img src={w1} alt="" className="mt-5 h-10 m-1" />
          <Typography className="!text-white !font-bold !mt-2  !ml-2 ">SAFE</Typography>
          <Typography className="text-white !font-bold !text-sm !-ml-10 !mt-8">
            Daily interest rate 0.1%  + VIP extra income safe, calculated every 1 minute
          </Typography>
        </Box>
        <Box className="grid grid-cols-2 gap-3 m-4  !my-8">
          <Box className="flex gap-1 justify-center p-1 py-4 items-center  shadow-xl bg-white rounded-lg">
            <Typography><img src={game} alt="" className="w-10" /></Typography>
            <Typography className="">Game History <br /><span className="!text-xs !text-gray-500"> My game history</span></Typography>
          </Box>
          <Box className="flex gap-1 p-1 justify-center items-center py-4 shadow-xl bg-white rounded-lg">
            <Typography><img src={trans} alt="" className="w-10" /></Typography>
            <Typography>Transaction <br /><span className="!text-xs !text-gray-500"> My Transaction history</span></Typography>
          </Box>
          {or_m_user_type === "Dummy User" ? 
          <>
          <NavLink>
            <Box className="flex gap-1 p-1 py-4 justify-center items-center shadow-xl bg-white rounded-lg"
            onClick={() => toast(" Dummy User")}>
              <Typography><img src={depo} alt="" className="w-10" /></Typography>
              <Typography>Deposit <br /><span className="!text-xs !text-gray-500"> My Deposit history</span></Typography>
            </Box>
          </NavLink>
          <NavLink >
            <Box className="flex gap-1 p-1 py-4 justify-center items-center shadow-xl bg-white rounded-lg"
            onClick={() => toast(" Dummy User")}>
              <Typography><img src={wit} alt="" className="w-10" /></Typography>
              <Typography>Withdraw <br /><span className="!text-xs !text-gray-500"> My Withdraw history</span></Typography>
            </Box>
          </NavLink></>
          :(
           <>
            <NavLink to="/depositehistory">
            <Box className="flex gap-1 p-1 py-4 justify-center items-center shadow-xl bg-white rounded-lg">
              <Typography><img src={depo} alt="" className="w-10" /></Typography>
              <Typography>Deposit <br /><span className="!text-xs !text-gray-500"> My Deposit history</span></Typography>
            </Box>
          </NavLink>
          <NavLink to="/withdrawlhistory">
            <Box className="flex gap-1 p-1 py-4 justify-center items-center shadow-xl bg-white rounded-lg">
              <Typography><img src={wit} alt="" className="w-10" /></Typography>
              <Typography>Withdraw <br /><span className="!text-xs !text-gray-500"> My Withdraw history</span></Typography>
            </Box>
          </NavLink></>
          )}

        </Box>
        <Box className="flex justify-center gap-2 border-b-2 p-2 m-3 py-5 bg-white shadow rounded-lg "
          onClick={() => navigate("/account/Teamincome")}
        >
          <Typography> <GroupAddRounded className="text-[#F48901] !mt-1" /></Typography>
          <Typography className="!mt-1 !text-lg text-gray-700 cursor-pointer"> Team/Income</Typography>
        </Box>
        <Box className="bg-white shadow rounded-lg flex flex-col justify-start p-1 m-3 !my-8">
          <Box className="flex justify-between gap-1 border-b-2 p-2">
            <Box className="flex items-center gap-2">
              <Typography> <img src={not} alt="" className="w-6" /></Typography>
              <Typography className="!mt-1 text-gray-500"> Notification</Typography>
            </Box>

            <IconButton> <ArrowForwardIos className="text-gray-500  " fontSize="small" /></IconButton>
          </Box>
          <Box className="flex justify-between gap-1 border-b-2 p-2">
            <Box className="flex items-center gap-2">
              <Typography> <img src={g} alt="" className="w-6" /></Typography>
              <Typography className="!mt-1 text-gray-500"> Gifts</Typography></Box>


            <IconButton> <ArrowForwardIos className="text-gray-500  " fontSize="small" /></IconButton>
          </Box>
          <Box className="flex justify-between gap-1 border-b-2 p-2">
            <Box className="flex items-center gap-2">
              <Typography> <img src={star} alt="" className="w-6" /></Typography>
              <Typography className="!mt-1 text-gray-500">Game Statics</Typography>
            </Box>
            <IconButton> <ArrowForwardIos className="text-gray-500  " fontSize="small" /></IconButton>
          </Box>
          <Box className="flex justify-between gap-1  p-2">
            <Box className="flex items-center gap-2">
              <Typography> <img src={lang} alt="" className="w-6" /></Typography>
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
        <Box className="!flex !gap-1 !justify-center m-5 text-gray-500   p-1 bg-white shadow-2xl rounded-full  border border-gray-600">
          <img src={l1} alt="" className="w-5 !mt-1" />
          <button className=""
            onClick={() => logOutFunction()}>
            Logout
          </button>
        </Box>
      </Container>
    </Layout>
  );
}

export default Account;

