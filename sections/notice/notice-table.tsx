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
} from "@mui/material";
import { Scrollbar } from "@/components/scrollbar";

export const NoticeTable = () => {
  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>공지사항</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
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
      </CardActions>
    </Card>
  );
};
