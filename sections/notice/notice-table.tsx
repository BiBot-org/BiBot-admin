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
import React, { Dispatch, SetStateAction, useState } from "react";
import { NoticeContentModal } from "./notice-content-modal";
import { iSearchNotice } from "@/types/notice/noticeType";
import { NoticeTableRow } from "./notice-table-row";
import { SearchNoticeReq } from "@/types/notice/RequestType";

interface Props {
  searchNoticeResult: iSearchNotice;
  searchParam: SearchNoticeReq;
  setSearchParam: Dispatch<SetStateAction<SearchNoticeReq>>;
  callbackSearchParam: () => Promise<void>;
}

export const NoticeTable = ({
  searchNoticeResult,
  searchParam,
  setSearchParam,
  callbackSearchParam,
}: Props) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleChangePagination = (
    e: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setSearchParam({
      ...searchParam,
      page: value - 1,
    });
  };

  return (
    <>
      <NoticeContentModal
        onClose={() => setModalOpen(false)}
        open={modalOpen}
        isModify={false}
        callbackSearchParam={callbackSearchParam}
      />

      <Card>
        <Scrollbar>
          <Box sx={{ minWidth: 800 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ width: "10%" }}>No</TableCell>
                  <TableCell style={{ width: "60%" }}>공지사항</TableCell>
                  <TableCell style={{ width: "10%" }}>작성자</TableCell>
                  <TableCell style={{ width: "10%" }}>종류</TableCell>
                  <TableCell style={{ width: "10%" }}>수정</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {searchNoticeResult.content &&
                  searchNoticeResult.content.map((notice) => (
                    <NoticeTableRow
                      key={`notice_table_row ${notice.id}`}
                      notice={notice}
                      callbackSearchParam={callbackSearchParam}
                    />
                  ))}
              </TableBody>
            </Table>
          </Box>
        </Scrollbar>

        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Pagination
            count={searchNoticeResult.totalPage}
            page={searchParam.page + 1}
            onChange={handleChangePagination}
          />
          <Button onClick={() => setModalOpen(true)} variant="contained">
            작성하기
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
