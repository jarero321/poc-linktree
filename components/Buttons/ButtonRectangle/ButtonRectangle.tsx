import { TinaTemplate } from "tinacms";
import { WebsitesLayoutTraditionalLayoutButtonsButtonRectangle } from "../../../tina/__generated__/types";

interface ButtonRectangleProps {
  data: WebsitesLayoutTraditionalLayoutButtonsButtonRectangle;
}

const ButtonRectangle: React.FC<ButtonRectangleProps> = ({ data }) => {
  return (
    <button className="w-full h-12 cursor-pointer flex items-center justify-center bg-red-500">
      {data.title}
    </button>
  );
};

export const ButtonRectangleSchema: TinaTemplate = {
  name: "buttonRectangle",
  label: "Boton Rectangular",
  fields: [
    {
      type: "string",
      label: "Titulo del boton",
      name: "title",
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
      description: "Selecciona el color y/o introducelo en formato HEX.",
      ui: {
        component: "color",
      },
    },
  ],
};

export default ButtonRectangle;
