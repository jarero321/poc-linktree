import { tinaField } from "tinacms/dist/react";
import {
  WebsitesLayoutTraditionalLayout,
  WebsitesLayoutTraditionalLayoutButtons,
} from "../../tina/__generated__/types";
import ButtonRounded from "./ButtonRounded/ButtonRounded";
import ButtonRectangle from "./ButtonRectangle/ButtonRectangle";
import ButtonLink from "./ButtonLink/ButtonLink";

export const ButtonsSelector = (
  props: Omit<WebsitesLayoutTraditionalLayout, "id" | "_sys" | "_values">
) => {
  return (
    <>
      {props.buttons
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

const Buttons = (block: WebsitesLayoutTraditionalLayoutButtons) => {
  switch (block.__typename) {
    case "WebsitesLayoutTraditionalLayoutButtonsButtonRounded":
      return <ButtonRounded data={block} />;
    case "WebsitesLayoutTraditionalLayoutButtonsButtonRectangle":
      return <ButtonRectangle data={block} />;
    case "WebsitesLayoutTraditionalLayoutButtonsButtonLink":
      return <ButtonLink data={block} />;
    default:
      return null;
  }
};
