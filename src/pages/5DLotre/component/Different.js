import {
    Box,
  } from "@mui/material";
  import axios from "axios";
  import { useFormik } from "formik";
  import React, { useEffect, useState } from "react";
  import toast from "react-hot-toast";
  import { useQueryClient } from "react-query";



  const Different = () => {
    return (
      <Box
        sx={{
          padding: 1,
          background: "#FFFFFF",
          mt: 2,
          borderRadius: "10px",
  
        }}
      >
         <div>
   <p>3 of same Number: odds (13.83)</p>
   <div className="flex justify-between m-2 my-4">
    <p className="bg-purple-300 p-2 px-4 text-white  rounded-md">22</p>
    <p className="bg-purple-300 p-2 px-4 text-white  rounded-md">11</p>
    <p className="bg-purple-300 p-2 px-4 text-white  rounded-md">52</p>
    <p className="bg-purple-300 p-2 px-4 text-white  rounded-md">14</p>
    <p className="bg-purple-300 p-2 px-4 text-white  rounded-md">18</p>
    <p className="bg-purple-300 p-2 px-4 text-white  rounded-md">23</p>
   </div>
   <p>Any 3  numbers: odds (16.83)</p>
   <div className=" m-2 my-4 w-full">
    <p className="bg-[#fb9494] p-2 px-4 text-white  rounded-md">3 continous number add : odd number</p>
    
   </div>
   <p>3 of same Number: odds (13.83)</p>
   <div className="flex justify-between m-2 my-4">
    <p className="bg-purple-300 p-2 px-4 text-white  rounded-md">22</p>
    <p className="bg-purple-300 p-2 px-4 text-white  rounded-md">11</p>
    <p className="bg-purple-300 p-2 px-4 text-white  rounded-md">52</p>
    <p className="bg-purple-300 p-2 px-4 text-white  rounded-md">14</p>
    <p className="bg-purple-300 p-2 px-4 text-white  rounded-md">18</p>
    <p className="bg-purple-300 p-2 px-4 text-white  rounded-md">23</p>
   </div>
        
        </div>
  
      </Box>
    );
  };
  
  export default Different;
 
  