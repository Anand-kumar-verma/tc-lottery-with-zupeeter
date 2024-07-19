import LiveHelpIcon from "@mui/icons-material/LiveHelp";
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
} from "@mui/material";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  trx_game_image_index_function,
  updateNextCounter,
} from "../../../redux/slices/counterSlice";
import { endpoint } from "../../../services/urls";
import theme from "../../../utils/theme";
import d1 from "../../../assets/images/r6.png"
import d2 from "../../../assets/images/r2.png"
import d3 from "../../../assets/images/r5.png"
import d4 from "../../../assets/images/r4.png"
import d5 from "../../../assets/images/r3.png"
import d6 from "../../../assets/images/r1.png"

const Chart = ({ gid }) => {
  const dispatch = useDispatch();
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const navigate = useNavigate();

  const imgageArray = [
    d1, d2, d3, d4, d5, d6
  ]
  const { isLoading, data: game_history } = useQuery(
    ["k3_gamehistory", gid],
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
        `${endpoint.k3_game_history}`,
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
    console.log(
      game_history?.data?.data
        ? Number(game_history?.data?.data?.[0]?.k3_gamesno) + 1
        : 1
    );
    dispatch(
      updateNextCounter(
        game_history?.data?.data
          ? Number(game_history?.data?.data?.[0]?.k3_gamesno) + 1
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
              <TableCell
                sx={{
                  verticalAlign: "bottom",
                  padding: "10px 0px !important",
                  textAlign: "center",
                }}
                className="!text-sm  !pl-[2px] !pr-0"
              >
                Period
              </TableCell>

              <TableCell
                sx={{
                  verticalAlign: "bottom",
                  padding: "10px 0px  !important",
                  textAlign: "center",
                }}
                className="!text-sm  !pr-0 !pl-1"
              >
                Result
              </TableCell>
              <TableCell
                sx={{
                  verticalAlign: "bottom",
                  padding: "10px 0px  !important",
                  textAlign: "center",
                }}
                className="!text-sm  !pr-0 !pl-1"
              >
                Number
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
                  <TableCell
                    sx={{ verticalAlign: "bottom", textAlign: "center" }}
                  >
                    <p className="text-black my-4">{i?.k3_gamesno}</p>
                  </TableCell>
                  <TableCell
                    sx={{ verticalAlign: "bottom", textAlign: "center" }}
                  >
                    <div className="flex justify-center gap-4 my-4">
                      <img src={imgageArray[Number(String(i?.k3_dies_result)?.[0]) - 1]} alt="" className="w-5" />
                      <img src={imgageArray[Number(String(i?.k3_dies_result)?.[1]) - 1]} alt="" className="w-5" />
                      <img src={imgageArray[Number(String(i?.k3_dies_result)?.[2]) - 1]} alt="" className="w-5" />
                    </div>

                  </TableCell>
                  <TableCell sx={{ verticalAlign: "top", textAlign: "center" }}>
                    <div className="flex justify-center gap-2">
                      <span className="text-black my-4">
                        {
                          i?.k3_dies_result.toString().length === new Set(i?.k3_dies_result.toString()).size
                            ? "No Same Numbers"
                            : new Set(i?.k3_dies_result.toString()).size === 2
                              ? "2 Same Numbers "
                              : new Set(i?.k3_dies_result.toString()).size === 1
                                ? "3 Same Numbers  "
                                : ""
                        }
                      </span>

                    </div>
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

export default Chart;
