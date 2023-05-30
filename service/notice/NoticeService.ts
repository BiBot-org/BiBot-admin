import Config from "@/config/config.export";
import { CustomAxios } from "@/constant/CustomAxios";
import {
  CreateNoticeReq,
  SearchNoticeReq,
  UpdateNoticeReq,
} from "@/types/notice/RequestType";

import {
  CreateNoticeRes,
  GetNoticeRes,
  SearchNoticeRes,
} from "@/types/notice/ResponseType";
import { iNotice } from "@/types/notice/noticeType";

const { userServiceUrl } = Config();

export async function GetNoticeMain() {
  return await CustomAxios.get(`${userServiceUrl}/api/v1/notice/main`).then(
    (res) => res.data
  );
}

export async function GetNotice(noticeId: number) {
  const response: GetNoticeRes = await CustomAxios.get(
    `${userServiceUrl}/api/v1/notice`,
    {
      params: {
        id: noticeId,
      },
    }
  ).then((res) => res.data);
  return response;
}

export async function SearchNotice(req: SearchNoticeReq) {
  const response: SearchNoticeRes = await CustomAxios.get(
    `${userServiceUrl}/api/v1/notice/search`,
    {
      params: {
        title: req.title,
        page: req.page,
        sort: req.sort,
      },
    }
  ).then((res) => res.data);
  return response;
}

export async function CreateNotice(req: CreateNoticeReq) {
  const response: CreateNoticeRes = await CustomAxios.post(
    `${userServiceUrl}/api/v1/admin/notice`,
    req
  ).then((res) => res.data);
  return response;
}

export async function UpdateNotice(req: UpdateNoticeReq) {
  const response = await CustomAxios.put(
    `${userServiceUrl}/api/v1/admin/notice`,
    req
  ).then((res) => res.data);
  return response;
}

export async function DeleteNotice(id: number) {
  const response = await CustomAxios.delete(
    `${userServiceUrl}/api/v1/admin/notice`,
    {
      params: {
        id: id,
      },
    }
  ).then((res) => res.data);
  return response;
}
