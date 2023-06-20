import { TableCell, TableRow } from "@mui/material";
import { SearchAdminApprovalRes } from "@/types/expense/types";
import ApprovalTableRowDetailReceiptInfo from "./approval-table-row-detail-receipt-info";

interface Prop {
  approvalInfo: SearchAdminApprovalRes;
}

export default function ApprovalTableRowDetail({ approvalInfo }: Prop) {
  return (
    <TableRow>
      <TableCell colSpan={6}>
        <ApprovalTableRowDetailReceiptInfo approvalInfo={approvalInfo} />
      </TableCell>
    </TableRow>
  );
}
