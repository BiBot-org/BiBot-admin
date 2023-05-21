import { UserAuthInfo } from "@/types/user/User";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { v1 } from "uuid";

const localStorage =
  typeof window !== "undefined" ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "userAuthInfo",
  storage: localStorage,
});

export const userAuthState = atom<UserAuthInfo>({
  key: `userAuthState/${v1()}`,
  default: {
    userId: "",
    isLogin: false,
  },
  effects_UNSTABLE: [persistAtom],
});
