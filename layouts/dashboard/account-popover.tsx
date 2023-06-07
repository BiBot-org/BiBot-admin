import { useCallback, useEffect } from "react";
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
import { BibotUserInfo } from "@/types/user/User";
import { useRecoilState } from "recoil";
import { userInfoState } from "@/state/user/atom/userInfoState";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

export const AccountPopover = (props: any) => {
  const { anchorEl, onClose, open } = props;
  const [userInfo, setUserInfo] = useRecoilState<BibotUserInfo>(userInfoState);
  const router = useRouter();
  const session = useSession();
  const userId = session.data?.tokenInfo.id;
  const { isLoading } = useQuery(
    [`userInfo : ${userId}`],
    () => GetUserInfo(userId),
    {
      refetchOnWindowFocus: false,
      retry: 0,
      onSuccess: (data) => {
        setUserInfo(data.data);
      },
    }
  );

  const handleSignOut = useCallback(() => {
    Swal.fire({
      title: "Logout?",
      text: "로그아웃 하시겠습니까?",
      icon: "question",
      showCancelButton: true,
    }).then((res) => {
      if (res.isConfirmed) {
        signOut()
          .then(() => {
            Swal.fire({
              title: "Logout",
              text: "로그아웃 되었습니다.",
              icon: "success",
            });
          })
          .then(() => HandleLogoutSuccess())
          .then(() => router.push("/login"));
      }
    });
  }, [onClose, router]);

  return (
    <>
      {!isLoading && (
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
            <Typography
              variant="overline"
              onClick={() => router.push("/mypage")}
            >
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
      )}
    </>
  );
};

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
};
