import ButtonRounded from "../../../Buttons/ButtonRounded/ButtonRounded";

export const Buttons = (block: WebsitesLayoutTraditionalLayoutButtons) => {
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
