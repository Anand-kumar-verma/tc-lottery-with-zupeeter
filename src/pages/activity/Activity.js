import React from "react";
import Layout from "../../component/layout/Layout";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import theme from "../../utils/theme";
import banner1 from "../../assets/images/signInBanner.png";
import banner2 from "../../assets/images/giftRedeem.png";
import actbanner1 from "../../assets/images/actbanner1.jpg";
import actbanner2 from "../../assets/images/actbanner2.jpg";
import actbanner3 from "../../assets/images/actbanner3.jpg";
import actbanner4 from "../../assets/images/actbanner4.jpg";
import actbanner5 from "../../assets/images/actbanner5.jpg";
import actbanner6 from "../../assets/images/actbanner6.jpg";
import actbanner7 from "../../assets/images/actbanner7.jpg";

const style = {
  root: {
    background: theme.palette.primary.main,
    pt: 2,
    px: 1,
    "&>p": { color: "white" },
    "&>p:nth-child(1)": { fontSize: "17px", fontWeight: 600 },
    "&>p:nth-child(2)": { fontSize: "12px", fontWeight: 400, mt: 1 },
    "&>p:nth-child(3)": { fontSize: "12px", fontWeight: 400, pb: 1 },
  },
  act: {
    px: 2,
    alignItems: "baseline",
    justifyContent: "space-between",
    width: "100%",
    mt: 3,
  },
  act2: { px: 2, width: "100%", mt: 3 },
  actimg: {
    width: "49%",
    background: "#fff",
    borderRadius: "10px",
    paddingBottom: "20px",
    "&>p:nth-child(2)": { fontSize: "14px", fontWeight: 600, pl: 1 },
    "&>p:nth-child(3)": { fontSize: "12px", fontWeight: 400, pl: 1, pt: 1 },
  },
  actimg2: {
    mb: 2,
    width: "100%",
    background: "#fff",
    borderRadius: "10px",
    paddingBottom: "20px",
    "&>p:nth-child(2)": {
      fontSize: "18px",
      fontWeight: 700,
      pl: 1,
      textAlign: "center",
    },
  },
};
function Activity() {
  return (
    <Layout header={false}>
      <Box sx={style.root}>
        <Typography variant="body1" color="initial">
          Activity
        </Typography>
        <Typography variant="body1" color="initial">
          Please remember to follow the event page
        </Typography>
        <Typography variant="body1" color="initial">
          We will launch user feedback activities from time to time
        </Typography>
      </Box>
      <Stack direction="row" sx={style.act}>
        <Box sx={style.actimg}>
          <Box component="img" sx={{ width: "100%" }} src={banner1}></Box>
          <Typography variant="body1" color="initial">
            Gifts
          </Typography>
          <Typography variant="body1" color="initial">
            Enter the redemption code to receive gift rewards
          </Typography>
        </Box>
        <Box sx={style.actimg}>
          <Box component="img" sx={{ width: "100%" }} src={banner2}></Box>
          <Typography variant="body1" color="initial">
            FIRST DEPOSIT BONUS
          </Typography>
          <Typography variant="body1" color="initial">
            The more consecutive days you sign in, the higher the reward will
            be.
          </Typography>
        </Box>
      </Stack>
      <Stack sx={style.act2}>
        <Box sx={style.actimg2}>
          <Box
            component="img"
            sx={{ width: "100%", borderRadius: "10px 10px 0px 0px" }}
            src={actbanner1}
          ></Box>
          <Typography variant="body1" color="initial">
            FIRST DEPOSIT BONUS
          </Typography>
        </Box>
        <Box sx={style.actimg2}>
          <Box
            component="img"
            sx={{ width: "100%", borderRadius: "10px 10px 0px 0px" }}
            src={actbanner2}
          ></Box>
          <Typography variant="body1" color="initial">
            ZUPEETER CREATIVE VIDEO CONTEST
          </Typography>
        </Box>
        <Box sx={style.actimg2}>
          <Box
            component="img"
            sx={{ width: "100%", borderRadius: "10px 10px 0px 0px" }}
            src={actbanner3}
          ></Box>
          <Typography variant="body1" color="initial">
            WINSTREAK 2X PRIZE HAPPY HOUR
          </Typography>
        </Box>
        <Box sx={style.actimg2}>
          <Box
            component="img"
            sx={{ width: "100%", borderRadius: "10px 10px 0px 0px" }}
            src={actbanner4}
          ></Box>
          <Typography variant="body1" color="initial">
            DAILY BONUS UNTIL 1 CRORE
          </Typography>
        </Box>
        <Box sx={style.actimg2}>
          <Box
            component="img"
            sx={{ width: "100%", borderRadius: "10px 10px 0px 0px" }}
            src={actbanner5}
          ></Box>
          <Typography variant="body1" color="initial">
            BEST PILOT Zupeeter AIRLINES
          </Typography>
        </Box>
        <Box sx={style.actimg2}>
          <Box
            component="img"
            sx={{ width: "100%", borderRadius: "10px 10px 0px 0px" }}
            src={actbanner6}
          ></Box>
          <Typography variant="body1" color="initial">
            MONTHLY VIP BONUS
          </Typography>
        </Box>
        <Box sx={style.actimg2}>
          <Box
            component="img"
            sx={{ width: "100%", borderRadius: "10px 10px 0px 0px" }}
            src={actbanner7}
          ></Box>
          <Typography variant="body1" color="initial">
            ZUPEETER SUPPORT FUNDS
          </Typography>
        </Box>
      </Stack>
    </Layout>
  );
}

export default Activity;
