"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import UnProcessedHistoryTable from "./unprocessed-history-table";

export default function UnProcessedHistoryContent() {
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
          <Typography variant="h4">미처리 내역 조회</Typography>
          <UnProcessedHistoryTable />
        </Stack>
      </Container>
    </Box>
  );
}
