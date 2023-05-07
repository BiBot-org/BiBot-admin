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

export const UserTable = () => {
  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>역할</TableCell>
                <TableCell>부서</TableCell>
                <TableCell>소속</TableCell>
                <TableCell>직급</TableCell>
                <TableCell>직책</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>결재건</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>관리자</TableCell>
                <TableCell>개발 1센터</TableCell>
                <TableCell>스파로스 개발팀</TableCell>
                <TableCell>매니저</TableCell>
                <TableCell>연구원</TableCell>
                <TableCell>드루와</TableCell>
                <TableCell>5 / 9</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>관리자</TableCell>
                <TableCell>개발 1센터</TableCell>
                <TableCell>스파로스 개발팀</TableCell>
                <TableCell>매니저</TableCell>
                <TableCell>연구원</TableCell>
                <TableCell>드루와</TableCell>
                <TableCell>5 / 9</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>관리자</TableCell>
                <TableCell>개발 1센터</TableCell>
                <TableCell>스파로스 개발팀</TableCell>
                <TableCell>매니저</TableCell>
                <TableCell>연구원</TableCell>
                <TableCell>드루와</TableCell>
                <TableCell>5 / 9</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>관리자</TableCell>
                <TableCell>개발 1센터</TableCell>
                <TableCell>스파로스 개발팀</TableCell>
                <TableCell>매니저</TableCell>
                <TableCell>연구원</TableCell>
                <TableCell>드루와</TableCell>
                <TableCell>5 / 9</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>관리자</TableCell>
                <TableCell>개발 1센터</TableCell>
                <TableCell>스파로스 개발팀</TableCell>
                <TableCell>매니저</TableCell>
                <TableCell>연구원</TableCell>
                <TableCell>드루와</TableCell>
                <TableCell>5 / 9</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>관리자</TableCell>
                <TableCell>개발 1센터</TableCell>
                <TableCell>스파로스 개발팀</TableCell>
                <TableCell>매니저</TableCell>
                <TableCell>연구원</TableCell>
                <TableCell>드루와</TableCell>
                <TableCell>5 / 9</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Pagination count={10} />
      </CardActions>
    </Card>
  );
};
