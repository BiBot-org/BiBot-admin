export interface UpdateCategory {
  id: number;
  categoryName: string;
  nextLimitation: string;
  nextAutomatedCost: string;
  nextCycle: string;
}

export interface AddCategoryReq {
  categoryName: string;
  limitation: number;
  automatedCost: number;
  resetCycle: string;
}
