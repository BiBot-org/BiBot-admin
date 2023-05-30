import Config from "@/config/config.export";
import { CustomAxios } from "@/constant/CustomAxios";
import {
  GetAllDepartmentInfoRes,
  GetAllDepartmentsRes,
} from "../../types/department/ResponseType";
const { userServiceUrl } = Config();

export async function GetAllDepartments() {
  const response: GetAllDepartmentsRes = await CustomAxios.get(
    `${userServiceUrl}/api/admin/v1/department/all`
  ).then((res) => res.data);
  return response;
}

export async function GetAllDepartmentsInfo() {
  const response: GetAllDepartmentInfoRes = await CustomAxios.get(
    `${userServiceUrl}/api/admin/v1/department/info/all`
  ).then((res) => res.data);
  return response;
}
