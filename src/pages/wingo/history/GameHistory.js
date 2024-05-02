import {
  Box,
  CircularProgress,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from "@mui/material";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { updateNextCounter } from "../../../redux/slices/counterSlice";
import { endpoint } from "../../../services/urls";
import theme from "../../../utils/theme";

const GameHistory = ({ gid }) => {
 
  const dispatch = useDispatch()
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);

  const { isLoading, data: game_history } = useQuery(
    ["gamehistory", gid],
    () => GameHistoryFn(gid),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );

  const GameHistoryFn = async (gid) => {
    try {
      const reqBody = {
        gameid: gid,
        limit: 100,
      };
      const response = await axios.post(`${endpoint.game_history}`, reqBody);
      return response;
    } catch (e) {
       toast(e?.message);
      console.log(e);
    }
  };

  const game_history_data = game_history?.data?.data;

  React.useEffect(() => {
    dispatch(
      updateNextCounter(
        game_history?.data?.data
          ? Number(game_history?.data?.data?.[0]?.tr_transaction_id) + 1
          : 1
      )
    );
  }, [game_history?.data?.data]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const visibleRows = React.useMemo(
    () =>
      game_history_data?.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [page, rowsPerPage, game_history_data]
  );

  if (isLoading)
    return (
      <div className="!w-full flex justify-center">
        <CircularProgress />
      </div>
    );
  return (
    <Box mt={2}>
      <TableContainer >
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
              <TableCell align="center">Period</TableCell>
              <TableCell align="center">Number</TableCell>
              <TableCell align="center">Big Small</TableCell>
              <TableCell align="center">Color</TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              "&>tr>td": { padding: "10px 5px", border: "none" },
              "&>tr": { borderBottom: "1px solid #ced4d7" },
            }}
          >
            {visibleRows?.map((i, index) => {
              return (
                <TableRow>
                  <TableCell align="center">{i?.tr_transaction_id}</TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "20px", fontWeight: 900, color: "red" }}
                  >
                    {i?.tr41_slot_id-1}
                  </TableCell>
                  <TableCell align="center">
                    {i?.tr41_slot_id-1 > 4 ? "Big" : "Small"}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {[1, 3, 7, 9].includes(i?.tr41_slot_id-1) ? (
                      <Typography
                        sx={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          mt: "10px",
                          mx: "4px",
                          background: "green",
                        }}
                      ></Typography>
                    ) : [2, 4, 6, 8].includes(i?.tr41_slot_id-1) ? (
                      <Typography
                        sx={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          mt: "10px",
                          mx: "4px",
                          background: "red",
                        }}
                      ></Typography>
                    ) : i?.tr41_slot_id-1 == 0 ? (
                      <div className="flex">
                        <Typography
                          sx={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            mt: "10px",
                            mx: "4px",
                            background: "red",
                          }}
                        ></Typography>
                        <Typography
                          sx={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            mt: "10px",
                            mx: "4px",
                            background: "#BF6DFE",
                          }}
                        ></Typography>
                      </div>
                    ) : (
                      i?.tr41_slot_id-1 == 5 && (
                        <div className="flex ">
                          <Typography
                            sx={{
                              width: "10px",
                              height: "10px",
                              borderRadius: "50%",
                              mt: "10px",
                              mx: "4px",
                              background: "green",
                            }}
                          ></Typography>
                          <Typography
                            sx={{
                              width: "10px",
                              height: "10px",
                              borderRadius: "50%",
                              mt: "10px",
                              mx: "4px",
                              background: "#BF6DFE",
                            }}
                          ></Typography>
                        </div>
                      )
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ background: "white", mt: 3 }}>
        <Stack spacing={2}>
          <TablePagination
            sx={{ background: "#FBA343", color: "white" }}
            rowsPerPageOptions={[10, 15,20]}
            component="div"
            count={game_history_data?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage="Rows"
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default GameHistory;
