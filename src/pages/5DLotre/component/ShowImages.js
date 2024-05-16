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
      <div className="border-8 border-[#00b977] bg-black mt-5 rounded-lg ">
        <div className="flex justify-center gap-1">
          <p className="border-black border my-2  bg-green-400 px-7 py-5 rounded-full">1</p>
          <p className="border-black border my-2  bg-gray-300 px-7 py-5 rounded-full">2</p>
          <p className="border-black border my-2  bg-gray-300 px-7 py-5 rounded-full">3</p>
          <p className="border-black border my-2  bg-gray-300 px-7 py-5 rounded-full">4</p>
          <p className="border-black border my-2  bg-gray-300 px-7 py-5 rounded-full">5</p>
        </div>
      </div>

    </>
  );
};

export default ShowImages;
