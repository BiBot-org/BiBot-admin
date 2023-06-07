"use client";
import { InitSetup1 } from "@/sections/initSetup/initSetup1";
import { InitSetupReq } from "@/types/user/User";
import { InitSetup2 } from "@/sections/initSetup/initSetup2";
import { InitSetup3 } from "@/sections/initSetup/initSetup3";
import { InitSetup0 } from "@/sections/initSetup/initSetup0";
import { InitSetup4 } from "@/sections/initSetup/initSetup4";
import { useState } from "react";

export const InitSetupContent = () => {
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

  return <>{steps[stepId][stepId]}</>;
};
