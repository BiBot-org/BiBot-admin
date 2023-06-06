import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import {
  Card,
  CardContent,
  Grid,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  SvgIcon,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

export const ApprovalSearch = () => (
  <Card sx={{ p: 2 }}>
    <CardContent>
      <Grid container rowSpacing={1} sx={{ justifyContent: "center" }}>
        <Grid xs={4}>
          <DatePicker />
        </Grid>
        <Grid xs={4}>
          <DatePicker />
        </Grid>
        <Grid xs={4}>
          <Select fullWidth value={0}>
            <MenuItem value={0}>승인여부</MenuItem>
            <MenuItem value={1}>승인</MenuItem>
            <MenuItem value={2}>반려</MenuItem>
            <MenuItem value={3}>대기</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
