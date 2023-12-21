import type { Collection } from "tinacms";
import { SEOSchema } from "./websiteSchemas/SEOSchema";
import { traditionalTemplateSchema } from "../../components/Templates/TraditionalTemplates/TraditionalTemplates";
import { ColorSchema } from "./websiteSchemas/ColorSchema";

const Websites: Collection = {
  label: "Websites",
  name: "websites",
  path: "content/websites",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      return `/websites/${document._sys.filename}`;
    },
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      description: "Nombre del nuevo negocio",
      isTitle: true,
      required: true,
    },
    SEOSchema as any,
    ColorSchema as any,
    {
      type: "object",
      list: true,
      name: "layout",
      label: "Main Layout",
      description: "Esta sera la portada de tu micro sitio web",
      ui: {
        visualSelector: true,
      },
      templates: [traditionalTemplateSchema],
    },
  ],
};

export default Websites;
