import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  Stack,
  ListItemText,
  TextField,
  Container,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { InitSetupReq, iDepartmentInit } from "@/types/user/User";

interface iProp {
  onClose: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  inputData: InitSetupReq;
  setInputData: React.Dispatch<SetStateAction<InitSetupReq>>;
  departmentData?: iDepartmentInit;
}

export const DepartmentModal = (props: iProp) => {
  const { onClose, open, inputData, setInputData, departmentData } = props;
  const [departmentName, setDepartmentName] = useState<string>("");
  const [teamName, setTeamName] = useState<string>("");
  const [teamList, setTeamList] = useState<string[]>([]);

  useEffect(() => {
    if (departmentData) {
      setDepartmentName(departmentData.name);
      setTeamList([...departmentData.teams]);
    } else {
      setDepartmentName("");
      setTeamName("");
      setTeamList([]);
    }
  }, [departmentData, open]);

  const onChangeTextField = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "department") {
      setDepartmentName(value);
    } else if (name === "team") {
      setTeamName(value);
    }
  };

  const onClickAddTeamName = () => {
    if (teamName !== "") {
      if (teamList.find((e) => e === teamName)) {
        alert("동일한 팀이 존재합니다.");
      } else {
        setTeamList([...teamList, teamName]);
        setTeamName("");
      }
    } else {
      alert("팀 이름을 입력하세요");
    }
  };

  const onClickSaveButton = () => {
    if (departmentName === "") {
      alert("부서 이름을 입력하세요.");
    } else {
      const departmentInfo: iDepartmentInit = {
        name: departmentName,
        teams: teamList,
      };
      const idx = inputData.departmentList.findIndex(
        (e) => e.name === departmentName
      );

      if (departmentData === undefined && idx !== -1) {
        alert("중복된 이름의 부서가 존재합니다.");
      } else {
        if (idx === -1) {
          setInputData({
            ...inputData,
            departmentList: [...inputData.departmentList, departmentInfo],
          });
        } else {
          let copiedItems = [...inputData.departmentList];
          copiedItems[idx] = departmentInfo;

          setInputData({
            ...inputData,
            departmentList: [...copiedItems],
          });
        }
        onClose(false);
      }
    }
  };

  const onClickDelete = (teamName: string) => {
    setTeamList([...teamList.filter((e) => e !== teamName)]);
  };

  return (
    <Dialog onClose={onClose} open={open} maxWidth="lg">
      <DialogTitle>부서 생성</DialogTitle>
      <DialogContent>
        <Stack spacing={3}>
          <TextField
            fullWidth
            name="department"
            label="부서 명"
            onChange={onChangeTextField}
            value={departmentName}
          />
          <List>
            {teamList &&
              teamList.map((e) => (
                <>
                  <ListItem
                    secondaryAction={
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => onClickDelete(e)}
                      >
                        <Delete />
                      </IconButton>
                    }
                  >
                    <ListItemText primary={e} />
                  </ListItem>
                </>
              ))}
          </List>
          <TextField
            fullWidth
            name="team"
            label="팀 명"
            onChange={onChangeTextField}
            value={teamName}
          />
          <Container sx={{ justifyContent: "flex-end" }}>
            <Button
              sx={{ mt: 3 }}
              variant="contained"
              onClick={onClickAddTeamName}
            >
              팀 추가
            </Button>
            <Button
              sx={{ mt: 3 }}
              variant="contained"
              onClick={onClickSaveButton}
            >
              저장
            </Button>
            <Button
              sx={{ mt: 3 }}
              variant="contained"
              onClick={() => onClose(false)}
            >
              취소
            </Button>
          </Container>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};
