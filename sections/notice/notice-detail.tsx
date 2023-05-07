import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";

export const NoticeDetailContents = () => {
  return (
    <Card>
      <CardHeader title="공지사항 제목" subheader="작성자" />
      <Divider />
      <CardContent>
        <Typography>니들이 게맛을 알어?</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button variant="contained">수정</Button>
        <Button variant="contained">삭제</Button>
      </CardActions>
    </Card>
  );
};
