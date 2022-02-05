import Layout from "../../../components/management/layout/Layout";
import { Box } from "@mantine/core";
import CustomHead from "../../../components/layout/head";

const StaticsAndReports = () => {
  return (
    <Box>
      trang báo cáo và thống kê
    </Box>
  );;
};

export default StaticsAndReports;

StaticsAndReports.getLayout = function getLayout(page) {
    return (
      <Layout>
        <CustomHead title="Báo cáo và thống kê"/>
        {page}
      </Layout>
    )
  }