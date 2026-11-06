import aboutUsImageWebp from "../../../assets/other/warehouse.webp";
import aboutUsImageAvif from "../../../assets/other/warehouse.avif";

function AboutUs() {
  return (
    <section className="relative mx-4 py-12 md:mx-12 lg:mx-16 xl:mx-32 md:py-24">
      <div>
        <picture>
          <source srcSet={aboutUsImageAvif} type="image/avif" />
          <source srcSet={aboutUsImageWebp} type="image/webp" />
          <img
            src={aboutUsImageWebp}
            alt="Warehouse infrastructure"
            loading="lazy"
            className="w-full lg:w-3/5 h-120 lg:h-200 object-cover rounded-2xl shadow-xl"
          />
        </picture>
      </div>

      <div className="absolute -bottom-50 lg:w-1/2 rounded-2xl lg:top-1/2 lg:-translate-y-1/2 bg-surface-variant shadow-xl p-12 lg:right-0">
        <p className="text-primary uppercase text-[11px] md:text-sm leading-1 tracking-widest font-mono mb-3">
          WHO WE ARE
        </p>

        <h1 className="font-sans text-2xl md:text-3xl lg:text-5xl font-black mb-5">
          About Our <br />
          Infrastructure
        </h1>

        <div className="h-1 bg-primary w-15 mb-5"></div>

        <div className="text-sm md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl space-y-4">
          <p>
            ValoGlobal is a logistics and supply chain partner for international
            companies. We handle cross-border freight, secure climate-controlled
            warehousing, and transportation.
          </p>

          <p>
            We coordinate large manufacturing shipments, clear customs, and run
            warehouse operations, so you don't have to manage each piece
            yourself. Fewer handoffs means less overhead for your team.
          </p>

          <p>
            Transportation, warehousing, and freight management all sit under
            one contract. You deal with one team, and your goods keep moving as
            your business grows.
          </p>
        </div>
      </div>
    </section>
  );
}

export { AboutUs };
