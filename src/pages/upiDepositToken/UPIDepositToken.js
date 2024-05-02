import { Button, Container, TextField } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Layout from "../../component/layout/Layout";
import { endpoint } from "../../services/urls";

const UPIDepositToken = () => {
  const user_id = "1";
  const [amount, setAmount] = useState("");
  const initialValue = {
    token: "",
  };

  const fk = useFormik({
    initialValues: initialValue,
    enableReinitialize: true,
    onSubmit: () => {
      const reqBody = {
        userid: fk.values.userid,
        txtpassword: fk.values.transaction_password,
        txtamount: fk.values.transfer_amount,
        txtuserid: fk.values.transferid,
        txtwallet: fk.values.wallet,
      };
      if (
        !reqBody.userid ||
        !reqBody.txtpassword ||
        !reqBody.txtamount ||
        !reqBody.txtuserid ||
        !reqBody.txtwallet
      )
        return toast("Plese enter all data");
      insertFundFn(reqBody);
    },
  });

  async function insertFundFn(reqBody) {
    try {
      const res = await axios.post(endpoint?.insert_fund_transfer, reqBody);
      toast(res?.data?.message);
    } catch (e) {
      console.log(e);
    }
    // client.refetchQueries("bank_details");
  }
  async function gettokenAmountFn() {
    const reqBody = {
      token: fk.values.token,
    };
    try {
      const res = await axios.post(endpoint?.get_token_price, reqBody);
      setAmount(res?.data?.earning?.bal);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    gettokenAmountFn();
  }, [fk.values.token]);
  return (
    <Layout>
      <Container
        sx={{
          width: "100%",
          height: "100vh",
          overflow: "auto",
          mb: 5,
        }}
        className="no-scrollbar"
      >
        <div className="grid grid-cols-2 gap-1 items-center w-[400px] p-5">
          <span className="col-span-2 justify-end">
            <div className="flex justify-between">
              <span className="font-bold">ICO Token UPI Payment</span>
            </div>
          </span>
          <span>Token*</span>
          <TextField
            id="token"
            name="token"
            type="number"
            value={fk.values.token}
            onChange={fk.handleChange}
            placeholder="Select Bank"
            className="!w-[100%]"
          ></TextField>
          <span>Amount *</span>
          <TextField
            id="amount"
            name="amount"
            value={amount || 0}
            //   onChange={fk.handleChange}
            className="!w-[100%]"
          />

          <div className="col-span-2 flex gap-2 mt-4">
            <Button
              className="!bg-[#FD565C] !text-white"
              onClick={() => fk.handleReset()}
            >
              Cancel
            </Button>
            <Button
              className="!bg-[#BF6DFE] !text-white"
              onClick={() => fk.handleSubmit()}
            >
              Submit
            </Button>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default UPIDepositToken;
