import { TitleSchema } from "./TitleSchema";

export const CategorySchema = {
  type: "object",
  label: "Categoria",
  name: "categoryName",
  description: "Lista de categorias",
  fields: [
    TitleSchema as any,
    {
      component: "select",
      name: "color",
      label: "Color del fondo",
      type: "string",
      description: "Selecciona una color para el titulo",
      options: ["primaryColor", "secondaryColor", "thirdColor"],
    },
  ],
};
