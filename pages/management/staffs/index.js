import Layout from "../../../components/management/layout/Layout";
import CustomHead from "../../../components/layout/head";
import { Box } from "@mantine/core";

const Staffs = () => {
  return (
    <Box>
      trang quản lý nhân viên
    </Box>
  );
};

export default Staffs;

Staffs.getLayout = function getLayout(page) {
  return (
    <Layout>
      <CustomHead title="Quản lý nhân viên"/>
      {page}
    </Layout>
  )
}