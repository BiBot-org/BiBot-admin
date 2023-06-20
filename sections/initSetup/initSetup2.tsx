"use client";
import { InitSetupReq } from "@/types/user/User";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { SetStateAction, useState } from "react";
import { DepartmentModal } from "./department-modal";
import { DepartmentSetup } from "./department-setup";

interface iProps {
  inputData: InitSetupReq;
  setInputData: React.Dispatch<SetStateAction<InitSetupReq>>;
  handleStepNext: () => void;
  handleStepPrev: () => void;
}

export const InitSetup2 = ({
  inputData,
  setInputData,
  handleStepNext,
  handleStepPrev,
}: iProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
          <DepartmentModal
            onClose={() => setIsOpen(false)}
            open={isOpen}
            inputData={inputData}
            setInputData={setInputData}
          />
          <Stack spacing={1} sx={{ mb: 3 }}>
            <Typography variant="h4">
              부서 및 팀 정보를 입력 해 주세요.
            </Typography>
            <Typography color="text.secondary" variant="body2">
              회사의 정책에 맞게 부서 및 팀 정보를 입력 해 주세요.
            </Typography>
          </Stack>
          <Grid container></Grid>
          <Stack spacing={3}>
            {inputData.departmentList &&
              inputData.departmentList.map((dept) => (
                <>
                  <DepartmentSetup
                    key={`DepartmentSetup : ${dept.name}`}
                    inputData={inputData}
                    setInputData={setInputData}
                    dept={dept}
                  />
                </>
              ))}

            <Grid container>
              <Grid xs={5} lg={6}>
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  variant="contained"
                  onClick={() => setIsOpen(true)}
                >
                  추가
                </Button>
              </Grid>
            </Grid>
          </Stack>
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
