export interface ApprovalDTO {
  id: string;
  managerId: string;
  requesterId: string;
  status: string;
  comment: string;
  isAutomated: boolean;
}

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
