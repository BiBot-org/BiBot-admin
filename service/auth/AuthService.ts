import { KeycloakTokenRes, KeycloakUserInfoRes } from "@/types/user/User";
import { CustomAxios } from "@/utils/CustomAxios";
import { HandleLogoutSuccess } from "./Handler";
import { User } from "next-auth";
import { getSession } from "next-auth/react";
import axios from "axios";

export async function keycloakSignIn(username: string, password: string) {
  return await axios
    .post(
      "http://localhost:8080/realms/bibot-org/protocol/openid-connect/token",
      {
        grant_type: "password",
        username: username,
        password: password,
        client_id: "bibot",
        client_secret: "TernKB1t10oLGlSL2wfch0w777z58FsO",
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then(async (res) => {
      const tokenResponse: KeycloakTokenRes = res.data;
      return await axios
        .get(
          "http://localhost:8080/realms/bibot-org/protocol/openid-connect/userinfo",
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        )
        .then((res) => {
          const userInfo: KeycloakUserInfoRes = res.data;
          return {
            id: userInfo.sub,
            roles: userInfo.resource_access.bibot.roles,
            tokenRes: {
              accessToken: tokenResponse.access_token,
              refreshToken: tokenResponse.refresh_token,
              expiresIn:
                Math.floor(Date.now() / 1000) + tokenResponse.expires_in,
              refreshExpiresIn:
                Math.floor(Date.now() / 1000) +
                tokenResponse.refresh_expires_in,
            },
          };
        });
    });
}

export async function reissueToken(refreshToken: string) {
  return await axios
    .post(
      "http://localhost:8080/realms/bibot-org/protocol/openid-connect/token",
      {
        grant_type: "refresh_token",
        refresh_token: refreshToken,
        client_id: "bibot",
        client_secret: "TernKB1t10oLGlSL2wfch0w777z58FsO",
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((res) => {
      const refreshTokenRes: KeycloakTokenRes = res.data;
      return {
        accessToken: refreshTokenRes.access_token,
        refreshToken: refreshTokenRes.refresh_token,
        expiresIn: Math.floor(Date.now() / 1000) + refreshTokenRes.expires_in,
        refreshExpiresIn:
          Math.floor(Date.now() / 1000) + refreshTokenRes.refresh_expires_in,
      };
    });
}

export async function LogoutSession() {
  const session = await getSession();
  if (session) {
    return await CustomAxios.post(
      "http://localhost:8080/realms/bibot-org/protocol/openid-connect/logout",
      {
        client_id: "bibot",
        client_secret: "TernKB1t10oLGlSL2wfch0w777z58FsO",
        refresh_token: session.tokenInfo.refreshToken,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    // .then(() => {
    //   HandleLogoutSuccess();
    // });
  } else {
    return;
  }
}

export function removeTokenInfo() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("expiresIn");
  localStorage.removeItem("refreshExpiresIn");
  localStorage.removeItem("refreshToken");
}

export async function isAuthenticated() {
  return await CustomAxios.get(
    "http://localhost:8080/realms/bibot-org/protocol/openid-connect/userinfo"
  )
    .then(() => Promise.resolve())
    .catch(() => Promise.reject());
}
