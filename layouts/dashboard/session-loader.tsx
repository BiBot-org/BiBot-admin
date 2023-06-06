import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { PropsWithChildren, useEffect } from "react";

export async function getServerSideProps(result: any) {
  const session = await getSession();
  if (session) {
    return {
      props: {},
    };
  } else {
    result.res.writeHead(302, {
      Location: "/login",
    });
    result.res.end();
    return {
      props: {},
    };
  }
}

function SessionLoader({ children }: PropsWithChildren<{}>) {
  const { status, data: session } = useSession();
  const router = useRouter();
  const isLogin = session && status === "authenticated";

  return <>{children}</>;
}

export default SessionLoader;
