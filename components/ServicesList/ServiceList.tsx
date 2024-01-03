import { useContext } from "react";
import { Websites } from "../../tina/__generated__/types";
import { BackgroundSelector } from "../Backgrounds/serviceList/BackgroundSelector/BackgroundSelector";
import InformationService from "./components/InformationService";
import ServiceItem from "./components/ServiceItem/ServiceItem";
import { ButtonsSelector } from "../Buttons/Buttons";
const ServiceList = (props: Omit<Websites, "id" | "_sys" | "_values">) => {
  return (
    <section className="w-screen min-h-screen relative">
      <div className="w-full h-full py-14">
        <BackgroundSelector {...props.service[0]} />
        <InformationService {...props.service[0]} />
        <section className="z-10 px-8 relative w-full h-full flex flex-col gap-12 mt-10">
          {props?.service[0]?.listService?.map((service) => (
            <ServiceItem {...service} />
          ))}
        </section>
      </div>
    </section>
  );
};

export default ServiceList;
