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
  Button,
} from "@mui/material";
import { Scrollbar } from "@/components/scrollbar";
import { CreateOrChangeUserModal } from "../account/account-create-modal";
import { SetStateAction, useState } from "react";
import { UserInfoModal } from "../account/account-info-modal";

export const UserTable = () => {
  const [openCreateUserModal, setOpenCreateUserModal] =
    useState<boolean>(false);
  const [openUserInfoModal, setOpenUserInfoModal] = useState<boolean>(false);

  return (
    <>
      <CreateOrChangeUserModal
        onClose={() => setOpenCreateUserModal(false)}
        open={openCreateUserModal}
      />
      <UserInfoModal
        onClose={() => setOpenUserInfoModal(false)}
        open={openUserInfoModal}
      />
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
                <TableRow onClick={() => setOpenUserInfoModal(true)}>
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
        <CardActions sx={{ justifyContent: "flex-end", flexDirection: "row" }}>
          <Pagination count={10} />
        </CardActions>
        <CardActions sx={{ justifyContent: "flex-end", flexDirection: "row" }}>
          <Button
            variant="contained"
            onClick={() => setOpenCreateUserModal(true)}
          >
            계정 생성
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
