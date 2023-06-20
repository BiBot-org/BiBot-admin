import { BaseRes } from "../common/ResponseType";
import {
  CardDTO,
  PaymentHistoryAndUserId,
  SearchPaymentHistoryInfo,
} from "./types";

export interface GetAllPaymentHIstoryIsRequestedNotRes extends BaseRes {
  data: SearchPaymentHistoryInfo;
}

export interface GetCardInfo extends BaseRes {
  data: CardDTO;
}
