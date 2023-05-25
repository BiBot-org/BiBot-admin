/* eslint-disable react/jsx-max-props-per-line */
import { ReactElement, SetStateAction, useCallback, useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import {
  Alert,
  Box,
  Button,
  FormHelperText,
  Grid,
  Link,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { Layout as InitLayout } from "@/layouts/init/layout";
import { InitSetup1 } from "@/sections/initSetup/initSetup1";
import { InitSetupReq } from "@/types/user/User";
import { InitSetup2 } from "@/sections/initSetup/initSetup2";
import { InitSetup3 } from "@/sections/initSetup/initSetup3";
import { InitSetup0 } from "@/sections/initSetup/initSetup0";
import { InitSetup4 } from "@/sections/initSetup/initSetup4";

const Page = () => {
  const router = useRouter();
  const [stepId, setStepId] = useState<number>(0);
  const [inputData, setInputData] = useState<InitSetupReq>({
    rootEmail: "",
    rootPassword: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: false,
    departmentList: [],
    categoryList: [],
    rootTeamName: "",
  });

  const handleStepNext = () => {
    if (stepId === 1) {
      if (inputData.confirm) {
        setStepId(stepId + 1);
      }
    } else {
      setStepId(stepId + 1);
    }
  };

  const handleStepPrev = () => {
    if (stepId > 1) {
      setStepId(stepId - 1);
    }
  };

  const steps: any = [
    {
      0: (
        <InitSetup0
          inputData={inputData}
          setInputData={setInputData}
          setStepId={setStepId}
        />
      ),
    },
    {
      1: (
        <InitSetup1
          inputData={inputData}
          setInputData={setInputData}
          handleStepNext={handleStepNext}
          handleStepPrev={handleStepPrev}
        />
      ),
    },
    {
      2: (
        <InitSetup2
          inputData={inputData}
          setInputData={setInputData}
          handleStepNext={handleStepNext}
          handleStepPrev={handleStepPrev}
        />
      ),
    },
    {
      3: (
        <InitSetup3
          inputData={inputData}
          setInputData={setInputData}
          handleStepNext={handleStepNext}
          handleStepPrev={handleStepPrev}
        />
      ),
    },
    {
      4: (
        <InitSetup4
          inputData={inputData}
          setInputData={setInputData}
          handleStepNext={handleStepNext}
          handleStepPrev={handleStepPrev}
        />
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>BiBot | 초기셋업</title>
      </Head>
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
          {steps[stepId][stepId]}
        </Box>
      </Box>
    </>
  );
};

Page.getLayout = (page: ReactElement) => <InitLayout>{page}</InitLayout>;

export default Page;
