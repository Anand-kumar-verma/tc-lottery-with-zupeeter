import { Button, Container, TextField } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Layout from "../../component/layout/Layout";
import { endpoint } from "../../services/urls";
import CircularProgress from '@mui/material/CircularProgress';
import CustomCircularProgress from "../../shared/loder/CustomCircularProgress";

const UPIDepositToken = () => {
  const user_id = localStorage.getItem("user_id");
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const initialValue = {
    token: "",
  };
  // const handleSubmit = async () => {
  //   setIsLoading(true);
  //   // Simulate a network request
  //   await new Promise(resolve => setTimeout(resolve, 2000));
  //   setIsLoading(false);
  // };
  const fk = useFormik({
    initialValues: initialValue,
    enableReinitialize: true,
    onSubmit: () => {
      if (Number(fk.values.token < 100))
        return toast("Token must be greater or equal to 100");
      const reqBody = {
        userid: user_id,
        txtamount: amount || 0,
        txttoken: fk.values.token,
      };
        setIsLoading(true);
      if (!reqBody.userid || !reqBody.txtamount || !reqBody.txttoken)
        return toast("Plese enter all data");
      purchaseToken(reqBody);
    },
  });

  async function purchaseToken(reqBody) {
    try {
      const res = await axios.post(endpoint?.indian_insert_deposite, reqBody);
      toast(res?.data?.message);
      if (res?.data?.status === true) {
        window.location.href = res?.data?.earning?.msg;
      }
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

  if (isLoading) return <CustomCircularProgress isLoading={isLoading} />;
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
            placeholder="Enter Token"
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
            >Submit
            </Button>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default UPIDepositToken;
