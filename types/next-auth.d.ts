import NextAuth from "next-auth/next";
import { TokenRes, UserAuthInfo, UserInfo } from "./user/User";
import { ISODateString } from "next-auth";

declare module "next-auth" {
  interface DefaultSession {
    expires: ISODateString;
  }
  interface Session {
    tokenInfo: JWT;
    user: SessionUser;
  }

  interface User {
    id: string;
    roles: string[];
    tokenRes: TokenRes;
  }

  interface SessionUser {
    id: string;
    roles: string[];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    refreshToken?: string;
    expiresIn?: number;
    refreshExpiresIn?: number;
  }
}
