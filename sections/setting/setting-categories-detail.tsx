/* eslint-disable react/jsx-max-props-per-line */

import { CategoryDTO } from "@/types/category/ResponseTypes";
import { NextChangeableDate, formatLocalDate } from "@/utils/dateUtils";
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
} from "@mui/material";
import { useState } from "react";

interface Prop {
  selectedCategory: CategoryDTO;
}

export const SettingCategoriesDetails = ({ selectedCategory }: Prop) => {
  const [renewalCycle, setRenewalCycle] = useState();
  NextChangeableDate(selectedCategory.resetCycle, selectedCategory.endDate);

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
            <Grid xs={12} md={7}>
              <Select
                fullWidth
                value={
                  selectedCategory.resetCycle ? selectedCategory.resetCycle : ""
                }
              >
                <MenuItem value="DAILY">매일 1회</MenuItem>
                <MenuItem value="WEEKLY">매주 1회</MenuItem>
                <MenuItem value="MONTHLY">매월 1회</MenuItem>
              </Select>
            </Grid>
            <Grid xs={12} md={7} mt={1}>
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
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button variant="contained">수정</Button>
      </CardActions>
    </Card>
  );
};
