import { BaseRes } from "../common/ResponseType";
import { SearchAdminApprovalRes } from "../expense/types";

export interface SearchApprovalRes extends BaseRes {
  data: {
    content: SearchAdminApprovalRes[];
    pageNo: number;
    isLast: boolean;
    totalPages: number;
    totalElements: number;
  };
}
