import PropTypes from "prop-types";
import { format } from "date-fns";
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  Pagination,
  TableRow,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Scrollbar } from "@/components/scrollbar";
import { NoticeModal } from "./notice-modal";
import { SetStateAction, useState } from "react";
import { NoticeContentModal } from "./notice-content-modal";
import { iSearchNotice } from "@/types/notice/noticeType";
import { SearchNoticeReq } from "@/types/notice/RequesetType";
import { NoticeTableRow } from "./notice-table-row";

interface Props {
  searchNoticeResult: iSearchNotice;
  searchParam: SearchNoticeReq;
}

export const NoticeTable = ({ searchNoticeResult, searchParam }: Props) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [noticeId, setNoticeId] = useState<number>(0);
  return (
    <>
      <NoticeContentModal
        onClose={() => setModalOpen(false)}
        open={modalOpen}
        isModify={false}
      />

      <Card>
        <Scrollbar>
          <Box sx={{ minWidth: 800 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>No</TableCell>
                  <TableCell style={{ width: "40%" }}>공지사항</TableCell>
                  <TableCell style={{ width: "20%" }}>작성자</TableCell>
                  <TableCell style={{ width: "10%" }}>등급</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {searchNoticeResult.content &&
                  searchNoticeResult.content.map((notice) => (
                    <>
                      <NoticeTableRow
                        key={`notice_table_row ${notice.id}`}
                        notice={notice}
                      />
                    </>
                  ))}
              </TableBody>
            </Table>
          </Box>
        </Scrollbar>

        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Pagination
            count={searchNoticeResult.totalPage}
            page={searchNoticeResult.pageNo + 1}
          />
          <Button onClick={() => setModalOpen(true)} variant="contained">
            작성하기
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
