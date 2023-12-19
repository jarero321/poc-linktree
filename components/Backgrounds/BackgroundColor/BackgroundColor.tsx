import { TinaTemplate } from "tinacms";
import { WebsitesLayoutTraditionalLayoutBackgroundBackgroundColor } from "../../../tina/__generated__/types";

interface BackgroundColorProps {
  data: WebsitesLayoutTraditionalLayoutBackgroundBackgroundColor;
}

const BackgroundColor: React.FC<BackgroundColorProps> = ({ data }) => {
  return (
    <div
      className={`w-full h-full absolute top-0 left-0`}
      style={{ backgroundColor: data.backgroundColor }}
    ></div>
  );
};

export const backgroundColorSchema: TinaTemplate = {
  name: "backgroundColor",
  label: "Color de fondo",
  ui: {
    previewSrc: "/layouts/background/backgroundColor.png",
    defaultItem: {},
  },
  fields: [
    {
      type: "string",
      name: "backgroundColor",
      label: "Color de fondo de la seccion principal",
      description: "Selecciona el color y/o introducelo en formato HEX.",
      ui: {
        component: "color",
      },
    },
  ],
};

export default BackgroundColor;
