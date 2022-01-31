import Layout from "../components/layout/layout";
import CustomHead from "../components/layout/head";
import HomeImage from "../components/home/HomeImage"
export default function Home() {
  return (
    <div>
      <HomeImage />
    </div>
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