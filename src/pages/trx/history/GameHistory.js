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
  Typography,
} from "@mui/material";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import {
  trx_game_image_index_function,
  updateNextCounter,
} from "../../../redux/slices/counterSlice";
import { endpoint } from "../../../services/urls";
import theme from "../../../utils/theme";
import { useNavigate } from "react-router-dom";

const GameHistory = ({ gid }) => {
  const dispatch = useDispatch();
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const navigate = useNavigate();
  const { isLoading, data: game_history } = useQuery(
    ["trx_gamehistory", gid],
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
      const response = await axios.post(
        `${endpoint.trx_game_history}`,
        reqBody
      );
      return response;
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
  };

  // const game_history_data = game_history?.data?.data;
  const game_history_data = React.useMemo(
    () => game_history?.data?.data,
    [game_history?.data?.data]
  );

  React.useEffect(() => {
    dispatch(
      updateNextCounter(
        game_history?.data?.data
          ? Number(game_history?.data?.data?.[0]?.tr_transaction_id) + 1
          : 1
      )
    );
    const tr_digit =
      game_history?.data?.data && game_history?.data?.data?.[0]?.tr_digits;
    let array = [];
    for (let i = 0; i < tr_digit?.length; i++) {
      if (/[a-zA-Z]/.test(tr_digit[i])) {
        array.push(tr_digit[i].toUpperCase());
      } else {
        array.push(tr_digit[i]);
      }
    }
    dispatch(trx_game_image_index_function(array));
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
      <TableContainer>
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
              <TableCell className="!text-sm !text-center !pl-[2px] !pr-0">
                Period
              </TableCell>
              <TableCell className="!text-sm !text-center !pr-0 !pl-1">
                Block
              </TableCell>
              <TableCell className="!text-sm !text-center !pr-0 !pl-1">
                Block Time
              </TableCell>
              <TableCell className="!text-sm !text-center !pr-0 !pl-1">
                Hash
              </TableCell>
              <TableCell className="!text-sm !text-center !pr-0 !pl-1">
                Result
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              "&>tr>td": { padding: "10px 5px", border: "none" },
              "&>tr": { borderBottom: "1px solid #ced4d7" },
            }}
          >
            {visibleRows?.map((i) => {
              return (
                <TableRow className="!w-[95%]">
                  <TableCell className="!text-black !pl-[2px] !pr-0 !text-center">
                    <p
                      className={`
                 !bg-gradient-to-t from-[#FE63FF] to-[#007AFF]
                  transparentColor font-bold !text-center
                  `}
                    >
                      {i?.tr_transaction_id}
                    </p>
                  </TableCell>
                  <TableCell className="!text-black !pr-0 !pl-1 !text-center">
                    <span>
                      <LiveHelpIcon
                        className="!text-[#FBA343] cursor-pointer"
                        onClick={() =>
                          navigate("/trx/tron-scan", {
                            state: {
                              tron_id: i?.tr_number,
                            },
                          })
                        }
                      />
                    </span>
                    <span>{i?.tr_number}</span>
                  </TableCell>
                  <TableCell className="!text-black !pr-0 !pl-1 !text-center">
                    <span>{i?.tr_block_time}</span>
                  </TableCell>
                  <TableCell className="!text-black !pr-0 !pl-1 !text-center">
                    <span>{i?.tr_hashno}</span>
                  </TableCell>

                  <TableCell className="!text-black !pr-0 !pl-1 !text-center">
                    <span
                      className={`
                ${
                  (String(Number(i?.tr41_slot_id - 1)) === "0" &&
                    "!bg-gradient-to-t from-red-400 to-violet-400") ||
                  (String(Number(i?.tr41_slot_id - 1)) === "5" &&
                    "!bg-gradient-to-t from-violet-400 to-green-400") ||
                  ((String(Number(i?.tr41_slot_id - 1)) === "1" ||
                    String(Number(i?.tr41_slot_id - 1)) === "3" ||
                    String(Number(i?.tr41_slot_id - 1)) === "7" ||
                    String(Number(i?.tr41_slot_id - 1)) === "9" ||
                    String(Number(i?.tr41_slot_id - 1)) === "10") &&
                    "bg-gradient-to-t from-green-400 to-green-900") ||
                  ((String(Number(i?.tr41_slot_id - 1)) === "2" ||
                    String(Number(i?.tr41_slot_id - 1)) === "4" ||
                    String(Number(i?.tr41_slot_id - 1)) === "6" ||
                    String(Number(i?.tr41_slot_id - 1)) === "8" ||
                    String(Number(i?.tr41_slot_id - 1)) === "30") &&
                    "bg-gradient-to-tl from-red-400 to-red-900") ||
                  (String(Number(i?.tr41_slot_id - 1)) === "50" &&
                    "bg-[#3183ee]") ||
                  (String(Number(i?.tr41_slot_id - 1)) === "40" &&
                    "bg-[#f1be24]") ||
                  (String(Number(i?.tr41_slot_id - 1)) === "20" &&
                    "bg-[#eb2feb]")
                }
                transparentColor font-bold  text-lg
                `}
                    >
                      {Number(i?.tr41_slot_id - 1)}
                    </span>
                    <span> {Number(i?.tr41_slot_id - 1) <= 4 ? "S" : "B"}</span>
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
            rowsPerPageOptions={[10, 15, 20]}
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
