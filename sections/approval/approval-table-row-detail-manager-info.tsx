import { useGetUser } from "@/service/user/UserService";
import { TextField } from "@mui/material";

interface Props {
  managerId: string;
  comment?: string;
}

export default function ApprovalTableRowDetailManagerInfo({
  managerId,
  comment,
}: Props) {
  const { isLoading, data, isError } = useGetUser(managerId);

  return (
    <>
      {!(isLoading || isError) && (
        <>
          <TextField
            aria-readonly
            fullWidth
            label="결재 담당자"
            value={`${data.data.lastName} ${data.data.firstName}`}
          />
          {comment && (
            <TextField aria-readonly fullWidth label="코멘트" value={comment} />
          )}
        </>
      )}
    </>
  );
}
