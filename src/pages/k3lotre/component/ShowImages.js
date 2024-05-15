import { Box } from "@mui/material";
import React, { useState } from "react";
import p1 from "../../../assets/images/no.png";
import p2 from "../../../assets/images/n1o.png";
import p3 from "../../../assets/images/n2.png";
import p4 from "../../../assets/images/n3.png";
import p5 from "../../../assets/images/n4.png";
import p6 from "../../../assets/images/n5.png";
import { useSelector } from "react-redux";
import { changeImagesTRX } from "../../../shared/nodeSchedular";
const ShowImages = () => {


  return (
    <>
      <div className="border-8 border-[#00b977] bg-black">
        <div className="grid grid-cols-3 gap-4  m-2">
          <Box
            component="img"
            className=""
            src={p1}
          ></Box>
          <Box
            component="img"
            src={p2}
          ></Box>
          <Box
            component="img"
            src={p3}
          ></Box>

        </div>
      </div>

    </>
  );
};

export default ShowImages;
