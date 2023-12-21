import { TinaTemplate } from "tinacms";
import { WebsitesLayoutTraditionalLayoutButtonsButtonRounded } from "../../../tina/__generated__/types";
import Image from "next/image";
import { useContext } from "react";
import { SharedStateContext } from "../../../context/layoutContext";

interface ButtonRoundedProps {
  data: WebsitesLayoutTraditionalLayoutButtonsButtonRounded;
}

const ButtonRounded: React.FC<ButtonRoundedProps> = ({ data }) => {
  const state = useContext(SharedStateContext);
  return (
    <button
      style={{
        backgroundColor: state.state[data.color],
        fontFamily: state.state[data.typography],
      }}
      className={`w-full h-12 cursor-pointer flex items-center ${
        data.icon ? "justify-between" : "justify-center"
      } px-6 rounded-3xl`}
    >
      {data.title}
      {data.icon && (
        <Image src="/icons/iconArrow.png" alt="" width={20} height={20} />
      )}
    </button>
  );
};

export const ButtonRoundedSchema = {
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

export default ButtonRounded;
