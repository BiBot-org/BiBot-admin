import { Container, Grid, Stack, Typography } from "@mui/material";
import { SetupManager } from "../setting/setting-managers";
import { SetupManagerDetails } from "../setting/setting-manager-detail";
import { useEffect, useState } from "react";
import { GetAllAdminUser } from "@/service/user/UserService";
import { AdminInfo } from "@/types/user/User";

export const ManagerContent = () => {
  const [adminUserList, setAdminUserList] = useState<AdminInfo[]>([]);

  useEffect(() => {
    GetAllAdminUser().then((res) => setAdminUserList(res.data));
  }, []);

  return (
    <Container maxWidth="xl">
      <Stack spacing={3}>
        <div>
          <Typography variant="h4">관리자 목록</Typography>
        </div>
        <div>
          <Grid container spacing={2}>
            <Grid xs={3} mr={2}>
              <SetupManager adminUserList={adminUserList} />
            </Grid>
            <Grid xs={8}>
              <SetupManagerDetails />
            </Grid>
          </Grid>
        </div>
      </Stack>
    </Container>
  );
};
