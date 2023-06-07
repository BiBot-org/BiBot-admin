import { useGetUserQuery } from "@/service/user/UserService";
import { ApprovalInfo } from "@/types/expense/types";
import { TableCell, TableRow } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

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
          <TableCell>{approval.createAt}</TableCell>
          <TableCell>{approval.approval.status}</TableCell>
        </TableRow>
      )}
    </>
  );
}
