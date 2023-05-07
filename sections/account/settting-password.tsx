import { useCallback, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  TextField,
} from "@mui/material";

export const SettingsPassword = () => {
  const [values, setValues] = useState({
    password: "",
    confirm: "",
  });

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
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader subheader="비밀번호 변경" title="비밀번호" />
        <Divider />
        <CardContent>
          <Stack spacing={3} sx={{ maxWidth: 400 }}>
            <TextField
              fullWidth
              label="기존 비밀번호"
              name="password"
              onChange={handleChange}
              type="password"
              value={values.password}
            />
            <TextField
              fullWidth
              label="변경 된 비밀번호"
              name="password"
              onChange={handleChange}
              type="password"
              value={values.password}
            />
            <TextField
              fullWidth
              label="비밀번호 확인"
              name="confirm"
              onChange={handleChange}
              type="password"
              value={values.confirm}
            />
          </Stack>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained">수정</Button>
        </CardActions>
      </Card>
    </form>
  );
};
