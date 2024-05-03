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
export const My_All_TRX_HistoryFn = async (gid) => {
  try {
    const reqBody = {
      userid: user_id,
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
      profile_id: user_id,
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
      profile_id: user_id,
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
      user_id: "2872",
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
      userid: "1",
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
      userid: "2870",
    };
    const response = await axios.post(endpoint.view_ico_purchaseing, reqBody);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const ViewSalaryIncomeFunction = async () => {
  try {
    const reqBody = {
      userid: "2872",
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
      userid: "1",
    };
    const response = await axios.post(endpoint.token_launch, reqBody);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const withdrawlHistoryFunction = async () => {
  try {
    const reqBody = {
      userid: "1",
    };
    const response = await axios.post(endpoint.view_withdrwal_new_inr, reqBody);
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
      user_id: "1",
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
