import { TinaTemplate } from "tinacms";
import Image from "next/image";
import { WebsitesLayoutTraditionalLayoutBackgroundBackgroundImage } from "../../../tina/__generated__/types";

interface BackgroundImageProps {
  data: WebsitesLayoutTraditionalLayoutBackgroundBackgroundImage;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ data }) => {
  return (
    <div className={`w-full h-full absolute top-0 left-0  `}>
      <picture>
        <Image src={data?.mobileImage ?? ""} fill alt="" />
      </picture>
    </div>
  );
};

export const backgroundImageSchema: TinaTemplate = {
  name: "backgroundImage",
  label: "Imagen de fondo",
  ui: {
    previewSrc: "/layouts/background/backgroundImage.png",
    defaultItem: {},
  },
  fields: [
    {
      type: "image",
      label: "Imagen de fondo version mobile",
      name: "mobileImage",
    },
    {
      type: "image",
      label: "Imagen de fondo version escritorio",
      name: "desktopImage",
    },
  ],
};

export default BackgroundImage;
