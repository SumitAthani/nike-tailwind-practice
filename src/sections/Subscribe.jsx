import React from "react";
import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id="subscribe"
      className="max-container flex justify-between items-center  max-lg:flex-col gap-10"
    >
      <div className="text-4xl xl:max-w-lg font-palanquin font-semibold">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </div>
      <div className="border-slate-gray lg:max-w-lg border w-full p-2 rounded-full flex gap-5">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="border-none flex-1 pl-4 outline-none m-1"
        />
        <Button label={"Sign Up"} />
      </div>
    </section>
  );
};

export default Subscribe;
