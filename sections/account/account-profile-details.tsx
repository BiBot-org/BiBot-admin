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
import { CreateOrChangeUserModal } from "./account-create-modal";
import { BibotUserInfo } from "@/types/user/User";

interface Prop {
  userInfo: BibotUserInfo;
}

export const AccountProfileDetails = ({ userInfo }: Prop) => {
  const [openChangeUserModal, setOpenChangeUserModal] =
    useState<boolean>(false);

  const handleSubmit = useCallback((event: { preventDefault: () => void }) => {
    event.preventDefault();
  }, []);

  return (
    <>
      <CreateOrChangeUserModal
        open={openChangeUserModal}
        onClose={() => setOpenChangeUserModal(false)}
        userId="1234"
      />
      <Card>
        <CardHeader subheader="사원 상세 정보" title="사원 정보" />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="부서 / 팀"
                  name="division / team"
                  required
                  value={`${userInfo.department.name} / ${userInfo.team.name}`}
                />
              </Grid>

              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="직책"
                  name="country"
                  required
                  value={userInfo.bibotUser.duty}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="이메일"
                  name="state"
                  required
                  aria-readonly
                  value={userInfo.bibotUser.email}
                ></TextField>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            onClick={() => setOpenChangeUserModal(true)}
          >
            수정
          </Button>
          <Button variant="contained">삭제</Button>
        </CardActions>
      </Card>
    </>
  );
};
