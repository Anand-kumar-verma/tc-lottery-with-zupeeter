
import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loss from "../../assets/images/loss.png";
import zero from "../../assets/images/n0-30bd92d1.png";
import one from "../../assets/images/n1-dfccbff5.png";
import two from "../../assets/images/n2-c2913607.png";
import three from "../../assets/images/n3-f92c313f.png";
import four from "../../assets/images/n4-cb84933b.png";
import five from "../../assets/images/n5-49d0e9c5.png";
import six from "../../assets/images/n6-a56e0b9a.png";
import seven from "../../assets/images/n7-5961a17f.png";
import eight from "../../assets/images/n8-d4d951a4.png";
import nine from "../../assets/images/n9-a20f6f42 (1).png";
import win from "../../assets/images/winnner.png";
import { endpoint } from "../../services/urls";
import CustomCircularProgress from "../../shared/loder/CustomCircularProgress";
const WinLossPopup = ({ gid, setOpenDialogBox }) => {
  let array = [zero, one, two, three, four, five, six, seven, eight, nine];
  const user_id = localStorage.getItem("user_id");
  const [loding, setloding] = useState(false);
  const [status, setstatus] = useState("");
  const [newstatus, setstatusNew] = useState("");
  const [all_result, setall_result] = useState();
  const MyHistoryFn = async () => {
    setloding(true);
    try {
      const reqBody = {
        userid: user_id,
        gameid: gid,
      };
      const response =  await axios.post(`${endpoint.k3_my_history}`, reqBody);
      const firstId = localStorage.getItem("betApplied")?.split("_")?.[4];
      const total_data = response?.data?.earning;
      const winAmnt =
        total_data
          ?.filter((i) => i?.gamesno === firstId)
          ?.reduce((a, b) => a + Number(b?.amount || 0), 0) || 0;
      const amntAmnt =
        total_data
          ?.filter((i) => i?.gamesno === firstId)
          ?.reduce((a, b) => a + Number(b?.amount || 0), 0) || 0;
      setall_result(total_data?.[0]);
      if (winAmnt) {
        setstatus({
          status: "1",
          amount: winAmnt,
        });
      } else {
        setstatus({
          status: "2",
          amount: amntAmnt,
        });
      }
      setTimeout(() => {
        setOpenDialogBox(false);
        localStorage.setItem("betApplied", false);
      }, 3000);
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
    setloding(false);
  };

  useEffect(() => {
    MyHistoryFn();
  }, []);

  useEffect(() => {
    setstatusNew(status);
  }, [status]);

  if (loding) return <CustomCircularProgress isLoading={loding} />;
  return (
    <Box
      sx={{
        width: "300px",
        height: "400px",
        margin: "auto",
        backgroundImage: `url(${
          (status?.status === "1" && Loss) || (status?.status === "2" && win)
        })`,
        // backgroundImage: `url(${win})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {!loding && newstatus && (
        <>
          <Typography
            variant="body1"
            color="initial"
            className="crlg !text-center"
          >
            {(status?.status === "1" && "Congratulations") ||
              (status?.status === "2" && "Loss")}
          </Typography>

        
          <Typography
            variant="body1"
            color="initial"
            className={`bonustext ${
              status?.status === "1" ? "!text-white" : "!text-white"
            }
            !mr-0
            `}
          >
            {(status?.status === "1" && (
              <>
                <div className="!text-sm !ml-7 !flex !items-center !gap-2">
                  <span>Game Results: </span>
                  <span
                    className={`${
                      [1, 3, 7, 9]?.includes(all_result?.win )
                        ? "!bg-green-500"
                        : "!bg-red-500"
                    }
                  ${
                    String(all_result?.win ) === String(0) &&
                    "!bg-gradient-to-r from-red-500 to-purple-500"
                  }
                  ${
                    String(all_result?.win ) === String(5) &&
                    "!bg-gradient-to-r from-green-500 to-purple-500"
                  }
                  !text-center !p-2 !rounded-md
                  `}
                  >
                    {(String(all_result?.win ) === String(0) &&
                      "Red Purple") ||
                    (String(all_result?.win ) === String(5) &&
                      "Green Purple") ||
                    [1, 3, 7, 9]?.includes(all_result?.win )
                      ? "Green"
                      : "Red"}
                  </span>
                  <img
                    className="!h-[10%] !w-[10%]"
                    src={array[all_result?.win ]}
                  />
                  <span
                    className={`${
                      [1, 3, 7, 9]?.includes(all_result?.win )
                        ? "!bg-green-500"
                        : "!bg-red-500"
                    }
                  ${
                    String(all_result?.win ) === String(0) &&
                    "!bg-gradient-to-r from-red-500 to-purple-500"
                  }
                  ${
                    String(all_result?.win ) === String(5) &&
                    "!bg-gradient-to-r from-green-500 to-purple-500"
                  }
                  !text-center !p-2 !rounded-md
                  `}
                  >
                    {all_result?.win  <= 4 ? "Small" : "Big"}
                  </span>
                </div>
                <div className="!text-[20px] !mt-4">Bonus</div>
              </>
            )) ||
              (status?.status === "2" && "Loss Amount")}
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            className={`bonusamt  ${
              status?.status === "1" ? "!text-green-500" : "!text-red-300"
            }`}
          >
            ₹ {Number(status?.amount || 0)?.toFixed(2) || 0}
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            className={`bonuspr ${
              status?.status === "1" ? "!text-pink-500" : "!text-red-300"
            } !text-sm`}
          >
            Period Minute {all_result?.gamesno}
          </Typography>
          <Typography variant="body1" color="initial" className="bonuscl">
            Auto Close in 3 sec{" "}
          </Typography>
        </>
      )}
    </Box>
  );
};

export default WinLossPopup;
