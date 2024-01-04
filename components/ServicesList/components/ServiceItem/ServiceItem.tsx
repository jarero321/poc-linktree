import { tinaField } from "tinacms/dist/react";
import { WebsitesServiceTraditionalServiceListSchemaListService } from "../../../../tina/__generated__/types";
import Image from "next/image";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { ButtonsSelector } from "../ButtonSelector/ButtonSelector";
import styles from "./ServiceItem.module.css";
import { useContext } from "react";
import { SharedStateContext } from "../../../../context/layoutContext";
const ServiceItem = (
  props: WebsitesServiceTraditionalServiceListSchemaListService
) => {
  const dataContext = useContext(SharedStateContext);
  console.log(props);
  return (
    <article className="w-full relative flex flex-col gap-6 min-h-[200px]">
      <div
        data-tina-field={tinaField(props)}
        className="w-full relative min-h-[250px]"
      >
        <Image src={props?.imageService ?? ""} alt="" fill />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-4">
          <div
            className={styles.titleMarkdown}
            data-tina-field={tinaField(props, "titleText")}
            style={{
              fontFamily: dataContext.state[props.titleText?.typography],
              color: dataContext.state[props.titleText?.color],
            }}
          >
            <TinaMarkdown content={props.titleText?.title} />
          </div>
          <div
            className={styles.descriptionMarkdown}
            data-tina-field={tinaField(props, "descriptionText")}
            style={{
              fontFamily: dataContext.state[props.descriptionText?.typography],
              color: dataContext.state[props.descriptionText?.color],
            }}
          >
            <TinaMarkdown content={props.descriptionText?.description} />
          </div>
        </div>
        <div className="mt-4">
          <ButtonsSelector {...props} />
        </div>
      </div>
    </article>
  );
};

export default ServiceItem;
