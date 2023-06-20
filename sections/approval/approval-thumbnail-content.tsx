import { useGetUserQuery } from "@/service/user/UserService";
import { ApprovalInfo } from "@/types/expense/types";
import { TableCell, TableRow } from "@mui/material";
import { SeverityPill } from "./severity-pill";
import { getFormattedDateTimeFromLocalDateTime } from "@/utils/dateUtils";

const statusMap: Record<string, string> = {
  PENDING: "warning",
  APPROVED: "success",
  REJECTED: "error",
};

export function ApprovalThumbnailContent({
  approval,
}: {
  approval: ApprovalInfo;
}) {
  const { isLoading, data } = useGetUserQuery(approval.approval.requesterId);

  return (
    <>
      {!isLoading && (
        <TableRow hover>
          <TableCell>{approval.approval.id}</TableCell>
          <TableCell>{`${data?.data.bibotUser.lastName || ""} ${
            data?.data.bibotUser.firstName
          }`}</TableCell>
          <TableCell>{`${data?.data.department.name} / ${data?.data.team.name}`}</TableCell>
          <TableCell>{approval.category.categoryName}</TableCell>
          <TableCell>
            {getFormattedDateTimeFromLocalDateTime(approval.createAt)}
          </TableCell>
          <TableCell>
            <SeverityPill ownerState={statusMap[approval.approval.status]}>
              {approval.approval.status}
            </SeverityPill>
          </TableCell>
        </TableRow>
      )}
    </>
  );
}
