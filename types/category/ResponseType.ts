import { BaseRes } from "@/types/common/ResponseType";
import { CategoryDTO } from "./types";

export interface GetAllCategoryListRes extends BaseRes {
  data: CategoryDTO[];
}
