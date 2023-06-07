"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import { ApprovalSearch } from "./approval-search";
import { ApprovalTable } from "./approval-table";
import { useSearchApprovalInfoQuery } from "@/service/expense/ExpenseService";
import { useState } from "react";
import { SearchApprovalReq } from "@/types/approval/RequestType";
import dayjs from "dayjs";
import { calculateThreeMonthAgo } from "@/utils/dateUtils";

export const ApprovalPageContent = () => {
  const [searchParam, setSearchParam] = useState<SearchApprovalReq>({
    startDate: dayjs(calculateThreeMonthAgo(Date.now())).format("YYYY-MM-DD"),
    endDate: dayjs(Date.now()).format("YYYY-MM-DD"),
    categoryId: 0,
    status: "",
    page: 0,
  } as SearchApprovalReq);

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
          <Typography variant="h4">결재 내역 조회</Typography>
          <ApprovalSearch
            searchParam={searchParam}
            setSearchParam={setSearchParam}
          />
          <ApprovalTable
            searchParam={searchParam}
            setSearchParam={setSearchParam}
          />
        </Stack>
      </Container>
    </Box>
  );
};
