import { BibotUserDTO } from "./User";

export interface SearchBibotUserReq {
  department?: number;
  team?: number;
  name?: string;
  page: number;
  sort: string;
}

export interface CreateOrUpdateUserReq extends BibotUserDTO {
  teamId: number;
}
