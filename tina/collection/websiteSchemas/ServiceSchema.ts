import { ButtonLinkSchema } from "../../../components/Buttons/ButtonLink/ButtonLink";
import { ButtonRectangleSchema } from "../../../components/Buttons/ButtonRectangle/ButtonRectangle";
import { ButtonRoundedSchema } from "../../../components/Buttons/ButtonRounded/ButtonRounded";
import { DescriptionSchema } from "./DescriptionSchema";
import { TitleSchema } from "./TitleSchema";

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
    TitleSchema as any,
    DescriptionSchema as any,
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
