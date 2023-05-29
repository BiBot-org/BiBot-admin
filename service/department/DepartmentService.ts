import Config from "@/config/config.export";
import { CustomAxios } from "@/constant/CustomAxios";
import {
  GetAllDepartmentInfoRes,
  GetAllDepartmentsRes,
} from "../../types/department/ResponseType";
const { baseUrl } = Config();

export async function GetAllDepartments() {
  const response: GetAllDepartmentsRes = await CustomAxios.get(
    baseUrl + "/user-service/api/admin/v1/department/all"
  ).then((res) => res.data);
  return response;
}

export async function GetAllDepartmentsInfo() {
  const response: GetAllDepartmentInfoRes = await CustomAxios.get(
    baseUrl + "/user-service/api/admin/v1/department/info/all"
  ).then((res) => res.data);
  return response;
}
