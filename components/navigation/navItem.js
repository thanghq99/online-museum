import Link from "next/link";

const NavItem = ({ title, url }) => {
  return (
    <div className="px-4 py-2 relative text-white">
      <Link href={url}>
        <a className="hover:border-b-4">{title}</a>
      </Link>
    </div>
  );
};

export default NavItem;
