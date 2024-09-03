import { Box, Container } from "@mui/material";
import * as React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../../../component/layout/Layout";
import { zubgback } from "../../../services/urls";

const QRSCREENUSDT = () => {
    const location = useLocation();
    const key = location.state?.url?.key;
    const address = location.state?.url?.address;
  return (
    <Layout footer={false}>
      <Container
        className="no-scrollbar"
        sx={{
          //   background: zubgback,
          background: "white",
          width: "100%",
          height: "100vh",
          overflow: "auto",
          mb: 4,
        }}
      >
        <Box sx={style.header}>
          <p className="!text-center">USDT QR Code</p>
        </Box>
        <div
          className={`!text-black !bg-white !flex !flex-col justify-center items-center no-scrollbar`}
        >
          <img
            className="!h-2/3 !w-2/3 "
            src="https://i.pinimg.com/originals/e4/af/9f/e4af9f0025a8ce68bee2cf5a1360a501.gif"
          />

          <>
            <div className="!bg-white !w-full !flex !flex-col !items-center !justify-center ">
              <img src={key} />

              <p>{address}</p>
              {/* <p className=" !text-center !mt-5 !font-semibold !text-[#FDB03C] !text-lg">
                Remaining Time
              </p> */}
            </div>
            {/* <Stack direction="row">
              <Box className="timerBoxone">0</Box>
              <Box className="timerBox">{show_time.split("_")?.[0]}</Box>
              <Box className={"!text-[#FDB03C] !font-bold !text-lg"}>:</Box>
              <Box className="timerBox">
                {show_time.split("_")?.[1]?.padStart(2, "0")?.substring(0, 1)}
              </Box>
              <Box className="timerBoxfour">
                {show_time.split("_")?.[1]?.padStart(2, "0")?.substring(1)}
              </Box>
            </Stack> */}
          </>
        </div>
      </Container>
    </Layout>
  );
};

export default QRSCREENUSDT;

const style = {
  header: {
    padding: "15px 8px",
    background: zubgback,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& > p": {
      fontSize: "20px",
      fontWeight: "600",
      textAlign: "center",
      color: "white",
    },
    "& > a > svg": {
      color: "white",
      fontSize: "35px",
    },
  },
};
