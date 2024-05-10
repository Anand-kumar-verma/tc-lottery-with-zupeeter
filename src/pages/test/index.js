import React, { useEffect } from "react";
import Layout from "../../component/layout/Layout";
import image from "../../assets/images/dummy_image.png";
const Test = () => {
  
  function functionCall() {
    console.log("Function hit now");
    const rotateClass = document.getElementById("relay");
    const relayparent = document.getElementById("relayparent");
    relayparent.classList.remove("rotate");
    rotateClass.classList.remove("rotatenew");
    rotateClass.classList.add("rotatenew");
    relayparent.classList.add("rotate");
    setTimeout(() => {
      if (rotateClass) {
        rotateClass.classList.remove("rotatenew");
        rotateClass.classList.add("rotatenewme3");
        setTimeout(() => {
          rotateClass.classList.remove("rotatenewme3");
          rotateClass.classList.add("rotate");
        }, 3000);
      }
    }, 3000);
  }

  useEffect(() => {
    // Execute functionCall initially and then every minute
    // functionCall();
    const intervalId = setInterval(functionCall, 60 * 1000);

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // useEffect(() => {
  //   const clear = setInterval(() => {
  //     const airplainimage = document.getElementsByClassName("maindiv")[0];
  //     const parentDiv = document.getElementsByClassName("parentdiv")[0]; // Assuming "maindiv" is the parent element
  //     const airplainRect = airplainimage.getBoundingClientRect();
  //     const parentRect = parentDiv.getBoundingClientRect();
  //     const newBottomLeftCoordinates = {
  //       x: airplainRect.x - parentRect.x,
  //       y: airplainRect.y - parentRect.y,
  //     };
  //     console.log(newBottomLeftCoordinates);
  //   }, 10);

  //   setTimeout(() => {
  //     clearInterval(clear);
  //   }, 1000);
  // }, []);

  return (
    <Layout>
      <div className="">
        <div className="relative maindiv flex justify-center items-center w-[100%] h-[400px] !bg-yellow-700">
          <img
            id="relayparent"
            src={image}
            className="w-full rotate  absolute"
          />

          <div
            id="relay"
            className="totateMinute rotate  w-[180px] h-[180px] absolute  flex justify-center items-center !bg-red-700"
          >
            {/* <div className="absolute  bottom-0 left-0 !bg-white !w-2 !h-2 rounded-full"></div> */}

            <div class="lds-default">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Test;
