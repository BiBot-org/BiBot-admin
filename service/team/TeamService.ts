import Config from "@/config/config.export";
import { CustomAxios } from "@/constant/CustomAxios";
import { GetTeamByDeptIdRes } from "@/types/team/ResponseType";

const { baseUrl } = Config();

export async function GetTeamInfoByDeptId(deptId: number) {
  const res: GetTeamByDeptIdRes = await CustomAxios.get(
    baseUrl + "/user-service/api/admin/v1/team/department",
    {
      params: {
        deptId: deptId,
      },
    }
  ).then((res) => res.data);
  return res;
}
