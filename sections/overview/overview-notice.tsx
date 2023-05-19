import { format } from "date-fns";
import PropTypes from "prop-types";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Scrollbar } from "@/components/scrollbar";
import { IOverviewNotice, NoticeInfo } from "@/types/notice/noticeType";
import { GetNoticeMain } from "@/service/notice/NoticeService";
import { useEffect, useState } from "react";

export const OverviewNotice = (props: IOverviewNotice) => {
  const { sx } = props;
  const [noticeListMain, setNoticeListMain] = useState<NoticeInfo[]>([]);
  useEffect(() => {
    GetNoticeMain()
      .then((res) => {
        const response: NoticeInfo[] = res.data;
        setNoticeListMain([...response]);
      })
      .catch((ex) => console.log(ex));
  }, []);

  return (
    <Card sx={sx}>
      <CardHeader title="공지사항" />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>제목</TableCell>
                <TableCell sortDirection="desc">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {noticeListMain.map((notice) => {
                return (
                  <TableRow hover key={"notice : " + notice.id}>
                    <TableCell>{notice.title}</TableCell>
                    <TableCell>{notice.regTime}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          color="inherit"
          endIcon={
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          }
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions>
    </Card>
  );
};

OverviewNotice.prototype = {
  orders: PropTypes.array,
  sx: PropTypes.object,
};
