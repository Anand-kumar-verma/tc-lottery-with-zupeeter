
import { BorderColor, CopyAll, GroupAddRounded } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useQuery, useQueryClient } from "react-query";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import a1 from "../../assets/images/a1.png";
import b1 from "../../assets/images/b1.png";
import c1 from "../../assets/images/c1.png";
import dep from "../../assets/images/dep.png";
import depo from "../../assets/images/depo.png";
import f1 from "../../assets/images/f1.png";
import l1 from "../../assets/images/l1.png";
import n1 from "../../assets/images/n1.png";
import s1 from "../../assets/images/s1.png";
import trx from "../../assets/images/trx.png";
import vip from "../../assets/images/vip.png";
import wal from "../../assets/images/wal.png";
import wih from "../../assets/images/with.png";
import wit from "../../assets/images/witt.png";
import Layout from "../../component/layout/Layout";
import { ProfileDataFunction, Update_ProfileFn, getBalanceFunction, logOutFunction, showRank } from "../../services/apiCallings";
import { endpoint, front_end_domain } from "../../services/urls";
import CustomCircularProgress from "../../shared/loder/CustomCircularProgress";
import ImageSelectorModal from "./ImageSelectorModal";
import Date from "../../shared/CustomiztionDate/CustomDate";
import CustomDate from "../../shared/CustomiztionDate/CustomDate";

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
    "https://mui.com/static/images/avatar/1.jpg",
    "https://mui.com/static/images/avatar/5.jpg"
  ];
  const { isLoading, data } = useQuery(["profile"], () => ProfileDataFunction(),   {
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry:false,
    retryOnMount:false,
    refetchOnWindowFocus:false
  });
  const profile = data?.data?.earning || [];

  const [balance, setBalance] = useState("");
  const { data: wallet_amount } = useQuery(
    ["wallet_amount_amount"],
    () => getBalanceFunction(setBalance),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry:false,
      retryOnMount:false,
      refetchOnWindowFocus:false
    }
  );
  const wallet_amount_data = wallet_amount?.data?.earning || 0;

  const { data: update_pic } = useQuery(
    ["Update_pic", selectedImages],
    () => Update_ProfileFn(selectedImages, client),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry:false,
      retryOnMount:false,
      refetchOnWindowFocus:false
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
              {/* <CustomDate/> */}
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


            <Box className="flex cursor-pointer flex-col justify-center items-center" 
            onClick={() => {
              if (or_m_user_type === "Dummy User") {
                toast("Dummy User");
              } else {
                navigate('/deposit');
              }
            }}>
              <Typography> <img src={dep} alt="" className="w-8" /> </Typography>
              <Typography> Deposit</Typography>
            </Box>
             <Box className="flex cursor-pointer flex-col justify-center items-center" 
              onClick={() => {
                if (or_m_user_type === "Dummy User") {
                  toast("Dummy User");
                } else {
                  navigate('/withdraw');
                }
              }}>
                <Typography><img src={wih} alt="" className="w-8" /></Typography>
                <Typography>Withdraw</Typography>
              </Box> 
              <Box className="flex flex-col justify-center cursor-pointer items-center"
              onClick={() => document.location.href = `https://zupeegame.info/?user_id=${user_id}`}
            >
              <Typography><img src={trx} alt="" className="w-8" /></Typography>
              <Typography className="">USDT</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="grid grid-cols-2 gap-3 m-4  !my-8">
      
              <Box className="flex gap-1 p-1 py-4 cursor-pointer justify-center items-center shadow-xl bg-white rounded-lg"
                onClick={() => {
                  if (or_m_user_type === "Dummy User") {
                    toast("Dummy User");
                  } else {
                    navigate('/depositehistory');
                  }
                }}>
                <Typography><img src={depo} alt="" className="w-10" /></Typography>
                <Typography>Deposit <br /><span className="!text-xs !text-gray-500"> My Deposit history</span></Typography>
              </Box>
           
          
              <Box className="flex gap-1 p-1 py-4 justify-center items-center cursor-pointer shadow-xl bg-white rounded-lg"
                onClick={()=>{
                  if (or_m_user_type === "Dummy User") {
                    toast("Dummy User");
                  } else {
                    navigate('/withdrawlhistory');
                  }
                }}>
                <Typography><img src={wit} alt="" className="w-10" /></Typography>
                <Typography>Withdraw <br /><span className="!text-xs !text-gray-500"> My Withdraw history</span></Typography>
              </Box>
            
      </Box>
      <Box className="flex justify-center gap-2 border-b-2 p-2 m-3 py-5 bg-white shadow rounded-lg "
        onClick={() => navigate("/account/Teamincome")}
      >
        <Typography> <GroupAddRounded className="text-[#F48901] !mt-1" /></Typography>
        <Typography className="!mt-1 !text-lg text-gray-700 cursor-pointer"> Team/Income</Typography>
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

