export interface NoticeInfo {
  id: string;
  title: string;
  createdAt: number;
}

export interface IOverviewNotice {
  notices: NoticeInfo[];
  sx: {
    height: string;
  };
}
