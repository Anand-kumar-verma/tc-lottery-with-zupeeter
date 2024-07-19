import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import p1 from "../../../assets/images/n1o.png";
import p2 from "../../../assets/images/n2.png";
import p3 from "../../../assets/images/n3.png";
import p4 from "../../../assets/images/n4.png";
import p5 from "../../../assets/images/n5.png";
import p6 from "../../../assets/images/no.png";
import { useSocket } from "../../../shared/socket/SocketContext";
import axios from "axios";
import toast from "react-hot-toast";
import { endpoint } from "../../../services/urls";
import { useQuery } from "react-query";

const ShowImages = () => {
  const socket = useSocket();

  const [i, setI] = useState(0);
  const [image, setImage] = useState(0);
  const [images, setImages] = useState(0);
  const imgageArray = [p1, p2, p3, p4, p5, p6];

  const Timer = () => {
    const interval = setInterval(() => {
      setI(Math.floor(Math.random() * imgageArray.length));
    }, 200);
    setTimeout(() => {
      clearInterval(interval);
      game_history_data?.[0]?.k3_dies_result && setI(Number(String(game_history_data?.[0]?.k3_dies_result)?.[0])-1)
    }, 10000);
  };

  const Timer1 = () => {
    const interval = setInterval(() => {
      setImage(Math.floor(Math.random() * imgageArray.length));
    }, 200);
    setTimeout(() => {
      clearInterval(interval);
      game_history_data?.[0]?.k3_dies_result && setImage(Number(String(game_history_data?.[0]?.k3_dies_result)?.[1])-1)
    }, 10000);
  };

  const Timer2 = () => {
    const interval = setInterval(() => {
      setImages(Math.floor(Math.random() * imgageArray.length));
    }, 200);
    setTimeout(() => {
      clearInterval(interval);
      game_history_data?.[0]?.k3_dies_result && setImages(Number(String(game_history_data?.[0]?.k3_dies_result)?.[2])-1)
    }, 10000);
  };

  useEffect(() => {
    const handleThreeMin = (threemin) => {
      if (threemin === 0) Timer();
    };

    socket.on("onemink3lottery", handleThreeMin);

    return () => {
      socket.off("onemink3lottery", handleThreeMin);
    };
  }, [socket]);

  useEffect(() => {
    const handleThreeMin = (threemin) => {
      if (threemin === 0) Timer1();
    };

    socket.on("onemink3lottery", handleThreeMin);

    return () => {
      socket.off("onemink3lottery", handleThreeMin);
    };
  }, [socket]);

  useEffect(() => {
    const handleThreeMin = (threemin) => {
      if (threemin === 0) Timer2();
    };

    socket.on("onemink3lottery", handleThreeMin);

    return () => {
      socket.off("onemink3lottery", handleThreeMin);
    };
  }, [socket]);

  const { isLoading, data: game_history } = useQuery(
    ["k3_top_one"],
    () => GameTopOneFn("1"),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      // retry: false,
      // retryOnMount: false,
      // refetchOnWindowFocus: false,
    }
  );
  const game_history_data = React.useMemo(
    () => game_history?.data?.data,
    [game_history?.data?.data]
  ); 

  console.log(game_history_data ,"nn.mknk")
  const GameTopOneFn = async (gid) => {
    try {
      const reqBody = {
        gameid: gid,
        limit: 100,
      };
      const response = await axios.post(
        `${endpoint.k3_top_one}`,
        reqBody
      );
      return response;
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
  };
  
  return (
    <>
 
      <div className="border-8 border-[#00b977] !h-32 my-4  p-1 rounded-lg !overflow-hidden bg-[#00b977] " >
        <div className="grid grid-cols-3 " >
          <div className="flex flex-col gap-1 justify-start" >
            <Box
             
              className="w-100  bg-black p-2  border-8  border-green-800">
                {[0, 1, 2, 3, 4].map((index) => (
              <Box
                key={index}
                component="img"
                className="w-20 !mr-2 !mb-2"
                src={imgageArray[i]}
                alt={`image-${i}`}
              />
            ))}
              </Box>
           </div>
          <div className="flex flex-col gap-1 justify-start" style={{ height: '100px' }} >
            <Box
            
            className="w-100 bg-black p-2   border-8 border-green-800">
              {[0, 1, 2, 3, 4].map((index) => (
            <Box
              key={index}
              component="img"
              className="w-20  !mr-2 !mb-2"
              src={imgageArray[image] }
              alt={`image-${i}`}
            />
          ))}</Box>
            </div>
          <div className="flex flex-col gap-1 justify-start" style={{ height: '100px' }}> 
             <Box
            
            className="w-100  bg-black p-2  border-8 border-green-800">
              {[0, 1, 2, 3, 4].map((index) => (
              <Box
                key={index}
                component="img"
                className="w-20  !mr-2 !mb-2"
                src={imgageArray[images]}
                alt={`image-${i}`}
              />
            ))}
            </Box>
          </div>

        </div>
      </div> 
      
      {/* {game_history_data?.map((i) => {
              return (
                <div className="border-8 border-[#00b977] !h-32 my-4  p-1 rounded-lg !overflow-hidden bg-[#00b977] " >
                <div className="grid grid-cols-3 " >
                  <div className="flex flex-col gap-1 justify-start" >
                    <Box
                     
                      className="w-100  bg-black p-2  border-8  border-green-800">
                       
                      <Box
                       
                        component="img"
                        className="w-20 !mr-2 !mb-2"
                        src={imgageArray[Number(String(i?.k3_dies_result)?.[0]) - 1]} 
                        alt=" "
                      />
                      </Box>
                   </div>
                  <div className="flex flex-col gap-1 justify-start" style={{ height: '100px' }} >
                    <Box
                    
                    className="w-100 bg-black p-2   border-8 border-green-800">
                   
                    <Box
                     
                      component="img"
                      className="w-20  !mr-2 !mb-2"
                      src={imgageArray[Number(String(i?.k3_dies_result)?.[1]) - 1]}
                     alt=" "
                    />
                 </Box>
                    </div>
                  <div className="flex flex-col gap-1 justify-start" style={{ height: '100px' }}> 
                     <Box
                    
                    className="w-100  bg-black p-2  border-8 border-green-800">
                     
                      <Box
                       
                        component="img"
                        className="w-20  !mr-2 !mb-2"
                        src={imgageArray[Number(String(i?.k3_dies_result)?.[2]) - 1]}
                        alt=" "
                      />
                    
                    </Box>
                  </div>
        
                </div>
              </div>
              );
       })} */}
 
    </>
  );
};

export default ShowImages;




