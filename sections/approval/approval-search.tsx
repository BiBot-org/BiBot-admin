import { useGetAllCategoryList } from "@/service/category/CategoryService";
import { SearchApprovalReq } from "@/types/approval/RequestType";
import { calculateThreeMonthAgo } from "@/utils/dateUtils";
import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import {
  Card,
  CardContent,
  Grid,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  SvgIcon,
} from "@mui/material";
import {
  DatePicker,
  DateValidationError,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { PickerChangeHandlerContext } from "@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.types";
import dayjs, { Dayjs } from "dayjs";
import { SetStateAction, useState } from "react";

interface Props {
  searchParam: SearchApprovalReq;
  setSearchParam: React.Dispatch<SetStateAction<SearchApprovalReq>>;
}

export const ApprovalSearch = ({ searchParam, setSearchParam }: Props) => {
  const [startDate, setStartDate] = useState<Dayjs>(
    dayjs(Date.parse(searchParam.startDate))
  );

  const [endDate, setEndDate] = useState<Dayjs>(
    dayjs(Date.parse(searchParam.endDate))
  );

  const { isLoading, data } = useGetAllCategoryList();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Card sx={{ p: 2 }}>
        <CardContent>
          <Grid container rowSpacing={1} sx={{ justifyContent: "center" }}>
            <Grid xs={3} item={true}>
              <DatePicker
                value={startDate}
                onChange={(newValue) => {
                  if (newValue !== null) {
                    setStartDate(newValue);
                    setSearchParam({
                      ...searchParam,
                      startDate: dayjs(newValue).format("YYYY-MM-DD"),
                    });
                  }
                }}
              />
            </Grid>
            <Grid xs={3} item={true}>
              <DatePicker
                value={endDate}
                onChange={(newValue) => {
                  if (newValue !== null) {
                    setEndDate(newValue);
                    setSearchParam({
                      ...searchParam,
                      endDate: dayjs(newValue).format("YYYY-MM-DD"),
                    });
                  }
                }}
              />
            </Grid>
            <Grid xs={3} item={true}>
              <Select
                fullWidth
                value={searchParam.categoryId}
                onChange={(e) =>
                  setSearchParam({
                    ...searchParam,
                    categoryId: Number(e.target.value),
                  })
                }
              >
                <MenuItem value={0}>카테고리를 선택 해 주세요</MenuItem>
                {!isLoading &&
                  data?.data.map((element) => (
                    <MenuItem key={element.id} value={element.id}>
                      {element.categoryName}
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
            <Grid xs={2} item={true}>
              <Select
                fullWidth
                value={searchParam.status}
                onChange={(e) => {
                  setSearchParam({
                    ...searchParam,
                    status: e.target.value,
                  });
                }}
              >
                <MenuItem value={""}>승인여부</MenuItem>
                <MenuItem value={"APPROVED"}>승인</MenuItem>
                <MenuItem value={"REJECTED"}>반려</MenuItem>
                <MenuItem value={"PENDING"}>대기</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </LocalizationProvider>
  );
};
