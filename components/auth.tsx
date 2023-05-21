import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Auth({ children }: any) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const isUser = !!session?.user;
  useEffect(() => {
    if (status) return;
    if (!isUser) router.push("/login");
  }, [isUser, status]);

  if (isUser) {
    return children;
  }

  return <div>Loading...</div>;
}
