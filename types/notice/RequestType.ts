export interface SearchNoticeReq {
  title: string;
  page: number;
  sort: string;
}

export interface CreateNoticeReq {
  title: string;
  content: string;
  type: string;
}

export interface UpdateNoticeReq extends CreateNoticeReq {
  id: number;
}
