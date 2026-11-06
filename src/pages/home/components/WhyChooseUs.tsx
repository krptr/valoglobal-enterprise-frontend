import { LuClock, LuBoxes, LuShieldCheck, LuEarth } from "react-icons/lu";

function WhyChooseUs() {
  return (
    <section className="flex gap-8 lg:gap-12 mx-4 py-12 md:mx-12 lg:mx-16 xl:mx-32 md:py-24">
      <div className="flex gap-4">
        <div className="bg-primary w-1.5 rounded-xl"></div>
        <p className="uppercase font-mono tracking-widest leading-1 text-primary [writing-mode:vertical-rl] rotate-180 self-end">
          Your logistics partner
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl lg:text-5xl font-black">
            Why Brands Choose Us
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl">
            Less chasing, fewer surprises. We take care of the moving parts so
            you can focus on your customers.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 items-start gap-4 [&_svg]:text-primary">
          {/* First Why Choose US Box */}
          <div className="bg-background shadow-2xl p-6 border border-outline-variant rounded-xl">
            <div className="flex justify-between items-center">
              <LuClock size={25} />
              <span className="text-xs font-mono text-on-surface-variant">
                01
              </span>
            </div>

            <div>
              <h3 className="text-lg leading-relaxed mt-5 font-bold">
                Deliveries you can count on
              </h3>
              <p className="text-sm text-on-surface-variant mt-3">
                Clear timelines and regular updates, so you always know when
                your goods will arrive.
              </p>
            </div>
          </div>

          {/* Second Why Choose US Box */}
          <div className="lg:mt-10 bg-background shadow-2xl p-6 border border-outline-variant rounded-xl">
            <div className="flex justify-between items-center">
              <LuBoxes size={25} />
              <span className="text-xs font-mono text-on-surface-variant">
                02
              </span>
            </div>

            <div>
              <h3 className="text-lg leading-relaxed mt-5 font-bold">
                Grows with your business
              </h3>
              <p className="text-sm text-on-surface-variant mt-3">
                More space and capacity when your busy season hits, without long
                lock-in commitments.
              </p>
            </div>
          </div>

          {/* Third Why Choose US Box */}
          <div className="lg:mt-20 bg-background shadow-2xl p-6 border border-outline-variant rounded-xl">
            <div className="flex justify-between items-center">
              <LuShieldCheck size={25} />
              <span className="text-xs font-mono text-on-surface-variant">
                03
              </span>
            </div>

            <div>
              <h3 className="text-lg leading-relaxed mt-5 font-bold">
                Paperwork handled for you
              </h3>
              <p className="text-sm text-on-surface-variant mt-3">
                We sort out the forms and border checks, so your shipments don't
                get stuck.
              </p>
            </div>
          </div>

          {/* Fourth Why Choose US Box */}
          <div className="lg:mt-30 bg-background shadow-2xl p-6 border border-outline-variant rounded-xl">
            <div className="flex justify-between items-center">
              <LuEarth size={25} />
              <span className="text-xs font-mono text-on-surface-variant">
                04
              </span>
            </div>

            <div>
              <h3 className="text-lg leading-relaxed mt-5 font-bold">
                Real people, ready to help
              </h3>
              <p className="text-sm text-on-surface-variant mt-3">
                A dedicated team that knows your account, not a chatbot or a
                ticket queue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { WhyChooseUs };
