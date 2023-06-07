import PropTypes from "prop-types";
import { Box } from "@mui/system";

export const Layout = (props: any) => {
  const { children } = props;

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flex: "1 1 auto",
      }}
    >
      {children}
    </Box>
  );
};

Layout.prototypes = {
  children: PropTypes.node,
};
