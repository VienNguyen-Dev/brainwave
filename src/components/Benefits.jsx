import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { benefits } from "../constants";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id={"features"} className=" container relative z-2">
      <Heading className="md:max-w-md lg:max-w-2xl" title="Chat Smarter, Not Harder with Brainwave" />
      <div className="flex flex-wrap gap-8 mb-10">
        {benefits.map((item) => (
          <div
            key={item.id}
            className=" block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
            style={{
              backgroundImage: `url(${item.backgroundUrl})`,
            }}
          >
            <div className="flex flex-col min-h-[21rem] relative z-2 p-[2.4rem] pointer-events-none ">
              <h5 className="h2 mb-5">{item.title}</h5>
              <p className=" body-2 text-n-3 mb-6">{item.text}</p>
              <div className=" flex items-center mt-auto">
                <img src={item.iconUrl} alt={item.title} width={48} height={48} />
                <p className=" ml-auto font-code font-bold tracking-tighter text-sm uppercase text-n-1">Explore more</p>
                <Arrow />
              </div>
            </div>
            {item.light && <GradientLight />}
            <div
              className=" absolute inset-0.5 bg-n-8"
              style={{
                clipPath: "url(#benefits)",
              }}
            >
              <div className=" inset-0 absolute opacity-0 transition-opacity hover:opacity-10">
                {item.imageUrl && <img src={item.imageUrl} alt={item.title} height={380} width={362} className="w-full h-full object-cover " />}
              </div>
            </div>
            <ClipPath />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Benefits;
