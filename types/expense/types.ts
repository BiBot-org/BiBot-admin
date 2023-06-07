import { CategoryDTO } from "../category/types";

export interface ApprovalDTO {
  id: string;
  managerId: string;
  requesterId: string;
  status: string;
  comment: string;
  isAutomated: boolean;
}

export interface SearchAdminApprovalRes extends ApprovalDTO {
  regTime: string;
  categoryId: number;
}

export interface ApprovalInfo {
  approval: ApprovalDTO;
  category: CategoryDTO;
  createAt: string;
}
