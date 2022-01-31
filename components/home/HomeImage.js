import Button from "../button/Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

const HomeImage = () => {
  return (
    <div className="h-[80vh] w-full relative">
        <img
            alt="home-img"
            src="/home-img.jpg"
            className="object-cover h-full w-full"
        />
        <div className="p-6 bg-white absolute bottom-10 left-10 max-w-sm">
            <div className="font-bold text-2xl">Chào mừng tới Bảo tàng Thiên nhiên Việt Nam</div>
            <div className="my-6">Khám phá các mẫu vật được sưu tầm từ khắp mọi miền cả nước ngay tại nhà.</div>
            <Button>
                <div className="flex justify-between items-center">
                    Khám phá
                    <FontAwesomeIcon icon={faChevronCircleRight} />
                </div>
            </Button>
        </div>
    </div>
  )
};

export default HomeImage;
