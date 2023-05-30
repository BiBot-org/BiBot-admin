import Config from "@/config/config.export";
import { CustomAxios } from "@/constant/CustomAxios";
import { BaseRes } from "@/types/common/ResponseType";

const { expenseServiceUrl } = Config();

export async function GetAllCategoryList() {
  const result: BaseRes = await CustomAxios.get(
    `${expenseServiceUrl}/api/v1/category/all`
  ).then((res) => res.data);
  return result;
}
