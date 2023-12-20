import { TinaTemplate } from "tinacms";
import { WebsitesLayoutTraditionalLayoutButtonsButtonRounded } from "../../../tina/__generated__/types";
import Image from "next/image";

interface ButtonRoundedProps {
  data: WebsitesLayoutTraditionalLayoutButtonsButtonRounded;
}

const ButtonRounded: React.FC<ButtonRoundedProps> = ({ data }) => {
  return (
    <button
      className={`w-full h-12 cursor-pointer flex items-center ${
        data.icon ? "justify-between" : "justify-center"
      } px-6 rounded-3xl bg-red-500`}
    >
      {data.title}
      {data.icon && (
        <Image src="/icons/iconArrow.png" alt="" width={20} height={20} />
      )}
    </button>
  );
};

export const ButtonRoundedSchema: TinaTemplate = {
  name: "buttonRounded",
  label: "Boton Redondo",
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

export default ButtonRounded;
