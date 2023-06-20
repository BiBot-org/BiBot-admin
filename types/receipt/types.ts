export interface BibotReceiptDTO {
  receiptId: string;
  userId: string;
  cardId: number;
  approvalId: string;
  paymentId: string;
  imageUrl: string;
  ocrResult: OcrResult;
}

export interface OcrResult {
  items: OcrResultItem[];
  paymentInfo: {
    date: string;
  };
  storeInfo: {
    address?: string[];
    bizNum: string;
    storeName: string;
  };
  totalPrice: string;
}

export interface OcrResultItem {
  name: string;
  count: string;
  price: string;
}
