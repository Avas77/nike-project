import HeroSectionLeft from "../HeroSectionLeft";
import HeroSectionRight from "../HeroSectionRight";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <HeroSectionLeft />
      <HeroSectionRight />
    </section>
  );
};

export default Hero;
