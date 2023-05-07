import { useCallback } from "react";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import {
  Box,
  Divider,
  MenuItem,
  MenuList,
  Popover,
  Typography,
} from "@mui/material";

export const AccountPopover = (props: any) => {
  const { anchorEl, onClose, open } = props;
  const router = useRouter();

  const handleSignOut = useCallback(() => {
    onClose?.();
    router.push("/auth/login");
  }, [onClose, router]);

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "left",
        vertical: "bottom",
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 200 } }}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="overline">swj9707</Typography>
        <Typography color="text.secondary" variant="body2">
          스파로스개발팀 / 매니저
        </Typography>
      </Box>
      <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="overline">마이페이지</Typography>
      </Box>
      <Divider />
      <MenuList
        disablePadding
        dense
        sx={{
          p: "8px",
          "& > *": {
            borderRadius: 1,
          },
        }}
      >
        <MenuItem onClick={handleSignOut}>로그아웃</MenuItem>
      </MenuList>
    </Popover>
  );
};

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
};
