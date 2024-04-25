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

function Wingo1Min() {
  const socket = useSocket();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(1);
  const [one_min_time, setOne_min_time] = useState(0);
  const show_this_one_min_time = String(one_min_time).padStart(2, "0");
  const audioRefMusic = React.useRef(null);
  const audioRefMusiclast = React.useRef(null);
  const client = useQueryClient();
  const [isImageChange, setIsImageChange] = useState("1_2_3_4_5");
  const img1 = Number(isImageChange?.split("_")[0]);
  const img2 = Number(isImageChange?.split("_")[1]);
  const img3 = Number(isImageChange?.split("_")[2]);
  const img4 = Number(isImageChange?.split("_")[3]);
  const img5 = Number(isImageChange?.split("_")[4]);
  const image_array = [zero,one,two,three,four,five,six,seven,eight,nine];
  React.useEffect(() => {
    setIsImageChange(changeImages());
  }, []);

  React.useEffect(() => {
    const handleOneMin = (onemin) => {
      setOne_min_time(onemin);
      // fk.setFieldValue("show_this_one_min_time", onemin);
      if (onemin === 5 || onemin === 4 || onemin === 3 || onemin === 2) {
        handlePlaySound();
      }
      if (onemin === 1) handlePlaySoundLast();

      if (onemin <= 10) {
        // fk.setFieldValue("openTimerDialogBoxOneMin", true);
      }
      if (onemin === 0) {
        // client.refetchQueries("myhistory");
        // client.refetchQueries("walletamount");
        // client.refetchQueries("gamehistory");
        // client.refetchQueries("gamehistory_chart");
        // client.refetchQueries("myAllhistory");
        // dispatch(dummycounterFun());
        // fk.setFieldValue("openTimerDialogBoxOneMin", false);
      }
    };
    socket.on("onemin", handleOneMin);
    return () => {
      socket.off("onemin", handleOneMin);
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
                  <Box className="timer">0</Box>
                  <Box className="timer1">0</Box>
                  <Box className="timer1">:</Box>
                  <Box className="timer1">
                    {show_this_one_min_time?.substring(0, 1)}
                  </Box>
                  <Box className="timer2">
                    {show_this_one_min_time?.substring(1, 2)}
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
        {value === 1 && <GameHistory gid="1"/>}
        {value === 2 && <Chart gid="1"/>}
      </Box>
    </Box>
  );
}

export default Wingo1Min;


