
import { Box, Container, Dialog, IconButton, Typography } from "@mui/material";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ProfileDataFunction, Update_ProfileFn, getBalanceFunction, logOutFunction } from "../../services/apiCallings";
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

function Account() {

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
    "data:image/jpeg;base64,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"
    ,
    "data:image/png;base64,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"
    , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7pT9DK6OKxYzRTJGpzpDHVoXFpZHE2EJkCzQdk7fWJH60i-Ya1Hwvr4rB7etdqDa54m8&usqp=CAU"

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

              <BorderColor fontSize="small" className="!text-white !absolute !rounded-full !bg-gray-400  !top-24 left-20" />
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
              {profile?.rec?.Club !== 0 && <Box className="  realtive !left-40 flex gap-3 justify-center">
                <Typography className="text-white !text-xs">Rank: </Typography>
                <Typography className="text-white !text-xs">{profile?.rec?.Club}</Typography>
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
              <NavLink to="/deposit">
                <Box className="flex flex-col justify-center items-center">
                  <Typography><img src={dep} alt="" className="w-8" /></Typography>
                  <Typography>Deposit</Typography>
                </Box>
              </NavLink>
              <NavLink to="/withdraw">
                <Box className="flex flex-col justify-center items-center">
                  <Typography><img src={wih} alt="" className="w-8" /></Typography>
                  <Typography>Withdraw</Typography>
                </Box>
              </NavLink>
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
          </NavLink>

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

