import type { Collection } from 'tinacms';

const Poc: Collection = {
    label: "Poc",
    name: "poc",
    path: "content/poc",
    format: "mdx",
    ui: {
        router: ({ document }) => {
          return `/poc/${document._sys.filename}`;
        }
    },
    fields: [
        {
            type: "string",
            label: "Project Name",
            name: "title",
            description:
              "El nombre del proyecto",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            label: "Titulo",
            name: "titleSEO",
            description:
              "El titulo del proyecto. Este aparece en la parte superior del navegador, SEO",
            required: true,
          },
          {
            type: "string",
            label: "Descripcion",
            name: "description",
            description:
              "La descripcion que aparecera en el sitio, SEO",
            required: true,
          },
          {
            type: "string",
            label: "Titulo OG (etiquetas SEO)",
            name: "titleOG",
            description:
              "Es el titulo que aparecera al compartir la url por alguna red social.",
            required: true,
          },
          {
            type: "string",
            label: "Descripcion OG (etiquetas SEO)",
            name: "descriptionOG",
            description:
              "Es la descripcion que aparecera al compartir la url por alguna red social.",
            required: true,
          },
          {
            type: "image",
            name: "ogImg",
            label: "Imagen OG (etiquetas SEO)",
          },
    ]
}


export default Poc;