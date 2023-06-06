"use client";
import { Box, Container } from "@mui/material";
import Image from "next/image";

export const LoaderContent = () => {
  return (
    <Box
      component="main"
      sx={{
        alignItems: "center",
        display: "flex",
        flexGrow: 1,
        minHeight: "100%",
        background: "linear-gradient(to bottom right, #0DCABF, #FDD1D1 )",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              mb: 3,
              textAlign: "center",
            }}
          >
            <Image
              alt="logo"
              src="/assets/logo_bibot.svg"
              width={400}
              height={400}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
