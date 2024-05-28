import axios from "axios";
import toast from "react-hot-toast";
import { endpoint } from "./urls";

export const storeCookies = () => {
  let expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + 1 * 60 * 60 * 1000); // 2 hours in milliseconds
  // expirationDate.setTime(expirationDate.getTime() + 60*1000); // 2 hours in milliseconds
  document.cookie = `token=anandtoken; expires=${expirationDate.toUTCString()}; path=/`;
};

export function checkTokenValidity() {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");
    if (cookie[0] === "token") {
      const tokenExpiration = new Date(cookie[1]);
      if (tokenExpiration < new Date()) {
        // Token has expired
        return false;
      }
      return true;
    }
  }
  // Token not found
  return false;
}

export const logOutFunction = async () => {
  try {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/"; // Redirect to login page
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};

export const MyHistoryFn = async (gid) => {
  const id = localStorage.getItem("user_id")
  try {
    const response = await axios.get(
      `${endpoint.my_history}?userid=${id}&limit=0&gameid=${gid}`
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
      userid: localStorage.getItem("user_id"),
    };
    const response = await axios.post(`${endpoint.get_balance}`, reqBody);
    setBalance(response?.data?.earning);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};

export const My_All_HistoryFn = async (gid) => {
  try {
    const reqBody = {
      id: localStorage.getItem("user_id"),
      gameid: gid,
    };
    const response = await axios.post(`${endpoint.my_history}`, reqBody);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const My_All_TRX_HistoryFn = async (gid) => {
  try {
    const reqBody = {
      userid: localStorage.getItem("user_id"),
      gameid: gid,
    };
    const response = await axios.post(`${endpoint.trx_my_history}`, reqBody);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};

// /; INCOME
export const MyTeamLevel = async () => {
  try {
    const reqBody = {
      profile_id: localStorage.getItem("user_id"),
    };
    const response = await axios.post(endpoint.my_team_level, reqBody);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};

export const registrationBonusFn = async (type) => {
  try {
    const reqBody = {
      profile_id: localStorage.getItem("user_id"),
      type: type,
    };
    const response = await axios.post(endpoint.registration_bonus, reqBody);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const BankDetailsFUnction = async () => {
  try {
    const reqBody = {
      user_id:  localStorage.getItem("user_id")
    };
    const response = await axios.post(endpoint.view_bank_details, reqBody);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const FundTransferHistoryFn = async () => {
  try {
    const reqBody = {
      userid: localStorage.getItem("user_id"),
    };
    const response = await axios.post(endpoint.fund_transfer_history, reqBody);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const zupeeterTOkenHistory = async () => {
  try {
    const reqBody = {
      userid: localStorage.getItem("user_id"),
    };
    const response = await axios.post(endpoint.view_ico_purchaseing, reqBody);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};

export const upiTOkenHistory = async () => {
  try {
    const reqBody = {
      userid: localStorage.getItem("user_id"),
    };
    const response = await axios.post(endpoint.view_paying_api, reqBody);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const ViewSalaryIncomeFunction = async () => {
  try {
    const reqBody = {
      userid: localStorage.getItem("user_id"),
    };
    const response = await axios.post(endpoint.view_salary_income, reqBody);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const TokenLaunch = async () => {
  try {
    const reqBody = {
      userid: localStorage.getItem("user_id"),
    };
    const response = await axios.post(endpoint.token_launch, reqBody);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const TopWinner = async () => {
  try {
    const response = await axios.get(endpoint.win_list_top);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const withdrawlHistoryFunction = async () => {
  try {
    const reqBody = {
      userid: localStorage.getItem("user_id"),
    };
    const response = await axios.post(endpoint.view_withdrwal_new_inr, reqBody);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const depositHistoryFunction = async () => {
  try {
    const reqBody = {
      userid: localStorage.getItem("user_id"),
    };
    const response = await axios.post(endpoint.wallet_deposit_history, reqBody);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const bankListFuncton = async () => {
  try {
    const response = await axios.get(endpoint.bank);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const UPIDetailsFUnction = async () => {
  try {
    const reqBody = {
      user_id: localStorage.getItem("user_id"),
    };
    const response = await axios.post(endpoint.view_upi_details, reqBody);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const upiListFuncton = async () => {
  try {
    const response = await axios.get(endpoint.bank);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const Promotionfunction = async () => {
  const reqBody = {
    userid:localStorage.getItem("user_id"),
  }
  try {
    const response = await axios.post(endpoint.info_promotion,reqBody);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const TeamsubFunction = async () => {
  const reqBody = {
    userid:localStorage.getItem("user_id"),
  }
  try {
    const response = await axios.post(endpoint.team_info,reqBody);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const TeamFunction = async () => {
  try {
    const reqBody = {
      user_id:localStorage.getItem("user_id"),
    };
    const response = await axios.post(endpoint.team_report, reqBody);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const TeamDatafunction = async () => {
  try {
    const response = await axios.get(endpoint.team_data);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const ProfileDataFunction = async () => {
  try {
    const reqBody = {
      user_id: localStorage.getItem("user_id"),
    };
    const response = await axios.post(endpoint.profile_function, reqBody);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};