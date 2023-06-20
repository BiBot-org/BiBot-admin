import { RequestApproval } from "@/service/expense/ExpenseService";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  DialogContentText,
  DialogTitle,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import { Stack } from "@mui/system";
import { ChangeEvent, SetStateAction, useState } from "react";
import Swal from "sweetalert2";

interface Props {
  approvalId: string;
  openModal: boolean;
  setOpenModal: React.Dispatch<SetStateAction<boolean>>;
}

export default function ApprovalManagerModal({
  approvalId,
  openModal,
  setOpenModal,
}: Props) {
  const [content, setContent] = useState<string>("");

  const onChangeTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onClickSubmit = () => {
    Swal.fire({
      title: "확인",
      text: "반려 하시겠습니까?",
      icon: "question",
      showCloseButton: true,
    }).then((res) => {
      if (res.isConfirmed) {
        RequestApproval({
          approvalId: approvalId,
          status: "REJECT",
          comment: content,
        })
          .then(() => {
            Swal.fire({
              title: "Success!",
              text: "성공적으로 처리 되었습니다.",
              icon: "success",
            });
          })
          .catch(() => {
            Swal.fire({
              title: "Error!",
              text: "에러가 발생했습니다.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <Dialog open={openModal} onClose={() => setOpenModal(false)}>
      <Card>
        <CardHeader
          title="경비 요청 반려"
          subheader="경비 요청 반려 사유를 입력 해 주세요."
        />
        <CardContent>
          <TextField
            fullWidth
            label="반려 사유를 입력하세요"
            multiline
            maxRows={14}
            onChange={onChangeTextInput}
            inputProps={{
              style: {
                height: "400px",
              },
            }}
          />
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button variant="outlined" onClick={() => setOpenModal(false)}>
            취소
          </Button>
          <Button variant="contained" onClick={onClickSubmit}>
            반려
          </Button>
        </CardActions>
      </Card>
    </Dialog>
  );
}
