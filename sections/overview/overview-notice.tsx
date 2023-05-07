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
import { IOverviewNotice } from "@/types/notice/noticeType";

export const OverviewNotice = (props: IOverviewNotice) => {
  const { notices = [], sx } = props;

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
              {notices.map((notice) => {
                const createdAt = format(notice.createdAt, "dd/MM/yyyy");

                return (
                  <TableRow hover key={notice.id}>
                    <TableCell>{notice.title}</TableCell>
                    <TableCell>{createdAt}</TableCell>
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
