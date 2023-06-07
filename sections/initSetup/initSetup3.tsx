"use client";
import { InitSetupReq } from "@/types/user/User";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { SetStateAction, useState } from "react";
import { CategorySetupModal } from "./category-modal";
import { CategorySetup } from "./category-setup";

interface iProps {
  inputData: InitSetupReq;
  setInputData: React.Dispatch<SetStateAction<InitSetupReq>>;
  handleStepNext: () => void;
  handleStepPrev: () => void;
}

export const InitSetup3 = ({
  inputData,
  setInputData,
  handleStepNext,
  handleStepPrev,
}: iProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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
          <CategorySetupModal
            inputData={inputData}
            setInputData={setInputData}
            onClose={() => setIsModalOpen(false)}
            open={isModalOpen}
          />
          <Stack spacing={1} sx={{ mb: 3 }}>
            <Typography variant="h4">
              경비 처리 항목 및 결재 한도를 입력 해 주세요.
            </Typography>
            <Typography color="text.secondary" variant="body2">
              회사의 정책에 맞게 경비 항목 및 한도를 입력 해 주세요.
            </Typography>
          </Stack>
          <Grid container></Grid>

          <Stack spacing={3}>
            {inputData.categoryList &&
              inputData.categoryList.map((category) => (
                <>
                  <CategorySetup
                    key={`category_setup : ${category.name}`}
                    inputData={inputData}
                    setInputData={setInputData}
                    category={category}
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
                  onClick={() => setIsModalOpen(true)}
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
