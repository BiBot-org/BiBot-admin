import { Container, Stack, Typography } from "@mui/material";
import { UserSearch } from "./user-search";
import { UserTable } from "./user-table";
import { useCallback, useEffect, useState } from "react";
import { SearchBibotUserReq } from "@/types/user/RequestType";
import { SearchUserInfo } from "@/service/user/UserService";
import { SearchBibotUser } from "@/types/user/User";

export const UserPageContent = () => {
  const [searchParam, setSearchParam] = useState<SearchBibotUserReq>(
    {} as SearchBibotUserReq
  );
  const [searchUserRes, setSearchUserRes] = useState<SearchBibotUser>(
    {} as SearchBibotUser
  );

  const callbackSearchParam = useCallback(() => {
    SearchUserInfo(searchParam).then((res) => setSearchUserRes(res.data));
  }, [searchParam]);

  useEffect(() => {
    callbackSearchParam();
  }, []);

  return (
    <Container maxWidth="xl">
      <Stack spacing={3}>
        <Typography variant="h4">사원 정보 조회</Typography>
        <UserSearch searchParam={searchParam} setSearchParam={setSearchParam} />
        <UserTable
          searchUser={searchUserRes}
          searchParam={searchParam}
          setSearchParam={setSearchParam}
        />
      </Stack>
    </Container>
  );
};
