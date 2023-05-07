import {
  Card,
  CardHeader,
  CardActions,
  Button,
  CardContent,
  Divider,
} from "@mui/material";

export const SetupManager = () => (
  <Card>
    <CardHeader
      title="관리자 목록"
      subheader="현재 등록 된 관리자 계정입니다. "
    />
    <Divider />
    <CardContent>
      <Button fullWidth variant="text">
        스파로스1
      </Button>
      <Button fullWidth variant="text">
        스파로스2
      </Button>
      <Button fullWidth variant="text">
        스파로스3
      </Button>
    </CardContent>
    <Divider />
    <CardActions sx={{ justifyContent: "flex-end" }}>
      <Button variant="contained">추가</Button>
    </CardActions>
  </Card>
);
