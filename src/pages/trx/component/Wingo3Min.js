import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import {
  Box,
  Button,
  Stack,
  Typography
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import countdownfirst from "../../../assets/images/countdownfirst.mp3";
import countdownlast from "../../../assets/images/countdownlast.mp3";
import { dummycounterFun } from "../../../redux/slices/counterSlice";
import { useSocket } from "../../../shared/socket/SocketContext";
import Chart from "../history/Chart";
import GameHistory from "../history/GameHistory";
import MyHistory from "../history/MyHistory";
import ShowImages from "./ShowImages";
import BetNumber from "../BetNumber";
function Wingo3Min() {
  const socket = useSocket();
  const client = useQueryClient();
  const [three_min_time, setThree_min_time] = useState("0_0");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(1);
  const audioRefMusic = React.useRef(null);
  const audioRefMusiclast = React.useRef(null);
  const next_step = useSelector((state) => state.aviator.next_step)
  const dispatch = useDispatch()


  const show_this_three_min_time_sec = React.useMemo(
    () => String(three_min_time?.split("_")?.[1]).padStart(2, "0"),
    [three_min_time]
  );

  const show_this_three_min_time_min = React.useMemo(
    () => String(three_min_time?.split("_")?.[0]).padStart(2, "0"),
    [three_min_time]
  );

  const initialValue ={
    openTimerDialog:false
  }
  const fk = useFormik({
    initialValues:initialValue,
    onSubmit:()=>{

    }
  })

  React.useEffect(() => {
    const handleThreeMin = (threemin) => {
      setThree_min_time(threemin);
      if (
        threemin?.split("_")?.[1] === "1" &&
        threemin?.split("_")?.[0] === "0"
      )
        handlePlaySoundLast();
        if (
          Number(threemin?.split("_")?.[1]) <= 10 &&
          Number(threemin?.split("_")?.[1]) > 1 && // 1 index means second
          threemin?.split("_")?.[0] === "0" // 0 index means min
        ) {
          handlePlaySound();
        }
         
      if (
        Number(threemin?.split("_")?.[1]) <= 10 && // 1 index means second
        threemin?.split("_")?.[0] === "0" // 0 index means min
      ) {
        fk.setFieldValue("openTimerDialog", true);
      }
      if (threemin?.split("_")?.[1] === "59") {
        fk.setFieldValue("openTimerDialog", false);
      }
      if (
        threemin?.split("_")?.[1] === "25" &&
        threemin?.split("_")?.[0] === "0"
      ) {
        // oneMinCheckResult();
        // oneMinColorWinning();
      }
      if (
        threemin?.split("_")?.[1] === "56" &&
        threemin?.split("_")?.[0] === "3"
      ) {
        client.refetchQueries("trx_gamehistory");
        client.refetchQueries("wallet_amount");
        dispatch(dummycounterFun());
        fk.setFieldValue("openTimerDialog", false);
      }
    };

    socket.on("threemin", handleThreeMin);

    return () => {
      socket.off("threemin", handleThreeMin);
    };
  }, []);

  const handlePlaySoundLast = async () => {
    try {
      if (audioRefMusiclast?.current?.pause) {
        await audioRefMusiclast?.current?.play();
      } else {
        await audioRefMusiclast?.current?.pause();
      }
    } catch (error) {
      // Handle any errors during play
      console.error("Error during play:", error);
    }
  };
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

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      {React.useMemo(() => {
        return (
          <>
            <audio ref={audioRefMusic} hidden>
              <source src={`${countdownfirst}`} type="audio/mp3" />
            </audio>
            <audio ref={audioRefMusiclast} hidden>
              <source src={`${countdownlast}`} type="audio/mp3" />
            </audio>
          </>
        );
      }, [audioRefMusic, audioRefMusiclast])}
      <Box sx={{ px: 1, mt: 3 }}>
        <Box
          className="countdownbgtrx"
          sx={{
            backgroundImage: `url(https://www.tcvvip11.com/assets/png/trxbg-21e5d811.png)`,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                width: "50%",
                borderRight: "1px dashed white",
                paddingRight: "2%",
              }}
              className="win-banner"
            >
              {React.useMemo(() => {
                return (
                  <>
                    <Box
                    // onClick={() => handleClickOpenpoicy()}
                    >
                      <Button
                        variant="text"
                        color="primary"
                        className="htpbutton"
                      >
                        <StickyNote2OutlinedIcon /> How To Play
                      </Button>
                    </Box>
                    <div className="flex gap-2">
                      <div className="!text-white">Period:</div>
                      <Typography
                        variant="body1"
                        color="initial"
                        className="!text-white !font-bold"
                      >
                        {next_step}{" "}
                      </Typography>
                    </div>
                    <div className="!text-white !text-sm">Draw Time</div>
                  </>
                );
              }, [])}
            </Box>
            <Box>
              <Typography variant="h3" color="initial" className="timername">
                Time remaining
              </Typography>
              {React.useMemo(() => {
                return (
                  <Stack direction="row">
                    <Box className="timer">{show_this_three_min_time_min?.substring(0, 1)}</Box>
                    <Box className="timer1"> {show_this_three_min_time_min?.substring(1, 2)}</Box>
                    <Box className={"timer1"}>:</Box>
                    <Box className="timer1">
                    {show_this_three_min_time_sec?.substring(0, 1)}
                    </Box>
                    <Box className="timer2">
                    {show_this_three_min_time_sec?.substring(1, 2)}
                    </Box>
                  </Stack>
                );
              }, [show_this_three_min_time_sec])}
            </Box>
          </Box>
          {React.useMemo(() => {
            return <ShowImages />;
          }, [])}
        </Box>
        <div className="relative">
          <BetNumber gid={"2"} />
          {fk.values.openTimerDialog && (
            <div className="!w-full !z-50 top-0 !absolute px-5 flex justify-center items-center">
              <div
                className="flex gap-2 justify-cente !bg-opacity-5"
                sx={{ width: "100%" }}
              >
                <div
                  style={{
                    fontSize: 200,
                    borderRadius: 20,
                    // background: "rgb(73, 57, 193)",
                    fontWeight: 700,
                    width: 150,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // color: "white",
                  }}
                  className="!bg-[#F48901]  !text-white"
                >
                {show_this_three_min_time_sec?.substring(0, 1)}
                </div>
                <div
                  style={{
                    fontSize: 200,
                    borderRadius: 20,
                    // background: "rgb(73, 57, 193)",
                    fontWeight: 700,
                    width: 150,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // color: "white",
                  }}
                  className="!bg-[#F48901]  !text-white"
                >
                  {show_this_three_min_time_sec?.substring(1, 2)}
                </div>
              </div>
            </div>
          )}
        </div>
        <Stack direction="row" justifyContent="space-between" mt={2}>
          <Button
            className={
              value === 1 ? " gametableactive gametable" : " gametable"
            }
            onClick={() => handleChange(1)}
          >
            Game history
          </Button>
          <Button
            className={
              value === 2 ? " gametableactive gametable" : " gametable"
            }
            onClick={() => handleChange(2)}
          >
            Chart
          </Button>
          <Button
            className={
              value === 3 ? " gametableactive gametable" : " gametable"
            }
            onClick={() => handleChange(3)}
          >
            My history
          </Button>
        </Stack>
        {value === 1 && <GameHistory gid="1" />}
        {value === 2 && <Chart gid="1" />}
        {value === 3 && <MyHistory gid="1" />}
      </Box>
    </Box>
  );
}

export default Wingo3Min;

const style = {
  bacancebtn: {
    backgroundColor: "#40AD72",
    padding: "4px 13px",
    borderRadius: "20px",
    color: "white",
    fontSize: "17px",
    fontWeight: "500",
    marginLeft: "5px",
  },
  bacancebtn2: {
    backgroundColor: "#40AD72",
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
    backgroundColor: "#40AD72",
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
    backgroundColor: "#40AD72",
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
