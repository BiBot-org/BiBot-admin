import { useCallback } from "react";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Divider,
  MenuItem,
  MenuList,
  Popover,
  Typography,
} from "@mui/material";
import { bibotPrimary } from "@/theme/colors";

export const NotificationPopover = (props: any) => {
  const { anchorEl, onClose, open } = props;
  const router = useRouter();

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "left",
        vertical: "bottom",
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 345 } }}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Card>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: bibotPrimary.main }}>A</Avatar>}
            title="알림"
            subheader="2023-05-07"
          />
        </Card>
        <Card>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: bibotPrimary.main }}>A</Avatar>}
            title="알림"
            subheader="2023-05-07"
          />
        </Card>
        <Card>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: bibotPrimary.main }}>A</Avatar>}
            title="알림"
            subheader="2023-05-07"
          />
        </Card>
      </Box>
    </Popover>
  );
};

NotificationPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
};
