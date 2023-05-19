import { userAuthState } from "@/state/user/atom/userLoginState";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { PropsWithChildren, useEffect } from "react";
import { useSetRecoilState } from "recoil";

function SessionLoader({ children }: PropsWithChildren<{}>) {
  const { status, data: session } = useSession();
  const router = useRouter();
  const isLogin = session && status === "authenticated";
  const token = isLogin ? session.info.accessToken : "";

  useEffect(() => {
    console.log(session, status, isLogin);
    if (!isLogin) {
      console.log("로그인 안했노...");
    }
  }, [session, status]);

  return <>{children}</>;
}

export default SessionLoader;
