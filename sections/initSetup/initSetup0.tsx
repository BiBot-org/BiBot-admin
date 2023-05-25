import { CheckRootAccount } from "@/service/auth/RootService";
import { InitSetupReq } from "@/types/user/User";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { ChangeEvent, SetStateAction, useState } from "react";

interface iProps {
  inputData: InitSetupReq;
  setInputData: React.Dispatch<SetStateAction<InitSetupReq>>;
  setStepId: React.Dispatch<SetStateAction<number>>;
}

export const InitSetup0 = ({ inputData, setInputData, setStepId }: iProps) => {
  const [rootEmail, setRootEmail] = useState<string>("");
  const [rootPassword, setRootPassword] = useState<string>("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setRootEmail(value);
    } else if (name === "password") {
      setRootPassword(value);
    }
  };

  const onSubmitRootLogin = async () => {
    const rootCheckResult = await CheckRootAccount(rootEmail, rootPassword);

    if (rootCheckResult === true) {
      setInputData({
        ...inputData,
        rootEmail: rootEmail,
        rootPassword: rootPassword,
      });
      alert("확인 되었습니다.");
      setStepId(1);
    } else {
      alert("관리자 계정 정보를 확인 해 주세요.");
    }
  };

  return (
    <div>
      <Stack spacing={1} sx={{ mb: 3 }}>
        <Typography variant="h4">환영합니다!</Typography>
        <Typography color="text.secondary" variant="body2">
          발급 된 관리자 계정으로 로그인 해 주세요
        </Typography>
      </Stack>
      <Stack spacing={3}>
        <div>
          <TextField
            fullWidth
            label="이메일"
            name="email"
            type="email"
            onChange={handleOnChange}
            value={rootEmail}
          />
          <TextField
            fullWidth
            label="비밀번호"
            name="password"
            type="password"
            onChange={handleOnChange}
            value={rootPassword}
          />
        </div>
        <Button
          fullWidth
          size="large"
          sx={{ mt: 3 }}
          variant="contained"
          onClick={onSubmitRootLogin}
        >
          로그인
        </Button>
      </Stack>
    </div>
  );
};
