import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { PropsWithChildren, useEffect } from "react";

function SessionLoader({ children }: PropsWithChildren<{}>) {
  const { status, data: session } = useSession();
  const router = useRouter();
  const isLogin = session && status === "authenticated";

  useEffect(() => {
    console.log(session, status, isLogin);
    if (!isLogin) {
      console.log("로그인 안했노...");
      router.push("/login");
    }
  }, [isLogin, session, status]);

  return <>{children}</>;
}

export default SessionLoader;
