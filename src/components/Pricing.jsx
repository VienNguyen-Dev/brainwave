import React from "react";
import Section from "./Section";
import brackets from "../assets/svg/Brackets";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className={"overflow-hidden"} id={"pricing"}>
      <div className=" relative container z-2">
        <div className=" relative hidden mb-[6.5rem] justify-center lg:flex">
          <img src={smallSphere} alt="Sphere" width={255} height={255} className=" z-2 relative" />
          <div className=" absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img src={stars} alt="star" width={950} height={400} />
          </div>
        </div>
        <Heading tag="Get start with Brainwave" title={"Pay one, use forever"} />
        <div className=" relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
        <div className=" flex justify-center mt-10">
          <a className=" font-bold font-code tracking-wider text-xs border-b uppercase" href="/pricing">
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
