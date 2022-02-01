import NavItem from "../navigation/navItem";
import Button from "../customComponents/Button";

const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto min-h-[15vh] flex flex-col justify-between">
        <div className="py-4 flex justify-between relative">
          <div className="flex">
            {/* <Button>Menu</Button> */}
          </div>
          <div className="absolute left-0 right-0 text-center text-5xl text-white">
            <a href="/">Bảo tàng</a>
          </div>
          <div className="flex">
            <Button>Mua vé</Button>
            <Button>Đăng nhập</Button>
          </div>
        </div>
        <ul className="flex justify-center">
          <li className="font-sans">
            <NavItem title="Tham quan" url="/tham-quan" />
          </li>
          <li className="font-sans">
            <NavItem title="Bộ sưu tập" url="/bo-suu-tap" />
          </li>
          <li className="font-sans">
            <NavItem title="Tin tức" url="/tin-tuc" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
