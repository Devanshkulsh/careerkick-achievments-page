import Plasma from "./Plasma";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      <Plasma
        color="#5ac20d"
        speed={0.6}
        direction="forward"
        scale={1.1}
        opacity={0.8}
        mouseInteractive={true}
      />
      <Header />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 py-10 text-center text-white sm:px-6">
        <h1 className="mb-3 max-w-[18ch] text-3xl font-semibold leading-tight sm:text-4xl md:text-6xl">
          Celebrating Our Journey of Excellence
        </h1>
        <p className="mb-7 max-w-md text-sm leading-relaxed sm:max-w-xl sm:text-base md:max-w-2xl md:text-xl">
          Discover the milestones, achievements, and success stories that define
          our company's growth and impact.
        </p>
        <div className="flex w-full max-w-xs flex-col justify-center gap-3 sm:max-w-none sm:flex-row">
          <button
            type="button"
            className="w-full rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-900 sm:w-auto sm:text-base"
          >
            View Achievements
          </button>
          <button
            type="button"
            className="w-full rounded-full border border-white bg-transparent px-5 py-3 text-sm font-semibold text-white sm:w-auto sm:text-base"
          >
            Book Counselling session
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
