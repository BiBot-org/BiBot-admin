import Config from "@/config/config.export";
import { CustomAxios } from "@/constant/CustomAxios";
import { GetReceiptRes } from "@/types/receipt/ResponseType";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

const { receiptServiceUrl } = Config();

export async function GetReceiptInfo(id: string) {
  const response: GetReceiptRes = await CustomAxios.get(
    `${receiptServiceUrl}/api/v1/receipt`,
    {
      params: {
        id: id,
      },
    }
  ).then((res) => res.data);
  return response;
}

export function useGetReceiptInfo(id: string) {
  return useQuery<GetReceiptRes, AxiosError>(
    ["getReceiptInfo", id],
    async () => await GetReceiptInfo(id)
  );
}

export async function GetReceiptInfoByApproveId(id: string) {
  const response: GetReceiptRes = await CustomAxios.get(
    `${receiptServiceUrl}/api/v1/receipt/approval`,
    {
      params: {
        id: id,
      },
    }
  ).then((res) => res.data);
  return response;
}

export function useGetReceiptInfoByApproveId(id: string) {
  return useQuery<GetReceiptRes, AxiosError>(
    ["getReceiptInfoByApproveId", id],
    async () => await GetReceiptInfoByApproveId(id)
  );
}
