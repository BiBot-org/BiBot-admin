import { GetNotice } from "@/service/notice/NoticeService";
import { iNotice } from "@/types/notice/noticeType";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  Divider,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface iProp {
  onClose: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  noticeId: number;
}

const NoticeModalCard = styled(Card)({
  minWidth: 320,
  maxWidth: 500,
});

export const NoticeModal = (props: iProp) => {
  const { onClose, open, noticeId } = props;
  const [notice, setNotice] = useState<iNotice>({} as iNotice);

  useEffect(() => {
    if (open === true) {
      GetNotice(noticeId)
        .then((res) => {
          const result: iNotice = res;
          setNotice(result);
          console.log(notice);
        })
        .catch(() => {
          alert("공지를 불러오는 데 에러가 발생했습니다.");
        });
    }
  }, [open, noticeId]);

  return (
    <Dialog onClose={onClose} open={open}>
      <NoticeModalCard>
        <CardHeader title={notice.title} subheader="작성자" />
        <Divider />
        <CardContent>
          <Typography>{notice.content}</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained">수정</Button>
          <Button variant="contained">삭제</Button>
        </CardActions>
      </NoticeModalCard>
    </Dialog>
  );
};
