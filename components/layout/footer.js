import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { mapMakerAlt } from "@fortawesome/free-solid-svg-icons";
import Button from "../customComponents/Button";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col bg-neutral-800 text-white">
        <div className="container mx-auto">
          <div className="flex py-8">
            <div className="w-1/2">
              <div className="text-5xl">Liên hệ với chúng tôi</div>
              <div className="flex flex-col text-2xl">
                <div className="my-8">
                  <Link href="https://www.facebook.com/baotangthiennhien/">
                    <a className="mr-4">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </Link>
                  <Link href="tel:+02437568328">
                    <a>
                      <FontAwesomeIcon icon={faPhone} />
                    </a>
                  </Link>
                </div>
                <div>
                  <FontAwesomeIcon icon={mapMakerAlt} /> Số 18(B-C), Hoàng Quốc Việt - Cầu Giấy - Hà Nội
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="text-2xl">
                Đăng ký tin tức mới nhất từ chúng tôi
              </div>
              <div className="flex w-full my-4">
                <input type="text" placeholder="Nhập email của bạn" className="grow box-content text-black px-3 py-2 bg-white border border-slate-300 text-xl placeholder-slate-400 focus:outline-none"></input>
                <Button>Đăng ký</Button>
              </div>
              {/* <Button onClick={()=> window.scrollTo(0, 0)}>Lên đầu trang</Button> */}
            </div>
          </div>
          <div className="flex"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
