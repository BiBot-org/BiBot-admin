"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import { UserSearch } from "./user-search";
import { UserTable } from "./user-table";
import { useCallback, useEffect, useState } from "react";
import { SearchBibotUserReq } from "@/types/user/RequestType";
import { SearchUserInfo } from "@/service/user/UserService";
import { SearchBibotUser } from "@/types/user/User";
import { DepartmentInfo } from "@/types/department/types";
import { GetAllDepartmentsInfo } from "@/service/department/DepartmentService";
import { useMutation, useQuery } from "@tanstack/react-query";

export const UserPageContent = () => {
  const [departmentInfoList, setDepartmentInfoList] = useState<
    DepartmentInfo[]
  >([]);

  const [searchParam, setSearchParam] = useState<SearchBibotUserReq>({
    department: 0,
    team: 0,
    name: "",
  } as SearchBibotUserReq);
  const [searchUserRes, setSearchUserRes] = useState<SearchBibotUser>(
    {} as SearchBibotUser
  );

  const callbackSearchParam = useCallback(() => {
    SearchUserInfo(searchParam).then((res) => setSearchUserRes(res.data));
  }, [searchParam]);

  // const { mutate, isLoading, isError, error, isSuccess } = useMutation(() =>
  //   SearchUserInfo(searchParam)
  // );

  const { data } = useQuery(
    ["allDepartmentInfo"],
    () => GetAllDepartmentsInfo(),
    {
      refetchOnWindowFocus: false,
      retry: 0,
      onSuccess: (data) => {
        setDepartmentInfoList(data.data);
      },
    }
  );

  useEffect(() => {
    callbackSearchParam();
  }, [searchParam]);

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Typography variant="h4">사원 정보 조회</Typography>
          <UserSearch
            searchParam={searchParam}
            departmentInfoList={departmentInfoList}
            setSearchParam={setSearchParam}
          />
          <UserTable
            searchUser={searchUserRes}
            searchParam={searchParam}
            departmentInfoList={departmentInfoList}
            setSearchParam={setSearchParam}
          />
        </Stack>
      </Container>
    </Box>
  );
};
