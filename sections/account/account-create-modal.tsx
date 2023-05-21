import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Box, styled } from "@mui/system";
import { GetAllDepartmentInfo } from "@/service/user/UserService";
import { DepartmentInfo } from "@/types/user/User";

interface iProp {
  onClose: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  userId?: string;
}

export const CreateOrChangeUserModal = (props: iProp) => {
  const { onClose, open, userId } = props;
  const [userAccountInfo, setUserAccountInfo] = useState({});
  const [departmentList, setDepartmentList] = useState<string[]>([]);

  useEffect(() => {
    if (userId) {
      //TODO
    }
  }, [userId]);

  useEffect(() => {
    GetAllDepartmentInfo().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <Dialog onClose={onClose} open={open}>
      {userId ? (
        <DialogTitle id="alert-dialog-title">사원 정보 변경</DialogTitle>
      ) : (
        <DialogTitle id="alert-dialog-title">계정 생성</DialogTitle>
      )}

      <DialogContent>
        <DialogContentText>
          사원의 부서 및 팀 정보 등 사내 정보를 입력해주세요.
        </DialogContentText>
        <Box
          sx={{
            py: 4,
            px: 2,
          }}
        >
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid xs={6}>
                  <Avatar
                    sx={{
                      height: 200,
                      mb: 2,
                      width: 200,
                    }}
                  />
                </Grid>
                <Grid xs={6} spacing={2}>
                  <TextField fullWidth label="성" />
                  <TextField fullWidth label="이름" />
                  <TextField fullWidth label="아이디" />
                  <TextField fullWidth label="유저 이메일" />
                  <Select fullWidth label="부서">
                    <MenuItem>개발 1센터</MenuItem>
                  </Select>
                  <Select fullWidth label="팀">
                    <MenuItem>개발 1팀</MenuItem>
                  </Select>
                  <Select fullWidth label="직급">
                    <MenuItem>개발자</MenuItem>
                  </Select>
                  <TextField fullWidth label="직책" />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end" }}>
              <Button variant="contained">저장</Button>
            </CardActions>
          </Card>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
