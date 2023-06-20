"use client";
import { InitSetupReq, iDepartmentInit } from "@/types/user/User";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { SetStateAction, useState } from "react";
import { DepartmentModal } from "./department-modal";

interface iProp {
  inputData: InitSetupReq;
  setInputData: React.Dispatch<SetStateAction<InitSetupReq>>;
  dept: iDepartmentInit;
}

export const DepartmentSetup = ({ inputData, setInputData, dept }: iProp) => {
  const [isModifyOpen, setIsModifyOpen] = useState<boolean>(false);
  const onClickDelete = (deptName: string) => {
    setInputData({
      ...inputData,
      departmentList: [
        ...inputData.departmentList.filter((e) => e.name !== deptName),
      ],
    });
  };
  return (
    <>
      <DepartmentModal
        onClose={() => setIsModifyOpen(false)}
        open={isModifyOpen}
        inputData={inputData}
        setInputData={setInputData}
        departmentData={dept}
      />
      <Accordion id={dept.name + " : acc"}>
        <AccordionSummary>
          <Typography>{dept.name}</Typography>
        </AccordionSummary>
        <AccordionActions sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained" onClick={() => setIsModifyOpen(true)}>
            수정
          </Button>
          <Button variant="contained" onClick={() => onClickDelete(dept.name)}>
            삭제
          </Button>
        </AccordionActions>
        <AccordionDetails>
          {dept.teams &&
            dept.teams.map((team) => (
              <>
                <Card id={"card : " + team}>
                  <CardContent>
                    <Typography>{team}</Typography>
                  </CardContent>
                </Card>
              </>
            ))}
        </AccordionDetails>
      </Accordion>
    </>
  );
};
