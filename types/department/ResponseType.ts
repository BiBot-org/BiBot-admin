import { BaseRes } from "@/types/common/ResponseType";
import { DepartmentDTO } from "@/types/department/types";

export interface GetAllDepartmentInfoRes extends BaseRes {
  data: DepartmentDTO[];
}
