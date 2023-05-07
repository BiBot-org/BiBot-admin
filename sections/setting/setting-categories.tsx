import {
  Card,
  CardHeader,
  CardActions,
  Button,
  CardContent,
  Divider,
} from "@mui/material";

export const SetupCategories = () => (
  <Card>
    <CardHeader
      title="경비 항목"
      subheader="사내에서 관리 중인 경비 항목 리스트입니다. "
    />
    <Divider />
    <CardContent>
      <Button fullWidth variant="text">
        식비
      </Button>
      <Button fullWidth variant="text">
        유류비
      </Button>
      <Button fullWidth variant="text">
        회의비
      </Button>
    </CardContent>
    <Divider />
    <CardActions sx={{ justifyContent: "flex-end" }}>
      <Button variant="contained">추가</Button>
    </CardActions>
  </Card>
);
