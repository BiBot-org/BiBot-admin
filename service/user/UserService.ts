import Config from "@/config/config.export";
import { CustomAxios } from "@/constant/CustomAxios";
import { VerifyEmailReq } from "@/types/user/User";
import {
  GetUserInfoRes,
  GetUserRes,
  SearchBibotUserRes,
} from "../../types/user/ResponseType";
import { SearchBibotUserReq } from "@/types/user/RequestType";
const { baseUrl } = Config();

export async function IsInit() {
  return await CustomAxios.get(
    baseUrl + "/user-service/public/v1/user/isInit"
  ).then((res) => res.data);
}

export async function SendVerificationEmail(email: string) {
  return await CustomAxios.get(baseUrl + "/user-service/public/v1/user/email", {
    params: {
      email: email,
    },
  }).then((res) => res.data);
}

export async function VerifyEmail(req: VerifyEmailReq) {
  return await CustomAxios.post(
    baseUrl + "/user-service/public/v1/user/email",
    req
  ).then((res) => res.data);
}

export async function GetUser(userId: string) {
  const res: GetUserRes = await CustomAxios.get(
    baseUrl + "/user-service/api/v1/user",
    {
      params: {
        id: userId,
      },
    }
  ).then((res) => res.data);
  return res;
}

export async function GetUserInfo(userId: string) {
  const res: GetUserInfoRes = await CustomAxios.get(
    baseUrl + "/user-service/api/v1/user/info",
    {
      params: {
        id: userId,
      },
    }
  ).then((res) => res.data);
  return res;
}

export async function SearchUserInfo(req: SearchBibotUserReq) {
  const res: SearchBibotUserRes = await CustomAxios.get(
    baseUrl + "/user-service/api/admin/v1/user/search",
    {
      params: {
        department: req.department,
        team: req.team,
        name: req.name,
        page: req.page,
        sort: req.sort,
      },
    }
  ).then((res) => res.data);
  return res;
}
