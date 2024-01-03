import type { Collection } from "tinacms";
import { SEOSchema } from "./websiteSchemas/SEOSchema";
import { traditionalTemplateSchema } from "../../components/Templates/TraditionalTemplates/TraditionalTemplates";
import { ColorSchema } from "./websiteSchemas/ColorSchema";
import { traditionalServiceListSchema } from "../../components/ServicesList/TraditionalServiceList/TraditionalServiceList";

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
    {
      type: "boolean",
      name: "isService",
      label: "Lista de servicios",
      description: "¿Deseas agregar un listado de servicios?",
    },
    {
      type: "object",
      list: true,
      name: "service",
      label: "Lista de servicios",
      ui: {
        visualSelector: true,
      },
      templates: [traditionalServiceListSchema],
    },
  ],
};

export default Websites;
