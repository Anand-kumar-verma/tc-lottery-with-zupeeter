// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Layout from "../../component/layout/Layout";
// import { logOutFunction } from "../../services/apiCallings";
// import { Box, Stack, Typography } from "@mui/material";
// import theme from "../../utils/theme";

// const Account = () => {
//   const navigate = useNavigate();
//   return (
//     <Layout>

//       <Stack
//         direction="row"
//         alignItems="center"
//         justifyContent="space-around"
//         sx={{
//           flexWrap: "wrap",
//           width: "92%",
//           margin: "auto",
//           borderRadius: "10px",
//           mt: 2,
//           pb: 4,
//         }}
//       >
//         <Box sx={style.fx}>
//         <span
//           className="!text-blue-500 cursor-pointer"
//           onClick={() => navigate("/account/income-main/my-team")}
//         >
//           My Team
//         </span>
//         </Box>
//         <Box sx={style.fx}>
//         <span
//           className="!text-blue-500 cursor-pointer"
//           onClick={() => navigate("/account/income-main")}
//         >
//           INCOME
//         </span>
//         </Box>
//         <Box sx={style.fx}>
//         <span
//           className="!text-blue-500 cursor-pointer"
//           onClick={() => navigate("/bank")}
//         >
//           Bank
//         </span>
//         </Box>
//         <Box sx={style.fx}>
//         <span
//           className="!text-blue-500 cursor-pointer"
//           onClick={() => navigate("/ico-token")}
//         >
//           ICO TOken
//         </span>
//         </Box>
//         <Box sx={style.fx}>
//         <span
//           className="!text-blue-500 cursor-pointer"
//           onClick={() => navigate("/fund-main")}
//         >
//           Fund Main
//         </span>
//         </Box>
//         <Box sx={style.fx}>
//         <span
//           className="!text-blue-500 cursor-pointer"
//           onClick={() => navigate("/view-salary-income")}
//         >
//           View Salary Income
//         </span>
//         </Box>
//         <Box sx={style.fx}>
//         <span
//           className="!text-blue-500 cursor-pointer"
//           onClick={() => navigate("/upi-deposit-token")}
//         >
//           UPI Deposit Token
//         </span>
//         </Box>
//         <Box sx={style.fx}>
//         <span
//           className="!text-blue-500 cursor-pointer"
//           onClick={() => navigate("/password")}
//         >
//           Password
//         </span>
//         </Box>
//         <Box sx={style.fx}>
//         <span
//           className="!text-blue-500 cursor-pointer"
//           onClick={() => navigate("/zupeeter-token")}
//         >
//           Zupeeter Token
//         </span>
//         </Box>
//         <Box sx={style.fx}>
//         <span
//           className="!text-blue-500 cursor-pointer"
//           onClick={() => logOutFunction()}
//         >
//           Logout
//         </span>
//         </Box>

//       </Stack>
//     </Layout>
//   );
// };

