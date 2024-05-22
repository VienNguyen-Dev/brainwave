import { brainwave, brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import Section from "./Section";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="lg:flex container">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">Ai Chat for seamless Collaboration</h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li key={item.id} className="mb-3 my-3">
                <div className=" flex items-center">
                  <img src={check} alt="check" width={24} height={24} />
                  <h6 className=" ml-5 body-2">{item.title}</h6>
                </div>
                {item.text && <p className=" text-n-4 body-2 mt-3">{item.text}</p>}
              </li>
            ))}
          </ul>
          <Button>Try it now</Button>
        </div>
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className=" body-2 text-n-4 mb-4 md:mb-16 lg:mb-32 lg:mx-auto lg:w-[22rem]">{collabText}</p>
          <div className="flex rounded-full relative w-[22rem] scale-75 md:scale-100 -translate-x-1/2 border border-n-6 left-1/2 aspect-square">
            <div className="w-60 aspect-square flex rounded-full border border-n-6 m-auto">
              <div className=" m-auto p-[0.2rem] rounded-full aspect-square w-[6rem] bg-conic-gradient">
                <div className=" flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img src={brainwaveSymbol} alt="brainwave" width={48} height={48} />
                </div>
              </div>
            </div>
            <ul className="">
              {collabApps.map((item, index) => (
                <li key={item.id} className={`absolute top-0 left-1/2 -ml-[1.6rem] h-1/2 origin-bottom rotate-${index * 45}`}>
                  <div className={` relative -top-[1.6rem] w-[3.2rem] h-[3.2rem] flex rounded-xl border border-n-1/15 bg-n-7 -rotate-${index * 45}`}>
                    <img src={item.icon} alt={item.title} className="m-auto" width={item.width} height={item.height} />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
