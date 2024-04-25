import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Drawer,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
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
import theme from "../../utils/theme";

const BetNumber = () => {
  const [open, setOpen] = useState(false);
  const [selectNumber, setSelectNumber] = useState("");

  return (
    <Box
      sx={{
        padding: 1,
        background: "#FFFFFF",
        mt: 2,
        borderRadius: "10px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Button
          onClick={() => {
            console.log("THi is function hit now");
            setOpen(true);
            setSelectNumber("green");
          }}
          className="greenbtn"
        >
          Green
        </Button>
        <Button
          onClick={() => {
            setOpen(true);
            setSelectNumber("voilet");
          }}
          className="violetbtn"
        >
          Violet
        </Button>
        <Button
          onClick={() => {
            setOpen(true);
            setSelectNumber("red");
          }}
          className="redbtn"
        >
          Red
        </Button>
      </Stack>
      <Box
        sx={{
          background: "#EEEEEE",
          padding: "8px 8px 0px 8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          borderRadius: "10px",
          mt: 2,
        }}
      >
        <Box
          sx={{ width: "17%", mb: 1 }}
          component="img"
          src={zero}
          onClick={() => {
            setOpen(true);
            setSelectNumber("0");
          }}
        ></Box>
        <Box
          sx={{ width: "17%", mb: 1 }}
          component="img"
          src={one}
          onClick={() => {
            setOpen(true);
            setSelectNumber("1");
          }}
        ></Box>
        <Box
          sx={{ width: "17%", mb: 1 }}
          component="img"
          src={two}
          onClick={() => {
            setOpen(true);
            setSelectNumber("2");
          }}
        ></Box>
        <Box
          sx={{ width: "17%", mb: 1 }}
          component="img"
          src={three}
          onClick={() => {
            setOpen(true);
            setSelectNumber("3");
          }}
        ></Box>
        <Box
          sx={{ width: "17%", mb: 1 }}
          component="img"
          src={four}
          onClick={() => {
            setOpen(true);
            setSelectNumber("4");
          }}
        ></Box>
        <Box
          sx={{ width: "17%", mb: 1 }}
          component="img"
          src={five}
          onClick={() => {
            setOpen(true);
            setSelectNumber("5");
          }}
        ></Box>
        <Box
          sx={{ width: "17%", mb: 1 }}
          component="img"
          src={six}
          onClick={() => {
            setOpen(true);
            setSelectNumber("6");
          }}
        ></Box>
        <Box
          sx={{ width: "17%", mb: 1 }}
          component="img"
          src={seven}
          onClick={() => {
            setOpen(true);
            setSelectNumber("7");
          }}
        ></Box>
        <Box
          sx={{ width: "17%", mb: 1 }}
          component="img"
          src={eight}
          onClick={() => {
            setOpen(true);
            setSelectNumber("8");
          }}
        ></Box>
        <Box
          sx={{ width: "17%", mb: 1 }}
          component="img"
          src={nine}
          onClick={() => {
            setOpen(true);
            setSelectNumber("9");
          }}
        ></Box>
      </Box>
      <Stack
        direction="row"
        my={1}
        alignItems="center"
        justifyContent="space-between"
      >
        <Button variant="outlined">Random</Button>
        {[1, 5, 10, 20, 50, 100]?.map((i) => {
          return <Box sx={style.bacancebtn3}>X{i}</Box>;
        })}
      </Stack>
      <ButtonGroup disableElevation variant="contained" sx={{ width: "100%" }}>
        <Button
          sx={style.bigbtn}
          onClick={() => {
            setOpen(true);
            setSelectNumber("one");
          }}
        >
          One
        </Button>
        <Button
          sx={style.smlbtn}
          onClick={() => {
            setOpen(true);
            setSelectNumber("two");
          }}
        >
          Two
        </Button>
      </ButtonGroup>

      <Drawer
        open={open}
        anchor={"bottom"}
        sx={{
          maxWidth: "400px !important",
          width: "100%",
          margin: "auto",
          padding: "10px 0px 0px 0px",
        }}
      >
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
                : (selectNumber === "red" ||
                    selectNumber === "2" ||
                    selectNumber === "4" ||
                    selectNumber === "6" ||
                    selectNumber === "8") &&
                  "!bg-[#FD565C]"
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
              Win Go 1Min
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
              Select Green
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
                        sx={style.bacancebtn}
                        className={
                          selectNumber === "green" ||
                          selectNumber === "1" ||
                          selectNumber === "3" ||
                          selectNumber === "7" ||
                          selectNumber === "9"
                            ? "!bg-[#40AD72]"
                            : selectNumber === "voilet"
                            ? "!bg-[#B659FE]"
                            : (selectNumber === "red" ||
                                selectNumber === "2" ||
                                selectNumber === "4" ||
                                selectNumber === "6" ||
                                selectNumber === "8") &&
                              "!bg-[#FD565C]"
                        }
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
                    className={
                      selectNumber === "green" ||
                      selectNumber === "1" ||
                      selectNumber === "3" ||
                      selectNumber === "7" ||
                      selectNumber === "9"
                        ? "!bg-[#40AD72]"
                        : selectNumber === "voilet"
                        ? "!bg-[#B659FE]"
                        : (selectNumber === "red" ||
                            selectNumber === "2" ||
                            selectNumber === "4" ||
                            selectNumber === "6" ||
                            selectNumber === "8") &&
                          "!bg-[#FD565C]"
                    }
                    sx={style.addsumbtn}
                  >
                    -
                  </Box>
                  <TextField value={10} className="inputamt" />
                  <Box
                    className={
                      selectNumber === "green" ||
                      selectNumber === "1" ||
                      selectNumber === "3" ||
                      selectNumber === "7" ||
                      selectNumber === "9"
                        ? "!bg-[#40AD72]"
                        : selectNumber === "voilet"
                        ? "!bg-[#B659FE]"
                        : (selectNumber === "red" ||
                            selectNumber === "2" ||
                            selectNumber === "4" ||
                            selectNumber === "6" ||
                            selectNumber === "8") &&
                          "!bg-[#FD565C]"
                    }
                    sx={style.addsumbtn}
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
                        sx={style.bacancebtn2}
                        className={
                          selectNumber === "green" ||
                          selectNumber === "1" ||
                          selectNumber === "3" ||
                          selectNumber === "7" ||
                          selectNumber === "9"
                            ? "!bg-[#40AD72]"
                            : selectNumber === "voilet"
                            ? "!bg-[#B659FE]"
                            : (selectNumber === "red" ||
                                selectNumber === "2" ||
                                selectNumber === "4" ||
                                selectNumber === "6" ||
                                selectNumber === "8") &&
                              "!bg-[#FD565C]"
                        }
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
                className={
                  selectNumber === "green" ||
                  selectNumber === "1" ||
                  selectNumber === "3" ||
                  selectNumber === "7" ||
                  selectNumber === "9"
                    ? "!bg-[#40AD72]"
                    : selectNumber === "voilet"
                    ? "!bg-[#B659FE]"
                    : (selectNumber === "red" ||
                        selectNumber === "2" ||
                        selectNumber === "4" ||
                        selectNumber === "6" ||
                        selectNumber === "8") &&
                      "!bg-[#FD565C]"
                }
                variant="contained"
                sx={style.submitbtn}
                onClick={() => setOpen(false)}
              >
                Total amount ₹ 1.00
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
