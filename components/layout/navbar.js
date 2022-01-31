import NavItem from "../navigation/navItem";
import Button from "../button/Button"

const Navbar = () => {
  return (
    <div className="px-5 bg-black h-[20vh] flex flex-col justify-between">
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
  );
};

export default Navbar;
