import { Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { Dispatch, SetStateAction } from "react";
import { AccountProfile } from "./account-profile";
import { AccountProfileDetails } from "./account-profile-details";
import { ExpenseUserHistory } from "../approval/approval-user-list";

interface iProp {
  onClose: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

export const UserInfoModal = (props: iProp) => {
  const { onClose, open } = props;
  return (
    <Dialog onClose={onClose} open={open} maxWidth="lg">
      <DialogTitle>계정 정보</DialogTitle>
      <DialogContent>
        <Container>
          <Stack spacing={3}>
            <div>
              <Grid container spacing={3}>
                <Grid xs={12} md={6} lg={4}>
                  <AccountProfile />
                </Grid>
                <Grid xs={12} md={6} lg={8}>
                  <AccountProfileDetails />
                </Grid>
              </Grid>
            </div>
            <div>
              <ExpenseUserHistory />
            </div>
          </Stack>
        </Container>
      </DialogContent>
    </Dialog>
  );
};
