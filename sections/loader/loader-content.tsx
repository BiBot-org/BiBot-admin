"use client";
import { Box, Container, keyframes } from "@mui/material";
import Image from "next/image";

const AnimationName = keyframes`
   0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
`;

export const LoaderContent = () => {
  return (
    <Box
      component="main"
      sx={{
        alignItems: "center",
        display: "flex",
        flexGrow: 1,
        minHeight: "100%",
        background:
          "linear-gradient(-45deg, #fdd1d1, #e73c7e50, #0dcabf, #0dcabf)",
        backgroundSize: "300% 300%",
        animation: `${AnimationName} 6s ease infinite`,
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
