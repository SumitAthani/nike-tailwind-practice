import React from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffers = () => {
  return (
    <section
      id="special-offers"
      className="max-container flex max-xl:flex-col-reverse justify-between items-center"
    >
      <div className="flex-1">
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h3 className="text-4xl font-semibold font-palanquin">
          <span className="text-coral-red ">Special</span> Offer
        </h3>
        <p className="info-text text-lg mt-4">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.{" "}
          <div className="mt-5"></div>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex gap-4 mt-8 mb-8">
          <Button icon={arrowRight} label={"Shop now"} />
          <Button label={"Learn more"} noColor />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
