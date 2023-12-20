import { TinaTemplate } from "tinacms";
import { FaInstagram } from "react-icons/fa";
import { WebsitesLayoutTraditionalLayoutSocialMedia } from "../../../tina/__generated__/types";
import Link from "next/link";

interface ButtonLinkProps {
  data: WebsitesLayoutTraditionalLayoutSocialMedia;
}

const Instagram: React.FC<ButtonLinkProps> = ({ data }) => {
  return (
    <Link href="/">
      <FaInstagram size={30} color={data.color} />
    </Link>
  );
};

export const InstagramSchema: TinaTemplate = {
  name: "instagram",
  label: "Instagram",
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

export default Instagram;
