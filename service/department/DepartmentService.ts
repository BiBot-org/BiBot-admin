import Config from "@/config/config.export";
import { CustomAxios } from "@/constant/CustomAxios";
import { GetAllDepartmentInfoRes } from "../../types/department/ResponseType";
const { baseUrl } = Config();

export async function GetAllDepartmentInfo() {
  const response: GetAllDepartmentInfoRes = await CustomAxios.get(
    baseUrl + "/user-service/api/admin/v1/department/all"
  ).then((res) => res.data);
  return response;
}
