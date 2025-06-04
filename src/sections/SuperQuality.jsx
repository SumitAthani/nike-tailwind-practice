import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-col gap-6 w-full">
        <h2 className="text-4xl capitalize font-bold lg:max-w-lg font-palanquin">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h2>
        <div className="text-slate-gray text-lg flex flex-col gap-5 xl:max-w-lg">
          <p className="info-text">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className="text-slate-gray mb-4 text-lg">
            Our dedication to detail and excellence ensures your satisfaction
          </p>
        </div>
        <Button label={"View details"} />
      </div>
      <div className="flex justify-center items-center w-full">
        <img src={shoe8} alt="" />
      </div>
    </section>
  );
};

export default SuperQuality;
