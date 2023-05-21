import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  InputAdornment,
  OutlinedInput,
  Select,
  SvgIcon,
  TextField,
} from "@mui/material";

export const UserSearch = () => (
  <Card>
    <CardContent>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={3}>
          <Select fullWidth label="부서"></Select>
        </Grid>
        <Grid xs={3}>
          <Select fullWidth label="팀"></Select>
        </Grid>
        <Grid xs={3}>
          <TextField fullWidth label="사원 명" />
        </Grid>
        <Grid xs={3}>
          <Select fullWidth label="정렬 조건"></Select>
        </Grid>
      </Grid>
    </CardContent>
    <CardActions sx={{ justifyContent: "flex-end" }}>
      <Button variant="contained">검색</Button>
    </CardActions>
  </Card>
);
