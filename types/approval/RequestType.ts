export interface SearchApprovalReq {
  startDate: string;
  endDate: string;
  status?: string;
  categoryId?: number;
  page: number;
}
