import HighlightLink from "../customComponents/HighlightLink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const OpeningInfo = () => {
  return (
    <div className="w-full min-h-[20vh] text-white bg-gradient-to-t from-black to-neutral-900/90">
        <div className="container mx-auto flex">
            <div className="py-12 w-3/4 text-4xl font-bold">
                Khám phá hàng trăm mẫu vật 
                <br></br>
                trực tiếp tại bảo tàng
            </div>
            <div className="py-10 flex flex-col w-1/3 text-xl">
                <div className="mb-2"><FontAwesomeIcon icon={faTicketAlt} fixedWidth className="mr-2"></FontAwesomeIcon>Miễn phí - <HighlightLink title="Đặt vé" url="/dat-ve" /></div>
                <div className="mb-2"><FontAwesomeIcon icon={faCalendarAlt} fixedWidth className="mr-2"></FontAwesomeIcon>Mở cửa từ Thứ 3 - CN</div>
                <div className="mb-2"><FontAwesomeIcon icon={faClock} fixedWidth className="mr-2"></FontAwesomeIcon>Sáng: 8h30 - 11h30; Chiều: 13h30 - 16h30</div>
            </div>
        </div>
    </div>
  )
  
};

export default OpeningInfo;
