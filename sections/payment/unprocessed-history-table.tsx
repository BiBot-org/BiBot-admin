/* eslint-disable react/jsx-max-props-per-line */
import { useGetAllPaymentHistoryIsRequestedNotQuery } from "@/service/payment/PaymentService";

import {
  Box,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";

import { useState } from "react";
import UnproccessedHistoryTableRow from "./unproccessed-history-table-row";

export default function UnProcessedHistoryTable() {
  const [pageNo, setPageNo] = useState<number>(0);
  const { data, isLoading } =
    useGetAllPaymentHistoryIsRequestedNotQuery(pageNo);

  const handleChangePagination = (
    e: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPageNo(value - 1);
  };

  if (isLoading && data === undefined) {
    return (
      <div style={{ height: 400, width: "100%" }}>
        {isLoading && <div>Loading</div>}
      </div>
    );
  } else {
    return (
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ width: "20%" }}>ID</TableCell>
              <TableCell style={{ width: "20%" }}>카드사</TableCell>
              <TableCell style={{ width: "20%" }}>거래처</TableCell>
              <TableCell style={{ width: "20%" }}>금액</TableCell>
              <TableCell style={{ width: "20%" }}>날짜</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.content.map((ele) => (
              <UnproccessedHistoryTableRow key={ele.id} element={ele} />
            ))}
          </TableBody>
          <TableFooter>
            <Pagination
              count={data?.totalPages}
              page={pageNo + 1}
              onChange={handleChangePagination}
            />
          </TableFooter>
        </Table>
      </Box>
    );
  }
}
