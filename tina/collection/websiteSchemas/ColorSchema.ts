export const ColorSchema = {
  type: "object",
  label: "Estilo de la pagina",
  name: "styling",
  description: "Paleta de colores y tipografias que se usaran en el sitio web.",
  fields: [
    {
      name: "primaryColor",
      type: "string",
      label: "Color Primario",
      ui: {
        component: "color",
      },
    },
    {
      name: "secondaryColor",
      type: "string",
      label: "Color Secundario",
      ui: {
        component: "color",
      },
    },
    {
      name: "thirdColor",
      type: "string",
      label: "Color terceario",
      ui: {
        component: "color",
      },
    },
    {
      component: "select",
      name: "typography",
      label: "Tipografia Principal",
      type: "string",
      description: "Selecciona una tipografia para el proyecto",
      options: [
        "Roboto",
        "Montserrat",
        "Raleway",
        "Open Sans",
        "Oswald",
        "Source Code Pro",
        "Lato",
        "Poppins",
      ],
    },
    {
      component: "select",
      name: "typographySecondary",
      label: "Tipografia Secundaria",
      type: "string",
      description: "Selecciona una tipografia para el proyecto",
      options: [
        "Roboto",
        "Montserrat",
        "Raleway",
        "Open Sans",
        "Oswald",
        "Source Code Pro",
        "Lato",
        "Poppins",
      ],
    },
  ],
};
