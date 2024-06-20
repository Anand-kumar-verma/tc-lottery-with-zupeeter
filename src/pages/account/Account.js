import CachedIcon from "@mui/icons-material/Cached";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import {
  Box,
  Button,
  Container,
  Dialog,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Layout from "../../component/layout/Layout";
import { logOutFunction } from "../../services/apiCallings";
import theme from "../../utils/theme";
import profile from '../../assets/images/profile7.png'
import vip from '../../assets/images/vip.png'
const Account = () => {
  const navigate = useNavigate();
  return (
    <Layout header={false}>
      <Container sx={style.container}>
        <Stack direction="row" >
          <Box sx={style.profileBox}>
            <Box
              component="img"
              src={profile}
              sx={style.profileImage}
            />
          </Box>
          <Box sx={style.userInfo}>
            <Stack direction='row' alignItems='center'>
              <Typography variant="" color="initial" sx={{ mr: 2 }}>
                sumit kataria
              </Typography>
              <Box
                component="img"
                src={vip}
                sx={{ width: '50px', }}
              />
            </Stack>

            <Typography variant="body1" color="initial" sx={{ mt: 1 }}>
              UID |  1500000<ContentCopyOutlinedIcon sx={{ fontSize: '15px', ml: 2 }} />
            </Typography>
            <Typography variant="body1" color="initial" sx={{ mt: 1 }}>Last login:2024-05-08 15:30:12
            </Typography>
          </Box>
        </Stack>
        <Box sx={style.balanceContainer}>
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <Typography variant="body1" color="initial" sx={style.balanceText}>
              Total Balance
            </Typography>
          </Stack>
          <Stack direction="row" sx={{ alignItems: "center", mt: "10px" }}>
            <Typography variant="body1" color="initial" sx={style.totalBalance}>
              ₹ 1523.00
            </Typography>
            <CachedIcon sx={style.cachedIcon} />
          </Stack>
          <Box sx={style.actionContainer}>
            <Box sx={style.actionBox} component={NavLink} to="/wallet">
              <Box component="img" src="" sx={style.actionImage} />
              <Typography variant="body1" color="initial" sx={style.actionText}>
                Wallet
              </Typography>
            </Box>
            <Box sx={style.actionBox} component={NavLink} to="/wallet/Recharge">
              <Box component="img" src="" sx={style.actionImage} />
              <Typography variant="body1" color="initial" sx={style.actionText}>
                Deposit
              </Typography>
            </Box>
            <Box sx={style.actionBox} component={NavLink} to="/Withdrawal">
              <Box component="img" src="" sx={style.actionImage} />
              <Typography variant="body1" color="initial" sx={style.actionText}>
                Withdraw
              </Typography>
            </Box>
            <Box sx={style.actionBox} component={NavLink} to="/add-bank-details">
              <Box component="img" src="" sx={style.actionImage} />
              <Typography variant="body1" color="initial" sx={style.actionText}>
                Add Bank
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={style.actionContainer} component={NavLink} to={"/bathistory"}>
          <Box
            sx={{
              width: "50%",
              height: "100%",
            }}
          >
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <Box
                component="img"
                src=""
                sx={{ width: "40px", height: "40px", marginRight: "20px" }}
              ></Box>
              <Box
                sx={{
                  "&>:nth-child(1)": {
                    fontSize: "15px",
                    fontWeight: "500",
                    color: 'red',
                  },
                  "&>:nth-child(2)": {
                    fontSize: "12px",
                    fontWeight: "500",
                    color: 'red',
                  },
                }}
              >
                <p className="!text-sm">Bet</p>
                <p className="!text-[10px]">My betting history</p>
              </Box>
            </Stack>
          </Box>
          <Box
            sx={{
              width: "50%",
              height: "100%",
            }}
          >
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <Box
                component="img"
                // src={card}
                sx={{ width: "40px", height: "40px", marginRight: "20px" }}
              ></Box>
              <Box
                sx={{
                  "&>:nth-child(1)": {
                    fontSize: "15px",
                    fontWeight: "500",
                    color: 'red',
                  },
                  "&>:nth-child(2)": {
                    fontSize: "10px",
                    fontWeight: "500",
                    color: 'red',
                  },
                }}
              >
                <p className="!text-sm">Transaction</p>
                <p className="!text-[10px]">My Transaction history</p>
              </Box>
            </Stack>
          </Box>
        </Box>
        <Box sx={style.actionContainertwo}>
          <Stack
            sx={{
              padding: "10px",
              background: 'red',
              width: "100%",
              borderRadius: "10px",
            }}
          >
            <Stack
              component={NavLink}
              to="/notification"
              direction="row"
              sx={{
                borderBottom: "1px solid white",
                padding: "10px",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Stack direction="row" sx={{ alignItems: "center" }}>
                <Box
                  component="img"
                  // src={notification}
                  sx={{ width: "20px", height: "20px", marginRight: "10px" }}
                ></Box>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ color: "white", fontSize: "13px", fontWeight: "600" }}
                >
                  Notification
                </Typography>
              </Stack>
              <Box>
                <KeyboardDoubleArrowRightIcon
                  sx={{ color: "white", fontSize: "23px", fontWeight: "600" }}
                />
              </Box>
            </Stack>
            <Stack
              component={NavLink}
              to="/gift"
              direction="row"
              sx={{
                borderBottom: "1px solid white",
                padding: " 10px 10px 10px 5px",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Stack direction="row" sx={{ alignItems: "center" }}>
                <Box
                  component="img"
                  // src={gift}
                  sx={{ width: "30px", height: "30px", marginRight: "10px" }}
                ></Box>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ color: "white", fontSize: "13px", fontWeight: "600" }}
                >
                  Gifts
                </Typography>
              </Stack>
              <Box>
                <KeyboardDoubleArrowRightIcon
                  sx={{ color: "white", fontSize: "23px", fontWeight: "600" }}
                />
              </Box>
            </Stack>
            <Stack
              component={NavLink}
              to="/gamestaticks"
              direction="row"
              sx={{
                borderBottom: "1px solid white",
                padding: " 10px 10px 10px 5px",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Stack direction="row" sx={{ alignItems: "center" }}>
                <Box
                  component="img"
                  // src={graph}
                  sx={{ width: "25px", height: "25px", marginRight: "10px" }}
                ></Box>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ color: "white", fontSize: "13px", fontWeight: "600" }}
                >
                  Game statistics
                </Typography>
              </Stack>
              <Box>
                <KeyboardDoubleArrowRightIcon
                  sx={{ color: "white", fontSize: "23px", fontWeight: "600" }}
                />
              </Box>
            </Stack>
            <Stack
              component={NavLink}
              to="/Language"
              direction="row"
              sx={{
                borderBottom: "1px solid white",
                padding: " 10px 10px 10px 5px",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Stack direction="row" sx={{ alignItems: "center" }}>
                <Box
                  component="img"
                  src=""
                  sx={{ width: "25px", height: "25px", marginRight: "10px" }}
                ></Box>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ color: "white", fontSize: "13px", fontWeight: "600" }}
                >
                  Language
                </Typography>
              </Stack>
              <Box>
                <Typography
                  sx={{ color: "white", fontSize: "13px", fontWeight: "500" }}
                >
                  English
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Box>
        <Box
          sx={{
            width: "95%",
            marginLeft: "2.5%",
            borderRadius: "10px",
            background: 'green',
            padding: "10px",
            mt: "20px",
            "&>:nth-child(1)": {
              color: "white",
              fontSize: "15px",
              fontWeight: "600",
              mb: "25px",
            },
          }}
        >
          <Typography variant="body1" color="initial">
            Service center
          </Typography>

          <div className="!w-full !grid !grid-cols-3 !place-items-center">
            {[
              {
                to: "/account/income-main",
                name: "Income",
                // logo: balance,
              },
              {
                to: "/SettingCenter", name: "Setting",
                // logo: setting
              },
              {
                to: "/gameNotification",
                name: "Notification",
                // logo: notification,
              },
              {
                to: "/SettingCenter/LoginPassword",
                name: "Change Password",
                // logo: user2,
              },
              {
                to: "/promotion/customerLine/",
                name: "Customer service",
                // logo: customer,
              },
              {
                to: "/feedback", name: "Feedback",
                // logo: hand
              },
            ]?.map((i) => {
              return (
                <Box
                  component={NavLink}
                  to={i.to}
                  sx={{
                    width: "30%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: "10px",
                    "&>p": {
                      color: "white",
                      fontSize: "14px",
                      fontWeight: "500",
                      mt: "5px",
                    },
                  }}
                >
                  <Box
                    component="img"
                    // src={i.logo}
                    sx={{ width: "30px", height: "30px" }}
                  ></Box>
                  <Typography>{i.name}</Typography>
                </Box>
              );
            })}
          </div>
        </Box>
        <Box
          sx={{
            width: "95%",
            marginLeft: "2.5%",
            borderRadius: "10px",
            mt: "20px",
            pb: 5,
          }}
        >
          <Button
            sx={{
              background: 'red',
              width: "100%",
              color: "white",
              borderRadius: "10px",
              padding: 1.5,
            }}
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
          >
            Logout
          </Button>
        </Box>
        <Dialog
          PaperProps={{ width: "500px", height: "500px" }}
          open=""
        >
          <div>
            <p>
              <IconButton >
                <CloseIcon />
              </IconButton>
            </p>
            <p>
              <img src="" alt="img" />
            </p>
          </div>
        </Dialog>
      </Container>
      <Box
        sx={{
          padding: 1,
          background: "#FFFFFF",
          borderRadius: "10px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          sx={{
            flexWrap: "wrap",
            width: "92%",
            margin: "auto",
            borderRadius: "10px",
            mt: 2,
            pb: 4,
          }}
        >
          <Box sx={style.fx}>
            <span
              className="!text-blue-500 cursor-pointer"
              onClick={() => navigate("/account/income-main/my-team")}
            >
              My Team
            </span>
          </Box>
          <Box sx={style.fx}>
            <span
              className="!text-blue-500 cursor-pointer"
              onClick={() => navigate("/account/income-main")}
            >
              INCOME
            </span>
          </Box>
          <Box sx={style.fx}>
            <span
              className="!text-blue-500 cursor-pointer"
              onClick={() => navigate("/bank")}
            >
              Bank
            </span>
          </Box>
          <Box sx={style.fx}>
            <span
              className="!text-blue-500 cursor-pointer"
              onClick={() => navigate("/ico-token")}
            >
              ICO TOken
            </span>
          </Box>
          <Box sx={style.fx}>
            <span
              className="!text-blue-500 cursor-pointer"
              onClick={() => navigate("/fund-main")}
            >
              Fund Main
            </span>
          </Box>
          <Box sx={style.fx}>
            <span
              className="!text-blue-500 cursor-pointer"
              onClick={() => navigate("/view-salary-income")}
            >
              View Salary Income
            </span>
          </Box>
          <Box sx={style.fx}>
            <span
              className="!text-blue-500 cursor-pointer"
              onClick={() => navigate("/upi-deposit-token")}
            >
              UPI Deposit Token
            </span>
          </Box>
          <Box sx={style.fx}>
            <span
              className="!text-blue-500 cursor-pointer"
              onClick={() => navigate("/password")}
            >
              Password
            </span>
          </Box>
          <Box sx={style.fx}>
            <span
              className="!text-blue-500 cursor-pointer"
              onClick={() => navigate("/zupeeter-token")}
            >
              Zupeeter Token
            </span>
          </Box>
          <Box sx={style.fx}>
            <span
              className="!text-blue-500 cursor-pointer"
              onClick={() => logOutFunction()}
            >
              Logout
            </span>
          </Box>
        </Stack>
      </Box >
    </Layout >
  );
};

export default Account;
const style = {
  header: {
    padding: 1,
    background: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& > p": {
      fontSize: "20px",
      fontWeight: "600",
      textAlign: "center",
      color: "white",
    },
  },
  stack: {
    width: "100%",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginTop: 3,
  },
  box: {
    width: "23%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  innerBox: {
    padding: 1,
    background: "#ffffff",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    borderRadius: "15px",
  },
  innerBoximg: {
    width: 35,
  },
  typography: {
    fontFamily: '"PT Serif", serif !important',
    fontSize: "12px",
    color: "gray",
    marginTop: 1,
    textAlign: "center",
  },
  mainButton: {
    width: "100%",
    height: "0.93333rem",
    color: "#fff",
    fontSize: "15px",
    fontWeight: "700",
    letterSpacing: "0.01333rem",
    border: "none",
    borderRadius: "20px",
    background: "#eb8a1f",
    boxShadow: "0 3px #e74141",
    padding: "20px 10px",
    marginTop: 2,
    "&:hover": {
      color: "white",
      background: "#eb8a1f",
    },
  },
  mainwallettrbutton: {
    width: "100%",
    height: "0.93333rem",
    color: "#fff",
    fontSize: "15px",
    fontWeight: "700",
    letterSpacing: "0.01333rem",
    border: "none",
    borderRadius: "20px",
    background: "#eb8a1f",
    boxShadow: "0 3px #e74141",
    padding: "20px 10px",
    mt: 2,
    "&:hover": {
      color: "white",
      background: "#eb8a1f",
    },
  },
  fx: {
    width: "100%",
    height: "100px",
    background: "linear-gradient(180deg, #e97e0f 0%, #fcbc42 100%)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    mb: 1.5,
    padding: '10px'
  },
  fxone: {
    width: "31%",
    height: "100px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    mb: 1.5,
  },
  header: {
    alignItems: "center",
    paddingTop: "20px",
    width: "95%",
    margin: "auto",
    mb: 2,

  },
  profileBox: {
    width: "60px",
    height: "60px",
    borderRadius: "20px",
    overflow: "hidden",
  },
  profileImage: { width: "100%", height: "100%", borderRadius: "20px", },
  userInfo: {
    ml: 3,
    "& > :nth-child(1)": {
      fontSize: "18px",
      fontWeight: "600",
      color: 'red',
    },
    "& > :nth-child(2)": {
      fontSize: "14px",
      fontWeight: "400",
      color: 'white',
      padding: '0px 20px',
      background: 'green',
      borderRadius: '20px',
    },
  },
  rankImage: { width: "100px", height: "100px" },
  balanceContainer: {
    background: 'green',
    borderRadius: "10px",
    padding: "20px",
    width: "95%",
    margin: "auto",
    marginTop: "2px",
  },
  balanceText: {
    fontSize: "16px",
    fontWeight: "500",
    color: "white",
    marginLeft: "10px",
  },
  totalBalance: {
    fontSize: "30px",
    fontWeight: "600",
    color: "white",
    marginRight: "10px",
  },
  cachedIcon: { color: "white" },
  cardImage: { width: "50px" },
  cardNumber: { fontSize: "14px", color: "white", marginLeft: "10px" },
  actionContainer: {
    background: 'white',
    // boxShadow: zubgshadow,
    borderRadius: "10px",
    padding: "10px",
    width: "95%",
    margin: "auto",
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  actionBox: { width: "20%" },
  actionImage: { width: "30px", height: "30px", margin: "auto" },
  actionText: {
    color: 'red',
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "500",
  },
  actionContainertwo: {
    flexDirection: "column",
    borderRadius: "10px",
    width: "95%",
    margin: "auto",
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};
