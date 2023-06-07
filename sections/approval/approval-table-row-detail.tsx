import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  MenuItem,
  Modal,
  Select,
  Stack,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ApprovalManagerModal from "./approval-manager-modal";
import Image from "next/image";
import { SearchAdminApprovalRes } from "@/types/expense/types";
import { useGetReceiptInfoByApproveId } from "@/service/receipt/ReceiptService";
import Swal from "sweetalert2";
import { RequestApproval } from "@/service/expense/ExpenseService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RequestApprovalReq } from "@/types/approval/RequestType";

interface Prop {
  approvalInfo: SearchAdminApprovalRes;
}

export default function ApprovalTableRowDetail({ approvalInfo }: Prop) {
  const [openModal, setOpenModal] = useState(false);
  const queryClient = useQueryClient();
  const { isLoading, data } = useGetReceiptInfoByApproveId(approvalInfo.id);
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

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <>
      <ApprovalManagerModal
        approvalId={approvalInfo.id}
        openModal={openModal}
        setOpenModal={() => setOpenModal(false)}
      />
      <TableRow>
        <TableCell colSpan={6}>
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
                <Grid xs={4} item={true}>
                  <Card>
                    <CardHeader title="상세 정보" subheader="OCR 결과" />
                    <Divider />
                    <CardContent>
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
                          value={""}
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
                    </CardContent>
                  </Card>
                </Grid>
                <Grid xs={4} item={true}>
                  <Card>
                    <CardContent>
                      <Typography>
                        상호 명 : {data?.data.ocrResult.storeInfo.storeName}
                      </Typography>
                      <Typography>
                        결제 날짜 / 시간 :{" "}
                        {data?.data.ocrResult.paymentInfo.date}
                      </Typography>
                      <Typography>카드 번호 : 1234-1234-1234-****</Typography>
                      <Typography>
                        경비 총합 : {data?.data.ocrResult.totalPrice}
                      </Typography>
                      <Typography>
                        결재 요청자 : {approvalInfo.requesterId}
                      </Typography>
                      <Typography>
                        결제 담당자 : {approvalInfo.managerId}
                      </Typography>
                      <Typography>
                        결제 사유 : {approvalInfo.comment}
                      </Typography>
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
        </TableCell>
      </TableRow>
    </>
  );
}
