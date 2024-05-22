import React, { useRef } from "react";
import Section from "./Section";
import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import { ScrollParallax } from "react-just-parallax";
import { heroIcons } from "../constants";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section className="pt-[12rem] -mt-[5.25rem]" crosses crossesOfset="lg:translate-y-[5.25rem]" customPaddings id={"hero"}>
      <div className=" relative container" ref={parallaxRef}>
        <div className=" relative z-1 max-w-[62rem] text-center mx-auto mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities for &nbsp;AI&nbsp; Chatting with
            {` `}
            <span className=" relative inline-block">
              Brainwave <img src={curve} className="w-full absolute top-full left-0 xl:-mt-2" width={624} height={28} alt="Curve" />
            </span>
          </h1>
          <p className="body-1 text-n-2 max-w-3xl mb-6 lg:mb-8 mx-auto">Unleash the power of AI whitin Brainwave Upgrade your productivity with Brainwave, the open AI chat app.</p>
          <Button href={"/pricing"} white>
            Get started
          </Button>
        </div>
        <div className=" relative max-w-[23rem] md:max-w-5xl xl:mb-24 mx-auto">
          <div className=" relative z-1 rounded-2xl bg-conic-gradient p-0.5">
            <div className=" bg-n-8 rounded-[1rem] relative">
              <div className="h-[1.4rem] rounded-t-[0.9rem] bg-n-10" />
              <div className=" roudend-b-[0.9rem] aspect-[33/40] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img src={robot} alt="hero" className=" w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:translate-y-[10%] lg:-translate-y-[23%]" width={1024} height={490} />
                <ScrollParallax isAbsolutelyPositioned>
                  <Generating className={"absolute bottom-5 left-4 right-4 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2"} />
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className=" hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 border backdrop-blur border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li key={index} className="p-5">
                        <img src={icon} alt="icon" width={24} height={25} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification className=" hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex backdrop-blur" title="Code generation" />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className=" absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img src={heroBackground} alt="heroBackground" className="w-full" width={1440} height={1800} />
          </div>
          <BackgroundCircles />
        </div>
        <CompanyLogos className="hidden relative mt-20 lg:block z-10" />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
