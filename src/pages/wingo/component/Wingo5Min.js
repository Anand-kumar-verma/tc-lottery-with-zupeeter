import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import { useQueryClient } from "react-query";
import countdownfirst from "../../../assets/images/countdownfirst.mp3";
import countdownlast from "../../../assets/images/countdownlast.mp3";
import zero from "../../../assets/images/n0-30bd92d1.png";
import one from "../../../assets/images/n1-dfccbff5.png";
import two from "../../../assets/images/n2-c2913607.png";
import three from "../../../assets/images/n3-f92c313f.png";
import four from "../../../assets/images/n4-cb84933b.png";
import five from "../../../assets/images/n5-49d0e9c5.png";
import six from "../../../assets/images/n6-a56e0b9a.png";
import seven from "../../../assets/images/n7-5961a17f.png";
import eight from "../../../assets/images/n8-d4d951a4.png";
import nine from "../../../assets/images/n9-a20f6f42 (1).png";
import backbanner from "../../../assets/images/winbackbanner.png";
import { changeImages } from "../../../shared/nodeSchedular";
import { useSocket } from "../../../shared/socket/SocketContext";
import BetNumber from "../BetNumber";
import Chart from "../history/Chart";
import GameHistory from "../history/GameHistory";

function Wingo5Min() {
  const socket = useSocket();
  const client = useQueryClient();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(1);
  const [one_min_time, setOne_min_time] = useState("0_0");
  const audioRefMusic = React.useRef(null);
  const audioRefMusiclast = React.useRef(null);
  const [isImageChange, setIsImageChange] = useState("1_2_3_4_5");
  const img1 = Number(isImageChange?.split("_")[0]);
  const img2 = Number(isImageChange?.split("_")[1]);
  const img3 = Number(isImageChange?.split("_")[2]);
  const img4 = Number(isImageChange?.split("_")[3]);
  const img5 = Number(isImageChange?.split("_")[4]);
  const image_array = [
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
  ];
  React.useEffect(() => {
    setIsImageChange(changeImages());
  }, []);

  const show_this_three_min_time_sec = React.useMemo(
    () => String(one_min_time?.split("_")?.[1]).padStart(2, "0"),
    [one_min_time]
  );
  const show_this_three_min_time_min = React.useMemo(
    () => String(one_min_time?.split("_")?.[0]).padStart(2, "0"),
    [one_min_time]
  );

  React.useEffect(() => {
    const handleFiveMin = (fivemin) => {
      setOne_min_time(fivemin);
      //   fk.setFieldValue("show_this_one_min_time",fivemin)
      if (
        (fivemin?.split("_")?.[1] === "5" ||
          fivemin?.split("_")?.[1] === "4" ||
          fivemin?.split("_")?.[1] === "3" ||
          fivemin?.split("_")?.[1] === "2") &&
        fivemin?.split("_")?.[0] === "0"
      )
        handlePlaySound();
      if (fivemin?.split("_")?.[1] === "1" && fivemin?.split("_")?.[0] === "0")
        handlePlaySoundLast();

      if (
        Number(fivemin?.split("_")?.[1]) <= 10 && // this is for sec
        fivemin?.split("_")?.[0] === "0" // this is for minut
      ) {
        // fk.setFieldValue("openTimerDialogBoxOneMin", true);
      }
      if (fivemin?.split("_")?.[1] === "59") {
        // fk.setFieldValue("openTimerDialogBoxOneMin", false);
      }
      if (
        fivemin?.split("_")?.[1] === "40" && // this is for sec
        fivemin?.split("_")?.[0] === "0" // this is for minut
      ) {
        // oneMinCheckResult();
        // oneMinColorWinning();
      }
      if (
        fivemin?.split("_")?.[1] === "0" &&
        fivemin?.split("_")?.[0] === "0"
      ) {
        // client.refetchQueries("gamehistory");
        // client.refetchQueries("walletamount");
        // client.refetchQueries("gamehistory_chart");
        // client.refetchQueries("myhistory");
        // client.refetchQueries("myAllhistory");
        // dispatch(dummycounterFun());
      }
    };

    socket.on("fivemin", handleFiveMin);

    return () => {
      socket.off("fivemin", handleFiveMin);
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
          sx={{
            backgroundImage: `url(${backbanner})`,
            backgroundSize: "100% 100%",
            padding: 1,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button variant="text" color="primary" className="htpbutton">
                <StickyNote2OutlinedIcon /> How To Play
              </Button>
              <Typography
                variant="body1"
                color="initial"
                className="psize"
                mt={1}
              >
                Win Go 1Min
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ width: "100%", padding: "8px 0px" }}
              >
                <Box
                  component="img"
                  src={image_array[Number(img1)]}
                  width={25}
                ></Box>
                <Box
                  component="img"
                  src={image_array[Number(img2)]}
                  width={25}
                ></Box>
                <Box
                  component="img"
                  src={image_array[Number(img3)]}
                  width={25}
                ></Box>
                <Box
                  component="img"
                  src={image_array[Number(img4)]}
                  width={25}
                ></Box>
                <Box
                  component="img"
                  src={image_array[Number(img5)]}
                  width={25}
                ></Box>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "end",
                }}
              >
                <Typography
                  variant="body1"
                  color="initial"
                  className="timername"
                >
                  Time remaining{" "}
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <Box className="timer">
                    {show_this_three_min_time_min?.substring(0, 1)}
                  </Box>
                  <Box className="timer1">
                    {" "}
                    {show_this_three_min_time_min?.substring(1, 2)}
                  </Box>
                  <Box className="timer1">:</Box>
                  <Box className="timer1">
                    {" "}
                    {show_this_three_min_time_sec?.substring(0, 1)}
                  </Box>
                  <Box className="timer2">
                    {show_this_three_min_time_sec?.substring(1, 2)}
                  </Box>
                </Box>
                <Typography
                  variant="body1"
                  color="initial"
                  className="idnumber"
                >
                  20240420010668{" "}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <BetNumber />
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
        {value === 1 && <GameHistory />}
        {value === 2 && <Chart />}
      </Box>
    </Box>
  );
}

export default Wingo5Min;

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
