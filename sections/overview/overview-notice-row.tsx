import { NoticeDTO } from "@/types/notice/noticeType";
import { NoticeModal } from "../notice/notice-modal";
import { useState } from "react";
import { TableCell, TableRow } from "@mui/material";
import { getFormattedDateTimeFromLocalDateTime } from "@/utils/dateUtils";

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
        <TableCell>
          {getFormattedDateTimeFromLocalDateTime(notice.regTime)}
        </TableCell>
      </TableRow>
    </>
  );
};
