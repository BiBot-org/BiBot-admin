import Config from "@/config/config.export";
import { VerifyEmailReq } from "@/types/user/User";
import { CustomAxios } from "@/utils/CustomAxios";
const { baseUrl } = Config();

export async function IsInit() {
  return await CustomAxios.get(
    baseUrl + "/user-service/public/v1/user/isInit"
  ).then((res) => res.data);
}

export async function GetAllDepartmentInfo() {
  return await CustomAxios.get(
    baseUrl + "/user-service/api/admin/v1/department/all"
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
