export const LogotypeSchema = {
  type: "object",
  label: "Logotipo",
  name: "logotypeProps",
  description: "Informacion acerca de tu logotipo",
  fields: [
    {
      label: "Logotipo",
      name: "logotype",
      type: "image",
      description:
        "Este sera el logotipo que saldra en la parte superior izquierda",
    },
    {
      name: "altLogo",
      type: "string",
      label: "Texto alternativo al logotipo",
    },
  ],
};
