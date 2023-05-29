export interface NoticeDTO {
  id: number;
  title: string;
  content: string;
  type: string;
  createdBy: string;
  modifiedBy: string;
  regTime: string;
  updateTime: string;
}

export interface NoticeInfo {
  id: number;
  title: string;
  content: string;
  type: string;
  regTime: string;
}

export interface iSearchNotice {
  content: NoticeDTO[];
  pageNo: number;
  isLast: boolean;
  totalPage: number;
  totalElement: number;
}

export interface iNotice {
  id: number;
  title: string;
  content: string;
  tpye: string;
  createdBy: string;
  modifiedBy: string;
  regTime: string;
  updateTime: string;
}

export interface IOverviewNotice {
  sx: {
    height: string;
  };
}
