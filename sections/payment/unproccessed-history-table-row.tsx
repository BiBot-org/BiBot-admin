import { PaymentHistoryInfo } from "@/types/payment/types";
import { TableCell, TableRow } from "@mui/material";
import UnproccessedHistoryDialog from "./unproccessed-history-dialog";
import { useState } from "react";
import { useGetUserInfoByCardId } from "@/service/payment/PaymentService";

interface Prop {
  element: PaymentHistoryInfo;
}

export default function UnproccessedHistoryTableRow({ element }: Prop) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { isLoading, data } = useGetUserInfoByCardId(element.cardId);
  if (isLoading) {
    return <div>loading</div>;
  }
  return (
    <>
      <UnproccessedHistoryDialog
        onClose={() => setModalOpen(false)}
        open={modalOpen}
        paymentHistoryInfo={element}
      />
      <TableRow onClick={() => setModalOpen(true)}>
        <TableCell>{element.id}</TableCell>
        <TableCell>{`${data?.data.bibotUser.lastName} ${data?.data.bibotUser.firstName}`}</TableCell>
        <TableCell>{element.paymentDestination}</TableCell>
        <TableCell>{element.amount}</TableCell>
        <TableCell>{element.regTime}</TableCell>
      </TableRow>
    </>
  );
}
