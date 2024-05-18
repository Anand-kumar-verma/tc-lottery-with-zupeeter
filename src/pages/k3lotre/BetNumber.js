import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Dialog,
  Drawer,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import zero from "../../assets/images/n0-30bd92d1.png";
import one from "../../assets/images/n1-dfccbff5.png";
import two from "../../assets/images/n2-c2913607.png";
import three from "../../assets/images/n3-f92c313f.png";
import four from "../../assets/images/n4-cb84933b.png";
import five from "../../assets/images/n5-49d0e9c5.png";
import six from "../../assets/images/n6-a56e0b9a.png";
import seven from "../../assets/images/n7-5961a17f.png";
import eight from "../../assets/images/n8-d4d951a4.png";
import nine from "../../assets/images/n9-a20f6f42 (1).png";
import { getBalanceFunction } from "../../services/apiCallings";
import { endpoint } from "../../services/urls";
import SuccessCheck from "../../shared/check/SuccessCheck";
import CustomCircularProgress from "../../shared/loder/CustomCircularProgress";
import theme from "../../utils/theme";
import { NavLink } from "react-router-dom";
const BetNumber = ({ gid }) => {
  const user_id = localStorage.getItem("user_id");
  const [open, setOpen] = useState(false);
  const [selectNumber, setSelectNumber] = useState("");
  const [getBalance, setBalance] = useState(0);
  const [loding, setLoding] = useState(false);
  const [random, setRandomNumber] = useState(null)
  const [isBlinking, setIsBlinking] = useState(false)
  const client = useQueryClient();
  const initialValue = {
    balance: "1",
    qnt: "1",
  };

  useEffect(() => {
    getBalanceFunction(setBalance);
  }, []);

  const fk = useFormik({
    initialValues: initialValue,
    isSuccessPlaceBet: true,
    onSubmit: () => {
      if (
        Number(getBalance || 0) <
        Number(fk.values.balance || 1) * Number(fk.values.qnt || 1)
      )
        return toast("Your bid amount is more than wallet amount");
      betFunctionStart();
    },
  });

  async function betFunctionStart() {
    setLoding(true);
    const reqBody = {
      userid: user_id?.toString(),
      amount: (
        Number(fk.values.balance || 1) * Number(fk.values.qnt || 1) || 0
      )?.toString(),
      number: `${(selectNumber === "green" && 11) ||
        (selectNumber === "voilet" && 12) ||
        (selectNumber === "red" && 13) ||
        (selectNumber === "two" && 15) || // this is big
        (selectNumber === "one" && 14) || // this is small
        Number(selectNumber) + 1
        }`,
      gameid: `${Number(gid)}`,
    };

    try {
      const response = await axios.post(`${endpoint.trx_bet_placed}`, reqBody);
      if (response?.data?.error === "200") {
        toast(
          <SuccessCheck
            message={
              <span className="!text-sm">Bid Placed Successfully !</span>
            }
          />
        );
        fk.setFieldValue("isSuccessPlaceBet", true);
        setOpen(false);
        localStorage.setItem("betApplied", `${gid}_true`);
        console.log(response, "This is response");
      } else {
        toast(response?.data?.msg);
      }
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
    // client.refetchQueries("walletamount");
    client.refetchQueries("wallet_amount");
    client.refetchQueries("myAll_trx_history");
    setLoding(false);
  }
  if (loding) return <CustomCircularProgress isLoading={loding} />;

  const generatenumber = () => {
    const randomBitNumber = Math.floor(Math.random() *9)+1;
    setRandomNumber(randomBitNumber);
    setSelectNumber(`${randomBitNumber}`)
    setIsBlinking(!isBlinking);
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false);
  }
  return (
    <Box
      sx={{
        padding: 1,
        background: "#FFFFFF",
        mt: 2,
        borderRadius: "10px",

      }}
    >

      <div>

        <Box
          sx={{
            background: "#",
            padding: "0px 8px 0px 8px",
            alignItems: "center",
            borderRadius: "10px",
            mt: 2,
          }}
          className="grid grid-cols-4 justify-center"
        >
          <Box
            sx={{ width: "52%", m: 1, cursor:"pointer" }}
            component="img"
            src={zero}
            onClick={() => {
              setOpen(true);
              setSelectNumber("0");
            }}
            className={isBlinking ? 'blinking':''}
          >
          </Box>
          <Box
            sx={{ width: "52%", m: 1, cursor:"pointer"}}
            component="img"
            src={one}
            onClick={() => {
              setOpen(true);
              setSelectNumber("1");
            }}
            className={isBlinking ? 'blinking':''}
          ></Box>
          <Box
            sx={{ width: "52%", m: 1, cursor:"pointer" }}
            component="img"
            src={two}
            onClick={() => {
              setOpen(true);
              setSelectNumber("2");
            }}
            className={isBlinking ? 'blinking':''}
          ></Box>
          <Box
            sx={{ width: "52%", m: 1 , cursor:"pointer"}}
            component="img"
            src={three}
            onClick={() => {
              setOpen(true);
              setSelectNumber("3");
            }}
            className={isBlinking ? 'blinking':''}
          ></Box>
          <Box
            sx={{ width: "52%", m: 1, cursor:"pointer" }}
            component="img"
            src={four}
            onClick={() => {
              setOpen(true);
              setSelectNumber("4");
            }}
            className={isBlinking ? 'blinking':''}
          ></Box>
          <Box
            sx={{ width: "52%", m: 1, cursor:"pointer" }}
            component="img"
            src={five}
            onClick={() => {
              setOpen(true);
              setSelectNumber("5");
            }}
            className={isBlinking ? 'blinking':''}
          ></Box>
          <Box
            sx={{ width: "52%", m: 1, cursor:"pointer" }}
            component="img"
            src={six}
            onClick={() => {
              setOpen(true);
              setSelectNumber("6");
            }}
            className={isBlinking ? 'blinking':''}
          ></Box>
          <Box
            sx={{ width: "52%", m: 1, cursor:"pointer" }}
            component="img"
            src={seven}
            onClick={() => {
              setOpen(true);
              setSelectNumber("7");
            }}
            className={isBlinking ? 'blinking':''}
          ></Box>
          <Box
            sx={{ width: "52%", m: 1 , cursor:"pointer"}}
            component="img"
            src={eight}
            onClick={() => {
              setOpen(true);
              setSelectNumber("8");
            }}
            className={isBlinking ? 'blinking':''}
          ></Box>
          <Box
            sx={{ width: "52%", m: 1 , cursor:"pointer"}}
            component="img"
            src={nine}
            onClick={() => {
              setOpen(true);
              setSelectNumber("9");
            }}
            className={isBlinking ? 'blinking':''}
          ></Box>
          <Box
            sx={{ width: "52%", m: 1, cursor:"pointer" }}
            component="img"
            src={nine}
            onClick={() => {
              setOpen(true);
              setSelectNumber("9");
            }}
            className={isBlinking ? 'blinking':''}
          ></Box>
          <Box
            sx={{ width: "52%", m: 1 , cursor:"pointer"}}
            component="img"
            src={nine}
            onClick={() => {
              setOpen(true);
              setSelectNumber("9");
            }}
            className={isBlinking ? 'blinking':''}
          ></Box>
          <Box
            sx={{ width: "52%", m: 1, cursor:"pointer" }}
            component="img"
            src={nine}
            onClick={() => {
              setOpen(true);
              setSelectNumber("9");
            }}
            className={isBlinking ? 'blinking':''}
          ></Box>
          <Box
            sx={{ width: "52%", m: 1 , cursor:"pointer"}}
            component="img"
            src={nine}
            onClick={() => {
              setOpen(true);
              setSelectNumber("9");
            }}
            className={isBlinking ? 'blinking':''}
          ></Box>
          <Box
            sx={{ width: "52%", m: 1, cursor:"pointer" }}
            component="img"
            src={nine}
            onClick={() => {
              setOpen(true);
              setSelectNumber("9");
            }}
            className={isBlinking ? 'blinking':''}
          ></Box>
          <Box
            sx={{ width: "52%", m: 1 , cursor:"pointer"}}
            component="img"
            src={nine}
            onClick={() => {
              setOpen(true);
              setSelectNumber("9");
            }}
            className={isBlinking ? 'blinking':''}
          ></Box>
        </Box>
        <Stack
          direction="row"
          my={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <Button variant="outlined" onClick={generatenumber}>
            Random</Button>
          {[1, 5, 10, 20, 50, 100]?.map((i) => {
            return <Box sx={style.bacancebtn3}>X{i}</Box>;
          })}
        </Stack>

        <ButtonGroup
          disableElevation
          variant="contained"
          sx={{ width: "100%" }}
        >
          <Button
            sx={style.bigbtn}
            onClick={() => {
              setOpen(true);
              setSelectNumber("one");
            }}
          >
            Small
          </Button>
          <Button
            sx={style.smlbtn}
            onClick={() => {
              setOpen(true);
              setSelectNumber("two");
            }}
          >
            Big
          </Button>
        </ButtonGroup>
      </div>

      <Drawer
        open={open} 
        anchor={"bottom"}
        sx={{
          maxWidth: "400px !important",
          width: "100%",
          margin: "auto",
          padding: "10px 0px 0px 0px",
        }}
        onClickCapture={handleClose}>
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              clipPath: "polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)",
              width: "120%",
              height: "110px",
              top: "-16px",
              left: "-11%",
              zIndex: "-1",
            }}
            className={
              selectNumber === "green" ||
                selectNumber === "1" ||
                selectNumber === "3" ||
                selectNumber === "7" ||
                selectNumber === "9"
                ? "!bg-[#40AD72]"
                : selectNumber === "voilet"
                  ? "!bg-[#B659FE]"
                  : selectNumber === "red" ||
                    selectNumber === "2" ||
                    selectNumber === "4" ||
                    selectNumber === "6" ||
                    selectNumber === "8"
                    ? "!bg-[#FD565C]"
                    : selectNumber === "one"
                      ? "!bg-[#F48901]"
                      : selectNumber === "two"
                        ? "!bg-[#6DA7F4]"
                        : selectNumber === "0"
                          ? "!bg-[#BF6DFE]"
                          : selectNumber === "5" && "!bg-[#BF6DFE]"
            }
          >
            {" "}
          </Box>
          <Box px={1}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ textAlign: "center", color: "white", fontWeight: "700 " }}
            >
              TRX Win Go {gid == 3 ? 5 : gid == 2 ? 3 : gid}Min
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                textAlign: "center",
                color: "black",
                fontWeight: "400 ",
                background: "#ffffff",
                mt: 1,
                borderRadius: "5px",
              }}
            >
                Select {random||isNaN(Number(selectNumber))?selectNumber?.toString()?.toLocaleUpperCase():selectNumber}
           
            </Typography>
          </Box>
          <Box mt={5} px={2}>
            <Grid container mt={10}>
              <Grid item xs={4}>
                <Typography variant="body1" color="initial">
                  Balance{" "}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Stack
                  direction="row"
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  {[1, 10, 100, 1000]?.map((i) => {
                    return (
                      <Box
                        onClick={() => fk.setFieldValue("balance", i)}
                        sx={style.bacancebtn}
                        className={` !cursor-pointer
                          ${selectNumber === "green" ||
                            selectNumber === "1" ||
                            selectNumber === "3" ||
                            selectNumber === "7" ||
                            selectNumber === "9"
                            ? "!bg-[#40AD72]"
                            : selectNumber === "voilet"
                              ? "!bg-[#B659FE]"
                              : selectNumber === "red" ||
                                selectNumber === "2" ||
                                selectNumber === "4" ||
                                selectNumber === "6" ||
                                selectNumber === "8"
                                ? "!bg-[#FD565C]"
                                : selectNumber === "one"
                                  ? "!bg-[#F48901]"
                                  : selectNumber === "two"
                                    ? "!bg-[#6DA7F4]"
                                    : selectNumber === "0"
                                      ? "!bg-[#BF6DFE]"
                                      : selectNumber === "5" && "!bg-[#BF6DFE]"
                          }
                       `}
                      >
                        {i}
                      </Box>
                    );
                  })}
                </Stack>
              </Grid>
            </Grid>
            <Grid container mt={2}>
              <Grid item xs={4}>
                <Typography variant="body1" color="initial">
                  Quantity{" "}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Stack
                  direction="row"
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Box
                    className={` !cursor-pointer
                      ${selectNumber === "green" ||
                        selectNumber === "1" ||
                        selectNumber === "3" ||
                        selectNumber === "7" ||
                        selectNumber === "9"
                        ? "!bg-[#40AD72]"
                        : selectNumber === "voilet"
                          ? "!bg-[#B659FE]"
                          : selectNumber === "red" ||
                            selectNumber === "2" ||
                            selectNumber === "4" ||
                            selectNumber === "6" ||
                            selectNumber === "8"
                            ? "!bg-[#FD565C]"
                            : selectNumber === "one"
                              ? "!bg-[#F48901]"
                              : selectNumber === "two"
                                ? "!bg-[#6DA7F4]"
                                : selectNumber === "0"
                                  ? "!bg-[#BF6DFE]"
                                  : selectNumber === "5" && "!bg-[#BF6DFE]"
                      }
                    `}
                    sx={style.addsumbtn}
                    onClick={() =>
                      fk.setFieldValue(
                        "qnt",
                        Number(fk.values.qnt) - 1 < 1
                          ? 1
                          : Number(fk.values.qnt) - 1
                      )
                    }
                  >
                    -
                  </Box>
                  <TextField value={fk.values.qnt} className="inputamt" />
                  <Box
                    className={` !cursor-pointer
                     ${selectNumber === "green" ||
                        selectNumber === "1" ||
                        selectNumber === "3" ||
                        selectNumber === "7" ||
                        selectNumber === "9"
                        ? "!bg-[#40AD72]"
                        : selectNumber === "voilet"
                          ? "!bg-[#B659FE]"
                          : selectNumber === "red" ||
                            selectNumber === "2" ||
                            selectNumber === "4" ||
                            selectNumber === "6" ||
                            selectNumber === "8"
                            ? "!bg-[#FD565C]"
                            : selectNumber === "one"
                              ? "!bg-[#F48901]"
                              : selectNumber === "two"
                                ? "!bg-[#6DA7F4]"
                                : selectNumber === "0"
                                  ? "!bg-[#BF6DFE]"
                                  : selectNumber === "5" && "!bg-[#BF6DFE]"
                      }
                    `}
                    sx={style.addsumbtn}
                    onClick={() =>
                      fk.setFieldValue("qnt", Number(fk.values.qnt) + 1)
                    }
                  >
                    +
                  </Box>
                </Stack>
              </Grid>
            </Grid>
            <Grid container mt={2}>
              <Grid item xs={1}></Grid>
              <Grid item xs={12}>
                <Stack
                  direction="row"
                  alignItems={"center"}
                  justifyContent={"end"}
                >
                  {[1, 5, 10, 20, 50, 100]?.map((i) => {
                    return (
                      <Box
                        onClick={() => fk.setFieldValue("qnt", i)}
                        sx={style.bacancebtn2}
                        className={` !cursor-pointer
                          ${selectNumber === "green" ||
                            selectNumber === "1" ||
                            selectNumber === "3" ||
                            selectNumber === "7" ||
                            selectNumber === "9"
                            ? "!bg-[#40AD72]"
                            : selectNumber === "voilet"
                              ? "!bg-[#B659FE]"
                              : selectNumber === "red" ||
                                selectNumber === "2" ||
                                selectNumber === "4" ||
                                selectNumber === "6" ||
                                selectNumber === "8"
                                ? "!bg-[#FD565C]"
                                : selectNumber === "one"
                                  ? "!bg-[#F48901]"
                                  : selectNumber === "two"
                                    ? "!bg-[#6DA7F4]"
                                    : selectNumber === "0"
                                      ? "!bg-[#BF6DFE]"
                                      : selectNumber === "5" && "!bg-[#BF6DFE]"
                          }`}
                      >
                        X{i}
                      </Box>
                    );
                  })}
                </Stack>
              </Grid>
            </Grid>
          </Box>
          <Grid container mt={2}>
            <Grid item xs={12}>
              <Stack direction="row" alignItems="center">
                <Checkbox checked />{" "}
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ color: "gray", fontSize: "14px" }}
                >
                  I agree
                </Typography>
                <Typography
                  component="a"
                  sx={{
                    color: `${theme.palette.primary.main} !important`,
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  《Pre-sale rules》
                </Typography>
              </Stack>
            </Grid>
          </Grid>
          <Grid container mt={2}>
            <Grid item xs={4}>
              <Button
                variant="contained"
                sx={style.cancelbtn}
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item xs={8}>
              <Button
                className={`
                  ${selectNumber === "green" ||
                    selectNumber === "1" ||
                    selectNumber === "3" ||
                    selectNumber === "7" ||
                    selectNumber === "9"
                    ? "!bg-[#40AD72]"
                    : selectNumber === "voilet"
                      ? "!bg-[#B659FE]"
                      : selectNumber === "red" ||
                        selectNumber === "2" ||
                        selectNumber === "4" ||
                        selectNumber === "6" ||
                        selectNumber === "8"
                        ? "!bg-[#FD565C]"
                        : selectNumber === "one"
                          ? "!bg-[#F48901]"
                          : selectNumber === "two"
                            ? "!bg-[#6DA7F4]"
                            : selectNumber === "0"
                              ? "!bg-[#BF6DFE]"
                              : selectNumber === "5" && "!bg-[#BF6DFE]"
                  } !cursor-pointer`}
                variant="contained"
                sx={style.submitbtn}
                onClick={() => {
                  fk.handleSubmit();
                }}
              >
                Total amount ₹{" "}
                {Number(fk.values.balance || 1) * Number(fk.values.qnt || 1)}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Drawer>
    </Box>
  );
};

