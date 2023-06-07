import { AdminInfo } from "@/types/user/User";
import {
  Card,
  CardHeader,
  CardActions,
  Button,
  CardContent,
  Divider,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface Prop {
  adminUserList: AdminInfo[];
  setSelectedAdmin: Dispatch<SetStateAction<AdminInfo>>;
}

export const SetupManager = ({ adminUserList, setSelectedAdmin }: Prop) => {
  const onClickButton = (adminInfo: AdminInfo) => {
    setSelectedAdmin(adminInfo);
  };

  return (
    <Card>
      <CardHeader
        title="관리자 목록"
        subheader="현재 등록 된 관리자 계정입니다. "
      />
      <Divider />
      <CardContent>
        {adminUserList &&
          adminUserList.map((admin) => (
            <Button
              fullWidth
              key={`admin_button : ${admin.userId}`}
              variant="text"
              onClick={() => onClickButton(admin)}
            >
              {admin.lastName} {admin.firstName}
            </Button>
          ))}
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button variant="contained">추가</Button>
      </CardActions>
    </Card>
  );
};
