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
import { useState } from "react";
import { GetApprovalThumbnailList } from "@/service/expense/ExpenseService";
import { ApprovalInfo } from "@/types/expense/types";
import { useQuery } from "@tanstack/react-query";
import { ApprovalThumbnailContent } from "../approval/approval-thumbnail-content";
import { useRouter } from "next/navigation";

export const OverviewApproval = (props: IOverviewApproval) => {
  const { sx } = props;
  const [approvalList, setApprovalList] = useState<ApprovalInfo[]>([]);
  const router = useRouter();

  const { isLoading } = useQuery(
    [`approvalThumbnail`],
    () => GetApprovalThumbnailList(),
    {
      refetchOnWindowFocus: false,
      retry: 0,
      onSuccess: (data) => {
        setApprovalList([...data.data]);
      },
    }
  );

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
              {approvalList &&
                !isLoading &&
                approvalList.map((approval) => {
                  return (
                    <ApprovalThumbnailContent
                      key={approval.approval.id}
                      approval={approval}
                    />
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
          onClick={() => router.push("/approval")}
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
