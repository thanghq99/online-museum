import Layout from "../../../components/management/layout/Layout";
import CustomHead from "../../../components/layout/head";
import { Box } from "@mantine/core";

const Samples = () => {
  return (
    <Box>
      trang quản lý mẫu vật
    </Box>
  );
};

export default Samples;

Samples.getLayout = function getLayout(page) {
  return (
    <Layout>
      <CustomHead title="Quản lý mẫu vật"/>
      {page}
    </Layout>
  )
}