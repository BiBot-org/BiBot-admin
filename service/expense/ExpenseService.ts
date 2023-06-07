import Config from "@/config/config.export";
import { CustomAxios } from "@/constant/CustomAxios";
import {
  RequestApprovalReq,
  SearchApprovalReq,
} from "@/types/approval/RequestType";
import { SearchApprovalRes } from "@/types/approval/ResponseType";
import { GetApprovalThumbnailListRes } from "@/types/expense/ResponseType";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

const { expenseServiceUrl } = Config();

export async function GetApprovalThumbnailList() {
  const response: GetApprovalThumbnailListRes = await CustomAxios.get(
    `${expenseServiceUrl}/api/admin/v1/approval/thumbnail`
  ).then((res) => res.data);
  return response;
}

export async function SearchApprovalInfo(req: SearchApprovalReq) {
  const response: SearchApprovalRes = await CustomAxios.get(
    `${expenseServiceUrl}/api/admin/v1/approval/search`,
    {
      params: {
        startDate: req.startDate,
        endDate: req.endDate,
        status: req.status,
        categoryId: req.categoryId,
        page: req.page,
      },
    }
  ).then((res) => res.data);
  return response;
}

export function useSearchApprovalInfoQuery(req: SearchApprovalReq) {
  return useQuery<SearchApprovalRes, AxiosError>(
    ["searchApprovalInfo", req],
    async () => await SearchApprovalInfo(req)
  );
}

export async function RequestApproval(req: RequestApprovalReq) {
  return await CustomAxios.put(
    `${expenseServiceUrl}/api/admin/v1/approval`,
    req
  ).then((res) => res.data);
}
