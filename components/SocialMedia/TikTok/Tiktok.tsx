import { TinaTemplate } from "tinacms";
import { FaTiktok } from "react-icons/fa";
import { WebsitesLayoutTraditionalLayoutSocialMedia } from "../../../tina/__generated__/types";
import Link from "next/link";

interface ButtonLinkProps {
  data: WebsitesLayoutTraditionalLayoutSocialMedia;
}

const Tiktok: React.FC<ButtonLinkProps> = ({ data }) => {
  return (
    <Link href="/">
      <FaTiktok size={30} color={data.color}/>
    </Link>
  );
};

export const TiktokSchema: TinaTemplate = {
  name: "tiktok",
  label: "Tiktok",
  fields: [
    {
      type: "string",
      label: "Url de redireccion",
      name: "title",
    },
    {
      type: "string",
      name: "color",
      label: "Color del icono",
      description: "Selecciona el color y/o introducelo en formato HEX.",
      ui: {
        component: "color",
      },
    },
  ],
};

export default Tiktok;
