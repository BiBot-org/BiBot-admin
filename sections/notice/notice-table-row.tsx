import { useEffect, useState } from "react";
import { NoticeContentModal } from "./notice-content-modal";
import { NoticeDTO } from "@/types/notice/noticeType";
import { GetUser } from "@/service/user/UserService";
import { TableCell, TableRow } from "@mui/material";
import { useSession } from "next-auth/react";

interface Prop {
  notice: NoticeDTO;
}

export const NoticeTableRow = ({ notice }: Prop) => {
  const session = useSession();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [author, setAuthor] = useState<string>("");
  useEffect(() => {
    GetUser(notice.createdBy).then((res) =>
      setAuthor(`${res.data.lastName} ${res.data.firstName}`)
    );
  }, []);

  return (
    <>
      <NoticeContentModal
        onClose={() => setModalOpen(false)}
        open={modalOpen}
        isModify={true}
        notice={notice}
      />
      <TableRow
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <TableCell>{notice.id}</TableCell>
        <TableCell>{notice.title}</TableCell>
        <TableCell>{author}</TableCell>
        <TableCell>{notice.type}</TableCell>
      </TableRow>
    </>
  );
};
