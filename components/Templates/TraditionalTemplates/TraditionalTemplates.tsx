import { TinaTemplate } from "tinacms";
import { backgroundImageSchema } from "../../Backgrounds/BackgroundImage/BackgroundImage";
import { backgroundColorSchema } from "../../Backgrounds/BackgroundColor/BackgroundColor";
import { WebsitesLayoutTraditionalLayout } from "../../../tina/__generated__/types";
import { BackgroundSelector } from "../../Backgrounds/Background";

const TraditionalTemplates: React.FC<{
  data: WebsitesLayoutTraditionalLayout;
}> = ({ data }) => {
  return (
    <>
      <header className="py-8 px-8 z-10">Test</header>
      <main className="w-full h-full">
        <BackgroundSelector {...data} />
      </main>
    </>
  );
};

export const traditionalTemplateSchema: TinaTemplate = {
  name: "traditionalLayout",
  label: "Layout Traditional",
  ui: {
    previewSrc: "/layouts/traditional-layout.png",
    defaultItem: {},
  },
  fields: [
    {
      label: "Logotipo",
      name: "logotype",
      type: "image",
      description:
        "Este sera el logotipo que saldra en la parte superior izquierda",
    },
    {
      type: "object",
      list: true,
      name: "background",
      label: "Seleccion del fondo",
      description:
        "Esto sera el tipo de fondo que tomara tu seccion princial (imagen, video, color)",
      ui: {
        visualSelector: true,
      },
      templates: [backgroundImageSchema, backgroundColorSchema],
    },
    {
      label: "Titulo principal",
      name: "title",
      type: "rich-text",
      description:
        "Este sera el titulo que aparecera de manera principal en esta seccion",
    },
    {
      label: "Breve descripcion de tu emprendimiento",
      name: "description",
      type: "rich-text",
      description:
        "Trata de obtener palabras clave de lo que realizas y en que parte del mundo eres.",
    },
  ],
};

export default TraditionalTemplates;
