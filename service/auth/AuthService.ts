import { getSession } from "next-auth/react";
import axios from "axios";
import { KeycloakTokenRes, KeycloakUserInfoRes } from "@/types/auth/types";
import { CustomAxios } from "@/constant/CustomAxios";
import Config from "@/config/config.export";

const { authServiceUrl, authServiceSecret } = Config();

export async function keycloakSignIn(username: string, password: string) {
  return await axios
    .post(
      `${authServiceUrl}/realms/bibot-org/protocol/openid-connect/token`,
      {
        grant_type: "password",
        username: username,
        password: password,
        client_id: "bibot",
        client_secret: authServiceSecret,
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
          `${authServiceUrl}/realms/bibot-org/protocol/openid-connect/userinfo`,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
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
      `${authServiceUrl}/realms/bibot-org/protocol/openid-connect/token`,
      {
        grant_type: "refresh_token",
        refresh_token: refreshToken,
        client_id: "bibot",
        client_secret: authServiceSecret,
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
      `${authServiceUrl}/realms/bibot-org/protocol/openid-connect/logout`,
      {
        client_id: "bibot",
        client_secret: authServiceSecret,
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
    `${authServiceUrl}/realms/bibot-org/protocol/openid-connect/userinfo`
  )
    .then(() => Promise.resolve())
    .catch(() => Promise.reject());
}
