import { TinaTemplate } from "tinacms";
import { FaFacebook } from "react-icons/fa";
import { WebsitesLayoutTraditionalLayoutSocialMedia } from "../../../tina/__generated__/types";
import Link from "next/link";

interface ButtonLinkProps {
  data: WebsitesLayoutTraditionalLayoutSocialMedia;
}

const Facebook: React.FC<ButtonLinkProps> = ({ data }) => {
  return (
    <Link href="/">
      <FaFacebook size={30} color={data.color} />
    </Link>
  );
};

export const FacebookSchema: TinaTemplate = {
  name: "facebook",
  label: "Facebook",
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

export default Facebook;
