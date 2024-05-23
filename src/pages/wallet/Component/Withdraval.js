import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import atm from "../../../assets/images/atm.png";
import atmchip from "../../../assets/images/atmchip.png";
import wallet from "../../../assets/images/atmw.png";
import backbtn from "../../../assets/images/backBtn.png";
import bankicon from "../../../assets/images/bankicon.png";
import cip from "../../../assets/images/cip.png";
import refresh from "../../../assets/images/refwhite.png";
import trx from "../../../assets/images/trx.png";
import withdravalhistory from "../../../assets/images/withdrawalhistory.png";
import theme from "../../../utils/theme";
import {
  BankDetailsFUnction,
  getBalanceFunction,
  withdrawlHistoryFunction,
} from "../../../services/apiCallings";
import { useQuery, useQueryClient } from "react-query";
import moment from "moment";
import CustomCircularProgress from "../../../shared/loder/CustomCircularProgress";
import withdrawol_voice from "../../../assets/images/withdrawol_voice.mp3";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import axios from "axios";
import { endpoint } from "../../../services/urls";
import LockIcon from "@mui/icons-material/Lock";
function Withdraval() {
  const client = useQueryClient();
  const user_id = localStorage.getItem("user_id");
  const audioRefMusic = React.useRef(null);
  const [isAllValue, setIsAllValue] = useState(false);
  const [visibleData, setvisibleData] = useState([]);
  const [balance, setBalance] = useState("");
  const navigate = useNavigate();
  const [loding, setloding] = useState(false);
  const [status, setStatus] = useState({});
  const initialValue = {
    amount: "",
    t_password: "",
  };

  const fk = useFormik({
    initialValues: initialValue,
    enableReinitialize: true,
    onSubmit: () => {
      if (Number(fk.values.amount) > 10000)
        return toast("Amount should be less 10,000");
      const reqBody = {
        userid: user_id,
        txtamount: fk.values.amount,
        pwd: fk.values.t_password,
        txttype: "2",
      };
      console.log(reqBody);
      if (!reqBody.txtamount) return toast("Plese enter all data");
      if (status?.trx_status === "0" || status?.withdrawal_status === "0")
        return toast(
          <span className=" !text-red-600 rounded-lg p-2">
            We are currently working on USDT token integration, leading to the
            temporary suspension of our payment gateway services. We apologize
            for any inconvenience caused. Please bear with us until the next
            update. Thank you for your understanding.
          </span>
        );
      withdraolFunction(reqBody);
    },
  });

  async function withdraolFunction(reqBody) {
    setloding(true);
    try {
      const res = await axios.post(endpoint?.wallet_withdrawl, reqBody);
      toast(res?.data?.earning?.msg);
      navigate("/account");
    } catch (e) {
      console.log(e);
    }
    setloding(false);
    client.refetchQueries("wallet_amount");
    client.refetchQueries("withdrawl_history");
    client.refetchQueries("profile");
  }

  const goBack = () => {
    navigate(-1);
  };
  const { isLoading: getbalance, data: wallet_amount } = useQuery(
    ["wallet_amount"],
    () => getBalanceFunction(setBalance),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );
  const wallet_amount_data = wallet_amount?.data?.earning || 0;

  const { isLoading, data } = useQuery(
    ["withdrawl_history"],
    () => withdrawlHistoryFunction(),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );

  const res = data?.data?.earning?.info || [];

  const { isLoading: bankList, data: game_history } = useQuery(
    ["bank_details"],
    () => BankDetailsFUnction(),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );
  const game_history_data = React.useMemo(
    () => game_history?.data?.earning?.bank_details?.[0],
    [game_history?.data?.earning?.bank_details]
  );

  useEffect(() => {
    isAllValue ? setvisibleData(res) : setvisibleData(res?.slice(0, 3));
  }, [isAllValue, res]);

  React.useEffect(() => {
    handlePlaySound();
  }, []);

  const handlePlaySound = async () => {
    try {
      if (audioRefMusic?.current?.pause) {
        await audioRefMusic?.current?.play();
      } else {
        await audioRefMusic?.current?.pause();
      }
    } catch (error) {
      // Handle any errors during play
      console.error("Error during play:", error);
    }
  };

  const audio = React.useMemo(() => {
    return (
      <audio ref={audioRefMusic} hidden>
        <source src={`${withdrawol_voice}`} type="audio/mp3" />
      </audio>
    );
  }, []);

  useEffect(() => {
    getStatus();
  }, []);

  const getStatus = async () => {
    try {
      const res = await axios.get(endpoint.withdrawl_status);
      setStatus(res?.data?.earning);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container sx={{ background: "#F7F8FF" }}>
      {audio}
      <CustomCircularProgress isLoading={isLoading || getbalance || loding} />
      <Box
        sx={{
          background:
            "linear-gradient(90deg, rgb(255, 153, 1) 0%, rgb(230, 115, 1) 100%)",
          padding: 1,
        }}
      >
        <Stack
          direction="row"
          sx={{
            alignItems: "end",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <NavLink onClick={goBack}>
            <Box component="img" src={backbtn} width={25}></Box>
          </NavLink>
          <Box sx={{ position: "absolute", left: "40%", top: "10%" }}>
            <Typography
              variant="body1"
              sx={{ color: "white", fontSize: "16px", fontWeight: "600" }}
            >
              Withdraw
            </Typography>
          </Box>
          <NavLink to="/withdrawlhistory">
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "11px", color: "white" }}
            >
              Withdrawal history
            </Typography>
          </NavLink>
        </Stack>
      </Box>

      <Box sx={{ mt: 2, px: 2 }}>
        <Box
          sx={{
            backgroundImage: `url(${atm})`,
            backgroundSize: "100% 100%",
            padding: "20px 16px",
          }}
        >
          <Stack direction="row">
            <Box component="img" src={wallet} width={20} sx={{ mr: 2 }}></Box>
            <Typography
              variant="body1"
              sx={{ color: "white", fontSize: "14px", fontWeight: "500" }}
            >
              Available balance
            </Typography>
          </Stack>
          <Stack direction="row" alignItems={"center"} mt={1}>
            <Typography
              variant="body1"
              sx={{ color: "white", fontSize: "24px", fontWeight: "500" }}
            >
              ₹ {wallet_amount_data || 0}
            </Typography>
            <Box
              component="img"
              src={refresh}
              width={20}
              height={16}
              sx={{ ml: 2 }}
            ></Box>
          </Stack>
          <Stack direction="row" alignItems={"center"} mt={3}>
            <Box component="img" src={cip} width={40} height={25}></Box>
          </Stack>
        </Box>
      </Box>

      <Box sx={{ mt: 2, px: 2 }}>
        <Stack direction="row">
          <Stack
            sx={{
              background:
                "-webkit-linear-gradient(top, #e97e0f 0%, #fcbc42 100%)",
              padding: 2,
              borderRadius: 2,
              mr: 2,
              width: "120px",
            }}
          >
            <Box
              component="img"
              src={atmchip}
              width={40}
              sx={{ margin: "0px auto" }}
            ></Box>
            <Typography
              variant="body1"
              sx={{
                color: "gray",
                fontSize: "14px",
                fontWeight: "500",
                textAlign: "center",
                mt: 1,
              }}
            >
              BANK CARD
            </Typography>
          </Stack>
          <Stack
            sx={{
              width: "120px",
              background: "#FFFFFF",
              padding: 2,
              borderRadius: 2,
              mr: 2,
              boxShadow:
                " rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
            }}
          >
            <Box
              component="img"
              src={trx}
              width={40}
              sx={{ margin: "0px auto" }}
            ></Box>
            <Typography
              variant="body1"
              sx={{
                color: "gray",
                fontSize: "14px",
                fontWeight: "500",
                textAlign: "center",
                mt: 1,
              }}
            >
              USDT
            </Typography>
          </Stack>
        </Stack>
      </Box>

      <Box
        sx={{
          width: "92%",
          margin: "auto",
          my: 2,
          background: "#FFFFFF",
          padding: "10px 0px 10px 10px",
        }}
      >
        <Stack direction="row" component={NavLink} to="/banks-details">
          <Box sx={{ width: "35%" }}>
            <Box
              component="img"
              src={bankicon}
              width={30}
              sx={{ margin: "auto" }}
            ></Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "15px", fontWeight: "500", mt: 1 }}
            >
              {game_history_data?.BANKNAME?.substring(0, 8) + "****"}
            </Typography>
          </Box>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: "60%", borderLeft: "1px solid gray", pl: "5%" }}
          >
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "13px", fontWeight: "600" }}
            >
              {game_history_data?.account_number?.substring(0, 5) + "****"}
            </Typography>
            <KeyboardArrowRightIcon />
          </Stack>
        </Stack>
      </Box>

      <Box
        sx={{
          width: "92%",
          margin: "auto",
          my: 2,
          background: "#FFFFFF",
          padding: "10px",
        }}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            background: "#F2F2F2",
            borderRadius: "20px",
            border: "none",
            boxShadow: "none",
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <CurrencyRupeeIcon sx={{ color: theme.palette.primary.main }} />
          </IconButton>
          <InputBase
            id="amount"
            name="amount"
            onChange={fk.handleChange}
            value={fk.values.amount}
            sx={{ px: 1, flex: 1, borderLeft: "1px solid #888" }}
            placeholder="Please enter the amount"
            inputProps={{ "aria-label": "search google maps" }}
          />
        </Paper>
        <Paper
          component="form"
          sx={{
            marginTop: "3px",
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            background: "#F2F2F2",
            borderRadius: "20px",
            border: "none",
            boxShadow: "none",
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <LockIcon sx={{ color: theme.palette.primary.main }} />
          </IconButton>
          <InputBase
            id="t_password"
            name="t_password"
            onChange={fk.handleChange}
            value={fk.values.t_password}
            sx={{ px: 1, flex: 1, borderLeft: "1px solid #888" }}
            placeholder="Transaction Password"
            inputProps={{ "aria-label": "search google maps" }}
          />
        </Paper>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mt={2}
        >
          <Stack direction="row">
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "12px" }}
            >
              Withdrawable balance{" "}
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: "12px",
                color: theme.palette.primary.main,
                ml: 1,
              }}
            >
              ₹{wallet_amount_data || 0}
            </Typography>
          </Stack>
          <Button
            variant="Outlined"
            color="primary"
            sx={{
              border: `1px solid ${theme.palette.primary.main}`,
              padding: 0,
              fontSize: "12px",
              color: "orange",
              borderRadius: "8px",
            }}
          >
            All
          </Button>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mt={1}
        >
          <Stack direction="row">
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "12px" }}
            >
              Withdrawal amount received{" "}
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontSize: "12px",
              color: theme.palette.primary.main,
            }}
          >
            ₹ 0.00
          </Typography>
        </Stack>
        <Button sx={style.wdbtn} onClick={fk.handleSubmit}>
          Withdrawal
        </Button>
        <Box mt={3}>
          <Stack direction="row" alignItems="center" mt={1}>
            <Box
              sx={{
                width: "5px",
                height: "5px",
                background: theme.palette.primary.main,
                transform: "rotate(45deg)",
                mr: 1,
              }}
            ></Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "12px" }}
            >
              Need to bet{" "}
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: "12px",
                color: theme.palette.primary.main,
                mx: 0.5,
              }}
            >
              {" "}
              ₹{wallet_amount_data || 0}{" "}
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "12px" }}
            >
              {" "}
              to be able to withdraw{" "}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" mt={1}>
            <Box
              sx={{
                width: "5px",
                height: "5px",
                background: theme.palette.primary.main,
                transform: "rotate(45deg)",
                mr: 1,
              }}
            ></Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "12px" }}
            >
              Withdraw time{" "}
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: "12px",
                color: theme.palette.primary.main,
                mx: 0.5,
              }}
            >
              00:00-23:50{" "}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" mt={1}>
            <Box
              sx={{
                width: "5px",
                height: "5px",
                background: theme.palette.primary.main,
                transform: "rotate(45deg)",
                mr: 1,
              }}
            ></Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "12px" }}
            >
              Inday Remaining Withdrawal Times{" "}
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: "12px",
                color: theme.palette.primary.main,
                mx: 0.5,
              }}
            >
              {" "}
              3{" "}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" mt={1}>
            <Box
              sx={{
                width: "5px",
                height: "5px",
                background: theme.palette.primary.main,
                transform: "rotate(45deg)",
                mr: 1,
              }}
            ></Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "12px" }}
            >
              Withdrawal amount range{" "}
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: "12px",
                color: theme.palette.primary.main,
                mx: 0.5,
              }}
            >
              {" "}
              ₹110.00-₹100,000.00{" "}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" mt={1}>
            <Box
              sx={{
                width: "5px",
                height: "5px",
                background: theme.palette.primary.main,
                transform: "rotate(45deg)",
                mr: 1,
              }}
            ></Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "12px" }}
            >
              Please confirm your beneficial account information before
              withdrawing. If your information is incorrect, our company will
              not be liable for the amount of loss{" "}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" mt={1}>
            <Box
              sx={{
                width: "5px",
                height: "5px",
                background: theme.palette.primary.main,
                transform: "rotate(45deg)",
                mr: 1,
              }}
            ></Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "12px" }}
            >
              If your beneficial information is incorrect, please contact
              customer service
            </Typography>
          </Stack>
        </Box>
      </Box>

      <Stack direction="row" sx={{ alignItems: "center", margin: "20px" }}>
        <Box component="img" src={withdravalhistory} width={30}></Box>
        <Typography
          variant="body1"
          color="initial"
          sx={{
            fontSize: "15px ",
            color: "#888",
            ml: "10px",
            fontWeight: "600",
          }}
        >
          Withdrawl history
        </Typography>
      </Stack>

      {visibleData?.map((i, index) => {
        return (
          <Box
            key={index}
            sx={{
              mb: 2,
              padding: "10px",
              borderRadius: "10px",
              background: "#fff",
              width: "92%",
              margin: "auto",
              mt: 2,
            }}
          >
            <Stack
              direction="row"
              sx={{
                paddingBottom: "10px",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #efefef",
              }}
            >
             <Box>
                <Typography
                 className="!bg-orange-400 !text-white rounded px-2 py-1 "
                >
                  Withdrawl
                </Typography>
              </Box>
              <Box
                sx={{
                  color: "#888",
                  textTransform: "capitalize",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                {i?.statusn}
              </Box>
            </Stack>
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
                "&>p:nth-child(1)": {
                  color: "#888",
                  fontSize: "13px",
                  fontWeight: "600",
                  py: 1,
                },
                "&>p:nth-child(2)": {
                  color: theme.palette.primary.main,
                  fontSize: "13px",
                  fontWeight: "600",
                  py: 1,
                },
              }}
            >
              <Typography variant="body1" color="initial">
                Balance
              </Typography>
              <Typography variant="body1">₹ {i?.amount}</Typography>
            </Stack>
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
                "&>p": {
                  color: "#888",
                  fontSize: "13px",
                  fontWeight: "600",
                  py: 1,
                },
              }}
            >
              <Typography variant="body1" color="initial">
                Type
              </Typography>
              <Typography variant="body1" color="initial">
                {i?.withdrawal_type}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
                "&>p": {
                  color: "#888",
                  fontSize: "13px",
                  fontWeight: "600",
                  py: 1,
                },
              }}
            >
              <Typography variant="body1" color="initial">
                Time
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                className="!text-green-500"
              >
                {moment(i?.response_date)?.format("DD-MM-YYYY HH:mm:ss")}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
                "&>p": {
                  color: "#888",
                  fontSize: "13px",
                  fontWeight: "600",
                  py: 1,
                },
              }}
            >
              <Typography variant="body1" color="initial">
                Order number
              </Typography>
              <Stack
                direction="row"
                sx={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  "&>p:nth-child(1)": {
                    color: "#888",
                    fontSize: "13px",
                    fontWeight: "600",
                    py: 1,
                  },
                  "&>p:nth-child(2)": {
                    color: theme.palette.primary.main,
                    fontSize: "13px",
                    fontWeight: "600",
                  },
                }}
              >
                <Typography variant="body1" color="initial">
                  {i?.transaction_no}
                </Typography>
                <IconButton sx={{ padding: 0 }}>
                  <ContentCopyIcon
                    sx={{ color: "#888", width: "15px", ml: 1 }}
                  />
                </IconButton>
              </Stack>
            </Stack>
          </Box>
        );
      })}

      <Button
        sx={style.paytmbtntwo}
        variant="outlined"
        onClick={() => setIsAllValue(!isAllValue)}
      >
        {isAllValue ? "Show Less" : " All history"}
      </Button>
    </Container>
  );
}
export default Withdraval;

