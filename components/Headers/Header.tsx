import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  imgUrl: string;
}
const Header: React.FC<HeaderProps> = ({ imgUrl }) => {
  return (
    <nav className="py-8 px-8 z-10">
      <Link href="/">
        <picture>
          <Image width={40} height={40} src={imgUrl ?? ""} alt="" />
        </picture>
      </Link>
    </nav>
  );
};

export default Header;
