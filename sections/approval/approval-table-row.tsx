import { SearchAdminApprovalRes } from "@/types/expense/types";
import { Skeleton, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import ApprovalTableRowDetail from "./approval-table-row-detail";
import { useGetUserQuery } from "@/service/user/UserService";
import { getFormattedDateTimeFromLocalDateTime } from "@/utils/dateUtils";
import { SeverityPill } from "./severity-pill";

const statusMap: Record<string, string> = {
  PENDING: "warning",
  APPROVED: "success",
  REJECTED: "error",
};

interface iRowProp {
  row: SearchAdminApprovalRes;
}

export default function ApprovalTableRow({ row }: iRowProp) {
  const [open, setOpen] = useState(false);
  const { isLoading, data } = useGetUserQuery(row.requesterId);

  return (
    <>
      <TableRow onClick={() => setOpen(!open)}>
        <TableCell>{row.id}</TableCell>
        <TableCell>
          {getFormattedDateTimeFromLocalDateTime(row.regTime)}
        </TableCell>
        <TableCell>
          <SeverityPill ownerState={statusMap[row.status]}>
            {row.status}
          </SeverityPill>
        </TableCell>
        <TableCell>
          {isLoading
            ? ""
            : `${data?.data.bibotUser.lastName} ${data?.data.bibotUser.firstName}`}
        </TableCell>
      </TableRow>
      {open && <ApprovalTableRowDetail approvalInfo={row} />}
    </>
  );
}
