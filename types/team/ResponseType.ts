import { BaseRes } from "../common/ResponseType";
import { TeamDTO } from "./types";

export interface GetTeamByDeptIdRes extends BaseRes {
  data: TeamDTO[];
}