export default BetNumber;

const style = {
  bacancebtn: {
    padding: "4px 13px",
    borderRadius: "20px",
    color: "white",
    fontSize: "17px",
    fontWeight: "500",
    marginLeft: "5px",
  },
  bacancebtn2: {
    padding: "4px 13px",
    borderRadius: "1px",
    color: "white",
    fontSize: "17px",
    fontWeight: "500",
    marginLeft: "5px",
  },
  bacancebtn3: {
    backgroundColor: "#40AD72",
    padding: "1px 5px",
    borderRadius: "6px",
    color: "white",
    fontSize: "14px",
    fontWeight: "500",
    marginLeft: "5px",
    display: "flex",
    alignItems: "center",
    height: "30px",
    ["@media (max-width:340px)"]: { fontSize: "13px" },
    cursor: 'pointer',

  },
  addsumbtn: {
    padding: "4px 13px",
    color: "white",
    fontSize: "17px",
    fontWeight: "500",
    margin: "0px 5px",
  },
  cancelbtn: {
    width: "100%",
    borderRadius: "0px",
    color: "white",
    backgroundColor: "#25253C",
    padding: 1,
  },
  submitbtn: {
    width: "100%",
    borderRadius: "0px",
    color: "white",
    padding: 1,
  },
  bigbtn: {
    width: "50%",
    borderRadius: "20px 0px 0px 20px",
    color: "white",
    fontSize: "16px",
    fontWeight: "500",
  },
  smlbtn: {
    width: "50%",
    borderRadius: "0px 20px 20px 0px",
    color: "white",
    fontSize: "16px",
    fontWeight: "500",
    background: "#6DA7F4",
  },
  linetable: {
    "&>p": {
      fontSize: "12px",
      color: "gray",
      border: "1px solid gray",
      borderRadius: "50%",
      width: "15px",
      height: "15px",
      textAlign: "center",
      padding: "2px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    alignItems: "center",
    justifyContent: "space-between",
    "&>p:nth-last-child(1)": {
      width: "20px !important",
      height: "20px !important",
    },
  },
};