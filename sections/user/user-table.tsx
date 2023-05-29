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
import { DepartmentInfo } from "@/types/department/types";
import { UserTableRow } from "./user-table-row";

interface Props {
  searchUser: SearchBibotUser;
  searchParam: SearchBibotUserReq;
  departmentInfoList: DepartmentInfo[];
  setSearchParam: Dispatch<SetStateAction<SearchBibotUserReq>>;
}

export const UserTable = ({
  searchUser,
  searchParam,
  departmentInfoList,
  setSearchParam,
}: Props) => {
  const [openCreateUserModal, setOpenCreateUserModal] =
    useState<boolean>(false);

  const handleOnChangePageNo = (
    e: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setSearchParam({ ...searchParam, page: value });
  };

  return (
    <>
      <CreateOrChangeUserModal
        onClose={() => setOpenCreateUserModal(false)}
        departmentInfoList={departmentInfoList}
        open={openCreateUserModal}
        isModify={false}
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
                      <UserTableRow
                        user={user}
                        departmentInfoList={departmentInfoList}
                      />
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
