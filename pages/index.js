import Layout from "../components/layout/layout";
import CustomHead from "../components/layout/head";
export default function Home() {
  return (
    "home page"
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <CustomHead title="Trang chủ"/>
      {page}
    </Layout>
  )
}