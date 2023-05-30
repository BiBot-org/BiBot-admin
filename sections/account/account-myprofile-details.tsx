import { useCallback, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { BibotUserInfo } from "@/types/user/User";

interface Props {
  userInfo?: BibotUserInfo;
}

export const AccountMyProfileDetails = ({ userInfo }: Props) => {
  const [values, setValues] = useState({
    email: "demo@devias.io",
    state: "los-angeles",
    country: "USA",
    identificationNumber: "12341234",
    name: "Spharos",
    phoneNumber: "010-1234-1234",
    division: "개발 1센터",
    team: "스파로스 개발팀",
    lank: "Manager",
  });

  const handleSubmit = useCallback((event: { preventDefault: () => void }) => {
    event.preventDefault();
  }, []);

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Card>
        <CardHeader subheader="관리자 프로필" title="나의 정보" />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="이름"
                  name="lastName"
                  required
                  value={`${userInfo?.bibotUser.lastName} ${userInfo?.bibotUser.firstName}`}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="부서"
                  name="division / team"
                  required
                  value={`${userInfo?.department.name} / ${userInfo?.team.name}`}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="이메일"
                  name="state"
                  aria-readonly
                  required
                  value={userInfo?.bibotUser.email}
                ></TextField>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained">수정</Button>
        </CardActions>
      </Card>
    </form>
  );
};
