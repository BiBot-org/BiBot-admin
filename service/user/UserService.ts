import Config from "@/config/config.export";
import { CustomAxios } from "@/constant/CustomAxios";
import { BibotUserDTO, VerifyEmailReq } from "@/types/user/User";
import {
  CreateBibotUserRes,
  GetUserInfoRes,
  GetUserRes,
  SearchBibotUserRes,
  UpdateUserRes,
} from "../../types/user/ResponseType";
import {
  CreateOrUpdateUserReq,
  SearchBibotUserReq,
} from "@/types/user/RequestType";
import { GetAllAdminUserRes } from "@/types/notice/ResponseType";
const { userServiceUrl } = Config();

export async function IsInit() {
  return await CustomAxios.get(`${userServiceUrl}/public/v1/user/isInit`).then(
    (res) => res.data
  );
}

export async function SendVerificationEmail(email: string) {
  return await CustomAxios.get(`${userServiceUrl}/public/v1/user/email`, {
    params: {
      email: email,
    },
  }).then((res) => res.data);
}

export async function VerifyEmail(req: VerifyEmailReq) {
  return await CustomAxios.post(
    `${userServiceUrl}/public/v1/user/email`,
    req
  ).then((res) => res.data);
}

export async function GetUser(userId: string) {
  const res: GetUserRes = await CustomAxios.get(
    `${userServiceUrl}/api/v1/user`,
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
    `${userServiceUrl}/api/v1/user/info`,
    {
      params: {
        id: userId,
      },
    }
  ).then((res) => res.data);
  return res;
}

export async function GetAllAdminUser() {
  const response: GetAllAdminUserRes = await CustomAxios.get(
    `${userServiceUrl}/api/admin/v1/user/admin/all`
  ).then((res) => res.data);
  return response;
}

export async function SearchUserInfo(req: SearchBibotUserReq) {
  const res: SearchBibotUserRes = await CustomAxios.get(
    `${userServiceUrl}/api/admin/v1/user/search`,
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

export async function CreateUser(req: CreateOrUpdateUserReq) {
  const res: CreateBibotUserRes = await CustomAxios.post(
    `${userServiceUrl}/user-service/api/admin/v1/user`,
    req
  ).then((res) => res.data);
  return res;
}

export async function UpdateUser(req: CreateOrUpdateUserReq) {
  const res: UpdateUserRes = await CustomAxios.put(
    `${userServiceUrl}/api/admin/v1/user`,
    req
  ).then((res) => res.data);
  return res;
}
