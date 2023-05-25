export interface CategoryDTO {
  id: number;
  categoryName: string;
  limitation: number;
  automatedCost: number;
  resetCycle: string;
  startDate: string;
  endDate: string;
  willBeUpdated: boolean;
  nextCycle: string;
}
