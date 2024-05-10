import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { NavLink } from "react-router-dom";
import depositeimg from "../../assets/images/deposite.png";
import dhistory from "../../assets/images/dhistory.png";
import walletsimg from "../../assets/images/walletsimg.png";
import whistory from "../../assets/images/whistory.png";
import withdraw from "../../assets/images/withdraw.png";
import Layout from "../../component/layout/Layout";
import theme from "../../utils/theme";
import {
  depositHistoryFunction,
  getBalanceFunction,
} from "../../services/apiCallings";
import { useQuery } from "react-query";
import { rupees } from "../../services/urls";
import CustomCircularProgress from "../../shared/loder/CustomCircularProgress";

function Wallet() {
  const [balance, setBalance] = useState("");
  const { isLoading, data: wallet_amount } = useQuery(
    ["wallet_amount_amount"],
    () => getBalanceFunction(setBalance),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );
  const wallet_amount_data = wallet_amount?.data?.earning || 0;

  const { isLoading: total_deposit, data } = useQuery(
    ["deposit_history"],
    () => depositHistoryFunction(),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );
  const res = data?.data?.earning?.rid || [];
  const total_deposit_amount = useMemo(() => {
    return res
      ?.filter((i) => i?.tr15_status === "Success")
      ?.reduce((a, b) => a + Number(b?.tr15_amt || 0), 0);
  }, [data]);

  const series = [Number(wallet_amount_data % 100)?.toFixed(1) || 0];
  const series3rrparty = [0.0];
  const [options] = React.useState({
    colors: ["#F48901", "red", "green"],
    chart: {
      height: 150,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "11px",
          },
          value: {
            fontSize: "16px",
          },
        },
        stroke: {
          colors: ["#F02257"],
        },
      },
      radialBar: {
        dataLabels: {
          show: false,
        },
      },
    },
    labels: ["0.40%", "B", "C", "D"],
  });

  return (
    <Layout header={false}>
      <Box sx={style.header}>
        <Typography variant="body1" color="initial"></Typography>
        <Typography variant="body1" color="initial">
          Wallet
        </Typography>
        <Box component={NavLink} to="/promotion/Subordinate/"></Box>
      </Box>
      <Box
        sx={{
          padding: "15px 15px 5px 15px",
          background: theme.palette.primary.main,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ flexDirection: "column" }}
        >
          <Box component="img" src={walletsimg} width={50}></Box>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: "25px", fontWeight: "600", color: "white" }}
          >
            ₹{Number(wallet_amount_data || 0)?.toFixed(2)}
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: "14px", fontWeight: "400", color: "white" }}
          >
            Total balance
          </Typography>
        </Stack>
      </Box>
      <CustomCircularProgress isLoading={isLoading || total_deposit} />
      <Box sx={{ background: theme.palette.primary.main, pb: 2 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "20px", fontWeight: "500", color: "white" }}
            >
              ₹{Number(wallet_amount_data || 0)?.toFixed(2)}
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "14px", fontWeight: "400", color: "white" }}
            >
              Total amount
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "20px", fontWeight: "500", color: "white" }}
            >
              {rupees} {total_deposit_amount || 0}
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "14px", fontWeight: "400", color: "white" }}
            >
              Total deposit amount
            </Typography>
          </Box>
        </Stack>
      </Box>
      <Box
        sx={{
          width: "92%",
          margin: "auto",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            background: "#ffffff",
            padding: 1,
            borderRadius: "10px",
            mt: -1,
          }}
        >
          <Stack
            direction="row"
            sx={{
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ width: "50%", position: "relative" }}>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  position: "absolute",
                  left: "39%",
                  top: "32%",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              >
                {series}%
              </Typography>
              <ReactApexChart
                options={options}
                series={series}
                type="radialBar"
                height={150}
              />
              <Box
                sx={{
                  textAlign: "center",
                  "&>p": { color: "black", fontSize: "13px", fontWeight: 500 },
                }}
              >
                <Typography variant="body1" color="initial">
                  {wallet_amount_data}%
                </Typography>
                <Typography variant="body1" color="initial">
                  Main wallet
                </Typography>
              </Box>
            </Box>
            <Box sx={{ width: "50%", position: "relative" }}>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  position: "absolute",
                  left: "39%",
                  top: "32%",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              >
               00.0%
              </Typography>
              <ReactApexChart
                options={options}
                series={series3rrparty}
                type="radialBar"
                height={150}
              />
              <Box
                sx={{
                  textAlign: "center",
                  "&>p": { color: "black", fontSize: "13px", fontWeight: 500 },
                }}
              >
                <Typography variant="body1" color="initial">
                  00.00%
                </Typography>
                <Typography variant="body1" color="initial">
                  3rd party wallet
                </Typography>
              </Box>
            </Box>
          </Stack>
          <Button sx={style.mainwallettrbutton}>Main wallet transfer</Button>
          <Stack direction="row" sx={style.stack}>
            <Box sx={style.box} component={NavLink} to="/deposit">
              <Box sx={style.innerBox}>
                <Box
                  component="img"
                  src={depositeimg}
                  sx={style.innerBoximg}
                ></Box>
              </Box>
              <Typography variant="body1" color="initial" sx={style.typography}>
                Deposit
              </Typography>
            </Box>
            <Box sx={style.box} component={NavLink} to="/withdraw">
              <Box sx={style.innerBox}>
                <Box
                  component="img"
                  src={withdraw}
                  sx={style.innerBoximg}
                ></Box>
              </Box>
              <Typography variant="body1" color="initial" sx={style.typography}>
                Withdraw
              </Typography>
            </Box>
            <Box sx={style.box} component={NavLink} to="/depositehistory">
              <Box sx={style.innerBox}>
                <Box
                  component="img"
                  src={dhistory}
                  sx={style.innerBoximg}
                ></Box>
              </Box>
              <Typography variant="body1" color="initial" sx={style.typography}>
                Deposit history
              </Typography>
            </Box>
            <Box sx={style.box} component={NavLink} to="/withdrawlhistory">
              <Box sx={style.innerBox}>
                <Box
                  component="img"
                  src={whistory}
                  sx={style.innerBoximg}
                ></Box>
              </Box>
              <Typography variant="body1" color="initial" sx={style.typography}>
                Withdrawal history
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
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
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: "white",
              fontSize: "13px",
              fontWeight: "600",
              fontFamily: '"PT Serif", serif !important',
            }}
          >
            132.56
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: "white",
              fontSize: "12px",
              fontWeight: "400",
              fontFamily: '"PT Serif", serif !important',
            }}
          >
            Lottery
          </Typography>
        </Box>
        <Box sx={style.fxone}>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: "gray",
              fontSize: "13px",
              fontWeight: "600",
              fontFamily: '"PT Serif", serif !important',
            }}
          >
            132.56
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: "gray",
              fontSize: "12px",
              fontWeight: "400",
              fontFamily: '"PT Serif", serif !important',
            }}
          >
            Lottery
          </Typography>
        </Box>
        <Box sx={style.fxone}>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: "gray",
              fontSize: "13px",
              fontWeight: "600",
              fontFamily: '"PT Serif", serif !important',
            }}
          >
            132.56
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: "gray",
              fontSize: "12px",
              fontWeight: "400",
              fontFamily: '"PT Serif", serif !important',
            }}
          >
            Lottery
          </Typography>
        </Box>
        <Box sx={style.fxone}>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: "gray",
              fontSize: "13px",
              fontWeight: "600",
              fontFamily: '"PT Serif", serif !important',
            }}
          >
            132.56
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: "gray",
              fontSize: "12px",
              fontWeight: "400",
              fontFamily: '"PT Serif", serif !important',
            }}
          >
            Lottery
          </Typography>
        </Box>
        <Box sx={style.fxone}>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: "gray",
              fontSize: "13px",
              fontWeight: "600",
              fontFamily: '"PT Serif", serif !important',
            }}
          >
            132.56
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: "gray",
              fontSize: "12px",
              fontWeight: "400",
              fontFamily: '"PT Serif", serif !important',
            }}
          >
            Lottery
          </Typography>
        </Box>
        <Box sx={style.fxone}>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: "gray",
              fontSize: "13px",
              fontWeight: "600",
              fontFamily: '"PT Serif", serif !important',
            }}
          >
            132.56
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: "gray",
              fontSize: "12px",
              fontWeight: "400",
              fontFamily: '"PT Serif", serif !important',
            }}
          >
            Lottery
          </Typography>
        </Box>
        <Box sx={style.fxone}>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: "gray",
              fontSize: "13px",
              fontWeight: "600",
              fontFamily: '"PT Serif", serif !important',
            }}
          >
            132.56
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: "gray",
              fontSize: "12px",
              fontWeight: "400",
              fontFamily: '"PT Serif", serif !important',
            }}
          >
            Lottery
          </Typography>
        </Box>
        <Box sx={style.fxone}>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: "gray",
              fontSize: "13px",
              fontWeight: "600",
              fontFamily: '"PT Serif", serif !important',
            }}
          >
            132.56
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: "gray",
              fontSize: "12px",
              fontWeight: "400",
              fontFamily: '"PT Serif", serif !important',
            }}
          >
            Lottery
          </Typography>
        </Box>
        <Box sx={style.fxone}>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: "gray",
              fontSize: "13px",
              fontWeight: "600",
              fontFamily: '"PT Serif", serif !important',
            }}
          >
            132.56
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: "gray",
              fontSize: "12px",
              fontWeight: "400",
              fontFamily: '"PT Serif", serif !important',
            }}
          >
            Lottery
          </Typography>
        </Box>
        <Box sx={style.fxone}>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: "gray",
              fontSize: "13px",
              fontWeight: "600",
              fontFamily: '"PT Serif", serif !important',
            }}
          >
            132.56
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: "gray",
              fontSize: "12px",
              fontWeight: "400",
              fontFamily: '"PT Serif", serif !important',
            }}
          >
            Lottery
          </Typography>
        </Box>
        <Box sx={style.fxone}>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: "gray",
              fontSize: "13px",
              fontWeight: "600",
              fontFamily: '"PT Serif", serif !important',
            }}
          >
            132.56
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: "gray",
              fontSize: "12px",
              fontWeight: "400",
              fontFamily: '"PT Serif", serif !important',
            }}
          >
            Lottery
          </Typography>
        </Box>{" "}
        <Box sx={style.fxone}>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: "gray",
              fontSize: "13px",
              fontWeight: "600",
              fontFamily: '"PT Serif", serif !important',
            }}
          >
            132.56
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: "gray",
              fontSize: "12px",
              fontWeight: "400",
              fontFamily: '"PT Serif", serif !important',
            }}
          >
            Lottery
          </Typography>
        </Box>
      </Stack>
    </Layout>
  );
}

export default Wallet;

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
    width: "31%",
    height: "100px",
    background: "linear-gradient(180deg, #e97e0f 0%, #fcbc42 100%)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    mb: 1.5,
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
};
