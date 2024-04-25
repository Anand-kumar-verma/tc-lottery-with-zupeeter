import {
  Box,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import theme from "../../../utils/theme";

const Chart = () => {
  return (
    <Box mt={2}>
      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 400 }} aria-label="simple table">
          <TableHead
            sx={{
              background: theme.palette.primary.main,
              "&>tr>th": {
                padding: 1,
                fontSize: "13px",
                fontWeight: 700,
                color: "white",
              },
            }}
          >
            <TableRow>
              <TableCell align="start">Period</TableCell>
              <TableCell align="start">Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              "&>tr>td:nth-child(1)": {
                padding: "10px 5px !important",
                border: "none",
                width: "25%",
              },
              "&>tr>td:nth-child(2)": {
                padding: "10px 5px !important",
                border: "none",
              },
              "&>tr": { borderBottom: "1px solid #ced4d7" },
            }}
          >
            <TableRow colSpan={2}>
              <Box sx={{ width: "100%", padding: 1 }}>
                <Typography variant="body1" color="initial">
                  Statistic (last 100 Periods)
                </Typography>
              </Box>
            </TableRow>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9]?.map((i) => {
              return (
                <TableRow>
                  <TableCell align="start"> 20240420010994</TableCell>
                  <TableCell>
                    <Stack direction="row" sx={style.linetable}>
                      <Typography variant="body1" color="initial">
                        0
                      </Typography>
                      <Typography variant="body1" color="initial">
                        1
                      </Typography>
                      <Typography variant="body1" color="initial">
                        2
                      </Typography>
                      <Typography variant="body1" color="initial">
                        3
                      </Typography>
                      <Typography variant="body1" color="initial">
                        4
                      </Typography>
                      <Typography variant="body1" color="initial">
                        5
                      </Typography>
                      <Typography variant="body1" color="initial">
                        6
                      </Typography>
                      <Typography variant="body1" color="initial">
                        7
                      </Typography>
                      <Typography variant="body1" color="initial">
                        8
                      </Typography>
                      <Typography variant="body1" color="initial">
                        9
                      </Typography>
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={{
                          marginLeft: "5px",
                          background: "#F3BD14",
                          fontSize: "15px !important",
                          fontWeight: "500",
                          border: "none !important",
                        }}
                      >
                        s
                      </Typography>
                    </Stack>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box padding={2} sx={{ background: "white", mt: 3 }}>
        <Stack spacing={2}>
          <Pagination count={6} variant="outlined" shape="rounded" />
        </Stack>
      </Box>
    </Box>
  );
};

export default Chart;
const style = {
  bacancebtn: {
    backgroundColor: "#40AD72",
    padding: "4px 13px",
    borderRadius: "20px",
    color: "white",
    fontSize: "17px",
    fontWeight: "500",
    marginLeft: "5px",
  },
  bacancebtn2: {
    backgroundColor: "#40AD72",
    padding: "4px 13px",
    borderRadius: "1px",
    color: "white",
    fontSize: "17px",
    fontWeight: "500",
    marginLeft: "5px",
  },
  bacancebtn3: {
    backgroundColor: "#40AD72",
    padding: "1px 5px",
    borderRadius: "6px",
    color: "white",
    fontSize: "14px",
    fontWeight: "500",
    marginLeft: "5px",
    display: "flex",
    alignItems: "center",
    height: "30px",
    ["@media (max-width:340px)"]: { fontSize: "13px" },
  },
  addsumbtn: {
    backgroundColor: "#40AD72",
    padding: "4px 13px",
    color: "white",
    fontSize: "17px",
    fontWeight: "500",
    margin: "0px 5px",
  },
  cancelbtn: {
    width: "100%",
    borderRadius: "0px",
    color: "white",
    backgroundColor: "#25253C",
    padding: 1,
  },
  submitbtn: {
    width: "100%",
    borderRadius: "0px",
    color: "white",
    backgroundColor: "#40AD72",
    padding: 1,
  },
  bigbtn: {
    width: "50%",
    borderRadius: "20px 0px 0px 20px",
    color: "white",
    fontSize: "16px",
    fontWeight: "500",
  },
  smlbtn: {
    width: "50%",
    borderRadius: "0px 20px 20px 0px",
    color: "white",
    fontSize: "16px",
    fontWeight: "500",
    background: "#6DA7F4",
  },
  linetable: {
    "&>p": {
      fontSize: "12px",
      color: "gray",
      border: "1px solid gray",
      borderRadius: "50%",
      width: "15px",
      height: "15px",
      textAlign: "center",
      padding: "2px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    alignItems: "center",
    justifyContent: "space-between",
    "&>p:nth-last-child(1)": {
      width: "20px !important",
      height: "20px !important",
    },
  },
};
