import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Box, Stack, TablePagination, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import moment from "moment";
import * as React from "react";
import { useQuery } from "react-query";
import { My_All_TRX_HistoryFn } from "../../../services/apiCallings";
import { rupees, zubgback } from "../../../services/urls";
import CustomCircularProgress from "../../../shared/loder/CustomCircularProgress";

const MyHistory = ({ gid }) => {
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const { isLoading: myhistory_loding_all, data: my_history_all } = useQuery(
    ["myAll_trx_history", gid],
    () => My_All_TRX_HistoryFn(gid),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );


  const my_history_data_all = my_history_all?.data?.earning || [];

  const visibleRows = React.useMemo(
    () =>
      my_history_data_all?.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [page, rowsPerPage, my_history_all?.data?.earning]
  );

  return (
    <Box mt={2}>
<Typography className="text-center my-10 text-lg">
No data
</Typography>
    </Box >
  );
};

export default MyHistory;
