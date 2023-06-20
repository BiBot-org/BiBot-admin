import { AddCategory } from "@/service/category/CategoryService";
import { AddCategoryReq } from "@/types/category/RequestTypes";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  Divider,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { SetStateAction, useEffect } from "react";
import * as Yup from "yup";
import Swal from "sweetalert2";
interface Props {
  onClose: React.Dispatch<SetStateAction<boolean>>;
  open: boolean;
}
export default function NewCategoryModal({ onClose, open }: Props) {
  const formik = useFormik({
    initialValues: {
      categoryName: "",
      limitation: 0,
      automatedCost: 0,
      resetCycle: "DAILY",
    },
    validationSchema: Yup.object({
      categoryName: Yup.string()
        .max(30)
        .required("카테고리 명을 입력 해 주세요."),
      limitation: Yup.number().required(
        "주기 당 경비처리 총 한도를 입력 해 주세요."
      ),
      automatedCost: Yup.number().required(
        "경비 자동 처리 금액 한도를 입력 해 주세요."
      ),
    }),
    onSubmit: async (values) => {
      const req: AddCategoryReq = {
        categoryName: values.categoryName,
        limitation: values.limitation,
        automatedCost: values.automatedCost,
        resetCycle: values.resetCycle,
      };
      if (req.limitation < req.automatedCost) {
        Swal.fire({
          title: "error",
          text: "자동 경비처리 금액 한도는 총 한도를 초과할 수 없습니다.",
          icon: "error",
        });
      } else {
        Swal.fire({
          title: "Confirm",
          text: "새로운 결재 항목을 추가 하시겠습니까?",
          icon: "question",
          showCancelButton: true,
        }).then((res) => {
          if (res.isConfirmed) {
            AddCategory(req)
              .then(() => {
                Swal.fire({
                  title: "Success!",
                  text: "추가 되었습니다.",
                  icon: "success",
                });
              })
              .catch(() => {
                Swal.fire({
                  title: "Error!",
                  text: "에러가 발생했습니다.",
                  icon: "error",
                });
              });
          }
        });
      }
    },
  });

  return (
    <Dialog
      onClose={onClose}
      open={open}
      style={{
        zIndex: 10,
      }}
    >
      <Card>
        <CardHeader
          title="새로운 경비 처리 항목 생성"
          subheader="새로 생성 할 경비 항목에 대한 정보를 입력 해 주세요"
        />
        <Divider />
        <form onSubmit={formik.handleSubmit}>
          <CardContent>
            <Stack>
              <TextField
                label="이름"
                type="text"
                name="categoryName"
                required
                value={formik.values.categoryName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              <TextField
                label="총 한도"
                type="number"
                name="limitation"
                required
                value={formik.values.limitation}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              <TextField
                label="자동 결재 한도"
                type="number"
                name="automatedCost"
                required
                value={formik.values.automatedCost}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              <Typography>결재 처리 주기</Typography>
              <Select
                value={formik.values.resetCycle}
                required
                onChange={formik.handleChange}
              >
                <MenuItem value="DAILY">매일 1회</MenuItem>
                <MenuItem value="WEEKLY">매주 1회</MenuItem>
                <MenuItem value="MONTHLY">매월 1회</MenuItem>
              </Select>
            </Stack>
          </CardContent>
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button
              type="submit"
              //   onSubmit={onSubmitAddCategory}
              variant="contained"
            >
              추가
            </Button>
          </CardActions>
        </form>
      </Card>
    </Dialog>
  );
}
