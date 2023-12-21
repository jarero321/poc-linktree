export const DescriptionSchema = {
  type: "object",
  label: "Descripcion",
  name: "descriptionText",
  description: "Se configura todo lo relacionado al titulo de la landing Page",
  fields: [
    {
      label: "Descripcion",
      name: "description",
      type: "rich-text",
      description:
        "Este sera la descripcion que aparecera de manera principal en esta seccion",
    },
    {
      component: "select",
      name: "color",
      label: "Color del texto",
      type: "string",
      description: "Selecciona una color para la descripcion",
      options: ["primaryColor", "secondaryColor", "thirdColor"],
    },
    {
      component: "select",
      name: "typography",
      label: "Tipografia del texto",
      type: "string",
      description: "Selecciona una tipografia para la descripcion",
      options: ["typography", "typographySecondary"],
    },
  ],
};
