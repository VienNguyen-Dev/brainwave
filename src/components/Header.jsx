import { useLocation } from "react-router-dom";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import { useState } from "react";
import { HamburgerMenu } from "./design/Header";
import MenuSvg from "../assets/svg/MenuSvg";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const tonggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };
  return (
    <div className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}>
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a href="#hero" className="block w-[12rem] xl:mr-8">
          <img src={brainwave} alt="logo" width={190} height={40} />
        </a>
        <nav className={` ${openNavigation ? "flex" : "hidden"} fixed right-0 top-[5rem] left-0 bottom-0 lg:flex  bg-n-8 lg:static lg:bg-transparent lg:mx-auto`}>
          <div className=" relative z-2 flex flex-col items-center justify-center lg:flex-row m-auto">
            {navigation.map((item) => (
              <a
                onClick={handleClick}
                href={item.url}
                key={item.id}
                className={`block relative font-code text-2xl text-n-1 uppercase transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"} lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <a href="#signup" className="hidden mr-8 button text-n-1/50 hover:text-n-1 lg:block transition-colors">
          New Account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign In
        </Button>
        <Button className={"ml-auto lg:hidden"} px="px-3" onClick={tonggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
