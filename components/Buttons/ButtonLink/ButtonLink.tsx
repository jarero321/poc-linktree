import { TinaTemplate } from "tinacms";
import { WebsitesLayoutTraditionalLayoutButtonsButtonLink } from "../../../tina/__generated__/types";

interface ButtonLinkProps {
  data: WebsitesLayoutTraditionalLayoutButtonsButtonLink;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ data }) => {
  return (
    <button className="w-full cursor-pointer flex items-center justify-center underline">
      {data.title}
    </button>
  );
};

export const ButtonLinkSchema: TinaTemplate = {
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
      name: "color",
      label: "Color del boton",
      description: "Selecciona el color y/o introducelo en formato HEX.",
      ui: {
        component: "color",
      },
    },
  ],
};

export default ButtonLink;
