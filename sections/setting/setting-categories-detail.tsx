/* eslint-disable react/jsx-max-props-per-line */

import { UpdateCategory } from "@/service/category/CategoryService";
import { CategoryDTO } from "@/types/category/types";
import { NextChangeableDate, formatLocalDate } from "@/utils/dateUtils";
import { getStringByResetCycleEnum } from "@/utils/string-utils";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid,
  Select,
  MenuItem,
  InputLabel,
  Typography,
  SelectChangeEvent,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { ChangeEvent, SetStateAction, useState } from "react";
import Swal from "sweetalert2";

interface Prop {
  selectedCategory: CategoryDTO;
}

export const SettingCategoriesDetails = ({ selectedCategory }: Prop) => {
  const [renewalCycle, setRenewalCycle] = useState<string>("DAILY");
  const [limitation, setLimitation] = useState<number>(0);
  const [automated, setAutomated] = useState<number>(0);
  NextChangeableDate(selectedCategory.resetCycle, selectedCategory.endDate);
  const onSubmitChange = () => {
    if (limitation < automated) {
      Swal.fire({
        title: "error",
        text: "자동 결재 한도 금액은 총 한도금액보다 초과할 수 없습니다.",
        icon: "error",
      });
    } else {
      Swal.fire({
        title: "변경 확인",
        text: "변경 하시겠습니까?",
        icon: "question",
        showCancelButton: true,
      }).then((res) => {
        if (res.isConfirmed) {
          UpdateCategory({
            id: selectedCategory.id,
            categoryName: selectedCategory.categoryName,
            nextLimitation: limitation.toString(),
            nextAutomatedCost: automated.toString(),
            nextCycle: renewalCycle,
          })
            .then(() => {
              Swal.fire({
                title: "Success!",
                text: "변경 되었습니다.",
                icon: "success",
              });
            })
            .catch(() => {
              Swal.fire({
                title: "Error!",
                text: "에러가 발생했습니다.",
                icon: "error",
              });
            });
        }
      });
    }
  };

  const onChangeSelectBox = (e: SelectChangeEvent) => {
    setRenewalCycle(e.target.value);
  };

  const onChangeAmountOfCost = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name == "limitation") {
      setLimitation(Number(value));
    } else if (name === "automated") {
      setAutomated(Number(value));
    }
  };

  return (
    <Card>
      <CardHeader
        subheader={`한도 변경 사항은 기존 갱신일자 이후 부터 적용됩니다.`}
        title={`${selectedCategory.categoryName} 한도를 재설정 해 주세요`}
      />
      <Divider />
      <CardContent sx={{ pt: 0, mt: 3 }}>
        <Box>
          {selectedCategory.nextCycle !== "" && (
            <Typography sx={{ mb: 3 }}>
              {new Date(
                NextChangeableDate(
                  selectedCategory.resetCycle,
                  selectedCategory.endDate
                )
              ).toLocaleString()}{" "}
              부터 반영됩니다.
            </Typography>
          )}

          <Grid container spacing={3}>
            <Grid xs={6}>
              <Stack>
                <Typography>변경 전</Typography>
                <TextField
                  fullWidth
                  aria-readonly
                  value={getStringByResetCycleEnum(selectedCategory.resetCycle)}
                />

                <InputLabel>한도 금액</InputLabel>
                <TextField
                  fullWidth
                  placeholder="한도 금액을 입력하세요."
                  value={selectedCategory.limitation}
                />
                <InputLabel>자동 결재 한도 금액</InputLabel>
                <TextField
                  fullWidth
                  placeholder="자동 결재 한도 금액을 입력하세요."
                  value={selectedCategory.automatedCost}
                />
              </Stack>
            </Grid>
            <Grid xs={6}>
              <Stack>
                <Typography>변경 후</Typography>
                <Select
                  fullWidth
                  value={renewalCycle}
                  onChange={onChangeSelectBox}
                >
                  <MenuItem value="DAILY">매일 1회</MenuItem>
                  <MenuItem value="WEEKLY">매주 1회</MenuItem>
                  <MenuItem value="MONTHLY">매월 1회</MenuItem>
                </Select>
                <InputLabel>한도 금액</InputLabel>
                <TextField
                  fullWidth
                  type="number"
                  name="limitation"
                  placeholder="한도 금액을 입력하세요."
                  onChange={onChangeAmountOfCost}
                  value={limitation}
                />
                <InputLabel>자동 결재 한도 금액</InputLabel>
                <TextField
                  fullWidth
                  type="number"
                  name="automated"
                  placeholder="자동 결재 한도 금액을 입력하세요."
                  onChange={onChangeAmountOfCost}
                  value={automated}
                />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button onClick={onSubmitChange} variant="contained">
          수정
        </Button>
      </CardActions>
    </Card>
  );
};
