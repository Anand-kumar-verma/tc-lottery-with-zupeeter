import {
    Button,
    Container,
    MenuItem,
    TextField
} from "@mui/material";
import "jspdf-autotable";
import * as React from "react";
import Layout from "../../component/layout/Layout";
import CustomCircularProgress from "../../shared/loder/CustomCircularProgress";

  export default function Ticket() {
 
  
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

          <div className="flex justify-between w-full items-center bg-[#F48901] px-2 py-6 rounded-lg mt-3 ">
            <div className="grid grid-cols-2 gap-1 items-center w-[400px] p-5">
              <span className="col-span-2 justify-end">
                <div className="flex justify-between">
                  <span className="font-bold">Ticket Generate</span>
                </div>
              </span>
              <span className="!text-white !my-3 !text-sm">Select Ticket Type*</span>
              <TextField
                id="payment_method"
                name="payment_method"
                // value={fk.values.payment_method}
                // onChange={fk.handleChange}
                className="!w-[100%] !bg-[#A97025] !my-3"
                select
                size="small"
              >
                <MenuItem value={"Select Type"}>Select Type</MenuItem>
                <MenuItem value={"Deposit"}>Deposit</MenuItem>
                <MenuItem value={"Withdrawal"}>Withdrawal</MenuItem>
                <MenuItem value={"Bank Details"}>Bank Details</MenuItem>
                <MenuItem value={"Payout"}>Payout </MenuItem>
                <MenuItem value={"Other issue"}>Other issue </MenuItem>
              </TextField>
             
          
              <span className="!text-white !my-3 !text-sm">Attachment*</span>
                  <input
                    type="file"
                    id="myfile"
                    name="myfile"
                    className="!text-sm !my-3"
                    // onChange={(e) => setReceipt(e.target.files[0])}
                    required
                  />
              <span className="!text-white !my-3 !text-sm">Description*</span>
              <textarea
              type="textarea"
                id="token_qnt"
                name="token_qnt"
                placeholder="Enter Description"
                // value={fk.values.token_qnt}
                // onChange={fk.handleChange}
                className="!w-[100%] !bg-[#A97025] !text-sm  !text-center !text-black pt-2 !my-3"
              />
        
              <div className="col-span-2 flex  justify-end gap-2 mt-4">
                <Button
                  className="!bg-[#FD565C] !text-white"
                //   onClick={() => fk.handleReset()}
                >
                  Cancel
                </Button>
                <Button
                  className="!bg-[#BF6DFE] !text-white"
                //   onClick={() => fk.handleSubmit()}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
  
          {/* <CustomCircularProgress isLoading={isLoading} /> */}
       
      
        </Container>
      </Layout>
    );
  }
  