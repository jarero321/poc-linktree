import { TinaTemplate } from "tinacms";
import { FaTwitter } from "react-icons/fa";
import { WebsitesLayoutTraditionalLayoutSocialMedia } from "../../../tina/__generated__/types";
import Link from "next/link";
import { useContext } from "react";
import { SharedStateContext } from "../../../context/layoutContext";

interface ButtonLinkProps {
  data: WebsitesLayoutTraditionalLayoutSocialMedia;
}

const Twitter: React.FC<ButtonLinkProps> = ({ data }) => {
  const state = useContext(SharedStateContext);
  return (
    <Link href="/">
      <FaTwitter size={30} color={state.state[data.color]} />
    </Link>
  );
};

export const TwitterSchema = {
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
      label: "Color del boton",
      description: "Selecciona el color.",
      ui: {
        component: "select",
        options: ["primaryColor", "secondaryColor", "thirdColor"],
      },
    },
  ],
};

export default Twitter;
