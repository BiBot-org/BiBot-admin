import { useGetUserInfoByCardId } from "@/service/payment/PaymentService";
import { PaymentHistoryInfo } from "@/types/payment/types";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  Divider,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface Props {
  onClose: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  paymentHistoryInfo: PaymentHistoryInfo;
}

export default function UnproccessedHistoryDialog({
  onClose,
  open,
  paymentHistoryInfo,
}: Props) {
  const { data, isLoading } = useGetUserInfoByCardId(paymentHistoryInfo.cardId);
  if (isLoading) {
    <Dialog onClose={onClose} open={open}>
      <Skeleton width={200} height={400} />
    </Dialog>;
  }

  return (
    <Dialog onClose={onClose} open={open}>
      <Card>
        <CardHeader
          title={`${paymentHistoryInfo.regTime} 미처리 내역`}
          subheader={`카드사 : ${paymentHistoryInfo.cardCompany}`}
        />
        <Divider />
        <CardContent sx={{ pt: 0, mt: 3 }}>
          <Stack>
            <TextField
              label="거래처"
              aria-readonly
              value={paymentHistoryInfo.paymentDestination}
            />
            <TextField
              label="사원 명"
              aria-readonly
              value={`${data?.data.bibotUser.lastName} ${data?.data.bibotUser.firstName}`}
            />
            <TextField
              label="부서"
              aria-readonly
              value={`${data?.data.department.name}`}
            />
            <TextField
              label="팀"
              aria-readonly
              value={`${data?.data.team.name}`}
            />
            <TextField
              label="금액"
              aria-readonly
              value={paymentHistoryInfo.amount}
            />
          </Stack>
        </CardContent>
      </Card>
    </Dialog>
  );
}
