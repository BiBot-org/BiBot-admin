import { GetNotice } from "@/service/notice/NoticeService";
import { GetUser } from "@/service/user/UserService";
import { NoticeDTO } from "@/types/notice/noticeType";
import {
  Card,
  CardContent,
  CardHeader,
  Dialog,
  Divider,
  Skeleton,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";
import { Dispatch, SetStateAction, useState } from "react";
import { useQuery } from "@tanstack/react-query";

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
  const { data, isLoading } = useQuery(
    [`getUser : ${notice.createdBy}`],
    () => GetUser(notice.createdBy),
    {
      refetchOnWindowFocus: false,
      retry: 0,
    }
  );

  if (isLoading) {
    return (
      <Dialog onClose={onClose} open={open}>
        {" "}
        <Skeleton height="400px" />
      </Dialog>
    );
  }

  return (
    <Dialog onClose={onClose} open={open}>
      <NoticeModalCard>
        <CardHeader
          title={notice.title}
          subheader={`${data?.data.lastName} ${data?.data.firstName}`}
        />
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
