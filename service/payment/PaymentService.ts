import Config from "@/config/config.export";
import { CustomAxios } from "@/constant/CustomAxios";
import { GetCardInfo } from "@/types/payment/ResponseType";

import { AxiosError } from "axios";
import { SearchPaymentHistoryInfo } from "@/types/payment/types";
import { useQuery } from "@tanstack/react-query";
import { GetUserInfo } from "../user/UserService";
import { GetUserInfoRes } from "@/types/user/ResponseType";

const { cardServiceUrl } = Config();

export async function GetAllPaymentHistoryIsRequestedNot(page: number) {
  const response: SearchPaymentHistoryInfo = await CustomAxios.get(
    `${cardServiceUrl}/api/v1/payment/requested/not`,
    {
      params: {
        page: page,
      },
    }
  ).then((res) => res.data.data);
  return response;
}

export async function GetUserInfoByCardId(id: number) {
  const response: GetUserInfoRes = await CustomAxios.get(
    `${cardServiceUrl}/api/v1/card`,
    {
      params: {
        id: id,
      },
    }
  ).then(async (res) => {
    const result: GetCardInfo = res.data;
    return await GetUserInfo(result.data.userId);
  });
  return response;
}

export function useGetUserInfoByCardId(id: number) {
  return useQuery<GetUserInfoRes, AxiosError>(
    ["getUserInfoByCardId", id],
    async () => await GetUserInfoByCardId(id)
  );
}

export function useGetAllPaymentHistoryIsRequestedNotQuery(page: number) {
  return useQuery<SearchPaymentHistoryInfo, AxiosError>(
    ["allPaymehtHistoryIsRequestedNot", { page: page }],
    async () => await GetAllPaymentHistoryIsRequestedNot(page)
  );
}
