import { useTheme } from "@mui/material/styles";

export const MyLogo = () => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  return (
    <svg
      fill="none"
      height="100%"
      viewBox="0 0 24 24"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        transform="translate(0.000000,123.000000) scale(0.100000,-0.100000)"
        fill={fillColor}
        stroke="none"
      ></g>
    </svg>
  );
};
