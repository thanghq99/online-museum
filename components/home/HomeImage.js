import Button from "../customComponents/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

const HomeImage = () => {
  return (
    <div className="container mx-auto">
      <div className="fixed top-0 left-0 w-full h-[100vh] z-[-1]">
        <img
          alt="home-img"
          src="/home-img.jpg"
          className="absolute object-cover h-full w-full"
        />
      </div>
      <div className="h-[65vh] w-full relative">
        <div className="p-6 bg-white absolute bottom-10 left-0 max-w-sm">
          <div className="font-bold text-2xl">
            Chào mừng tới Bảo tàng Thiên nhiên Việt Nam
          </div>
          <div className="my-6">
            Khám phá các mẫu vật được sưu tầm từ khắp mọi miền cả nước ngay tại
            nhà.
          </div>
          <Button>
            <div className="flex justify-between items-center">
              Khám phá
              <FontAwesomeIcon icon={faChevronCircleRight} />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeImage;
