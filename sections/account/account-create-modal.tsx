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
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Box } from "@mui/system";
import { DepartmentDTO, DepartmentInfo } from "@/types/department/types";
import { GetAllDepartments } from "@/service/department/DepartmentService";
import { BibotUserDTO, BibotUserInfo } from "@/types/user/User";
import { CreateUser, UpdateUser } from "@/service/user/UserService";

interface iProp {
  onClose: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  departmentInfoList: DepartmentInfo[];
  userInfo?: BibotUserInfo;
  isModify: boolean;
}

export const CreateOrChangeUserModal = ({
  onClose,
  open,
  departmentInfoList,
  userInfo,
  isModify,
}: iProp) => {
  const [userAccountInfo, setUserAccountInfo] = useState<BibotUserDTO>(
    {} as BibotUserDTO
  );
  const [selectedDepartmentId, setSelectedDepartmentId] = useState<number>(0);
  const [selectedTeamId, setSelectedTeamId] = useState<number>(0);

  useEffect(() => {
    if (userInfo && isModify === true) {
      setSelectedDepartmentId(userInfo.department.id);
      setSelectedTeamId(userInfo.team.id);
      setUserAccountInfo(userInfo.bibotUser);
    } else {
      setSelectedDepartmentId(0);
      setSelectedTeamId(0);
      setUserAccountInfo({
        firstName: "",
        lastName: "",
        userRole: "",
        profileUrl: "",
        email: "",
        duty: "",
      });
    }
  }, []);

  const handleChangeMenuItenm = (e: SelectChangeEvent) => {
    const nextValue = Number(e.target.value);
    console.log(e);
    if (e.target.name === "department") {
      setSelectedDepartmentId(nextValue);
      setSelectedTeamId(0);
    } else if (e.target.name === "team") {
      setSelectedTeamId(nextValue);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserAccountInfo({
      ...userAccountInfo,
      [name]: value,
    });
  };

  const onSubmitUserInfo = () => {
    if (selectedDepartmentId === 0 || selectedTeamId === 0) {
      alert("부서 및 팀 정보를 입력 해 주세요.");
    } else {
      if (isModify === true) {
        console.log("수정");
        UpdateUser({
          ...userAccountInfo,
          teamId: selectedTeamId,
        })
          .then((res) => {
            alert("계정 정보가 변경 되었습니다.");
          })
          .catch(() => {
            alert("에러가 발생했습니다.");
          });
      } else {
        console.log("저장");
        CreateUser({
          ...userAccountInfo,
          teamId: selectedTeamId,
        })
          .then((res) => {
            alert(
              "새로운 계정이 생성 되었습니다. 해당 유저의 이메일로 초기 비밀번호가 전달되었습니다."
            );
          })
          .catch(() => {
            alert("에러가 발생했습니다.");
          });
      }
    }

    console.log(userAccountInfo);
  };

  return (
    <Dialog onClose={onClose} open={open}>
      {userInfo ? (
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
                  <TextField
                    fullWidth
                    name="lastName"
                    label="성"
                    onChange={handleChange}
                    value={userAccountInfo.lastName || ""}
                  />
                  <TextField
                    fullWidth
                    name="firstName"
                    label="이름"
                    onChange={handleChange}
                    value={userAccountInfo.firstName || ""}
                  />
                  <TextField
                    fullWidth
                    name="email"
                    label="유저 이메일"
                    onChange={handleChange}
                    value={userAccountInfo.email || ""}
                  />
                  <Select
                    fullWidth
                    name="department"
                    value={`${selectedDepartmentId}`}
                    onChange={handleChangeMenuItenm}
                  >
                    <MenuItem value={0}>부서를 선택 해 주세요</MenuItem>
                    {departmentInfoList &&
                      departmentInfoList.map((departmentInfo) => [
                        <MenuItem
                          key={`menuItem : ${departmentInfo.department.id}`}
                          value={`${departmentInfo.department.id}`}
                        >
                          {departmentInfo.department.name}
                        </MenuItem>,
                      ])}
                  </Select>
                  <Select
                    fullWidth
                    name="team"
                    value={`${selectedTeamId}`}
                    onChange={handleChangeMenuItenm}
                  >
                    <MenuItem value={0}>팀을 선택 해 주세요</MenuItem>
                    {departmentInfoList &&
                      departmentInfoList.map(
                        (departmentInfo) =>
                          departmentInfo.department.id ===
                            selectedDepartmentId &&
                          departmentInfo.teams.map((team) => [
                            <MenuItem
                              key={`menuItem : ${team.id}`}
                              value={`${team.id}`}
                            >
                              {team.name}
                            </MenuItem>,
                          ])
                      )}
                  </Select>
                  <TextField
                    fullWidth
                    name="duty"
                    onChange={handleChange}
                    value={userAccountInfo.duty}
                    label="직책"
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end" }}>
              <Button variant="contained" onClick={onSubmitUserInfo}>
                저장
              </Button>
            </CardActions>
          </Card>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
