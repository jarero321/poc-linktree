import { ButtonLinkSchema } from "../../../components/Buttons/ButtonLink/ButtonLink";
import { ButtonRectangleSchema } from "../../../components/Buttons/ButtonRectangle/ButtonRectangle";
import { ButtonRoundedSchema } from "../../../components/Buttons/ButtonRounded/ButtonRounded";

export const ServiceSchema = {
  type: "object",
  label: "Servicio",
  name: "serviceItem",
  description: "Lista de servicios que tienes",
  fields: [
    {
      label: "Imagen del servicio",
      name: "imageService",
      type: "image",
      description: "Este sera la imagen que describira tu servicio",
    },
    {
      label: "Titulo del servicio",
      name: "titleService",
      type: "rich-text",
    },
    {
      label: "Descripcion del servicio",
      name: "descriptionService",
      type: "rich-text",
    },
    {
      type: "object",
      list: true,
      name: "buttons",
      label: "CTA",
      description: "Call to actions que tendra el sitio",
      templates: [ButtonLinkSchema, ButtonRoundedSchema, ButtonRectangleSchema],
    },
  ],
};
