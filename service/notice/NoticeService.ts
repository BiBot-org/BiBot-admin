import Config from "@/config/config.export";
import { CustomAxios } from "@/constant/CustomAxios";
import { iNotice } from "@/types/notice/noticeType";

const { baseUrl } = Config();

export async function GetNoticeMain() {
  return await CustomAxios.get(
    baseUrl + "/user-service/api/v1/notice/main"
  ).then((res) => res.data);
}

export async function GetNotice(noticeId: number) {
  return await CustomAxios.get(baseUrl + "/user-service/api/v1/notice", {
    params: {
      id: noticeId,
    },
  }).then((res) => {
    const response: iNotice = res.data.data;
    return response;
  });
}
