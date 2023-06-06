import { string } from "prop-types";
import { CategoryDTO } from "../category/ResponseTypes";

export interface ApprovalDTO {
  id: string;
  managerId: string;
  requesterId: string;
  status: string;
  comment: string;
  isAutomated: boolean;
}

export interface ApprovalInfo {
  approval: ApprovalDTO;
  category: CategoryDTO;
  createAt: string;
}
