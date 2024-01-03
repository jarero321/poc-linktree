import { tinaField } from "tinacms/dist/react";
import ButtonRounded from "../../../Buttons/ButtonRounded/ButtonRounded";
import ButtonRectangle from "../../../Buttons/ButtonRectangle/ButtonRectangle";
import ButtonLink from "../../../Buttons/ButtonLink/ButtonLink";
import {
  WebsitesServiceTraditionalServiceListSchemaListService,
  WebsitesServiceTraditionalServiceListSchemaListServiceServiceItemButtons,
} from "../../../../tina/__generated__/types";

export const ButtonsSelector = (
  props: WebsitesServiceTraditionalServiceListSchemaListService
) => {
  return (
    <>
      {props?.buttons
        ? props.buttons.map(function (block, i) {
            return (
              <div
                key={i}
                className="w-full"
                data-tina-field={tinaField(block)}
              >
                <Buttons {...block} />
              </div>
            );
          })
        : null}
    </>
  );
};

const Buttons = (
  block: WebsitesServiceTraditionalServiceListSchemaListServiceServiceItemButtons
) => {
  switch (block.__typename) {
    case "WebsitesServiceTraditionalServiceListSchemaListServiceServiceItemButtonsButtonRounded":
      return <ButtonRounded data={block} />;
    case "WebsitesServiceTraditionalServiceListSchemaListServiceServiceItemButtonsButtonRectangle":
      return <ButtonRectangle data={block} />;
    case "WebsitesServiceTraditionalServiceListSchemaListServiceServiceItemButtonsButtonLink":
      return <ButtonLink data={block} />;
    default:
      return null;
  }
};
