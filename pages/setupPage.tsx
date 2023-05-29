import Head from "next/head";
import { Box, Container, Unstable_Grid2 as Grid, Stack } from "@mui/material";
import { Layout as DashboardLayout } from "@/layouts/dashboard/layout";
import { Typography } from "@mui/material";
import { SetupCategories } from "@/sections/setting/setting-categories";
import { SettingCategoriesDetails } from "@/sections/setting/setting-categories-detail";
import { ReactElement, useCallback, useEffect, useState } from "react";

import { GetAllCategoryList } from "@/service/category/CategoryService";
import { CategoryDTO } from "@/types/category/ResponseTypes";
import { SettingPageContent } from "@/sections/setting/setting-page-content";
import { GetAllCategoryListRes } from "@/types/category/ResponseType";
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
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <SettingPageContent />
      </Box>
    </>
  );
};

Page.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);
Page.auth = true;
export default Page;
