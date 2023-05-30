import { useEffect, useState } from "react";
import { NoticeContentModal } from "./notice-content-modal";
import { NoticeDTO } from "@/types/notice/noticeType";
import { GetUser } from "@/service/user/UserService";
import { Button, TableCell, TableRow } from "@mui/material";
import { useSession } from "next-auth/react";
import { NoticeModal } from "./notice-modal";

interface Prop {
  notice: NoticeDTO;
  callbackSearchParam: () => Promise<void>;
}

export const NoticeTableRow = ({ notice, callbackSearchParam }: Prop) => {
  const session = useSession();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modifyOpen, setModifyOpen] = useState<boolean>(false);
  const [author, setAuthor] = useState<string>("");
  useEffect(() => {
    GetUser(notice.createdBy).then((res) =>
      setAuthor(`${res.data.lastName} ${res.data.firstName}`)
    );
  }, []);

  return (
    <>
      <NoticeModal
        onClose={() => setModalOpen(false)}
        open={modalOpen}
        notice={notice}
      />
      <NoticeContentModal
        onClose={() => setModifyOpen(false)}
        open={modifyOpen}
        isModify={true}
        notice={notice}
        callbackSearchParam={callbackSearchParam}
      />
      <TableRow>
        <TableCell>{notice.id}</TableCell>
        <TableCell onClick={() => setModalOpen(true)}>{notice.title}</TableCell>
        <TableCell>{author}</TableCell>
        <TableCell>{notice.type}</TableCell>
        {notice.createdBy === session.data?.tokenInfo.id && (
          <TableCell>
            <Button onClick={() => setModifyOpen(true)}>수정</Button>
          </TableCell>
        )}
      </TableRow>
    </>
  );
};
