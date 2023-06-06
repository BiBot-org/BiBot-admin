"use client";
import { SendVerificationEmail, VerifyEmail } from "@/service/user/UserService";
import { InitSetupReq } from "@/types/user/User";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, SetStateAction, useState } from "react";

interface iProps {
  inputData: InitSetupReq;
  setInputData: React.Dispatch<SetStateAction<InitSetupReq>>;
  handleStepNext: () => void;
  handleStepPrev: () => void;
}

export const InitSetup1 = ({
  inputData,
  setInputData,
  handleStepNext,
  handleStepPrev,
}: iProps) => {
  const [isSendEmailCheck, setIsSendEmailCheck] = useState<boolean>(false);
  const [verifyCode, setVerifyCode] = useState<string>("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "verifyCode") {
      setVerifyCode(value);
    } else {
      setInputData({
        ...inputData,
        [name]: value,
      });
    }
  };

  const onClickSendEmailCheck = () => {
    SendVerificationEmail(inputData.email).then((res) => {
      if (res.data === inputData.email) {
        alert("이메일 확인 번호를 입력 해 주세요!");
        setIsSendEmailCheck(true);
      } else {
        alert("이메일을 잘못 입력하셨습니다.");
      }
    });
  };

  const onClickVerifyEmail = () => {
    VerifyEmail({
      email: inputData.email,
      verifyCode: verifyCode,
    }).then((res) => {
      if (res.data === true) {
        alert("확인 되었습니다.");
        setInputData({ ...inputData, confirm: true });
      } else {
        alert("실패하였습니다.");
        setInputData({ ...inputData, confirm: false });
      }
    });
  };

  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        flex: "1 1 auto",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: 550,
          px: 3,
          py: "100px",
          width: "100%",
        }}
      >
        <div>
          <Stack spacing={1} sx={{ mb: 3 }}>
            <Typography variant="h4">환영합니다!</Typography>
            <Typography color="text.secondary" variant="body2">
              관리자 정보를 입력 해 주세요
            </Typography>
          </Stack>

          <form noValidate>
            <Stack spacing={3}>
              <div>
                <TextField
                  fullWidth
                  label="성"
                  name="lastName"
                  type="text"
                  value={inputData.lastName}
                  onChange={handleOnChange}
                />
                <TextField
                  fullWidth
                  label="이름"
                  name="firstName"
                  type="text"
                  value={inputData.firstName}
                  onChange={handleOnChange}
                />
                <TextField
                  fullWidth
                  label="이메일"
                  name="email"
                  type="email"
                  value={inputData.email}
                  onChange={handleOnChange}
                />
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  variant="contained"
                  onClick={onClickSendEmailCheck}
                >
                  이메일 확인 메일 전송
                </Button>
              </div>
              {isSendEmailCheck && (
                <div>
                  <TextField
                    fullWidth
                    label="이메일 인증 번호"
                    name="verifyCode"
                    value={verifyCode}
                    onChange={handleOnChange}
                    type="text"
                  />
                  <Button
                    fullWidth
                    size="large"
                    sx={{ mt: 3 }}
                    variant="contained"
                    onClick={onClickVerifyEmail}
                  >
                    이메일 확인
                  </Button>
                </div>
              )}

              <TextField
                fullWidth
                label="비밀번호"
                name="password"
                value={inputData.password}
                type="password"
                onChange={handleOnChange}
              />
            </Stack>
          </form>
          <Grid container sx={{ flex: "1 1 auto" }}>
            <Grid xs={5} lg={6}>
              <Button
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                variant="contained"
                onClick={handleStepPrev}
              >
                이전
              </Button>
            </Grid>
            <Grid xs={5} lg={6}>
              <Button
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                variant="contained"
                onClick={handleStepNext}
              >
                다음
              </Button>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Box>
  );
};
