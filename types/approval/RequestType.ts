export interface SearchApprovalReq {
  startDate: string;
  endDate: string;
  status?: string;
  categoryId?: number;
  page: number;
}

export interface RequestApprovalReq {
  approvalId: string;
  status: string;
  comment: string;
}
