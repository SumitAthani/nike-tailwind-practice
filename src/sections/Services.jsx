import React from "react";
import { services } from "../constants";

const Services = () => {
  return (
    <section
      id="services"
      className="max-container flex justify-center flex-wrap gap-9"
    >
      {services.map((service) => {
        return (
          <div className="bg-white shadow-3xl p-10 rounded-2xl sm:min-w-[350px] w-full flex-1">
            <div className="w-12 h-12 mt-3 bg-coral-red flex justify-center items-center rounded-full">
              <img src={service.imgURL} alt="dfas" height={25} width={25} />
            </div>
            <div className="mt-5 font-palanquin text-3xl leading-normal font-bold">
              {service.label}
            </div>
            <div className="mt-3 info-text">{service.subtext}</div>
          </div>
        );
      })}
    </section>
  );
};

export default Services;
