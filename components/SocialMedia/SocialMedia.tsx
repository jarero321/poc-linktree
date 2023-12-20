import { tinaField } from "tinacms/dist/react";
import {
  WebsitesLayoutTraditionalLayout,
  WebsitesLayoutTraditionalLayoutButtons,
  WebsitesLayoutTraditionalLayoutSocialMedia,
} from "../../tina/__generated__/types";
import Facebook from "./Facebook/Facebook";
import Instagram from "./Instagram/Instagram";
import Tiktok from "./TikTok/Tiktok";
import Twitter from "./Twitter/Twitter";

export const SocialMediaSelector = (
  props: Omit<WebsitesLayoutTraditionalLayout, "id" | "_sys" | "_values">
) => {
  return (
    <>
      {props.socialMedia
        ? props.socialMedia.map(function (block, i) {
            return (
              <div
                key={i}
                className=" flex items-center flex-row justify-center"
                data-tina-field={tinaField(block)}
              >
                <SocialMedia {...block} />
              </div>
            );
          })
        : null}
    </>
  );
};

const SocialMedia = (block: WebsitesLayoutTraditionalLayoutSocialMedia) => {
  switch (block.__typename) {
    case "WebsitesLayoutTraditionalLayoutSocialMediaFacebook":
      return <Facebook data={block} />;
    case "WebsitesLayoutTraditionalLayoutSocialMediaInstagram":
      return <Instagram data={block} />;
    case "WebsitesLayoutTraditionalLayoutSocialMediaTiktok":
      return <Tiktok data={block} />;
    case "WebsitesLayoutTraditionalLayoutSocialMediaTwitter":
      return <Twitter data={block} />;
    default:
      return null;
  }
};
