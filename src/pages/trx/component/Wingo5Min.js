import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import countdownfirst from "../../../assets/images/countdownfirst.mp3";
import countdownlast from "../../../assets/images/countdownlast.mp3";
import { dummycounterFun } from "../../../redux/slices/counterSlice";
import { useSocket } from "../../../shared/socket/SocketContext";
import BetNumber from "../BetNumber";
import Chart from "../history/Chart";
import GameHistory from "../history/GameHistory";
import MyHistory from "../history/MyHistory";
import ShowImages from "./ShowImages";

function Wingo5Min() {
  const socket = useSocket();
  const client = useQueryClient();
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  const [one_min_time, setOne_min_time] = useState("0_0");
  const audioRefMusic = React.useRef(null);
  const audioRefMusiclast = React.useRef(null);
  const next_step = useSelector((state) => state.aviator.next_step);

  const show_this_three_min_time_sec = React.useMemo(
    () => String(one_min_time?.split("_")?.[1]).padStart(2, "0"),
    [one_min_time]
  );
  const show_this_three_min_time_min = React.useMemo(
    () => String(one_min_time?.split("_")?.[0]).padStart(2, "0"),
    [one_min_time]
  );

  const initialValue = {
    openTimerDialog: false,
  };
  const fk = useFormik({
    initialValues: initialValue,
    onSubmit: () => {},
  });

  React.useEffect(() => {
    const handleFiveMin = (fivemin) => {
      setOne_min_time(fivemin);

      if (fivemin?.split("_")?.[1] === "1" && fivemin?.split("_")?.[0] === "0")
        handlePlaySoundLast();

      if (
        Number(fivemin?.split("_")?.[1]) <= 30 &&
        Number(fivemin?.split("_")?.[1]) > 1 && // this is for sec
        fivemin?.split("_")?.[0] === "0" // this is for minut
      ) {
        handlePlaySound();
      }

      if (
        Number(fivemin?.split("_")?.[1]) <= 30 && // this is for sec
        fivemin?.split("_")?.[0] === "0" // this is for minut
      ) {
        fk.setFieldValue("openTimerDialog", true);
      }

      if (
        fivemin?.split("_")?.[1] === "40" && // this is for sec
        fivemin?.split("_")?.[0] === "0" // this is for minut
      ) {
        // oneMinCheckResult();
        // oneMinColorWinning();
      }
      if (
        fivemin?.split("_")?.[1] === "59" &&
        fivemin?.split("_")?.[0] === "4"
      ) {
        fk.setFieldValue("openTimerDialog", false);
      }
      if (
        fivemin?.split("_")?.[1] === "56" &&
        fivemin?.split("_")?.[0] === "4"
      ) {
        dispatch(dummycounterFun());
        client.refetchQueries("wallet_amount");
        client.refetchQueries("myAll_trx_history");
        client.refetchQueries("trx_gamehistory");
      }
    };

    socket.on("fivemintrx", handleFiveMin);

    return () => {
      socket.off("fivemintrx", handleFiveMin);
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
                    <Box className="timer">
                      {show_this_three_min_time_min?.substring(0, 1)}
                    </Box>
                    <Box className="timer1">
                      {" "}
                      {show_this_three_min_time_min?.substring(1, 2)}
                    </Box>
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
          <BetNumber gid={"3"} />
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
        {value === 1 && <GameHistory gid="3" />}
        {value === 2 && <Chart gid="3" />}
        {value === 3 && <MyHistory gid="3" />}
      </Box>
    </Box>
  );
}

export default Wingo5Min;

