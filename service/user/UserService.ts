import Config from "@/config/config.export";
import { CustomAxios } from "@/utils/CustomAxios";
const { baseUrl } = Config();

export async function GetAllDepartmentInfo() {
  return await CustomAxios.get(
    baseUrl + "/user-service/api/admin/v1/department/all"
  ).then((res) => res.data);
}
