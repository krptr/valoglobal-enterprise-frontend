// import LogoPreview from "./BrandLogosComponent";
import type { ComponentType } from "react";
import {
  Akari,
  ArdentVale,
  Blokk,
  Brightloom,
  Clearform,
  Elan,
  Halden,
  Kestrel,
  Kova,
  MarlowFinch,
  Mazuri,
  Mediva,
  Nexora,
  Oyamo,
  Pelagus,
  Quickstride,
  Soliday,
  Stroma,
  Sundri,
  Tailorly,
  Torvik,
  Velox,
  Verrano,
  Zenta,
} from "./BrandLogosComponent";

const logoRows: ComponentType[][] = [
  [
    Brightloom,
    Kova,
    Pelagus,
    Halden,
    Blokk,
    Stroma,
    Nexora,
    Mazuri,
    Verrano,
    Tailorly,
    Mediva,
    Akari,
  ],
  [
    MarlowFinch,
    Zenta,
    Torvik,
    Soliday,
    Clearform,
    Oyamo,
    Quickstride,
    ArdentVale,
    Velox,
    Sundri,
    Elan,
    Kestrel,
  ],
];

const logoITems1 = [...logoRows[0], ...logoRows[0]];
const logoItems2 = [...logoRows[1], ...logoRows[1]];

function BrandLogos() {
  return (
    <section className="py-20">
      <div className="grid lg:grid-cols-2 mx-4 md:mx-12 lg:mx-16 xl:mx-32 gap-4 lg:-gap-2 pt-4 lg:pt-10 border-t-4 border-primary">
        <h1 className="text-on-surface-variant text-lg uppercase tracking-wide">
          Our Customers
        </h1>
        <div>
          <h2 className="font-black text-3xl lg:text-5xl mb-8">
            Trusted by global <br />
            industry leaders
          </h2>
          <p className="font-mono text-on-surface-variant text-lg">
            Over 400 corporations rely on ValoGlobal to move, store, and deliver
            their goods across more than 90 countries. From established
            multinationals to fast-growing brands, our clients trust us with
            cross-border freight, contract warehousing, and last-mile
            distribution to keep their supply chains running without
            interruption.
          </p>
        </div>
      </div>

      <div className="overflow-hidden mt-10 lg:mt-20 space-y-10">
        <div className="flex gap-4 w-max shrink-0 animate-marquee 20s linear infinite motion-reduce:animate-none">
          {logoITems1.map((Logo, i) => (
            <div key={i}>
              <Logo />
            </div>
          ))}
        </div>

        <div className="flex gap-4 w-max shrink-0 animate-marquee 20s linear infinite motion-reduce:animate-none">
          {logoItems2.map((Logo, i) => (
            <div key={i}>
              <Logo />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { BrandLogos };
