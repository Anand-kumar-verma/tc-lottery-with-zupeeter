import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import p1 from "../../../assets/images/no.png";
import p2 from "../../../assets/images/n1o.png";
import p3 from "../../../assets/images/n2.png";
import p4 from "../../../assets/images/n3.png";
import p5 from "../../../assets/images/n4.png";
import p6 from "../../../assets/images/n5.png";
import { useSelector } from "react-redux";
import { changeImagesTRX } from "../../../shared/nodeSchedular";
const ShowImages = () => {
  const [index, setIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const numbers = [
    1,2,3,4,5,6,7,8,9,10
  ]; // The number sequence as a string
  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        setIndex(prevIndex => (prevIndex + 1) % numbers.length);
      }, 100);

      const randomStopTime = Math.floor(Math.random() * 5000) + 1000; // Stop between 1 and 6 seconds
      const timeoutId = setTimeout(() => {
        clearInterval(intervalId);
        setIsRunning(false);
      }, randomStopTime);

      // Cleanup intervals and timeouts on component unmount
      return () => {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
      };
    }
  }, [isRunning, numbers.length]);
  const num = [
   7,5,2,4,1,8,6,9,0
  ]; // The number sequence as a string
  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        setIndex(prevIndex => (prevIndex + 1) % num.length);
      }, 100);

      const randomStopTime = Math.floor(Math.random() * 5000) + 1000; // Stop between 1 and 6 seconds
      const timeoutId = setTimeout(() => {
        clearInterval(intervalId);
        setIsRunning(false);
      }, randomStopTime);

      // Cleanup intervals and timeouts on component unmount
      return () => {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
      };
    }
  }, [isRunning, num.length]);
  const number = [
   5,7,3,9,6,8,4,1,2
  ]; // The number sequence as a string
  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        setIndex(prevIndex => (prevIndex + 1) % number.length);
      }, 100);

      const randomStopTime = Math.floor(Math.random() * 5000) + 1000; // Stop between 1 and 6 seconds
      const timeoutId = setTimeout(() => {
        clearInterval(intervalId);
        setIsRunning(false);
      }, randomStopTime);

      // Cleanup intervals and timeouts on component unmount
      return () => {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
      };
    }
  }, [isRunning, number.length]);
  const numb = [
    10,6,7,4,2,5,1,0,8,9
  ]; // The number sequence as a string

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        setIndex(prevIndex => (prevIndex + 1) % numb.length);
      }, 100);

      const randomStopTime = Math.floor(Math.random() * 5000) + 1000; // Stop between 1 and 6 seconds
      const timeoutId = setTimeout(() => {
        clearInterval(intervalId);
        setIsRunning(false);
      }, randomStopTime);

      // Cleanup intervals and timeouts on component unmount
      return () => {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
      };
    }
  }, [isRunning, numb.length]);
  const no = [
    6,4,2,1,5,7,9,8,3,
  ]; // The number sequence as a string

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        setIndex(prevIndex => (prevIndex + 1) % no.length);
      }, 100);

      const randomStopTime = Math.floor(Math.random() * 5000) + 1000; // Stop between 1 and 6 seconds
      const timeoutId = setTimeout(() => {
        clearInterval(intervalId);
        setIsRunning(false);
      }, randomStopTime);

      // Cleanup intervals and timeouts on component unmount
      return () => {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
      };
    }
  }, [isRunning, no.length]);
  return (
    <>
     <div>
    </div>
      <div className="border-8 border-[#00b977] bg-black mt-5 rounded-lg ">
        <div className="flex justify-center  gap-1">
          <p className="border-black border my-2  bg-green-400 px-7 py-5 rounded-full">{numbers[index]}</p>
          <p className="border-black border my-2  bg-gray-300 px-7 py-5 rounded-full">{num[index]}</p>
          <p className="border-black border my-2  bg-gray-300 px-7 py-5 rounded-full">{number[index]}</p>
          <p className="border-black border my-2  bg-gray-300 px-7 py-5 rounded-full">{numb[index]}</p>
          <p className="border-black border my-2  bg-gray-300 px-7 py-5 rounded-full">{no[index]}</p>
        
        </div>
      </div>

    </>
  );
};

export default ShowImages;
