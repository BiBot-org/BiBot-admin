import { BaseRes } from "@/types/common/ResponseType";
import {
  BibotUserDTO,
  BibotUserInfo,
  SearchBibotUser,
} from "@/types/user/User";

export interface GetUserRes extends BaseRes {
  data: BibotUserDTO;
}

export interface GetUserInfoRes extends BaseRes {
  data: BibotUserInfo;
}

export interface SearchBibotUserRes extends BaseRes {
  data: SearchBibotUser;
}

export interface CreateBibotUserRes extends BaseRes {
  data: {
    userId: string;
  };
}

export interface UpdateUserRes extends BaseRes {
  data: string;
}
