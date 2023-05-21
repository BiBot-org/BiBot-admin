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

export const AccountProfileDetails = () => {
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
  const [openChangeUserModal, setOpenChangeUserModal] =
    useState<boolean>(false);

  const handleChange = useCallback(
    (event: { target: { name: any; value: any } }) => {
      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    },
    []
  );

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
                  label="이름"
                  name="lastName"
                  onChange={handleChange}
                  required
                  value={values.name}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="부서 / 팀"
                  name="division / team"
                  onChange={handleChange}
                  required
                  value={`${values.division} / ${values.team}`}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="연락처"
                  name="email"
                  onChange={handleChange}
                  value={values.phoneNumber}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="직급"
                  name="country"
                  onChange={handleChange}
                  required
                  value={values.lank}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="이메일"
                  name="state"
                  onChange={handleChange}
                  required
                  aria-readonly
                  value={values.email}
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
