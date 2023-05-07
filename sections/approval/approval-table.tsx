import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  Pagination,
  TableRow,
  Typography,
  CardActions,
  Grid,
  Modal,
  Select,
  MenuItem,
} from "@mui/material";
import { Scrollbar } from "@/components/scrollbar";
import { approvalMockData as data } from "@/data/approvals/approvalData";

interface iProp {
  id: string;
  date: string;
  category: string;
  status: string;
  amount: string;
  name: string;
}

interface iRowProp {
  row: iProp;
}

const ExpandableTableRow = ({ row }: iRowProp): React.ReactElement => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2>거절 사유</h2>
          <Select>
            <MenuItem>거절사유 1</MenuItem>
            <MenuItem>거절사유 2</MenuItem>
            <MenuItem>거절사유 3</MenuItem>
          </Select>
        </Box>
      </Modal>
      <TableRow onClick={() => setOpen(!open)}>
        <TableCell>{row.id}</TableCell>
        <TableCell>{row.date}</TableCell>
        <TableCell>{row.category}</TableCell>
        <TableCell>{row.status}</TableCell>
        <TableCell>{row.amount}</TableCell>
        <TableCell>{row.name}</TableCell>
      </TableRow>
      {open && (
        <TableRow>
          <TableCell colSpan={6}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid xs={12} lg={4} sm={12}>
                    <Card>
                      <CardContent>
                        <img
                          src="/assets/image/receipt_image.jpg"
                          alt=""
                          width="50%"
                          height="50%"
                        />
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid xs={12} lg={8} sm={12}>
                    <Card>
                      <CardContent>
                        <Typography>상호 명 : 스파로스</Typography>
                        <Typography>
                          결제 날짜 / 시간 : 2023-05-02 오후 2시 30분
                        </Typography>
                        <Typography>카드 번호 : 1234-1234-1234-****</Typography>
                        <Typography>경비 총합 : 30,000</Typography>
                        <Typography>결재 요청자 : 드루와 사원</Typography>
                        <Typography>결제 담당자 : 쿠쿠섬 대리</Typography>
                        <Typography>결제 사유 : 자동 승인</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <Button variant="contained">승인</Button>
                <Button variant="contained" onClick={() => setOpenModal(true)}>
                  거절
                </Button>
              </CardActions>
            </Card>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

export const ApprovalTable = () => {
  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>날짜</TableCell>
                <TableCell>항목</TableCell>
                <TableCell>승인여부</TableCell>
                <TableCell>금액</TableCell>
                <TableCell>사원명</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((e) => (
                <ExpandableTableRow key={e.name} row={e} />
              ))}
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
