import heroLight from "../../../assets/hero/hero-light.webp";
import heroDark from "../../../assets/hero/hero-dark.webp";
import { useNavigate } from "react-router";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative">
      <div className="h-196 w-full overflow-hidden">
        <img
          src={heroLight}
          alt="Hero Image"
          decoding="async"
          className="h-full w-full object-cover object-[50%_80%] dark:hidden"
        />

        <img
          src={heroDark}
          alt=""
          aria-hidden="true"
          decoding="async"
          className="h-full w-full object-cover object-[50%_80%] hidden dark:block"
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        {/* Content wrapper to constrain width and force text alignment */}
        <div className="max-w-5xl text-center">
          {/* 3D text using hard drop shadows */}
          <h1 className="font-sans font-black leading-[0.95] tracking-tight sm:text-6xl md:mt-6 md:text-7xl lg:text-8xl xl:text-[7.5rem] select-none text-on-surface-container-highest drop-shadow-[4px_4px_0px_var(--color-scrim)] md:drop-shadow-[8px_8px_0px_var(--color-scrim)]">
            Your supply <br /> chain. In <br />
            <span className="text-primary">capable hands.</span>
          </h1>

          <p className="mt-10 text-base text-on-surface-container-highest md:text-lg max-w-2xl mx-auto font-sans font-bold drop-shadow-[2px_2px_0px_var(--color-scrim)]">
            We move your goods, manage your storage and get your shipments where
            they need to be, reliably and on time.
          </p>
        </div>

        {/* 3D Interactive Buttons */}
        <div className="mt-12 flex gap-6">
          <button
            onClick={() => navigate("/quote")}
            className="bg-primary text-on-primary py-3 px-6 font-sans font-bold border-2 border-scrim shadow-[4px_4px_0px_0px_var(--color-scrim)] hover:shadow-[2px_2px_0px_0px_var(--color-scrim)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-100"
          >
            Get a Commercial Quote
          </button>
          <button
            onClick={() => navigate("/service")}
            className="bg-background text-on-background py-3 px-6 text-base border-2 border-scrim font-sans font-bold shadow-[4px_4px_0px_0px_var(--color-scrim)] hover:shadow-[2px_2px_0px_0px_var(--color-scrim)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-100"
          >
            Explore services
          </button>
        </div>
      </div>
    </section>
  );
}

export { HeroSection };
