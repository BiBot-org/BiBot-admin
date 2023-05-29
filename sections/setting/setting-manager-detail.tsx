import { AdminInfo } from "@/types/user/User";
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

interface Props {
  adminInfo: AdminInfo;
}

export const SetupManagerDetails = ({ adminInfo }: Props) => {
  const [authorityList, setAuthorityList] = useState<string[]>([]);

  return (
    <Card>
      <CardHeader
        subheader="관리자 권한 및 관리자 계정 삭제를 할 수 있습니다."
        title="관리자 설정"
      />
      <CardContent sx={{ pt: 0 }}>
        <Box>
          <Grid container spacing={3}>
            <Grid xs={12} md={7}>
              <InputLabel>권한 목록</InputLabel>
              <Select fullWidth multiple value={authorityList}>
                <MenuItem>사원 정보 페이지</MenuItem>
                <MenuItem>관리자 정보 페이지</MenuItem>
                <MenuItem>경비 내역 페이지</MenuItem>
                <MenuItem>환경 설정</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button variant="contained">수정</Button>
        <Button variant="contained">관리자 삭제</Button>
      </CardActions>
    </Card>
  );
};
