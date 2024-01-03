import { tinaField } from "tinacms/dist/react";
import { WebsitesServiceTraditionalServiceListSchemaListService } from "../../../../tina/__generated__/types";
import Image from "next/image";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { ButtonsSelector } from "../ButtonSelector/ButtonSelector";
import styles from "./ServiceItem.module.css";
const ServiceItem = (
  props: WebsitesServiceTraditionalServiceListSchemaListService
) => {
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
          <div className={styles.titleMarkdown}>
            <TinaMarkdown content={props.titleService} />
          </div>
          <div className={styles.descriptionMarkdown}>
            <TinaMarkdown content={props.descriptionService} />
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
