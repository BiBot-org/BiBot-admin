import Head from "next/head";
import { Box, Container, Unstable_Grid2 as Grid, Stack } from "@mui/material";
import { Layout as DashboardLayout } from "@/layouts/dashboard/layout";
import { Typography } from "@mui/material";
import { SetupCategories } from "@/sections/setting/setting-categories";
import { SettingCategoriesDetails } from "@/sections/setting/setting-categories-detail";
import { ReactElement, useCallback, useEffect, useState } from "react";

import { GetAllCategoryList } from "@/service/category/CategoryService";
import { GetAllCategoryListRes } from "@/service/category/ResponseType";
import { CategoryDTO } from "@/types/category/ResponseTypes";
const now = new Date();

const Page = () => {
  const [categoryList, setCategoryList] = useState<CategoryDTO[]>([]);
  const [categoryId, setCategoryId] = useState<number>(-1);
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
    <>
      <Head>
        <title>BiBot | 환경설정 </title>
      </Head>
      <Box>
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <div>
              <Typography variant="h4">경비 항목 설정</Typography>
            </div>
            <div>
              <Grid container spacing={3}>
                <Grid xs={12} md={6} lg={4}>
                  <SetupCategories
                    categoryList={categoryList}
                    setSelectedCategory={setSelectedCategory}
                  />
                </Grid>
                <Grid xs={12} md={6} lg={8}>
                  <SettingCategoriesDetails
                    selectedCategory={selectedCategory}
                  />
                </Grid>
              </Grid>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Page;
