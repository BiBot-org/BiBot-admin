import { CategoryDTO } from "@/types/category/types";
import {
  Card,
  CardHeader,
  CardActions,
  Button,
  CardContent,
  Divider,
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import NewCategoryModal from "./setting-new-category-modal";
import { Stack } from "@mui/system";

interface Props {
  categoryList: CategoryDTO[];
  setSelectedCategory: Dispatch<SetStateAction<CategoryDTO>>;
}

export const SetupCategories = ({
  categoryList,
  setSelectedCategory,
}: Props) => {
  const onClickButton = (category: CategoryDTO) => {
    setSelectedCategory(category);
  };

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <NewCategoryModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <Card>
        <CardHeader
          title="경비 항목"
          subheader="사내에서 관리 중인 경비 항목 리스트입니다. "
        />
        <Divider />
        <CardContent>
          <Stack spacing={2}>
            {categoryList &&
              categoryList.map((category) => (
                <Button
                  fullWidth
                  variant="contained"
                  key={`button : ${category.id}`}
                  onClick={() => onClickButton(category)}
                >
                  {category.categoryName}
                </Button>
              ))}
          </Stack>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained" onClick={() => setModalOpen(true)}>
            추가
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
