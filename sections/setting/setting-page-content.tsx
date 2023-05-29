import { GetAllCategoryList } from "@/service/category/CategoryService";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { SetupCategories } from "./setting-categories";
import { SettingCategoriesDetails } from "./setting-categories-detail";
import { CategoryDTO } from "@/types/category/ResponseTypes";
import { GetAllCategoryListRes } from "@/types/category/ResponseType";

export const SettingPageContent = () => {
  const [categoryList, setCategoryList] = useState<CategoryDTO[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<CategoryDTO>({
    id: 0,
    categoryName: "",
    limitation: 0,
    automatedCost: 0,
    resetCycle: "",
    startDate: "",
    endDate: "",
    willBeUpdated: false,
    nextCycle: "",
  } as CategoryDTO);

  useEffect(() => {
    GetAllCategoryList().then((res: GetAllCategoryListRes) => {
      setCategoryList([...res.data]);
    });
  }, []);

  return (
    <Container maxWidth="xl">
      <Stack spacing={3}>
        <Typography variant="h4">경비 항목 설정</Typography>
        <Grid container spacing={3}>
          <Grid xs={12} md={5} mr={1} lg={3}>
            <SetupCategories
              categoryList={categoryList}
              setSelectedCategory={setSelectedCategory}
            />
          </Grid>
          <Grid xs={12} md={5} ml={1} lg={7}>
            <SettingCategoriesDetails selectedCategory={selectedCategory} />
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};
