import Config from "@/config/config.export";
import { CustomAxios } from "@/utils/CustomAxios";

const { baseUrl } = Config();

export async function GetNoticeMain() {
  return CustomAxios.get(baseUrl + "/api/v1/notice/main").then(
    (res) => res.data
  );
}
