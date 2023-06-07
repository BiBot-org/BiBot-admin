"use client";
import { GetAllCategoryList } from "@/service/category/CategoryService";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { SetupCategories } from "./setting-categories";
import { SettingCategoriesDetails } from "./setting-categories-detail";
import { GetAllCategoryListRes } from "@/types/category/ResponseType";
import { CategoryDTO } from "@/types/category/types";

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
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Typography variant="h4">경비 항목 설정</Typography>
          <Grid container spacing={3}>
            <Grid xs={4} item={true}>
              <SetupCategories
                categoryList={categoryList}
                setSelectedCategory={setSelectedCategory}
              />
            </Grid>
            <Grid xs={6} item={true}>
              <SettingCategoriesDetails selectedCategory={selectedCategory} />
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};
