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
  const [title, setTitle] = useState<string>("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "title") {
      setSearchParam({
        ...searchParam,
        title: value,
      });
    }
  };

  return (
    <Card>
      <CardContent>
        <Grid container rowSpacing={1} sx={{ justifyContent: "center" }}>
          <Grid xs={2}>
            <Select fullWidth name="type" value={selectedType}>
              <MenuItem value={0}>종류</MenuItem>
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
