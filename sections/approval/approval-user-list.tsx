import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Table,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Stack } from "@mui/system";

export const ExpenseUserHistory = () => {
  return (
    <Card>
      <CardHeader subheader="유저의 결재 이력입니다." title="결재 이력" />
      <Divider />
      <CardContent>
        <Stack spacing={3} sx={{ maxWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>날짜</TableCell>
                <TableCell>항목</TableCell>
                <TableCell>승인여부</TableCell>
                <TableCell>금액</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </Stack>
      </CardContent>
    </Card>
  );
};
