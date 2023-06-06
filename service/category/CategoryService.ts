import Config from "@/config/config.export";
import { CustomAxios } from "@/constant/CustomAxios";
import { AddCategoryReq, UpdateCategory } from "@/types/category/RequestTypes";
import { BaseRes } from "@/types/common/ResponseType";

const { expenseServiceUrl } = Config();

export async function GetAllCategoryList() {
  const result: BaseRes = await CustomAxios.get(
    `${expenseServiceUrl}/api/v1/category/all`
  ).then((res) => res.data);
  return result;
}

export async function UpdateCategory(req: UpdateCategory) {
  return await CustomAxios.put(
    `${expenseServiceUrl}/api/admin/v1/category`,
    req
  ).then((res) => res.data);
}

export async function AddCategory(req: AddCategoryReq) {
  return await CustomAxios.post(
    `${expenseServiceUrl}/api/admin/v1/category`,
    req
  ).then((res) => res.data);
}
