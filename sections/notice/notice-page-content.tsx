/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Stack, Typography } from "@mui/material";
import { NoticeTable } from "./notice-table";
import { NoticeSearch } from "./notice-search";
import { useCallback, useEffect, useState } from "react";
import { SearchNoticeRes } from "@/types/notice/ResponseType";
import { iSearchNotice } from "@/types/notice/noticeType";
import { SearchNotice } from "@/service/notice/NoticeService";
import { SearchNoticeReq } from "@/types/notice/RequestType";

export const NoticePageContent = () => {
  const [searchParam, setSearchParam] = useState<SearchNoticeReq>(
    {} as SearchNoticeReq
  );
  const [searchNoticeRes, setSearchNoticeRes] = useState<iSearchNotice>(
    {} as iSearchNotice
  );

  const callbackSearchParam = useCallback(async () => {
    await SearchNotice(searchParam).then((res) =>
      setSearchNoticeRes({ ...res.data })
    );
  }, [searchParam]);

  useEffect(() => {
    callbackSearchParam();
  }, [searchParam]);

  return (
    <Container maxWidth="xl">
      <Stack spacing={3}>
        <Typography variant="h4">공지 사항</Typography>
        <NoticeSearch
          searchParam={searchParam}
          setSearchParam={setSearchParam}
          callbackSearchParam={callbackSearchParam}
        />
        <NoticeTable
          searchNoticeResult={searchNoticeRes}
          searchParam={searchParam}
        />
      </Stack>
    </Container>
  );
};
