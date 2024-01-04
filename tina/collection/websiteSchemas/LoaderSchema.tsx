export const LoaderSchema = {
  type: "object",
  label: "Loader",
  name: "loader",
  description: "Muestra al usuario una pantalla de carga (opcional)",
  fields: [
    {
      name: "isLoader",
      type: "boolean",
      label: "¿Usaras un componente de carga?",
    },
    {
      name: "loaderImage",
      type: "image",
      label: "Logotipo de carga",
      description: "Imagen que aparecera al momento de cargar el sitio.",
    },
    {
      name: "backgroundColor",
      type: "string",
      label: "Fondo del componente de carga.",
      ui: {
        component: "color",
      },
    },
  ],
};
