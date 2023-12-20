import { TinaTemplate } from "tinacms";
import { FaTwitter } from "react-icons/fa";
import { WebsitesLayoutTraditionalLayoutSocialMedia } from "../../../tina/__generated__/types";
import Link from "next/link";

interface ButtonLinkProps {
  data: WebsitesLayoutTraditionalLayoutSocialMedia;
}

const Twitter: React.FC<ButtonLinkProps> = ({ data }) => {
  return (
    <Link href="/">
      <FaTwitter size={30} color={data.color} />
    </Link>
  );
};

export const TwitterSchema: TinaTemplate = {
  name: "twitter",
  label: "Twitter",
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

export default Twitter;
