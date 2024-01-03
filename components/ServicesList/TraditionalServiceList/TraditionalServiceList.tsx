import { DescriptionSchema } from "../../../tina/collection/websiteSchemas/DescriptionSchema";
import { ServiceSchema } from "../../../tina/collection/websiteSchemas/ServiceSchema";
import { TitleSchema } from "../../../tina/collection/websiteSchemas/TitleSchema";
import { backgroundColorSchema } from "../../Backgrounds/BackgroundColor/BackgroundColor";
import { backgroundImageSchema } from "../../Backgrounds/BackgroundImage/BackgroundImage";

export const traditionalServiceListSchema = {
  name: "traditionalServiceListSchema",
  label: "Lista tradicional de servicios",
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
      label: "Lista de servicios",
      name: "listService",
      description: "Lista de los servicios de tu negocio",
      templates: [ServiceSchema],
    },
  ],
};
