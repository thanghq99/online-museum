import Layout from "../components/layout/layout";
import CustomHead from "../components/layout/head";

const Custom404 = () => {
  return <div>not found</div>;
};

export default Custom404;

Custom404.getLayout = function getLayout(page) {
    return (
      <Layout>
        <CustomHead title="Không tìm thấy trang"/>
        {page}
      </Layout>
    )
  }
