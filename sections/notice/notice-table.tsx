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

export const NoticeTable = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [noticeId, setNoticeId] = useState<number>(0);
  return (
    <>
      <NoticeModal
        onClose={function (value: SetStateAction<boolean>): void {
          throw new Error("Function not implemented.");
        }}
        open={false}
        noticeId={0}
      />

      <Card>
        <Scrollbar>
          <Box sx={{ minWidth: 800 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ width: "20%" }}>No</TableCell>
                  <TableCell>공지사항</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  onClick={() => {
                    setNoticeId(1);
                    setModalOpen(true);
                  }}
                >
                  <TableCell>1</TableCell>
                  <TableCell>공지사항</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>공지사항</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>공지사항</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>공지사항</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>공지사항</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Scrollbar>

        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Pagination count={10} />
          <Button variant="contained">작성하기</Button>
        </CardActions>
      </Card>
    </>
  );
};
