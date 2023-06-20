"use client";
import { InitSetupReq, iCategoryInit } from "@/types/user/User";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Container, Stack } from "@mui/system";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Swal from "sweetalert2";

interface iProp {
  onClose: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  inputData: InitSetupReq;
  setInputData: React.Dispatch<SetStateAction<InitSetupReq>>;
  categoryData?: iCategoryInit;
}

export const CategorySetupModal = (props: iProp) => {
  const { onClose, open, inputData, setInputData, categoryData } = props;
  const [categoryName, setCategoryName] = useState<string>("");
  const [categoryLimit, setCategoryLimit] = useState<number>(0);
  const [automatedCost, setAutomatedCost] = useState<number>(0);
  const [resetCycle, setResetCycle] = useState<string>("갱신주기");
  const onChangeTextField = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "categoryName") {
      setCategoryName(value);
    } else if (name === "categoryLimit") {
      setCategoryLimit(parseInt(value));
    } else if (name === "automatedCost") {
      setAutomatedCost(parseInt(value));
    }
  };

  const onChangeSelectBox = (e: SelectChangeEvent) => {
    setResetCycle(e.target.value);
  };

  useEffect(() => {
    if (categoryData) {
      setCategoryName(categoryData.name);
      setCategoryLimit(categoryData.limitation);
      setAutomatedCost(categoryData.automatedCost);
      setResetCycle(categoryData.resetCycle);
    } else {
      setCategoryName("");
      setCategoryLimit(0);
      setAutomatedCost(0);
      setResetCycle("갱신주기");
    }
  }, [categoryData, open]);

  const onClickSave = () => {
    if (
      categoryName === "" ||
      categoryLimit === 0 ||
      automatedCost === 0 ||
      resetCycle === "갱신주기"
    ) {
      Swal.fire({
        title: "Error",
        text: "값을 입력하세요",
        icon: "error",
      });
    } else {
      const categoryInfo: iCategoryInit = {
        name: categoryName,
        limitation: categoryLimit,
        automatedCost: automatedCost,
        resetCycle: resetCycle,
      };

      const idx = inputData.categoryList.findIndex(
        (e) => e.name === categoryName
      );

      if (categoryData === undefined && idx !== -1) {
        Swal.fire({
          title: "Error",
          text: "중복된 이름의 결재 항목이 존재합니다.",
          icon: "error",
        });
      } else {
        if (idx === -1) {
          setInputData({
            ...inputData,
            categoryList: [...inputData.categoryList, categoryInfo],
          });
        } else {
          let copiedItems = [...inputData.categoryList];
          copiedItems[idx] = categoryInfo;
          setInputData({
            ...inputData,
            categoryList: [...copiedItems],
          });
        }
        onClose(false);
      }
    }
  };

  return (
    <Dialog onClose={onClose} open={open} maxWidth="lg">
      <DialogTitle>경비 정보 생성</DialogTitle>
      <DialogContent>
        <Stack spacing={3}>
          <TextField
            fullWidth
            name="categoryName"
            label="경비 명"
            type="text"
            value={categoryName}
            onChange={onChangeTextField}
          />
          <TextField
            fullWidth
            name="categoryLimit"
            label="경비 한도"
            type="number"
            value={categoryLimit}
            onChange={onChangeTextField}
          />
          <TextField
            fullWidth
            name="automatedCost"
            label="자동 결재 범위"
            type="number"
            value={automatedCost}
            onChange={onChangeTextField}
          />
          <Select fullWidth value={resetCycle} onChange={onChangeSelectBox}>
            <MenuItem value="갱신주기">갱신주기</MenuItem>
            <MenuItem value="DAILY">매일</MenuItem>
            <MenuItem value="WEEKLY">매주</MenuItem>
            <MenuItem value="MONTHLY">매달</MenuItem>
          </Select>
          <Container sx={{ justifyContent: "flex-end" }}>
            <Button sx={{ mt: 3 }} variant="contained" onClick={onClickSave}>
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
