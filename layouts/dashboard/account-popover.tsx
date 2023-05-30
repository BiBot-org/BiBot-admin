import { useCallback, useEffect, useState } from "react";
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
import { signOut, useSession } from "next-auth/react";
import { HandleLogoutSuccess } from "@/service/auth/Handler";
import { GetUserInfo } from "@/service/user/UserService";
import { BibotUserDTO, BibotUserInfo } from "@/types/user/User";
import { useRecoilState } from "recoil";
import { userInfoState } from "@/state/user/atom/userInfoState";

export const AccountPopover = (props: any) => {
  const { anchorEl, onClose, open } = props;
  const [userInfo, setUserInfo] = useRecoilState<BibotUserInfo>(userInfoState);
  const router = useRouter();
  const session = useSession();
  useEffect(() => {
    if (session && session.data?.tokenInfo) {
      const userId = session.data.tokenInfo.id;
      GetUserInfo(userId).then((res) => setUserInfo({ ...res.data }));
    }
  }, []);

  const handleSignOut = useCallback(() => {
    signOut()
      .then(() => {
        alert("로그아웃 되었습니다.");
      })
      .then(() => HandleLogoutSuccess())
      .then(() => router.push("/login"));
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
        <Typography variant="overline">
          {userInfo.bibotUser.lastName} {userInfo.bibotUser.firstName}
        </Typography>
        <Typography color="text.secondary" variant="body2">
          {userInfo.department.name} / {userInfo.team.name}
        </Typography>
      </Box>
      <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="overline" onClick={() => router.push("/mypage")}>
          마이페이지
        </Typography>
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
