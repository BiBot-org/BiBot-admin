import Config from "@/config/config.export";
import { CustomAxios } from "@/constant/CustomAxios";
import { AddCategoryReq, UpdateCategory } from "@/types/category/RequestTypes";
import { GetAllCategoryListRes } from "@/types/category/ResponseType";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

const { expenseServiceUrl } = Config();

export async function GetAllCategoryList() {
  const result: GetAllCategoryListRes = await CustomAxios.get(
    `${expenseServiceUrl}/api/v1/category/all`
  ).then((res) => res.data);
  return result;
}

export function useGetAllCategoryList() {
  return useQuery<GetAllCategoryListRes, AxiosError>(
    ["useGetAllCategoryList"],
    async () => await GetAllCategoryList()
  );
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
