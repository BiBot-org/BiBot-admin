import { NoticeDTO } from "@/types/notice/noticeType";
import { NoticeModal } from "../notice/notice-modal";
import { useState } from "react";
import { TableCell, TableRow } from "@mui/material";

interface Props {
  notice: NoticeDTO;
}

export const OverviewNoticeRow = ({ notice }: Props) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <>
      <NoticeModal
        onClose={() => setModalOpen(false)}
        open={modalOpen}
        notice={notice}
      />
      <TableRow hover onClick={() => setModalOpen(true)}>
        <TableCell>{notice.title}</TableCell>
        <TableCell>{notice.regTime}</TableCell>
      </TableRow>
    </>
  );
};
