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
} from "@mui/material";
import { useState } from "react";

export const SettingCategoriesDetails = () => {
  const [renewalCycle, setRenewalCycle] = useState();

  return (
    <Card>
      <CardHeader
        subheader="한도 변경 사항은 기존 갱신일자 이후 부터 적용됩니다. "
        title="한도를 재설정 해 주세요"
      />
      <CardContent sx={{ pt: 0 }}>
        <Box>
          <Grid container spacing={3}>
            <Grid xs={12} md={7}>
              <InputLabel>갱신 주기</InputLabel>
              <Select fullWidth value="갱신 주기">
                <MenuItem>갱신 주기</MenuItem>
                <MenuItem>갱신 주기</MenuItem>
                <MenuItem>갱신 주기</MenuItem>
              </Select>
            </Grid>
            <Grid xs={12} md={7}>
              <InputLabel>한도 금액</InputLabel>
              <TextField fullWidth label="한도 금액을 입력하세요." />
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
