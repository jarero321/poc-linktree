import type { Collection } from "tinacms";
import { SEOSchema } from "./websiteSchemas/SEOSchema";

const Websites: Collection = {
  label: "Websites",
  name: "websites",
  path: "content/websites",
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
  ],
};

export default Websites;
