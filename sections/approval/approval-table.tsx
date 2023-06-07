import { SetStateAction } from "react";
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  Pagination,
  TableRow,
  CardActions,
} from "@mui/material";
import { Scrollbar } from "@/components/scrollbar";
import { SearchApprovalRes } from "@/types/approval/ResponseType";

import { SearchApprovalReq } from "@/types/approval/RequestType";
import ApprovalTableRow from "./approval-table-row";
import { useSearchApprovalInfoQuery } from "@/service/expense/ExpenseService";
import { useMutation } from "@tanstack/react-query";

interface Props {
  searchParam: SearchApprovalReq;
  setSearchParam: React.Dispatch<SetStateAction<SearchApprovalReq>>;
}
export const ApprovalTable = ({ searchParam, setSearchParam }: Props) => {
  const { isLoading, data } = useSearchApprovalInfoQuery(searchParam);

  const handleChangePagination = (
    e: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setSearchParam({
      ...searchParam,
      page: value,
    });
  };

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>날짜</TableCell>
                <TableCell>항목</TableCell>
                <TableCell>승인여부</TableCell>
                <TableCell>사원명</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.data.content &&
                data?.data.content.map((element) => (
                  <ApprovalTableRow key={element.id} row={element} />
                ))}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Pagination
          page={data?.data.pageNo! + 1}
          count={data?.data.totalPages}
          onChange={handleChangePagination}
        />
      </CardActions>
    </Card>
  );
};
