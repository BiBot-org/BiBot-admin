import { GetNotice } from "@/service/notice/NoticeService";
import { GetUser } from "@/service/user/UserService";
import { NoticeDTO, iNotice } from "@/types/notice/noticeType";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface iProp {
  onClose: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  notice: NoticeDTO;
}

const NoticeModalCard = styled(Card)({
  minWidth: 400,
  maxWidth: 600,
});

export const NoticeModal = ({ onClose, open, notice }: iProp) => {
  const [author, setAuthor] = useState<string>("");

  useEffect(() => {
    if (notice.createdBy) {
      GetUser(notice.createdBy).then((res) => {
        const userName = `${res.data.lastName} ${res.data.firstName}`;
        setAuthor(userName);
      });
    }
  }, [notice]);

  return (
    <Dialog onClose={onClose} open={open}>
      <NoticeModalCard>
        <CardHeader title={notice.title} subheader={author} />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            aria-readonly
            multiline
            value={notice.content}
            inputProps={{
              style: {
                height: "400px",
              },
            }}
          />
        </CardContent>
      </NoticeModalCard>
    </Dialog>
  );
};
