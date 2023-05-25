import { keycloakSignIn, reissueToken } from "@/service/auth/AuthService";
import { TokenRes } from "@/types/auth/types";
import {
  Account,
  CookiesOptions,
  Profile,
  Session,
  SessionUser,
  User,
} from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

// export const signIn = async ({
//   user,
//   account,
//   credentials,
// }: {
//   user: User;
//   account: Account;
//   credentials: any;
// }) => {
//   console.log(user);
// };

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
      console.log(token, user);
      return { ...token };
    } else if (
      token?.refreshToken &&
      Math.floor(Date.now() / 1000) < token.refreshExpiresIn!!
    ) {
      console.log("2번 조건");
      console.log(token);
      const newTokenData: TokenRes = await reissueToken(token.refreshToken!!);
      console.log(newTokenData);
      token.accessToken = newTokenData.accessToken;
      token.expiresIn = newTokenData.expiresIn;
      token.refreshToken = newTokenData.refreshToken;
      token.refreshExpiresIn = newTokenData.refreshExpiresIn;
      return { ...token };
    }
  }
  console.log("login");
  token.accessToken = user.tokenRes.accessToken;
  token.refreshToken = user.tokenRes.refreshToken;
  token.expiresIn = user.tokenRes.expiresIn;
  token.refreshExpiresIn = user.tokenRes.refreshExpiresIn;
  const sessionUser: SessionUser = {
    id: user.id,
    roles: user.roles,
  };
  return { ...token, ...sessionUser };
};

export const session = ({
  session,
  token,
}: {
  session: Session;
  token: JWT;
}): Promise<Session> => {
  console.log("Waaaaasup Session Callback", session, token);
  if (
    Math.floor(Date.now() / 1000) > token?.expiresIn! &&
    token?.refreshTokenExpires &&
    Math.floor(Date.now() / 1000) > token?.refreshExpiresIn!
  ) {
    //TODO -> 로그아웃 핸들러 달아야함
    return Promise.reject({
      error: new Error("토큰이 만료되었습니다. 재 로그인 해 주세요."),
    });
  }
  session.tokenInfo = token;
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
    // signIn: signIn,
    jwt: jwtCallback,
    session: session,
  },
});
