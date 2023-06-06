"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import { ApprovalSearch } from "./approval-search";
import { ApprovalTable } from "./approval-table";

export const ApprovalPageContent = () => {
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
          <ApprovalSearch />
          <ApprovalTable />
        </Stack>
      </Container>
    </Box>
  );
};
