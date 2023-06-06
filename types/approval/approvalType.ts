export interface ApprovalElement {
  id: string;
  name: string;
  createdAt: number;
  division: string;
  team: string;
  approvalCategory: string;
  status: string;
}

export interface IOverviewApproval {
  sx: {
    height: string;
  };
}
