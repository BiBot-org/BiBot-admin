import ChartBarIcon from "@heroicons/react/24/solid/ChartBarIcon";
import CogIcon from "@heroicons/react/24/solid/CogIcon";
import LockClosedIcon from "@heroicons/react/24/solid/LockClosedIcon";
import ShoppingBagIcon from "@heroicons/react/24/solid/ShoppingBagIcon";
import UserIcon from "@heroicons/react/24/solid/UserIcon";
import UserPlusIcon from "@heroicons/react/24/solid/UserPlusIcon";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import XCircleIcon from "@heroicons/react/24/solid/XCircleIcon";
import { SvgIcon } from "@mui/material";

export const items = [
  {
    title: "메인화면",
    path: "/",
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    ),
  },
  {
    title: "사원 정보 페이지",
    path: "/userMenu",
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    ),
  },
  {
    title: "관리자 정보 페이지",
    path: "/manager",
    icon: (
      <SvgIcon fontSize="small">
        <ShoppingBagIcon />
      </SvgIcon>
    ),
  },
  {
    title: "경비 내역 페이지",
    path: "/approval",
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    ),
  },
  {
    title: "환경설정",
    path: "/setupPage",
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    ),
  },
  // {
  //   title: "Login",
  //   path: "/auth/login",
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <LockClosedIcon />
  //     </SvgIcon>
  //   ),
  // },
  // {
  //   title: "Register",
  //   path: "/auth/register",
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <UserPlusIcon />
  //     </SvgIcon>
  //   ),
  // },
  // {
  //   title: "Error",
  //   path: "/404",
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <XCircleIcon />
  //     </SvgIcon>
  //   ),
  // },
];