const style = {
  header: {
    padding: "15px 8px",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& > p": {
      fontSize: "20px",
      fontWeight: "600",
      textAlign: "center",
      color: "#888",
    },
    "& > a > svg": { color: "#888", fontSize: "35px" },
  },
  withdrawalbtn: {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "20px",
    textTransform: "capitalize",
    fontSize: "14px",
    fontWeight: "600",
    padding: "5px 25px",
  },
  depositebtn: {
    background: theme.palette.primary.main,
    borderRadius: "20px",
    textTransform: "capitalize",
    fontSize: "14px",
    fontWeight: "600",
    padding: "5px 25px",
    color: "white",
  },
  paytmbtntwo: {
    borderRadius: "20px",
    textTransform: "capitalize",
    mb: 2,
    width: "92%",
    mt: 2,
    mx: 2,
    padding: "10px",
    "&:hover": { border: "1px solid transparent" },
  },
  wdbtn: {
    width: "95% !important",
    boxShadow: "0 0.05333rem #b6bad0",
    borderRadius: "20px",
    border: "none",
    color: "#fff",
    letterSpacing: "0.13333rem",
    fontWeight: "700",
    fontSize: "15px",
    height: "0.93333rem",
    width: "100%",
    background:
      "linear-gradient(180deg, #cfd1de 0%, #c7c9d9 100%), linear-gradient(180deg, #cfd1de 0%, #c7c9d9 100%)",
    backgroundSize: "100% 100%, 100% 100%",
    backgroundPosition: "center, center",
    backgroundRepeat: "no-repeat, no-repeat",
    textShadow: "0 0.02667rem 0.01333rem #afb0be",
    padding: "20px",
    mt: 3,
  },
};
