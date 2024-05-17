import { Box, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import p1 from "../../../assets/images/no.png";
import p2 from "../../../assets/images/n1o.png";
import p3 from "../../../assets/images/n2.png";
import p4 from "../../../assets/images/n3.png";
import p5 from "../../../assets/images/n4.png";
import p6 from "../../../assets/images/n5.png";
import { useSelector } from "react-redux";
import { changeImagesTRX } from "../../../shared/nodeSchedular";
import { Height } from "@mui/icons-material";


const ShowImages = () => {

  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
  const [showToTopButton, setShowToTopButton] = useState(false);

  const toBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight - window.innerHeight,
      behavior: 'smooth'
    });
  };

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    setMouseCoordinates({ x, y });

    const widthwindow = window.innerWidth;
    const widthheight = window.innerHeight;
    setShowToTopButton(x > widthwindow - 300 && y > widthheight - 300);
  };

  useEffect(() => {
    document.querySelector('.mousecoor').innerHTML = `Coordinates: (${mouseCoordinates.x}, ${mouseCoordinates.y})`;
  }, [mouseCoordinates]);


  return (
    <>
 <div onMouseMove={handleMouseMove}>
        <button onClick={toBottom}>Scroll to Bottom</button>
        <div className="stuff">
          <div class="mousecoor"></div>
          <div class="stuff">
          <div className="border-8 border-[#00b977] !h-32 !overflow-hidden bg-black ">
              <div className="grid grid-cols-3 gap-4  m-2" >
                <div className="flex flex-col gap-1 justify-start" >  <Box
                  component="img"
                  className="w-20 m-2 "
                  src={p1}
                ></Box>
                  <Box
                    component="img"
                    src={p2}
                    className="w-20 m-2 "
                  ></Box>
                  <Box
                    component="img"
                    src={p3}
                    className="w-20 m-2 "
                  ></Box>
                  <Box
                    component="img"
                    src={p4}
                    className="w-20 m-2 "
                  ></Box>
                  <Box
                    component="img"
                    src={p5}
                    className="w-20 m-2 "
                  ></Box></div>
                <div className="flex flex-col gap-1 justify-start" style={{ height: '100px' }} >  <Box
                  component="img"
                  className="w-20 m-2 "
                  src={p5}
                ></Box>
                  <Box
                    component="img"
                    src={p3}
                    className="w-20 m-2 "
                  ></Box>
                  <Box
                    component="img"
                    src={p4}
                    className="w-20 m-2 "
                  ></Box>
                  <Box
                    component="img"
                    src={p1}
                    className="w-20 m-2 "
                  ></Box>
                  <Box
                    component="img"
                    src={p2}
                    className="w-20 m-2 "
                  ></Box></div>
                <div className="flex flex-col gap-1 justify-start" style={{ height: '100px' }}>  <Box
                  component="img"
                  className="w-20 m-2 "
                  src={p3}
                ></Box>
                  <Box
                    component="img"
                    src={p4}
                    className="w-20 m-2 "
                  ></Box>
                  <Box
                    component="img"
                    src={p2}
                    className="w-20 m-2 "
                  ></Box>
                  <Box
                    component="img"
                    src={p5}
                    className="w-20 m-2 "
                  ></Box>
                  <Box
                    component="img"
                    src={p1}
                    className="w-20 m-2 "
                  ></Box></div>

              </div>
            </div>
          </div>
        </div>
      </div>




    </>
  );
};

export default ShowImages;


