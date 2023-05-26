import { SearchBibotUserReq } from "@/types/user/RequestType";
import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  SvgIcon,
  TextField,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface Props {
  searchParam: SearchBibotUserReq;
  setSearchParam: Dispatch<SetStateAction<SearchBibotUserReq>>;
}

export const UserSearch = ({ searchParam, setSearchParam }: Props) => {
  return (
    <Card>
      <CardContent>
        <Grid container rowSpacing={1} sx={{ justifyContent: "center" }}>
          <Grid xs={2}>
            <Select fullWidth name="department" value="x">
              <MenuItem value="x" defaultChecked>
                부서
              </MenuItem>
            </Select>
          </Grid>
          <Grid xs={2}>
            <Select fullWidth name="team" value="xx">
              <MenuItem value="xx">팀</MenuItem>
            </Select>
          </Grid>
          <Grid xs={2}>
            <TextField fullWidth name="name" label="사원 명" />
          </Grid>
          <Grid xs={2}>
            <Select fullWidth name="sort" value="xx">
              <MenuItem value="xx">정렬조건</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button variant="contained">검색</Button>
      </CardActions>
    </Card>
  );
};
