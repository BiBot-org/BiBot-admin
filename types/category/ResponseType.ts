import { CategoryDTO } from "@/types/category/ResponseTypes";
import { BaseRes } from "@/types/common/ResponseType";

export interface GetAllCategoryListRes extends BaseRes {
  data: CategoryDTO[];
}
