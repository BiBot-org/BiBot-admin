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
import { IOverviewApproval } from "@/types/approval/approvalType";

const statusMap = {
  pending: "warning",
  approved: "success",
  reject: "error",
};

export const OverviewApproval = (props: IOverviewApproval) => {
  const { approvals = [], sx } = props;

  return (
    <Card sx={sx}>
      <CardHeader title="결재현황" />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>결재번호</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>부서 / 팀</TableCell>
                <TableCell>결재 항목</TableCell>
                <TableCell sortDirection="desc">Date</TableCell>
                <TableCell>승인 여부</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {approvals.map((approval) => {
                const createdAt = format(approval.createdAt, "dd/MM/yyyy");

                return (
                  <TableRow hover key={approval.id}>
                    <TableCell>{approval.id}</TableCell>
                    <TableCell>{approval.name}</TableCell>
                    <TableCell>{`${approval.division} / ${approval.team}`}</TableCell>
                    <TableCell>{approval.approvalCategory}</TableCell>
                    <TableCell>{createdAt}</TableCell>
                    <TableCell>{approval.status}</TableCell>
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

OverviewApproval.prototype = {
  orders: PropTypes.array,
  sx: PropTypes.object,
};
