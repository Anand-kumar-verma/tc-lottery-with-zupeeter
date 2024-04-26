import toast from "react-hot-toast";
import { endpoint } from "./urls";
import axios from "axios";
const user_id = "1";

export const MyHistoryFn = async (gid) => {
  try {
    const response = await axios.get(
      `${endpoint.my_history}?userid=${user_id}&limit=0&gameid=${gid}`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const getBalanceFunction = async (setBalance) => {
  try {
    const reqBody = {
      userid: user_id,
    };
    const response = await axios.post(`${endpoint.get_balance}`, reqBody);
    setBalance(response?.data?.earning)
    return response
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};

export const My_All_HistoryFn = async (gid) => {
  try {
    const reqBody = {
      id: user_id,
      gameid: gid,
    };
    const response = await axios.post(`${endpoint.my_history}`, reqBody);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
