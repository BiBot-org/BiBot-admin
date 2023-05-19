import { userAuthState } from "@/state/user/atom/userLoginState";
import { TokenInfo, UserInfo } from "@/types/user/User";
import { useSetRecoilState } from "recoil";

export function handleTokenInfoSuccess(tokenInfo: TokenInfo) {
  localStorage.setItem("accessToken", tokenInfo.accessToken);
  localStorage.setItem("expiresIn", tokenInfo.tokenExpiresIn.toString());
  localStorage.setItem(
    "refreshExpiresIn",
    tokenInfo.refreshTokenExpiresIn.toString()
  );
  localStorage.setItem("refreshToken", tokenInfo.refreshToken);
}

export function HandleLoginSuccess(userInfo: UserInfo) {
  const setUserInfo = useSetRecoilState(userAuthState);
  setUserInfo({
    userId: userInfo.sub,
    isLogin: true,
  });
}
export function HandleLogoutSuccess() {
  const setUserInfo = useSetRecoilState(userAuthState);
  setUserInfo({
    userId: "",
    isLogin: false,
  });
}
