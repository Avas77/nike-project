import React from "react";
import { services } from "../../constants/services";
import ServiceCard from "../ServiceCard";

const Services = () => {
  return (
    <section
      id="services"
      className="max-container flex justify-center flex-wrap gap-9"
    >
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          name={service.name}
          description={service.description}
          icon={service.icon}
        />
      ))}
    </section>
  );
};

export default Services;
