import NextAuth from "next-auth/next";
import { TokenRes, UserAuthInfo, UserInfo } from "./user/User";

declare module "next-auth" {
  interface Session {
    info: JWT;
  }

  interface User {
    id: string;
    name: string;
    email: string;
    roles: string[];
    tokenRes: TokenRes;
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
