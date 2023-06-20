import { SearchNoticeReq } from "@/types/notice/RequestType";
import {
  Card,
  CardContent,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface Prop {
  searchParam: SearchNoticeReq;
  setSearchParam: Dispatch<SetStateAction<SearchNoticeReq>>;
}

export const NoticeSearch = ({ searchParam, setSearchParam }: Prop) => {
  const [selectedType, setSelectedType] = useState<number>(0);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "title") {
      setSearchParam({
        ...searchParam,
        title: value,
      });
    }
  };

  const handleChangeMenuItem = (e: SelectChangeEvent) => {
    const nextValue = e.target.value;
    if (nextValue === "default") {
      setSearchParam({
        ...searchParam,
        type: "",
      });
    } else {
      setSearchParam({
        ...searchParam,
        type: nextValue,
      });
    }
  };

  return (
    <Card>
      <CardContent>
        <Grid container rowSpacing={1} sx={{ justifyContent: "center" }}>
          <Grid xs={2}>
            <Select
              fullWidth
              name="type"
              value={searchParam.type || ""}
              onChange={handleChangeMenuItem}
            >
              <MenuItem value={""} defaultChecked>
                종류
              </MenuItem>
              <MenuItem value={"COMMON"}>일반</MenuItem>
              <MenuItem value={"SYSTEM"}>시스템</MenuItem>
            </Select>
          </Grid>
          <Grid xs={2}>
            <TextField
              fullWidth
              name="title"
              label="제목"
              value={searchParam.title}
              onChange={handleOnChange}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
