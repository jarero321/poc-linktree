import { tinaField } from "tinacms/dist/react";
import { Websites, WebsitesLayout } from "../../tina/__generated__/types";
import TraditionalTemplates from "./TraditionalTemplates/TraditionalTemplates";
import { useContext, useEffect } from "react";
import { SharedStateContext } from "../../context/layoutContext";

const TemplateLayout = (props: Omit<Websites, "id" | "_sys" | "_values">) => {
  const setData = useContext(SharedStateContext);
  const handleData = () => {
    setData.setState(props.styling);
  };
  useEffect(() => {
    handleData();
  }, [props]);
  return (
    <>
      {props.layout
        ? props.layout.map(function (block, i) {
            return (
              <div
                key={i}
                className="flex flex-col relative w-screen h-screen max-h-screen"
                data-tina-field={tinaField(block)}
              >
                <Template {...block} />
              </div>
            );
          })
        : null}
    </>
  );
};

const Template = (block: WebsitesLayout) => {
  switch (block.__typename) {
    case "WebsitesLayoutTraditionalLayout":
      return <TraditionalTemplates data={block} />;
    default:
      return null;
  }
};

export default TemplateLayout;