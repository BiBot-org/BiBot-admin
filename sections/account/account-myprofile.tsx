import { BibotUserInfo } from "@/types/user/User";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

const user = {
  avatar: "/assets/avatars/avatar-anika-visser.png",
  division: "개발 1센터",
  team: "스파로스 개발팀",
  jobTitle: "Senior Developer",
  name: "Spharos",
  lank: "사원",
};

interface Props {
  userInfo?: BibotUserInfo;
}

export const AccountMyProfile = ({ userInfo }: Props) => (
  <Card>
    <CardContent>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {userInfo && (
          <>
            <Avatar
              src={user.avatar}
              sx={{
                height: 175,
                mb: 2,
                width: 175,
              }}
            />
            <Typography gutterBottom variant="h5">
              {`${userInfo.bibotUser.lastName} ${userInfo.bibotUser.firstName}`}
            </Typography>
            <Typography color="text.secondary" variant="body1">
              {userInfo.department.name} {userInfo.team.name}
            </Typography>
          </>
        )}
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      <Button fullWidth variant="text">
        프로필 변경
      </Button>
    </CardActions>
  </Card>
);
