import Config from "@/config/config.export";
import { KeycloakTokenRes } from "@/types/auth/types";
import {
  InitSetupReq,
  iCategoryInit,
  iDepartmentInit,
} from "@/types/user/User";
import axios from "axios";

const { authServiceUrl, authServiceSecret, userServiceUrl, expenseServiceUrl } =
  Config();

export async function CheckRootAccount(username: string, password: string) {
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
      const tokenReponse: KeycloakTokenRes = res.data;
      return await axios.post(
        `${authServiceUrl}/realms/bibot-org/protocol/openid-connect/logout`,
        {
          client_id: "bibot",
          client_secret: authServiceSecret,
          refresh_token: tokenReponse.refresh_token,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
    })
    .then(() => true)
    .catch(() => false);
}

export async function InitalizeService(initSetupReq: InitSetupReq) {
  return await axios
    .post(
      `${authServiceUrl}/realms/bibot-org/protocol/openid-connect/token`,
      {
        grant_type: "password",
        username: initSetupReq.rootEmail,
        password: initSetupReq.rootPassword,
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
      const tokenReponse: KeycloakTokenRes = res.data;
      const accessToken = tokenReponse.access_token;
      return accessToken;
    })
    .then(async (accessToken) => {
      await SetInitCategoryInfo(accessToken, initSetupReq.categoryList);
      return accessToken;
    })
    .then(async (accessToken) => {
      await SetRootUser(
        accessToken,
        initSetupReq.firstName,
        initSetupReq.lastName,
        initSetupReq.email,
        initSetupReq.password,
        initSetupReq.departmentList,
        initSetupReq.rootTeamName
      );
    })
    .then(() => true)
    .catch(() => false);
}

async function SetInitCategoryInfo(
  accessToken: string,
  categoryList: iCategoryInit[]
) {
  return await axios
    .post(
      `${expenseServiceUrl}/api/admin/v1/category/init`,
      {
        categoryList: categoryList,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    .then((res) => res.data);
}

async function SetRootUser(
  accessToken: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  departmentList: iDepartmentInit[],
  rootTeamName: string
) {
  return await axios
    .post(
      `${userServiceUrl}/api/admin/v1/init`,
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        departmentList: departmentList,
        rootTeamName: rootTeamName,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    .then((res) => res.data);
}
