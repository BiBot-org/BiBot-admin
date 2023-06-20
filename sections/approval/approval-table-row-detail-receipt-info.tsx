import { RequestApproval } from "@/service/expense/ExpenseService";
import { useGetReceiptInfoByApproveId } from "@/service/receipt/ReceiptService";
import { RequestApprovalReq } from "@/types/approval/RequestType";
import { SearchAdminApprovalRes } from "@/types/expense/types";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import Swal from "sweetalert2";
import ApprovalManagerModal from "./approval-manager-modal";
import ApprovalTableRowDetailManagerInfo from "./approval-table-row-detail-manager-info";

interface Prop {
  approvalInfo: SearchAdminApprovalRes;
}

export default function ApprovalTableRowDetailReceiptInfo({
  approvalInfo,
}: Prop) {
  const [openModal, setOpenModal] = useState(false);
  const { isLoading, data, isError } = useGetReceiptInfoByApproveId(
    approvalInfo.id
  );
  const queryClient = useQueryClient();
  const { mutate } = useMutation((req: RequestApprovalReq) =>
    RequestApproval(req)
  );
  const onClickApprove = () => {
    Swal.fire({
      title: "확인",
      text: "승인 하시겠습니까?",
      icon: "question",
      showCancelButton: true,
    }).then((res) => {
      if (res.isConfirmed) {
        mutate(
          {
            approvalId: approvalInfo.id,
            status: "APPROVED",
            comment: "자동결제",
          },
          {
            onSuccess: () => {
              Swal.fire({
                title: "Success!",
                text: "성공적으로 처리 되었습니다.",
                icon: "success",
              }).then(() =>
                queryClient.invalidateQueries(["searchApprovalInfo"])
              );
            },
            onError: () => {
              Swal.fire({
                title: "Error!",
                text: "에러가 발생했습니다.",
                icon: "error",
              });
            },
          }
        );
      }
    });
  };
  return (
    <>
      {!(isLoading || isError) && (
        <>
          <ApprovalManagerModal
            approvalId={approvalInfo.id}
            openModal={openModal}
            setOpenModal={() => setOpenModal(false)}
          />
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid xs={4} item={true}>
                  <Card
                    sx={{
                      width: "100%",
                    }}
                  >
                    <Image
                      src={data?.data.imageUrl!!}
                      alt=""
                      width={400}
                      height={600}
                    />
                  </Card>
                </Grid>
                <Grid xs={8} item={true}>
                  <Card>
                    <CardHeader title="상세 정보" subheader="OCR 결과" />
                    <Divider />
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid xs={5} item={true}>
                          <Stack
                            spacing={2}
                            sx={{
                              mb: 2,
                            }}
                          >
                            <TextField
                              aria-readonly
                              fullWidth
                              label="승인번호"
                              value={data?.data.paymentId}
                            />
                            <TextField
                              aria-readonly
                              fullWidth
                              label="주소"
                              value={data?.data.ocrResult.storeInfo.address}
                            />
                            <TextField
                              aria-readonly
                              fullWidth
                              label="구매 총 합"
                              value={data?.data.ocrResult.totalPrice}
                            />
                          </Stack>
                          <Typography>상세 구매 정보</Typography>
                          <Stack spacing={2}>
                            {data?.data.ocrResult.items &&
                              data.data.ocrResult.items.map((item, idx) => (
                                <TextField
                                  key={`${item.name} ${idx}`}
                                  aria-readonly
                                  fullWidth
                                  label="상세 구매 정보"
                                  value={item.name}
                                />
                              ))}
                          </Stack>
                        </Grid>
                        <Grid xs={5} item={true}>
                          <Stack
                            spacing={2}
                            sx={{
                              mb: 2,
                            }}
                          >
                            <TextField
                              aria-readonly
                              fullWidth
                              label="상호명"
                              value={data?.data.ocrResult.storeInfo.storeName}
                            />
                            <TextField
                              aria-readonly
                              fullWidth
                              label="결제 날짜 / 시간"
                              value={data?.data.ocrResult.paymentInfo.date}
                            />
                            <TextField
                              aria-readonly
                              fullWidth
                              label="결제 날짜 / 시간"
                              value={data?.data.ocrResult.paymentInfo.date}
                            />
                            {approvalInfo.managerId && (
                              <ApprovalTableRowDetailManagerInfo
                                managerId={approvalInfo.managerId}
                              />
                            )}
                          </Stack>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
            {approvalInfo.status === "PENDING" && (
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <Button variant="contained" onClick={onClickApprove}>
                  승인
                </Button>
                <Button variant="contained" onClick={() => setOpenModal(true)}>
                  거절
                </Button>
              </CardActions>
            )}
          </Card>
        </>
      )}
    </>
  );
}
