import { InitSetupReq, iCategoryInit } from "@/types/user/User";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { SetStateAction, useState } from "react";
import { CategorySetupModal } from "./category-modal";

interface iProp {
  inputData: InitSetupReq;
  setInputData: React.Dispatch<SetStateAction<InitSetupReq>>;
  category: iCategoryInit;
}

export const CategorySetup = ({ inputData, setInputData, category }: iProp) => {
  const [isModifyOpen, setIsModifyOpen] = useState<boolean>(false);
  const onClickDelete = (categoryName: string) => {
    setInputData({
      ...inputData,
      categoryList: [
        ...inputData.categoryList.filter((e) => e.name !== categoryName),
      ],
    });
  };
  return (
    <>
      <CategorySetupModal
        open={isModifyOpen}
        onClose={() => setIsModifyOpen(false)}
        inputData={inputData}
        setInputData={setInputData}
        categoryData={category}
      />
      <Accordion>
        <AccordionSummary>
          <Typography>{category.name}</Typography>
        </AccordionSummary>
        <AccordionActions sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained" onClick={() => setIsModifyOpen(true)}>
            수정
          </Button>
          <Button
            variant="contained"
            onClick={() => onClickDelete(category.name)}
          >
            삭제
          </Button>
        </AccordionActions>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Card>
                <CardHeader title="한도" />
                <CardContent>
                  <Typography>{category.limitation} 원</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={6}>
              <Card>
                <CardHeader title="자동 결재범위" />
                <CardContent>
                  <Typography>{category.automatedCost} 원</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
