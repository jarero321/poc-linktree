import { DescriptionSchema } from "../../../tina/collection/websiteSchemas/DescriptionSchema";
import { ServiceSchema } from "../../../tina/collection/websiteSchemas/ServiceSchema";
import { TitleSchema } from "../../../tina/collection/websiteSchemas/TitleSchema";
import { backgroundColorSchema } from "../../Backgrounds/BackgroundColor/BackgroundColor";
import { backgroundImageSchema } from "../../Backgrounds/BackgroundImage/BackgroundImage";
import { CategorySchema } from "../../../tina/collection/websiteSchemas/CategorySchema";
export const traditionalProductCatalog = {
  name: "traditionalProductCatalog",
  label: "Lista tradicional de productos",
  ui: {
    previewSrc: "",
    defaultItem: "",
  },
  fields: [
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
    TitleSchema as any,
    DescriptionSchema as any,
    {
      type: "object",
      list: true,
      label: "categorias disponibles",
      name: "categoryProducts",
      description: "Lista de las categorias disponibles",
      templates: [CategorySchema],
    },
    {
      type: "object",
      list: true,
      label: "Lista de servicios",
      name: "listService",
      description: "Lista de los servicios de tu negocio",
      templates: [ServiceSchema],
    },
  ],
};
