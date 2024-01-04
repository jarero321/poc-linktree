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
import { LogotypeSchema } from "../../../tina/collection/websiteSchemas/LogotypeSchema";
import { TitleSchema } from "../../../tina/collection/websiteSchemas/TitleSchema";
import { useContext } from "react";
import { SharedStateContext } from "../../../context/layoutContext";
import { DescriptionSchema } from "../../../tina/collection/websiteSchemas/DescriptionSchema";
import Image from "next/image";

const TraditionalTemplates: React.FC<{
  data: WebsitesLayoutTraditionalLayout;
}> = ({ data }) => {
  const dataContext = useContext(SharedStateContext);
  return (
    <>
      <header
        className="relative z-10"
        data-tina-field={tinaField(data, "logotypeProps")}
      >
        <Header data={data.logotypeProps} />
      </header>
      <section className="w-full py-8 px-8 h-full">
        <BackgroundSelector {...data} />
        <div className="z-10 relative w-full h-full flex gap-6 justify-end flex-col text-white ">
          <div
            data-tina-field={tinaField(data, "titleText")}
            className={styles.titleMarkdown}
            style={{
              fontFamily: dataContext.state[data.titleText.typography],
              color: dataContext.state[data.titleText.color],
            }}
          >
            <TinaMarkdown content={data.titleText.title} />
          </div>
          <div
            className={styles.descriptionMarkdown}
            style={{
              fontFamily: dataContext.state[data.descriptionText?.typography],
              color: dataContext.state[data.descriptionText?.color],
            }}
            data-tina-field={tinaField(data, "descriptionText")}
          >
            <TinaMarkdown content={data.descriptionText?.description} />
          </div>
          <div className="w-full flex flex-col items-center gap-[24px]">
            <ButtonsSelector {...data} />
          </div>
          <nav className="w-full flex items-center justify-center gap-6 ">
            <SocialMediaSelector {...data} />
          </nav>
          <div className="w-full relative z-10 flex items-center justify-center">
            <Image src="/icons/arrow.svg" width={21} height={23} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export const traditionalTemplateSchema = {
  name: "traditionalLayout",
  label: "Layout Traditional",
  ui: {
    previewSrc: "/layouts/traditional-layout.png",
    defaultItem: {},
  },
  fields: [
    LogotypeSchema as any,
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
