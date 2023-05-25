import { GetAllCategoryList } from "@/service/category/CategoryService";
import { GetAllCategoryListRes } from "@/service/category/ResponseType";
import { CategoryDTO } from "@/types/category/ResponseTypes";

import {
  Card,
  CardHeader,
  CardActions,
  Button,
  CardContent,
  Divider,
} from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

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

  return (
    <Card>
      <CardHeader
        title="경비 항목"
        subheader="사내에서 관리 중인 경비 항목 리스트입니다. "
      />
      <Divider />
      <CardContent>
        {categoryList &&
          categoryList.map((category) => (
            <>
              <Button
                fullWidth
                variant="contained"
                key={`button : ${category.id}`}
                onClick={() => onClickButton(category)}
              >
                {category.categoryName}
              </Button>
            </>
          ))}
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button variant="contained">추가</Button>
      </CardActions>
    </Card>
  );
};
