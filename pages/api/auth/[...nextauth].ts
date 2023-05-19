import { keycloakSignIn, reissueToken } from "@/service/auth/AuthService";
import { TokenRes } from "@/types/user/User";

import { CookiesOptions, Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const jwtCallback = async ({
  token,
  user,
}: {
  token: JWT;
  user: User;
}) => {
  console.log("wasssssup jwtToken callback");

  if (token?.expiresIn) {
    console.log("1번 조건");
    if (Math.floor(Date.now() / 1000) < token?.expiresIn!!) {
      console.log("아무 일 없음");
      return { ...token };
    } else if (
      token?.refreshToken &&
      Math.floor(Date.now() / 1000) < token.refreshExpiresIn!!
    ) {
      console.log("2번 조건");
      const newTokenData: TokenRes = await reissueToken(token.refreshToken!!);
      token.access_token = newTokenData.accessToken;
      token.expires_in = newTokenData.expiresIn;
      token.refresh_token = newTokenData.refreshToken;
      token.refresh_expires_in = newTokenData.refreshExpiresIn;
      return { ...token };
    }
  }
  token.accessToken = user.tokenRes.accessToken;
  token.refreshToken = user.tokenRes.refreshToken;
  token.expiresIn = user.tokenRes.expiresIn;
  token.refreshExpiresIn = user.tokenRes.refreshExpiresIn;
  console.log(token, user);
  return { ...token, ...user };
};

export const session = ({
  session,
  token,
}: {
  session: Session;
  token: JWT;
}): Promise<Session> => {
  if (
    Math.floor(Date.now() / 1000) > token?.expiresIn! &&
    token?.refreshTokenExpires &&
    Math.floor(Date.now() / 1000) > token?.refreshExpiresIn!
  ) {
    return Promise.reject({
      error: new Error("토큰이 만료되었습니다. 재 로그인 해 주세요."),
    });
  }

  session.info = token;
  console.log("Waaaaasup Session Callback", session, token);
  return Promise.resolve(session);
};

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: "keycloak",
      name: "keycloak",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "유저 이메일",
        },
        password: { label: "Password", type: "비밀번호" },
      },
      async authorize(credentials) {
        return await keycloakSignIn(
          credentials?.username as string,
          credentials?.password as string
        )
          .then((res) => {
            console.log(res);
            return res;
          })
          .catch(() => Promise.reject());
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt: jwtCallback,
    session: session,
  },
});
