import { createTheme } from "@/theme";
import { styled } from "@mui/material";
import PropTypes from "prop-types";

const theme = createTheme();

const SeverityPillRoot = styled("span")(
  ({ colorProps }: { colorProps: string }) => {
    let colorPalette: any;
    if (colorProps === "warning") {
      colorPalette = theme.palette.warning;
    } else if (colorProps === "success") {
      colorPalette = theme.palette.success;
    } else if (colorProps === "error") {
      colorPalette = theme.palette.error;
    }

    return {
      alignItems: "center",
      backgroundColor: colorPalette?.alpha12,
      borderRadius: 12,
      color: colorPalette?.dark,
      cursor: "default",
      display: "inline-flex",
      flexGrow: 0,
      flexShrink: 0,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(12),
      lineHeight: 2,
      fontWeight: 600,
      justifyContent: "center",
      letterSpacing: 0.5,
      minWidth: 20,
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      textTransform: "uppercase",
      whiteSpace: "nowrap",
    };
  }
);

export const SeverityPill = ({
  ownerState,
  children,
}: {
  ownerState: string;
  children: string;
}) => {
  return (
    <SeverityPillRoot colorProps={ownerState}>{children}</SeverityPillRoot>
  );
};
