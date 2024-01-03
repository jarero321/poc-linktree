import { TinaTemplate } from "tinacms";
import {
  WebsitesLayoutTraditionalLayoutButtonsButtonLink,
  WebsitesServiceTraditionalServiceListSchemaListServiceServiceItemButtonsButtonLink,
} from "../../../tina/__generated__/types";
import { useContext } from "react";
import { SharedStateContext } from "../../../context/layoutContext";
import Link from "next/link";

interface ButtonLinkProps {
  data:
    | WebsitesLayoutTraditionalLayoutButtonsButtonLink
    | WebsitesServiceTraditionalServiceListSchemaListServiceServiceItemButtonsButtonLink;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ data }) => {
  const state = useContext(SharedStateContext);
  return (
    <Link href={data.link ?? ""}>
      <button
        className="w-full cursor-pointer flex items-center justify-center underline"
        style={{
          color: state.state[data.color],
          fontFamily: state.state[data.typography],
        }}
      >
        {data.title}
      </button>
    </Link>
  );
};

export const ButtonLinkSchema = {
  name: "buttonLink",
  label: "Boton Link",
  fields: [
    {
      type: "string",
      label: "Titulo del boton",
      name: "title",
    },
    {
      type: "string",
      label: "Link de redireccion",
      name: "link",
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
    {
      type: "string",
      name: "typography",
      label: "Tipografia del boton",
      description: "Selecciona la tipografia.",
      ui: {
        component: "select",
        options: ["typography", "typographySecondary"],
      },
    },
  ],
};

export default ButtonLink;
