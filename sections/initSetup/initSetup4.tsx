"use client";
import { InitalizeService } from "@/service/auth/RootService";
import { InitSetupReq } from "@/types/user/User";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { ChangeEvent, SetStateAction, useState } from "react";

interface iProps {
  inputData: InitSetupReq;
  setInputData: React.Dispatch<SetStateAction<InitSetupReq>>;
  handleStepNext: () => void;
  handleStepPrev: () => void;
}

export const InitSetup4 = ({
  inputData,
  setInputData,
  handleStepPrev,
}: iProps) => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
    setInputData({
      ...inputData,
      rootTeamName: e.target.value,
    });
  };
  const router = useRouter();

  const handleSubmitInitData = () => {
    InitalizeService(inputData).then((res) => {
      if (res === true) {
        alert("환영합니다.");
        router.push("/login");
      } else {
        alert("소프트웨어 셋업에 문제가 생겼습니다. ");
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
            <Typography variant="h5">
              관리자의 부서 및 팀 정보를 입력 해 주세요.
            </Typography>
            <Typography color="text.secondary" variant="body2">
              관리자가 소속 된 부서 및 팀 정보를 입력 해 주세요.
            </Typography>
            <Stack spacing={3}>
              {inputData.departmentList &&
                inputData.departmentList.map((dept) => (
                  <>
                    <Accordion id={dept.name + " : acc2"}>
                      <AccordionSummary>
                        <Typography>{dept.name}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {dept.teams &&
                          dept.teams.map((team) => (
                            <>
                              <Card id={"card : " + team}>
                                <CardContent>
                                  <Radio
                                    checked={selectedValue === team}
                                    onChange={handleChange}
                                    name="radio-buttons"
                                    value={team}
                                  />
                                  <Typography>{team}</Typography>
                                </CardContent>
                              </Card>
                            </>
                          ))}
                      </AccordionDetails>
                    </Accordion>
                  </>
                ))}
            </Stack>
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
                onClick={handleSubmitInitData}
              >
                등록
              </Button>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Box>
  );
};
