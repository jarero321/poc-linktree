import { TinaTemplate } from "tinacms";
import { FaInstagram } from "react-icons/fa";
import { WebsitesLayoutTraditionalLayoutSocialMedia } from "../../../tina/__generated__/types";
import Link from "next/link";
import { useContext } from 'react';
import { SharedStateContext } from '../../../context/layoutContext';

interface ButtonLinkProps {
  data: WebsitesLayoutTraditionalLayoutSocialMedia;
}

const Instagram: React.FC<ButtonLinkProps> = ({ data }) => {
  const state = useContext(SharedStateContext);
  return (
    <Link href="/">
      <FaInstagram size={30} color={state.state[data.color]} />
    </Link>
  );
};

export const InstagramSchema = {
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
      label: "Color del boton",
      description: "Selecciona el color.",
      ui: {
        component: "select",
        options: ["primaryColor", "secondaryColor", "thirdColor"],
      },
    },
  ],
};

export default Instagram;
