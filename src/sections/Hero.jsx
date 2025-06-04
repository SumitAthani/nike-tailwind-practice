import React, { useState } from "react";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      // className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      {/* // 1st part */}
      <div className="relative xl:w-2/5 w-full flex flex-col justify-center max-xl:padding-x gap-[48px] pt-28">
        <p className="text-coral-red text-xl font-montserrat">
          Our Summer Collections
        </p>
        <h1 className="font-palanquin text-8xl  font-bold max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span>
            <span className="text-coral-red inline-block mt-5">Nike</span> Shoes
          </span>
        </h1>
        <p className="text-lg font-montserrat text-slate-gray sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button icon={arrowRight} label={"Shop now"} />
        <div className="flex justify-start items-start flex-wrap w-full gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="font-montserrat text-slate-gray leading-7">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* second part Shoes */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe colletion"
          width={610}
          height={502}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div
              className={`border-2 bg-card w-40 h-40 flex justify-center items-center bg-cover rounded-lg ${
                shoe.bigShoe === bigShoeImg
                  ? "border-coral-red"
                  : "border-transparent"
              }`}
              onClick={() => setBigShoeImg(shoe.bigShoe)}
            >
              <img src={shoe.thumbnail} alt="" className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
