import { BaseRes } from "@/types/common/ResponseType";
import { DepartmentDTO, DepartmentInfo } from "@/types/department/types";

export interface GetAllDepartmentsRes extends BaseRes {
  data: DepartmentDTO[];
}

export interface GetAllDepartmentInfoRes extends BaseRes {
  data: DepartmentInfo[];
}
