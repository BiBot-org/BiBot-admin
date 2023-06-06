import Config from "@/config/config.export";
import { CustomAxios } from "@/constant/CustomAxios";
import { GetApprovalThumbnailListRes } from "@/types/expense/ResponseType";

const { expenseServiceUrl } = Config();

export async function GetApprovalThumbnailList() {
  const response: GetApprovalThumbnailListRes = await CustomAxios.get(
    `${expenseServiceUrl}/api/admin/v1/approval/thumbnail`
  ).then((res) => res.data);
  return response;
}
