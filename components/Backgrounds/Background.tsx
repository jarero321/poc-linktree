import { tinaField } from "tinacms/dist/react";
import {
  WebsitesLayout,
  WebsitesLayoutTraditionalLayoutBackground,
  WebsitesServiceTraditionalServiceListSchema,
  WebsitesServiceTraditionalServiceListSchemaBackground,
} from "../../tina/__generated__/types";
import BackgroundImage from "./BackgroundImage/BackgroundImage";
import BackgroundColor from "./BackgroundColor/BackgroundColor";

export const BackgroundSelector = (
  props: Omit<
    WebsitesLayout | WebsitesServiceTraditionalServiceListSchema,
    "id" | "_sys" | "_values"
  >
) => {
  return (
    <>
      {props.background
        ? props.background.map(function (block, i) {
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <Background {...block} />
              </div>
            );
          })
        : null}
    </>
  );
};

const Background = (
  block:
    | WebsitesLayoutTraditionalLayoutBackground
    | WebsitesServiceTraditionalServiceListSchemaBackground
) => {
  switch (block.__typename) {
    case "WebsitesLayoutTraditionalLayoutBackgroundBackgroundColor":
      return <BackgroundColor data={block} />;
    case "WebsitesLayoutTraditionalLayoutBackgroundBackgroundImage":
      return <BackgroundImage data={block} />;
    default:
      return null;
  }
};
