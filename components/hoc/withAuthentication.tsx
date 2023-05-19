import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const WithAuthentication = (Component: React.FC) => {
  const Wrapper = (props: any) => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const isUser = !!session?.user;
    useEffect(() => {
      if (status) return;
      if (!isUser) router.push("/login");
    }, []);
    return <Component {...props} />;
  };
  return Wrapper;
};