// export default Account;
// const style = {
//   header: {
//     padding: 1,
//     background: theme.palette.primary.main,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     "& > p": {
//       fontSize: "20px",
//       fontWeight: "600",
//       textAlign: "center",
//       color: "white",
//     },
//   },
//   stack: {
//     width: "100%",
//     alignItems: "baseline",
//     justifyContent: "space-between",
//     marginTop: 3,
//   },
//   box: {
//     width: "23%",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   innerBox: {
//     padding: 1,
//     background: "#ffffff",
//     boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
//     borderRadius: "15px",
//   },
//   innerBoximg: {
//     width: 35,
//   },
//   typography: {
//     fontFamily: '"PT Serif", serif !important',
//     fontSize: "12px",
//     color: "gray",
//     marginTop: 1,
//     textAlign: "center",
//   },
//   mainButton: {
//     width: "100%",
//     height: "0.93333rem",
//     color: "#fff",
//     fontSize: "15px",
//     fontWeight: "700",
//     letterSpacing: "0.01333rem",
//     border: "none",
//     borderRadius: "20px",
//     background: "#eb8a1f",
//     boxShadow: "0 3px #e74141",
//     padding: "20px 10px",
//     marginTop: 2,
//     "&:hover": {
//       color: "white",
//       background: "#eb8a1f",
//     },
//   },
//   mainwallettrbutton: {
//     width: "100%",
//     height: "0.93333rem",
//     color: "#fff",
//     fontSize: "15px",
//     fontWeight: "700",
//     letterSpacing: "0.01333rem",
//     border: "none",
//     borderRadius: "20px",
//     background: "#eb8a1f",
//     boxShadow: "0 3px #e74141",
//     padding: "20px 10px",
//     mt: 2,
//     "&:hover": {
//       color: "white",
//       background: "#eb8a1f",
//     },
//   },
//   fx: {
//     width: "100%",
//     height: "100px",
//     background: "linear-gradient(180deg, #e97e0f 0%, #fcbc42 100%)",
//     borderRadius: "10px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     mb: 1.5,
//     padding:'10px'
//   },
//   fxone: {
//     width: "31%",
//     height: "100px",
//     borderRadius: "10px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
//     mb: 1.5,
//   },
// };



