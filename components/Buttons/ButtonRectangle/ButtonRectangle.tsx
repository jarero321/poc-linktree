import { TinaTemplate } from "tinacms";
import {
  WebsitesLayoutTraditionalLayoutButtonsButtonRectangle,
  WebsitesServiceTraditionalServiceListSchemaListServiceServiceItemButtonsButtonRectangle,
} from "../../../tina/__generated__/types";
import { SharedStateContext } from "../../../context/layoutContext";
import { useContext } from "react";
import Link from "next/link";

interface ButtonRectangleProps {
  data:
    | WebsitesLayoutTraditionalLayoutButtonsButtonRectangle
    | WebsitesServiceTraditionalServiceListSchemaListServiceServiceItemButtonsButtonRectangle;
}

const ButtonRectangle: React.FC<ButtonRectangleProps> = ({ data }) => {
  const state = useContext(SharedStateContext);
  return (
    <a target="_blank" href={data.link ?? ""}>
      <button
        style={{
          backgroundColor: state.state[data.color],
          fontFamily: state.state[data.typography],
        }}
        className={`w-full h-12 cursor-pointer flex items-center justify-center`}
      >
        {data.title}
      </button>
    </a>
  );
};

export const ButtonRectangleSchema = {
  name: "buttonRectangle",
  label: "Boton Rectangular",
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
      type: "boolean",
      label: "¿Usar icono?",
      name: "icon",
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

export default ButtonRectangle;
