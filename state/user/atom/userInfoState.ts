import { BibotUserInfo } from "@/types/user/User";
import { atom } from "recoil";

export const userInfoState = atom<BibotUserInfo>({
  key: `userInfo`,
  default: {
    bibotUser: {
      id: "",
      firstName: "",
      lastName: "",
      userRole: "",
      profileUrl: "",
      email: "",
      duty: "",
    },
    department: {
      id: 0,
      name: "",
    },
    team: {
      id: 0,
      name: "",
      departmentId: 0,
    },
  },
});
