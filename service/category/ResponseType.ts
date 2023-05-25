import { BaseRes } from "@/constant/response";
import { CategoryDTO } from "@/types/category/types";

export interface GetAllCategoryListRes extends BaseRes {
  data: CategoryDTO[];
}
