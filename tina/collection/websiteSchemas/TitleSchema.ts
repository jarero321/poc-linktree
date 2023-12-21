export const TitleSchema = {
  type: "object",
  label: "Titulo",
  name: "titleText",
  description: "Se configura todo lo relacionado al titulo de la landing Page",
  fields: [
    {
      label: "Titulo principal",
      name: "title",
      type: "rich-text",
      description:
        "Este sera el titulo que aparecera de manera principal en esta seccion",
    },
    {
      component: "select",
      name: "color",
      label: "Color del texto",
      type: "string",
      description: "Selecciona una color para el titulo",
      options: ["primaryColor", "secondaryColor", "thirdColor"],
    },
    {
      component: "select",
      name: "typography",
      label: "Tipografia del texto",
      type: "string",
      description: "Selecciona una tipografia para el titulo",
      options: ["typography", "typographySecondary"],
    },
  ],
};
