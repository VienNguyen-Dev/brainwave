import { socials } from "../constants";
import Section from "./Section";

const Footer = () => {
  return (
    <Section crosses className={"!px-0 !py-10"}>
      <div className=" container flex sm:justify-between justify-center items-center max-sm:flex-col gap-10">
        <p className=" caption text-n-4 lg:block">@ {new Date().getFullYear()} All rights reserved.</p>
        <ul className="flex flex-wrap gap-5">
          {socials.map((item) => (
            <a href={item.url} key={item.id} className=" flex items-center justify-center h-10 w-10 rounded-full transition-colors bg-n-7 hover:bg-n-6" target="_blank">
              <img src={item.iconUrl} alt={item.title} width={16} height={16} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
