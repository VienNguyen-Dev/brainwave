import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({ className, id, crosses, crossesOfset, customPaddings, children }) => {
  return (
    <div id={id} className={` relative ${customPaddings || "py-10 lg:py-14 xl:py-18"}  ${crosses ? "lg:py-32 xl:py-40" : ""} ${className || ""}`}>
      {children}
      <div className=" absolute hidden top-0 left-5 w-0.25 bg-stroke-1 lg:left-7.5 xl:left-10 h-full pointer-events-none md:block" />
      <div className=" absolute hidden top-0 right-5 w-0.25 bg-stroke-1 lg:right-7.5 xl:right-10 h-full pointer-events-none md:block" />
      {crosses && (
        <>
          <div className={` hidden absolute right-7.5 left-7.5 top-0 h-0.25 bg-stroke-1 ${crossesOfset && crossesOfset} pointer-events-none lg:block xl:left-10 right-10`}>
            <SectionSvg crossesOffset={crossesOfset} />
          </div>
        </>
      )}
    </div>
  );
};

export default Section;
