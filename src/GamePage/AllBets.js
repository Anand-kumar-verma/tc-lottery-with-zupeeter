import Avatar from "@mui/material/Avatar";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { endpoint } from "../services/urls";

const AllBets = ({ formik, fk }) => {
  const [isAvailable, setIsAvailable] = useState([]);
  const [allbetsdata, setAllBetsData] = useState([]);
  const [isLoading, setisLoding] = useState(false);
  // useEffect(() => {
  //   setDisplayedData([]);
  //   setIsAvailable([]);
  //   if (allbetsdata) {
  //     fetchData();
  //   }
  // }, [allbetsdata, formik.values.refetch]);

  // const fetchData = async () => {
  //   const newData = allbetsdata;
  //   for (let i = 0; i < newData.length; i++) {
  //     !fk?.values?.isFlying ||
  //       (displayedData?.length < 20 &&
  //         setDisplayedData((prevData) => [...prevData, newData[i]]));
  //     setIsAvailable((prevData) =>
  //       isAvailable.length < 6
  //         ? [...prevData, Math.floor(Math.random() * 100) + 1]
  //         : [...prevData]
  //     );
  //     await new Promise((resolve) =>
  //       setTimeout(resolve, Math.floor(Math.random() * 1000) + 300)
  //     );
  //   }
  // };
  const getAllBets = async () => {
    try {
      // const response = await axios.get(
      //   `${endpoint.total_bet_history}`
      // );
      const response = await axios.get(endpoint.node_api.get_leder_data);
      setAllBetsData(response?.data?.data || []);
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
  };

  useEffect(() => {
    getAllBets();
  }, []);

  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  return (
    <div className="max-h-[90%] overflow-auto hide flex flex-col gap-1 relative">
      <div className=" w-full !bg-black ">
        <p className="text-white text-[12px] ">
          <span>All Bets: </span>
          <span>{allbetsdata?.[0]?.local_length || 0}</span>
        </p>
        <div className="grid grid-cols-3 place-items-start !bg-black px-1 ">
          <p className="text-[10px] text-gray-500">User</p>
          <p className="text-[10px] text-gray-500">Bet INT x</p>
          <p className="text-[10px] text-gray-500">Cash out, INR</p>
        </div>
      </div>
      {allbetsdata?.map((i, index) => (
        <>
          <div
            key={index}
            className={`${
             
              i?.multiplier
                ? "bg-[#213519] bg-opacity-30 border-[2px] border-[#1e430ff6]"
                : "bg-black bg-opacity-30"
            } w-auto grid grid-cols-3 place-items-start !py-1  items-center rounded-md px-1`}
          >
            <div>
              <p className="flex items-center gap-3">
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 24, height: 24, fontSize: 10 }}
                />
                <span className="text-[10px] text-gray-500">
                  {(i?.email?.substring(0, 1)||"*") +
                    "**" +
                    (i?.email?.substring(1, 2)||"*")}
                </span>
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <span
                className={`text-[10px] text-gray-500`}
              >
                {Number(i?.amount || 0)?.toFixed(2)}
              </span>
              <span
                    className={`bg-black rounded-full px-3 py-1 text-[10px] 
               `}
                  >
                    {Number(i?.multiplier || 0)?.toFixed(2)}x
                  </span>
            </div>
            <div className="flex w-full justify-end">
              <div className="flex gap-2 items-center">
              <span className={`text-[10px]  text-white`}>
                      {Number(i?.amountcashed || 0)?.toFixed(2)}
                    </span>
              </div>
            </div>
          </div>
          {/* <Divider className="!bg-gray-500 " /> */}
        </>
      ))}
    </div>
  );
};

export default AllBets;
