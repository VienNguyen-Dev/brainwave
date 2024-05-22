import Heading from "./Heading";
import Section from "./Section";
import { check, service1, service2, service3 } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./Generating";
import { Gradient, PhotoChatMessage, VideoBar, VideoChatMessage } from "./design/Services";

const Sevices = () => {
  return (
    <Section id={"how-to-use"}>
      <div className=" container">
        <Heading title={"Generative AI made for creators."} text={"Brainwave unlocks the potential of AI-powered applications"} />
        <div className=" relative">
          <div className=" relative z-1 flex items-center h-[39rem] xl:h-[46rem] p-8 lg:p-20 mb-5 rounded-3xl border border-n-1/10 overflow-hidden">
            <div className=" absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img src={service1} alt="Mastest AI" className=" w-full h-full object-cover md:object-right" width={800} height={730} />
            </div>
            <div className=" relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 text-n-3 mb-[3rem]">Brainwave unlocks the potential of AI-powered applications</p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li key={index} className=" flex items-start py-4 border-t border-n-6 ">
                    <img src={check} alt="serviceicon" width={24} height={24} />
                    <p className=" ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating className={"absolute bottom-4 left-4 right-4 border border-n-1/10 lg:left-1/2 lg:-translate-x-1/2 lg-right-auto lg:bottom-8"} />
          </div>
          <div className=" relative z-1 grid gap-5 lg:grid-cols-2">
            <div className=" relative border border-n-1/10 rounded-3xl min-h-[39rem] overflow-hidden">
              <div className=" absolute inset-0">
                <img src={service2} className=" w-full h-full object-cover" width={630} height={750} alt="robot" />
              </div>
              <div className=" absolute inset-0 flex flex-col p-8 justify-end bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Photo editing</h4>
                <p className="body-2 text-n-3 mb-[3rem]">Automatically enhance your photos using our AI app&apos;s photo editing feature. Try it now!</p>
              </div>
              <PhotoChatMessage />
            </div>
            <div className=" border border-n-9 rounded-3xl p-4 overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 lg:px-8">
                <h4 className=" h-4 mb-4">Video Genretion</h4>
                <p className=" body-2 mb-[2rem] text-n-3">The world &apos;s most powerful AI photo and video art generation engine. What will you create? </p>
                <ul className=" flex items-center justify-between">
                  {brainwaveServicesIcons.map((icon, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2 ? "w-[4rem] h-[3rem] p-0.25 bg-conic-gradient  md:w-[4.5rem] md:h-[4.5rem]" : " flex h-10 w-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div className={`${index === 2 ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]" : ""}`}>
                        <img src={icon} alt={icon} width={24} height={24} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" relative rounded-xl bg-black h-[20rem] md:h-[25rem] overflow-hidden">
                <img src={service3} alt="robot" className=" w-full h-full object-cover" width={520} height={400} />
                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
      .
    </Section>
  );
};

export default Sevices;
