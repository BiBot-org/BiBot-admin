import { BaseRes } from "../common/ResponseType";
import { AdminInfo } from "../user/User";
import { NoticeDTO, iSearchNotice } from "./noticeType";

export interface SearchNoticeRes extends BaseRes {
  data: iSearchNotice;
}

export interface GetNoticeRes extends BaseRes {
  data: NoticeDTO;
}

export interface CreateNoticeRes extends BaseRes {
  data: string;
}

export interface GetAllAdminUserRes extends BaseRes {
  data: AdminInfo[];
}
