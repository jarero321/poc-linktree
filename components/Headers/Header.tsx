import Image from "next/image";
import Link from "next/link";
import { WebsitesLayoutTraditionalLayoutLogotypeProps } from "../../tina/__generated__/types";
import { useRouter } from "next/router";

interface HeaderProps {
  data: WebsitesLayoutTraditionalLayoutLogotypeProps;
}
const Header: React.FC<HeaderProps> = ({ data }) => {
  const router = useRouter();
  return (
    <nav className="py-8 px-8 z-10">
      <Link href={"/" + router.asPath}>
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
