import { TinaTemplate } from "tinacms";
import { backgroundImageSchema } from "../../Backgrounds/BackgroundImage/BackgroundImage";
import { backgroundColorSchema } from "../../Backgrounds/BackgroundColor/BackgroundColor";
import { WebsitesLayoutTraditionalLayout } from "../../../tina/__generated__/types";
import { BackgroundSelector } from "../../Backgrounds/Background";
import Header from "../../Headers/Header";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import styles from "./TraditionalTemplate.module.css";
import { tinaField } from "tinacms/dist/react";
import { ButtonRoundedSchema } from "../../Buttons/ButtonRounded/ButtonRounded";
import { ButtonsSelector } from "../../Buttons/Buttons";
import { ButtonRectangleSchema } from "../../Buttons/ButtonRectangle/ButtonRectangle";
import { ButtonLinkSchema } from "../../Buttons/ButtonLink/ButtonLink";
import { FacebookSchema } from "../../SocialMedia/Facebook/Facebook";
import { SocialMediaSelector } from "../../SocialMedia/SocialMedia";
import { InstagramSchema } from "../../SocialMedia/Instagram/Instagram";
import { TiktokSchema } from "../../SocialMedia/TikTok/Tiktok";
import { TwitterSchema } from "../../SocialMedia/Twitter/Twitter";

const TraditionalTemplates: React.FC<{
  data: WebsitesLayoutTraditionalLayout;
}> = ({ data }) => {
  return (
    <>
      <header
        className="relative z-10"
        data-tina-field={tinaField(data, "logotype")}
      >
        <Header imgUrl={data.logotype} />
      </header>
      <main className="w-full py-8 px-8 h-full">
        <BackgroundSelector {...data} />
        <section className="z-10 relative w-full h-full flex gap-8 justify-end flex-col text-white ">
          <div
            data-tina-field={tinaField(data, "title")}
            className={styles.titleMarkdown}
          >
            <TinaMarkdown content={data.title} />
          </div>
          <div
            className={styles.descriptionMarkdown}
            data-tina-field={tinaField(data, "description")}
          >
            <TinaMarkdown content={data.description} />
          </div>
          <div className="w-full flex flex-col items-center gap-[32px]">
            <ButtonsSelector {...data} />
          </div>
          <nav className="w-full flex items-center justify-center gap-3">
            <SocialMediaSelector {...data} />
          </nav>
        </section>
      </main>
    </>
  );
};

export const traditionalTemplateSchema: TinaTemplate = {
  name: "traditionalLayout",
  label: "Layout Traditional",
  ui: {
    previewSrc: "/layouts/traditional-layout.png",
    defaultItem: {},
  },
  fields: [
    {
      label: "Logotipo",
      name: "logotype",
      type: "image",
      description:
        "Este sera el logotipo que saldra en la parte superior izquierda",
    },
    {
      type: "object",
      list: true,
      name: "background",
      label: "Seleccion del fondo",
      description:
        "Esto sera el tipo de fondo que tomara tu seccion princial (imagen, video, color)",
      ui: {
        visualSelector: true,
      },
      templates: [backgroundImageSchema, backgroundColorSchema],
    },
    {
      label: "Titulo principal",
      name: "title",
      type: "rich-text",
      description:
        "Este sera el titulo que aparecera de manera principal en esta seccion",
    },
    {
      label: "Breve descripcion de tu emprendimiento",
      name: "description",
      type: "rich-text",
      description:
        "Trata de obtener palabras clave de lo que realizas y en que parte del mundo eres.",
    },
    {
      type: "object",
      list: true,
      name: "buttons",
      label: "CTA",
      description: "Call to actions que tendra el sitio",
      templates: [ButtonLinkSchema, ButtonRoundedSchema, ButtonRectangleSchema],
    },
    {
      type: "object",
      list: true,
      name: "socialMedia",
      label: "Redes Sociales",
      description: "Enlaces directos a la redes sociales",
      templates: [FacebookSchema, InstagramSchema, TiktokSchema, TwitterSchema],
    },
  ],
};

export default TraditionalTemplates;
