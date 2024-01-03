import { tinaField } from "tinacms/dist/react";
import {
  WebsitesServiceTraditionalServiceListSchema,
  WebsitesServiceTraditionalServiceListSchemaBackground,
} from "../../../../tina/__generated__/types";
import BackgroundColor from "../../BackgroundColor/BackgroundColor";
import BackgroundImage from "../../BackgroundImage/BackgroundImage";

export const BackgroundSelector = (
  props: Omit<
    WebsitesServiceTraditionalServiceListSchema,
    "id" | "_sys" | "_values"
  >
) => {
  return (
    <>
      {props.background
        ? props.background.map(function (block, i) {
            return (
              <div
                className="w-full h-full"
                key={i}
                data-tina-field={tinaField(block)}
              >
                <Background {...block} />
              </div>
            );
          })
        : null}
    </>
  );
};

const Background = (
  block: WebsitesServiceTraditionalServiceListSchemaBackground
) => {
  switch (block.__typename) {
    case "WebsitesServiceTraditionalServiceListSchemaBackgroundBackgroundColor":
      return <BackgroundColor data={block} />;
    case "WebsitesServiceTraditionalServiceListSchemaBackgroundBackgroundImage":
      return <BackgroundImage data={block} />;
    default:
      return null;
  }
};
