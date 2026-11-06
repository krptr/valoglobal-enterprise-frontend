import heroLight from "../../../assets/hero/hero-light.webp";
import heroDark from "../../../assets/hero/hero-dark.webp";
import { useNavigate } from "react-router";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative shadow-2xl border-b-2 border-outline-variant">
      <div className="h-196 w-full overflow-hidden">
        <img
          src={heroLight}
          alt="Hero Image"
          fetchPriority="high"
          className="h-full w-full object-cover object-[50%_80%] dark:hidden"
        />

        <img
          src={heroDark}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="h-full w-full object-cover object-[50%_80%] hidden dark:block"
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <div className="max-w-5xl -mt-32 md:-mt-24 lg:-mt-1 text-center">
          <h1 className="font-sans font-black leading-[0.95] tracking-tight text-4xl md:text-7xl xl:text-[7.5rem] select-none text-on-surface-container-highest drop-shadow-[4px_4px_0px_var(--color-scrim)] md:drop-shadow-[8px_8px_0px_var(--color-scrim)]">
            Your supply <br /> chain. In <br />
            <span className="text-primary">capable hands.</span>
          </h1>

          <p className="mt-10 text-base text-on-surface-container-highest md:text-lg max-w-2xl mx-auto font-sans font-bold drop-shadow-[2px_2px_0px_var(--color-scrim)]">
            We move your goods, manage your storage and get your shipments where
            they need to be, reliably and on time.
          </p>
        </div>

        {/* 3D Interactive Buttons */}
        <div className="mt-12 flex flex-col md:flex-row gap-6">
          <button
            onClick={() => navigate("/quote")}
            className="bg-primary text-on-primary py-3 px-6 font-sans font-bold border-2 border-scrim shadow-[4px_4px_0px_0px_var(--color-scrim)] 
            hover:shadow-[2px_2px_0px_0px_var(--color-scrim)] hover:translate-x-0.5 hover:translate-y-0.5 active:shadow-none active:translate-x-1 active:translate-y-1 transition-all duration-100"
          >
            Get a Commercial Quote
          </button>
          <button
            onClick={() => navigate("/service")}
            className="bg-on-surface-container-highest text-surface-container-highest py-3 px-6 text-base border-2 border-scrim font-sans font-bold 
            shadow-[4px_4px_0px_0px_var(--color-scrim)] hover:shadow-[2px_2px_0px_0px_var(--color-scrim)] hover:translate-x-0.5 hover:translate-y-0.5 active:shadow-none active:translate-x-1 active:translate-y-1 transition-all duration-100"
          >
            Explore Our Services
          </button>
        </div>
      </div>
    </section>
  );
}

export { HeroSection };
