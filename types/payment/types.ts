export interface PaymentHistoryDTO {
  id: string;
  cardId: number;
  paymentDestination: string;
  amount: number;
  approvalId: string;
  requested: boolean;
}

export interface CardDTO {
  id: number;
  userId: string;
  cardNo: string;
  cardCompany: string;
  cardCvc: string;
  cardValid: string;
}

export interface PaymentHistoryInfo {
  id: string;
  cardId: number;
  cardCompany: string;
  paymentDestination: string;
  amount: number;
  approvalId?: string;
  regTime: string;
  requested: boolean;
}

export interface PaymentHistoryAndUserId {
  paymentHistory: PaymentHistoryInfo;
  userId: string;
}

export interface PaymentHistoryElement {
  id: string;
  cardCompany: string;
  paymentDestination: string;
  amount: number;
}

export interface SearchPaymentHistoryInfo {
  content: PaymentHistoryInfo[];
  pageNo: number;
  isLast: boolean;
  totalPages: number;
  totalElements: number;
}
