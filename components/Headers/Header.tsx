import Image from "next/image";
import Link from "next/link";
import { WebsitesLayoutTraditionalLayoutLogotypeProps } from "../../tina/__generated__/types";

interface HeaderProps {
  data: WebsitesLayoutTraditionalLayoutLogotypeProps;
}
const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <nav className="py-8 px-8 z-10">
      <Link href="/">
        <picture>
          <Image
            width={40}
            height={40}
            src={data.logotype ?? ""}
            alt={data.altLogo}
          />
        </picture>
      </Link>
    </nav>
  );
};

export default Header;
