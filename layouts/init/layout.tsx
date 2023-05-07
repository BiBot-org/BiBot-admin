import PropTypes from "prop-types";
import NextLink from "next/link";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

export const Layout = (props: any) => {
  const { children } = props;

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flex: "1 1 auto",
      }}
      // style={{
      //   zIndex: "99",
      // }}
    >
      {children}
      {/* <Grid
          xs={12}
          lg={6}
          sx={{
            alignItems: "center",
            background: "linear-gradient(to bottom right, #0DCABF, #FDD1D1 )",
            color: "white",
            display: "flex",
            justifyContent: "center",
            "& img": {
              maxWidth: "100%",
            },
          }}
        >
          <Box sx={{ p: 3 }}>
            <img alt="" src="/assets/logo_bibot.svg" />
          </Box>
        </Grid> */}
    </Box>
  );
};

Layout.prototypes = {
  children: PropTypes.node,
};
