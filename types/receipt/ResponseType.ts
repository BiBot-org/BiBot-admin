import { BaseRes } from "../common/ResponseType";
import { BibotReceiptDTO } from "./types";

export interface GetReceiptRes extends BaseRes {
  data: BibotReceiptDTO;
}
