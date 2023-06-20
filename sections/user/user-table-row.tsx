import { BibotUserInfo } from "@/types/user/User";
import { TableCell, TableRow } from "@mui/material";
import { UserInfoModal } from "../account/account-info-modal";
import { useState } from "react";
import { DepartmentInfo } from "@/types/department/types";

interface Props {
  user: BibotUserInfo;
  departmentInfoList: DepartmentInfo[];
}

export const UserTableRow = ({ user, departmentInfoList }: Props) => {
  const [openUserInfoModal, setOpenUserInfoModal] = useState<boolean>(false);
  return (
    <>
      <UserInfoModal
        onClose={() => setOpenUserInfoModal(false)}
        open={openUserInfoModal}
        userInfo={user}
        departmentInfoList={departmentInfoList}
      />
      <TableRow
        key={`userRow : ${user.bibotUser.id}`}
        onClick={() => setOpenUserInfoModal(true)}
      >
        <TableCell>{user.bibotUser.userRole}</TableCell>
        <TableCell>{user.department.name}</TableCell>
        <TableCell>{user.team.name}</TableCell>
        <TableCell>{user.bibotUser.duty}</TableCell>
        <TableCell>{`${user.bibotUser.lastName} ${user.bibotUser.firstName}`}</TableCell>
      </TableRow>
    </>
  );
};
