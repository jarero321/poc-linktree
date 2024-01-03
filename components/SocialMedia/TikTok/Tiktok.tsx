import { TinaTemplate } from "tinacms";
import { FaTiktok } from "react-icons/fa";
import { WebsitesLayoutTraditionalLayoutSocialMedia } from "../../../tina/__generated__/types";
import { useContext } from "react";
import { SharedStateContext } from "../../../context/layoutContext";

interface ButtonLinkProps {
  data: WebsitesLayoutTraditionalLayoutSocialMedia;
}

const Tiktok: React.FC<ButtonLinkProps> = ({ data }) => {
  const state = useContext(SharedStateContext);
  return (
    <a href={data.urlName ?? ""} target="_blank">
      <FaTiktok size={30} color={state.state[data.color]} />
    </a>
  );
};

export const TiktokSchema = {
  name: "tiktok",
  label: "Tiktok",
  fields: [
    {
      type: "string",
      label: "Url de redireccion",
      name: "urlName",
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

export default Tiktok;
