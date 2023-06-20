import { TeamDTO } from "../team/types";

export interface DepartmentDTO {
  id: number;
  name: string;
}

export interface DepartmentInfo {
  department: DepartmentDTO;
  teams: TeamDTO[];
}
