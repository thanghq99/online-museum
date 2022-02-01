import Layout from "../components/layout/layout";
import CustomHead from "../components/layout/head";
import HomeImage from "../components/home/HomeImage"
import OpeningInfo from "../components/home/OpeningInfo"
import News from "../components/home/News"
export default function Home() {
  return (
    <div>
      <HomeImage />
      <OpeningInfo />
      <News/>
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