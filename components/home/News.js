import SectionHeader from "../navigation/SectionHeader"
import NewsTeaser from "../home/NewsTeaser"

const news = [
  {
    title: "Phát hiện loài chuột chũi mới ở khu vực Tây Nguyên",
    summary: "Dựa trên kết quả phân tích thống kê đa biến của 140 mẫu vật Chuột chũi, thu thập tại 18 địa điểm khác nhau ở Việt Nam, trong đó có các mẫu vật thu thập tại VQG.",
    imgUrl: "https://vnmn.ac.vn/public/upload/filemanager/2021/T11/1011/Untitled.png",
    url: "/tin-tuc/1"
  },
  {
    title: "Phát hiện hai loài cá cóc mới cho khoa học ở Việt Nam",
    summary: "Nhóm các nghiên cứu Việt Nam và Đức đã phát hiện và mô tả hai loài mới gồm Tylototriton pasmansi (gồm phân loài mới là Tylototriton pasmansi obsti) và Tylototriton sparreboomi và thuộc nhóm Tylototriton asperrimus.",
    imgUrl: "https://www.vnmn.ac.vn/public/upload/filemanager/2021/T09/2909/Untitled2.png",
    url: "/tin-tuc/2"
  },
  {
    title: "Bảo tàng thiên nhiên Việt Nam tổ chức lễ đón nhận bằng khên của thủ tướng chính phủ và hội nghị tổng kết công tác năm 2021, kế hoạch 2022",
    summary: "Sáng ngày 21/01/2022, Bảo tàng Thiên nhiên Việt Nam (TNVN) tổ chức Lễ đón nhận Bằng khen của Thủ tướng Chính phủ và Hội nghị tổng kết công tác năm 2021, kế hoạch năm 2022.",
    imgUrl: "https://vnmn.ac.vn/public/upload/filemanager/2022/T01/2401/bk.png",
    url: "/tin-tuc/3"
  },
  {
    title: "Thông báo đóng cửa phòng trưng bày tiến hóa sinh giới",
    summary: "Do diễn biến phức tạp của dịch Covid-19 trên địa bàn Hà Nội, Bảo tàng tạm thời đóng cửa Phòng Trưng bày Tiến hóa sinh giới từ ngày 23/12/2021 cho đến khi có thông báo mới.",
    imgUrl: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/08/bao-tang-thien-nhien-viet-nam.jpg",
    url: "/tin-tuc/4"
  }
]

const News = () => {
  return (
      <div className="bg-black pb-12">
          <div className="container mx-auto">
            <SectionHeader sectionTitle="Tin tức" linkTitle="Xem toàn bộ tin tức" linkUrl="/tin-tuc"/>
            <div className="grid gap-16 grid-cols-4">
              {news.map((n, index) => (
                <NewsTeaser key={index} title={n.title} summary={n.summary} imgUrl={n.imgUrl}/>
              ))}
            </div>
          </div>
      </div>
  );
};

export default News;
