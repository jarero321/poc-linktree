import { tinaField } from "tinacms/dist/react";
import { WebsitesService } from "../../../tina/__generated__/types";
import { useContext } from "react";
import styles from "../../Templates/TraditionalTemplates/TraditionalTemplate.module.css";
import { SharedStateContext } from "../../../context/layoutContext";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const InformationService = (props: WebsitesService) => {
  const dataContext = useContext(SharedStateContext);
  return (
    <div className="z-10 relative px-8 w-full h-full flex gap-2 justify-end flex-col text-white ">
      <div
        data-tina-field={tinaField(props.titleText, "title")}
        className={styles.titleMarkdown}
        style={{
          fontFamily: dataContext.state[props.titleText.typography],
          color: dataContext.state[props.titleText.color],
        }}
      >
        <TinaMarkdown content={props.titleText.title} />
      </div>
      <div
        className={styles.descriptionMarkdown}
        style={{
          fontFamily: dataContext.state[props.descriptionText.typography],
          color: dataContext.state[props.descriptionText?.color],
        }}
        data-tina-field={tinaField(props.descriptionText, "typography")}
      >
        <TinaMarkdown content={props.descriptionText?.description} />
      </div>
    </div>
  );
};

export default InformationService;
