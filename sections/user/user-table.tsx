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
import { Dispatch, SetStateAction, useState } from "react";
import { UserInfoModal } from "../account/account-info-modal";
import {
  BibotUserDTO,
  BibotUserInfo,
  SearchBibotUser,
} from "@/types/user/User";
import { SearchBibotUserRes } from "@/types/user/ResponseType";
import { SearchBibotUserReq } from "@/types/user/RequestType";

interface Props {
  searchUser: SearchBibotUser;
  searchParam: SearchBibotUserReq;
  setSearchParam: Dispatch<SetStateAction<SearchBibotUserReq>>;
}

export const UserTable = ({
  searchUser,
  searchParam,
  setSearchParam,
}: Props) => {
  const [openCreateUserModal, setOpenCreateUserModal] =
    useState<boolean>(false);
  const [openUserInfoModal, setOpenUserInfoModal] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<BibotUserInfo>(
    {} as BibotUserInfo
  );
  const handleOnChangePageNo = (
    e: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setSearchParam({ ...searchParam, page: value });
  };

  const handleClickTableRow = (user: BibotUserInfo) => {
    setSelectedUser(user);
    setOpenUserInfoModal(true);
  };

  return (
    <>
      <CreateOrChangeUserModal
        onClose={() => setOpenCreateUserModal(false)}
        open={openCreateUserModal}
      />
      <UserInfoModal
        onClose={() => setOpenUserInfoModal(false)}
        open={openUserInfoModal}
        userInfo={selectedUser}
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
                  <TableCell>직책</TableCell>
                  <TableCell>이름</TableCell>
                  <TableCell>결재건</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {searchUser.content &&
                  searchUser.content.map((user) => (
                    <>
                      <TableRow
                        key={`userRow : ${user.bibotUser.id}`}
                        onClick={() => handleClickTableRow(user)}
                      >
                        <TableCell>{user.bibotUser.userRole}</TableCell>
                        <TableCell>{user.department.name}</TableCell>
                        <TableCell>{user.team.name}</TableCell>
                        <TableCell>{user.bibotUser.duty}</TableCell>
                        <TableCell>{`${user.bibotUser.lastName} ${user.bibotUser.firstName}`}</TableCell>
                        <TableCell>5 / 9</TableCell>
                      </TableRow>
                    </>
                  ))}
              </TableBody>
            </Table>
          </Box>
        </Scrollbar>
        <CardActions sx={{ justifyContent: "flex-end", flexDirection: "row" }}>
          <Pagination
            count={searchUser.totalPages}
            page={searchUser.pageNo + 1}
          />
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