import { Box, Container, Dialog, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { ProfileDataFunction, logOutFunction } from "../../services/apiCallings";
import pr from "../../assets/images/pr.png";
import vip from "../../assets/images/vip.png";
import w1 from "../../assets/images/w1.png";
import wal from "../../assets/images/wal.png";
import dep from "../../assets/images/dep.png";
import wih from "../../assets/images/with.png";
import vipe from "../../assets/images/vipe.png";
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
import { ArrowForwardIos, CopyAll } from "@mui/icons-material";
import { useQuery } from "react-query";
function Account() {
  const navigate = useNavigate();

  const { data} = useQuery(["profile"], () => ProfileDataFunction(), {
    refetchOnMount: false,
    refetchOnReconnect: true,
  });
const profile =data?.data?.earning || [];
  return (
    <Container>
      <Box
        sx={{
          padding: 1,
          background:
            "linear-gradient(90deg, rgb(255, 153, 1) 0%, rgb(230, 115, 1) 100%)",
          px: 2,
        }}
      >
        <Box className="flex justify-start gap-1 mt-5">
          <Typography>
            <img src={pr} alt="" className="rounded-full w-20 h-18 mt-5" />
          </Typography>
          <Box className="flex flex-col gap-1">
            <Box className="flex justify-start">
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
            <Box className="flex justify-center gap-1 text-white">
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
            <Box className="flex flex-col justify-center">
              <Typography><img src={wal} alt="" className="w-16" /></Typography>
              <Typography>Wallet</Typography>
            </Box>
            </NavLink>
            <NavLink to="/deposit">
            <Box className="flex flex-col justify-center">
              <Typography><img src={dep} alt="" className="w-16" /></Typography>
              <Typography>Deposit</Typography>
            </Box>
            </NavLink>
            <NavLink to="/withdraw">
            <Box className="flex flex-col justify-center">
              <Typography><img src={wih} alt="" className="w-16" /></Typography>
              <Typography>Withdraw</Typography>
            </Box>
            </NavLink>
            <Box className="flex flex-col justify-center">
              <Typography><img src={vipe} alt="" className="w-16" /></Typography>
              <Typography className="!ml-5">VIP</Typography>
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
        <Box className="flex gap-1 justify-center p-1  shadow-xl bg-white rounded-lg">
          <Typography><img src={game} alt="" className="w-16" /></Typography>
          <Typography>Game History <br /><span className="text-sm !text-gray-500"> My game history</span></Typography>
        </Box>
        <Box className="flex gap-1 p-1 justify-center  shadow-xl bg-white rounded-lg">
          <Typography><img src={trans} alt="" className="w-16" /></Typography>
          <Typography>Transaction <br /><span className="text-sm !text-gray-500"> My Transaction history</span></Typography>
        </Box>
        <NavLink to="/depositehistory">
        <Box className="flex gap-1 p-1 justify-center  shadow-xl bg-white rounded-lg">
          <Typography><img src={depo} alt="" className="w-16" /></Typography>
          <Typography>Deposit <br /><span className="text-sm !text-gray-500"> My Deposit history</span></Typography>
        </Box>
        </NavLink>
        <NavLink to="/withdrawlhistory">
        <Box className="flex gap-1 p-1 justify-center  shadow-xl bg-white rounded-lg">
          <Typography><img src={wit} alt="" className="w-16" /></Typography>
          <Typography>Withdraw <br /><span className="text-sm !text-gray-500"> My Withdraw history</span></Typography>
        </Box>
        </NavLink>
       
      </Box>
      <Box className="bg-white shadow rounded-lg flex flex-col justify-start p-1 m-3 !my-8">
        <Box className="flex justify-start gap-1 border-b-2 p-2">
          <Typography> <img src={not} alt="" className="w-20" /></Typography>
          <Typography className="!mt-1 text-gray-500"> Notification</Typography>
          <Typography> <ArrowForwardIos className="text-gray-500 !ml-40 " fontSize="small" /></Typography>
        </Box>
        <Box className="flex justify-start gap-1 border-b-2 p-2">
          <Typography> <img src={g} alt="" className="w-10" /></Typography>
          <Typography className="!mt-1 text-gray-500"> Gifts</Typography>
          <Typography> <ArrowForwardIos className="text-gray-500 !ml-52 " fontSize="small" /></Typography>
        </Box>
        <Box className="flex justify-start gap-1 border-b-2 p-2">
          <Typography> <img src={star} alt="" className="w-10" /></Typography>
          <Typography className="!mt-1 text-gray-500">Game Statics</Typography>
          <Typography> <ArrowForwardIos className="text-gray-500 !ml-38 " fontSize="small" /></Typography>
        </Box>
        <Box className="flex justify-start gap-1  p-2">
          <Typography> <img src={lang} alt="" className="w-10" /></Typography>
          <Typography className="!mt-1 text-gray-500"> Language </Typography>
          <Typography> <ArrowForwardIos className="text-gray-500 !ml-48 " fontSize="small" /></Typography>
        </Box>
      </Box>
      <Box className="bg-white shadow-xl rounded-lg !m-3 py-5">
        <Typography className=" px-3">Service Center</Typography>
        <Box className="grid grid-cols-3 m-5 justify-center gap-5">
          <Box className="flex flex-col justify-center m-2">
            <Typography><img src={s1} alt="" className="w-8 mx-2" /></Typography>
            <Typography className="!text-sm">Settings</Typography>
          </Box>
          <Box className="flex flex-col justify-center">
            <Typography><img src={f1} alt="" className="w-8 mx-3" /></Typography>
            <Typography className="!text-sm">Feedback</Typography>
          </Box>
          <Box className="flex flex-col justify-center">
            <Typography><img src={n1} alt="" className="w-8 mx-5" /></Typography>
            <Typography className="!text-sm">Notification</Typography>
          </Box>
          <Box className="flex flex-col justify-center">
            <Typography><img src={c1} alt="" className="w-8 mx-2" /></Typography>
            <Typography className=" !text-sm ml-2"> Service</Typography>
          </Box>
          <Box className="flex flex-col justify-center">
            <Typography><img src={b1} alt="" className="w-8 mx-2" /></Typography>
            <Typography className=" !text-sm">Beginner's Guide</Typography>
          </Box>
          <Box className="flex flex-col justify-center">
            <Typography><img src={a1} alt="" className="w-8 mx-2" /></Typography>
            <Typography className="!text-sm">About us</Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <button className="m-5 text-gray-500 flex w-80 p-1 rounded-full gap-1 justify-center border border-gray-600"
        onClick={() => logOutFunction()}>
          <img src={l1} alt="" className="w-5 !mt-1" />
          Logout
        </button>
      </Box>
    </Container>
  );
}

export default Account;

