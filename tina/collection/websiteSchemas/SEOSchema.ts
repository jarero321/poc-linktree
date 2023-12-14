import { Field } from "tinacms";

export const SEOSchema = {
  type: "object",
  label: "SEO",
  name: "seo",
  description: "Informacion para Posicionamiento Web",
  fields: [
    {
      name: "seoTitle",
      type: "string",
      label: "Titulo SEO",
      description: "Titulo que aparece en la etiqueta title",
    },
    {
      name: "seoDescription",
      type: "string",
      label: "Descripcion SEO",
      description: "Descripcion que aparecera en la etiqueta meta description",
    },
    {
      name: "titleOG",
      type: "string",
      label: "Titulo OG",
      description: "Titulo que aparecera al compartir por redes sociales",
    },
    {
      name: "descriptionOG",
      type: "string",
      label: "Descripcion OG",
      description: "Descripcion que aparecera al compartir por redes sociales",
    },
    {
      name: "imageOG",
      type: "image",
      label: "Imagen OG",
      description: "Imagen que aparecera al compartir por redes sociales",
    },
  ],
};