import Layout from "../../components/management/layout/Layout";
import CustomHead from "../../components/layout/head";
import DarkModeButton from "../../components/customComponents/DarkModeButton";
import { Box } from "@mantine/core";

const Management = () => {
  return (
    <Box>
      trang quản lý bảo tàng
      <DarkModeButton />
    </Box>
  );
};

export default Management;

Management.getLayout = function getLayout(page) {
  return (
    <Layout>
      <CustomHead title="Quản lý bảo tàng"/>
      {page}
    </Layout>
  )
}