import VolumeUpIcon from "@mui/icons-material/VolumeUpOutlined";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import asistant from "../../assets/images/asistant.png";
import backbtn from "../../assets/images/backBtn.png";
import balance from "../../assets/images/balance.png";
import music from "../../assets/images/music.png";
import refresh from "../../assets/images/refresh.png";
import time from "../../assets/images/time.png";
import theme from "../../utils/theme";
import Wingo10Min from "./component/Wingo10Min";
import Wingo1Min from "./component/Wingo1Min";
import Wingo3Min from "./component/Wingo3Min";
import Wingo5Min from "./component/Wingo5Min";

function Wingo() {
  const [value, setValue] = useState(1);
 const navigate = useNavigate()
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box
        sx={{
          padding: 1,
          background:
            "linear-gradient(90deg, rgb(255, 153, 1) 0%, rgb(230, 115, 1) 100%)",
          px: 2,
        }}
      >
        <Stack
          direction="row"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <NavLink to="/">
            <Box component="img" src={backbtn} width={25}></Box>
          </NavLink>
          <Stack direction="row">
            <NavLink>
              <Box
                component="img"
                src={asistant}
                width={25}
                sx={{ mr: 2 }}
              ></Box>
            </NavLink>
            <NavLink>
              <Box component="img" src={music} width={25}></Box>
            </NavLink>
          </Stack>
        </Stack>
      </Box>
      <Box
        sx={{
          padding: 1,
          background:
            "linear-gradient(90deg, rgb(255, 153, 1) 0%, rgb(230, 115, 1) 100%)",
          px: 2,
        }}
      >
        <Box
          sx={{
            background: "white",
            padding: 2,
            borderRadius: "20px",
            textAlign: "center",
          }}
        >
          <Stack direction="row" alignItems="center" justifyContent="center">
            <Typography
              variant="body1"
              color="initial"
              fontSize="15px"
              fontWeight={600}
            >
              ₹ 0.41{" "}
            </Typography>
            <Box component="img" src={refresh} width={25} ml={2}></Box>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="center">
            <Box component="img" src={balance} width={25} mr={2}></Box>
            <Typography
              variant="body1"
              color="initial"
              fontSize="13px"
              fontWeight={400}
            >
              Wallet balance{" "}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mt={2}
          >
            <Button
              onClick={() => navigate("/withdraw")}
              sx={style.withdrawalbtn}
            >
              Withdraw
            </Button>
            <Button onClick={() => navigate("/deposit")} sx={style.depositebtn}>
              Deposit
            </Button>
          </Stack>
        </Box>
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            px: 1,
            py: 1,
            background: "#FFFBE8",
            borderRadius: "10PX",
            mt: 2,
            mb: 2,
          }}
        >
          <VolumeUpIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />
          <Typography
            variant="body1"
            color="initial"
            sx={{
              fontWeight: 500,
              fontSize: "10px",
              mr: 1,
              textAlign: "center",
              color: theme.palette.primary.main,
            }}
          >
            1.All recharge methods only available in RECHARGE menu on OFFICIAL
          </Typography>
          <Button
            sx={{ background: theme.palette.primary.main, color: "white" }}
            className="detailsbutton"
          >
            <WhatshotIcon /> Details
          </Button>
        </Stack>
      </Box>
      <Box
        sx={{
          width: "95%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "auto",
          background: "#ededed",
          borderRadius: "10PX",
          mt: 2,
        }}
      >
        <Box sx={{ width: "30%" }}>
          <NavLink
            className={value === 1 ? " wingonavactive wingonav" : " wingonav"}
            onClick={() => handleChange(1)}
          >
            <Box component="img" src={time} width={40}></Box>
            <Typography variant="body1" color="initial">
              Win Go
            </Typography>
            <Typography variant="body1" color="initial">
              1 Min
            </Typography>
          </NavLink>
        </Box>
        <Box sx={{ width: "30%" }}>
          <NavLink
            className={value === 2 ? " wingonavactive wingonav" : " wingonav"}
            onClick={() => handleChange(2)}
          >
            <Box component="img" src={time} width={40}></Box>
            <Typography variant="body1" color="initial">
              Win Go
            </Typography>
            <Typography variant="body1" color="initial">
              3 Min
            </Typography>
          </NavLink>
        </Box>
        <Box sx={{ width: "30%" }}>
          <NavLink
            className={value === 3 ? " wingonavactive wingonav" : " wingonav"}
            onClick={() => handleChange(3)}
          >
            <Box component="img" src={time} width={40}></Box>
            <Typography variant="body1" color="initial">
              Win Go
            </Typography>
            <Typography variant="body1" color="initial">
              5 Min
            </Typography>
          </NavLink>
        </Box>
      </Box>
      {value === 1 && <Wingo1Min />}
      {value === 2 && <Wingo3Min />}
      {value === 3 && <Wingo5Min />}
      {value === 4 && <Wingo10Min />}
    </Container>
  );
}

export default Wingo;

const style = {
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
};
