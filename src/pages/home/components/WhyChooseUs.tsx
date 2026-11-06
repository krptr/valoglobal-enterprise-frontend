import image1 from "../../../assets/why-choose-us/image-1.avif";
import image2 from "../../../assets/why-choose-us/image-2.avif";
import image3 from "../../../assets/why-choose-us/image-3.avif";
import image4 from "../../../assets/why-choose-us/image-4.avif";

const benefits = [
  {
    number: "01",
    category: "RELIABILITY",
    title: "Deliveries you can count on",
    description:
      "Clear timelines and regular updates, so you always know when your goods will arrive.",
    image: image1,
    alt: "Freight truck transporting goods on a highway",
    position: "center",
    offset: "lg:mt-0",
  },
  {
    number: "02",
    category: "CAPACITY",
    title: "Grows with your business",
    description:
      "More space and capacity when your busy season hits, without long lock-in commitments.",
    image: image2,
    alt: "Large modern warehouse with organised storage",
    position: "center",
    offset: "lg:mt-10",
  },
  {
    number: "03",
    category: "EXPERTISE",
    title: "Paperwork handled for you",
    description:
      "We sort out the forms and border checks, so your shipments don't get stuck.",
    image: image3,
    alt: "International shipping containers at a cargo port",
    position: "center",
    offset: "lg:mt-20",
  },
  {
    number: "04",
    category: "SUPPORT",
    title: "Real people, ready to help",
    description:
      "A dedicated team that knows your account, not a chatbot or a ticket queue.",
    image: image4,
    alt: "Professional team working together",
    position: "center",
    offset: "lg:mt-30",
  },
];

function WhyChooseUs() {
  return (
    <section className="flex gap-4 md:gap-6 lg:gap-8 mx-4 py-16 md:mx-12 lg:mx-16 xl:mx-32 md:py-24">
      {/* Vertical section label */}
      <div className="flex gap-3 md:gap-4 shrink-0">
        <div className="bg-primary w-1.5 rounded-full"></div>

        <p className="uppercase font-mono tracking-widest leading-none text-primary text-xs [writing-mode:vertical-rl] rotate-180 self-end">
          Your logistics partner
        </p>
      </div>

      {/* Main content */}
      <div className="flex-1 min-w-0 flex flex-col gap-10 md:gap-12">
        {/* Section heading */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl lg:text-5xl font-black tracking-tight">
            Why Brands Ship With ValoGlobal
          </h2>

          <p className="text-on-surface-variant text-base md:text-lg max-w-2xl leading-relaxed">
            Less chasing, fewer surprises. We take care of the moving parts so
            you can focus on your customers.
          </p>
        </div>

        {/* Benefit cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-start gap-4 lg:gap-5">
          {benefits.map((benefit) => (
            <article
              key={benefit.number}
              className={`group ${benefit.offset} bg-background border border-outline-variant rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Card image */}
              <div className="relative aspect-16/10 overflow-hidden bg-surface-variant">
                <img
                  src={benefit.image}
                  alt={benefit.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ objectPosition: benefit.position }}
                />

                {/* Subtle image overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent"></div>

                {/* Image number */}
                <span className="absolute bottom-4 right-4 text-white font-mono text-sm">
                  {benefit.number}
                </span>
              </div>

              {/* Card content */}
              <div className="p-5 md:p-6">
                {/* Category */}
                <p className="text-primary text-[10px] font-mono font-semibold tracking-[0.18em] mb-3">
                  {benefit.category}
                </p>

                {/* Heading */}
                <h3 className="text-lg leading-snug font-bold">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-on-surface-variant leading-relaxed mt-3">
                  {benefit.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export { WhyChooseUs };
