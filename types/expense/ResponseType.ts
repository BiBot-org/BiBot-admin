import { BaseRes } from "../common/ResponseType";
import { ApprovalInfo } from "./types";

export interface GetApprovalThumbnailListRes extends BaseRes {
  data: ApprovalInfo[];
}
