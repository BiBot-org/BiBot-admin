import { DepartmentInfo } from "@/types/department/types";
import { SearchBibotUserReq } from "@/types/user/RequestType";
import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

interface Props {
  searchParam: SearchBibotUserReq;
  departmentInfoList: DepartmentInfo[];
  setSearchParam: Dispatch<SetStateAction<SearchBibotUserReq>>;
}

export const UserSearch = ({
  searchParam,
  departmentInfoList,
  setSearchParam,
}: Props) => {
  const handleChangeMenuItenm = (e: SelectChangeEvent) => {
    const nextValue = Number(e.target.value);
    if (e.target.name === "department") {
      setSearchParam({
        ...searchParam,
        department: nextValue,
        team: 0,
      });
    } else if (e.target.name === "team") {
      setSearchParam({
        ...searchParam,
        team: nextValue,
      });
    }
  };

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "name") {
      setSearchParam({ ...searchParam, name: value });
    }
  };

  return (
    <Card>
      <CardContent>
        <Grid container rowSpacing={1} sx={{ justifyContent: "center" }}>
          <Grid xs={2}>
            <Select
              fullWidth
              name="department"
              value={`${searchParam.department}` || 0}
              onChange={handleChangeMenuItenm}
            >
              <MenuItem value={0}>부서를 선택 해 주세요</MenuItem>
              {departmentInfoList &&
                departmentInfoList.map((departmentInfo) => [
                  <MenuItem
                    key={`menuItem : ${departmentInfo.department.id}`}
                    value={`${departmentInfo.department.id}`}
                  >
                    {departmentInfo.department.name}
                  </MenuItem>,
                ])}
            </Select>
          </Grid>
          <Grid xs={2}>
            <Select
              fullWidth
              name="team"
              value={`${searchParam.team}`}
              onChange={handleChangeMenuItenm}
            >
              <MenuItem value={0}>팀을 선택 해 주세요</MenuItem>
              {departmentInfoList &&
                departmentInfoList.map(
                  (departmentInfo) =>
                    departmentInfo.department.id === searchParam.department &&
                    departmentInfo.teams.map((team) => [
                      <MenuItem
                        key={`menuItem : ${team.id}`}
                        value={`${team.id}`}
                      >
                        {team.name}
                      </MenuItem>,
                    ])
                )}
            </Select>
          </Grid>
          <Grid xs={2}>
            <TextField
              fullWidth
              name="name"
              onChange={handleChangeName}
              label="사원 명"
            />
          </Grid>
          <Grid xs={2}>
            <Select fullWidth name="sort" value="xx">
              <MenuItem value="xx">정렬조건</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
