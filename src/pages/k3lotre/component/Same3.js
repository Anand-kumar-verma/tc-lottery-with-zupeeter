 
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Dialog,
  DialogActions,
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
import { getBalanceFunction } from "../../../services/apiCallings";
import { endpoint } from "../../../services/urls";
import SuccessCheck from "../../../shared/check/SuccessCheck";
import CustomCircularProgress from "../../../shared/loder/CustomCircularProgress";
import theme from "../../../utils/theme";
import { NavLink } from "react-router-dom";
import Howtoplay from "./Howtoplay";
const Same3 = ({ timing, gid }) => {
  const user_id = localStorage.getItem("user_id");
  const [open, setOpen] = useState(false);
  const [selectNumber, setSelectNumber] = useState("");
  const [getBalance, setBalance] = useState(0);
  const [loding, setLoding] = useState(false);
  const [opend, setOpend] = useState(false);
  const client = useQueryClient();
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  const handleNumberClick = (number) => {
    setSelectedNumbers((prevSelectedNumbers) => {
      if (prevSelectedNumbers.includes(number)) {
        return prevSelectedNumbers.filter((n) => n !== number);
      } else {
        return [...prevSelectedNumbers, number];
      }
    });
    handleClickOpen();
  };

  
    useEffect(()=>{
      if (selectNumber.length===0){
      }
    })
  useEffect(() => {
    if (gid === "1") {
      if (Number(timing) <= 5) {
        setOpen(false)
        fk.handleReset()
      };
    } else if (gid === "2") {
      if (Number(String(timing)?.split("_")?.[0]) === 0) {
        if (Number(String(timing)?.split("_")?.[1]) <= 5) {
          setOpen(false)
          fk.handleReset()
        };
      }
    } else {
      if (Number(String(timing)?.split("_")?.[0]) === 0) {
        if (Number(String(timing)?.split("_")?.[1]) <= 5) {
          setOpen(false)
          fk.handleReset()
        };
      }
    }
  }, [timing]);
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
        (selectNumber === "even" && 16) || // this is small
        (selectNumber === "odd" && 17) || // this is small
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
    client.refetchQueries("wallet_amount");
    client.refetchQueries("myAll_trx_history");
    setLoding(false);
  }
  if (loding) return <CustomCircularProgress isLoading={loding} />;

  const handleClickOpend = () => {
    setOpend(true);
  };

  const handleClosed = () => {
    setOpend(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setSelectedNumbers([])
    setOpen(false);
  };

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
      <p>3 of same Number: odds (13.83)</p>
      <div className="flex gap-1  justify-between my-4 m-2 ">
          <p className="bg-purple-400 px-3 py-2  text-white  rounded-md"
           onClick={() => handleNumberClick("222")}>222</p>
          <p className="bg-purple-400 px-3 py-2  text-white  rounded-md" 
           onClick={() => handleNumberClick("111")}>111</p>
          <p className="bg-purple-400 px-3 py-2  text-white  rounded-md" 
            onClick={() => handleNumberClick("555")}>555</p>
          <p className="bg-purple-400 px-3 py-2  text-white  rounded-md"  
          onClick={() => handleNumberClick("444")}>444</p>
          <p className="bg-purple-400 px-3 py-2  text-white  rounded-md" 
           onClick={() => handleNumberClick("888")}>888</p>
          <p className="bg-purple-400 px-3 py-2  text-white  rounded-md"
           onClick={() => handleNumberClick("333")}>333</p>
        </div>
        <p>Any 3  numbers: odds (16.83)</p>
   <div className=" m-2 my-4 w-full">
    <p className="bg-[#fb9494] p-2  text-white  rounded-md"
    onClick={() => handleNumberClick("Any of the 3 number same : odd number")}>Any of the 3 number same : odd number</p>
   </div>

      </div>
        {open && (
        <div className={`drawer h-fit`} >
          <Box>
            <Box

            >
              {" "}
            </Box>
            <Typography className="!mt-4 ">Any 3 Same numbers</Typography>
            <Box px={1}
              className="!flex  justify-start gap-1">
             
              {selectedNumbers.map((number) => (
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "400 ",
                  background: "#ffffff",
                 mt:1,

                }}
                className={` !cursor-pointer !px-2 !w-fit !rounded
                 ${number === "green" ||
                    number === "4" ||
                    number === "8" ||
                    number === "12" ||
                    number === "6" ||
                    number === "10" ||
                    number === "16"
                    ? "!bg-[#40AD72]"
                    : number === "voilet"
                      ? "!bg-[#B659FE]"
                      : number === "voilet" ||
                        number === "222" ||
                        number === "555" ||
                        number === "111" ||
                        number === "888" ||
                        number === "444" ||
                        number === "333"
                        ? "!bg-[#B659FE]" 
                        : number === "Big"
                          ? "!bg-[#F48901]"
                          : number === "Small"
                            ? "!bg-[#6da7f4]"
                            : number === "Any of the 3 number same : odd number"
                              ? "!bg-[#fb9494]"
                              : number === "Even"
                                ? "!bg-[#40ad72]"
                                : number === "0"
                                  ? "!bg-[#BF6DFE]"
                                  : number === "5" && "!bg-[#BF6DFE]"
                  }
    `}
              >
                {isNaN(Number(number)) ? number?.toString()?.toLocaleUpperCase() : number}
              </Typography>
              ))}
            </Box>
            <Box mt={3} px={2}>
              <Grid container >
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
                          className={`${fk.values.balance === i ? "!bg-[#F48901]" : "!bg-gray-400"}  cursor-pointer`}

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
                      sx={style.addsumbtn}
                      onClick={() =>
                        fk.setFieldValue(
                          "qnt",
                          Number(fk.values.qnt) - 1 < 1
                            ? 1
                            : Number(fk.values.qnt) - 1
                        )
                      }
                      className={`!bg-[#F48901]  cursor-pointer `}

                    >
                      -
                    </Box>
                    <TextField value={fk.values.qnt} className="inputamt" />
                    <Box
                      sx={style.addsumbtn}
                      onClick={() =>
                        fk.setFieldValue("qnt", Number(fk.values.qnt) + 1)
                      }
                      className={`!bg-[#F48901]  cursor-pointer px-2 text-white`}

                    >
                      +
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
              <Grid container mt={2} mx={1.5}>
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
                          className={`${fk.values.qnt === i ? "!bg-[#F48901]" : "!bg-gray-400"}  cursor-pointer`}
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
                  <NavLink onClick={handleClickOpend}>
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
                  </NavLink>
                </Stack>
              </Grid>
            </Grid>
            <Grid container mt={2}>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  sx={style.cancelbtn}
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={8}>
                <Button
                  className={`!bg-[#F48901]
           !cursor-pointer`}
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
        </div>

      )}
      <Dialog
        sx={{
          maxWidth: "400px !important",
          minWidth: "400px !important",
          margin: "auto",
          minHeight: "70%",
          maxHeight: "80%",
        }}
        open={opend}
      >
        <Howtoplay />
        <DialogActions sx={{ margin: "auto", width: "100%" }}>
          <Button
            disableElevation
            onClick={handleClosed}
            autoFocus
            variant="contained"
            sx={{
              color: "white",
              borderRadius: "20px",
              width: "60%",
              margin: "auto",
            }}
          >
            I Know
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Same3;

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
    background: "#6da7f4",
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

