import {
  Box,
  CircularProgress,
  Pagination,
  Paper,
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
import React from "react";
import theme from "../../../utils/theme";
import { endpoint } from "../../../services/urls";
import { useQuery } from "react-query";
import axios from "axios";

const GameHistory = ({ gid }) => {
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
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
      const response = await axios.post(`${endpoint.color_result}`, reqBody);
      return response;
    } catch (e) {
      // toast(e?.message);
      console.log(e);
    }
  };

  const game_history_data = game_history?.data?.data;
  // React.useEffect(() => {
  //   dispatch(
  //     updateNextCounter(
  //       game_history?.data?.data
  //         ? Number(game_history?.data?.data?.[0]?.gamesno) + 1
  //         : 1
  //     )
  //   );
  // }, [game_history?.data?.data]);

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
            <TableRow>
              <TableCell align="center"> 20240420010994</TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: "20px", fontWeight: 900, color: "red" }}
              >
                6
              </TableCell>
              <TableCell align="center"> small</TableCell>
              <TableCell
                align="center"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    width: "10px",
                    height: "10px",
                    background: "red",
                    borderRadius: "50%",
                    mt: "10px",
                    mx: "4px",
                  }}
                ></Typography>
                <Typography
                  sx={{
                    width: "10px",
                    height: "10px",
                    background: "red",
                    borderRadius: "50%",
                    mt: "10px",
                    mx: "4px",
                  }}
                ></Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center"> 20240420010994</TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: "20px", fontWeight: 900, color: "red" }}
              >
                6
              </TableCell>
              <TableCell align="center"> small</TableCell>
              <TableCell
                align="center"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    width: "10px",
                    height: "10px",
                    background: "red",
                    borderRadius: "50%",
                    mt: "10px",
                    mx: "4px",
                  }}
                ></Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center"> 20240420010994</TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: "20px", fontWeight: 900, color: "red" }}
              >
                6
              </TableCell>
              <TableCell align="center"> small</TableCell>
              <TableCell
                align="center"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    width: "10px",
                    height: "10px",
                    background: "red",
                    borderRadius: "50%",
                    mt: "10px",
                    mx: "4px",
                  }}
                ></Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ background: "white", mt: 3 }}>
        <Stack spacing={2}>
          <TablePagination
            sx={{ background: "#FBA343", color: "white" }}
            rowsPerPageOptions={[5, 10, 15]}
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
