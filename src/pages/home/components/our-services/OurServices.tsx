import { Link } from "react-router";
import { useState } from "react";
import {
  LuEarth,
  LuWarehouse,
  LuTruck,
  LuRadar,
  LuShieldCheck,
  LuClock,
} from "react-icons/lu";
import {
  type ServicePanelProps,
  type ServiceTabProps,
  services,
  type FeaturedItemProps,
} from "./servicesData";

function OurServices() {
  const [activeTab, setActiveTab] = useState(0);

  function handleTabClick(num: number) {
    setActiveTab(num);
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-[auto_minmax(0,1fr)] md:gap-x-12 mx-4 pt-72 pb-12 md:pt-90 md:mx-12 md:pb-24 lg:py-24 lg:mx-16 xl:mx-32">
      <div className="flex gap-4 md:col-start-1 md:row-start-1">
        <div className="hidden md:block bg-primary w-1.5"></div>
        <p className="hidden md:block uppercase font-mono tracking-widest leading-1 text-primary [writing-mode:vertical-rl] rotate-180 self-end">
          What we do
        </p>
      </div>

      {/* Heading + tabs + panel (column 2, row 1) */}
      <div className="md:col-start-2 md:row-start-1">
        <div className="flex gap-4 mb-4 lg:mb-8">
          <div className="md:hidden bg-primary w-1.5 rounded-xl"></div>

          <div className="flex flex-1 flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <p className="eyebrow md:hidden">What we do</p>

            <h1 className="text-xl md:text-2xl lg:text-5xl font-black">
              Shipping, storage and delivery, <br className="hidden md:block" />
              handled by one partner.
            </h1>

            <Link
              to="/service"
              className="text-primary font-bold w-fit underline"
            >
              All services
            </Link>
          </div>
        </div>

        {/* Service Tabs and Panels container */}
        <div className="flex flex-col gap-6 lg:flex lg:flex-row lg:gap-4">
          {/* Service Tabs */}
          <div className="flex flex-col gap-4 shrink-0">
            <ServiceTab
              id="01"
              Icon={LuEarth}
              label="Cross-Border Freight"
              onClick={() => handleTabClick(0)}
              isActive={activeTab === 0}
            />

            <ServiceTab
              id="02"
              Icon={LuWarehouse}
              label="Contract Warehousing"
              onClick={() => handleTabClick(1)}
              isActive={activeTab === 1}
            />

            <ServiceTab
              id="03"
              Icon={LuTruck}
              label="Last-Mile Distribution"
              onClick={() => handleTabClick(2)}
              isActive={activeTab === 2}
            />
          </div>

          {/* Service Panels */}
          <ServicePanel {...services[activeTab]} />
        </div>

        <div className="mt-12 border-t border-outline-variant pt-8 md:col-start-2 md:row-start-2">
          <div className="grid gap-6 lg:grid-cols-3 [&_svg]:text-primary">
            <FeaturedItem
              title="Shipment tracking"
              description="Follow each shipment's milestones on a dedicated tracking
                  page."
              Icon={LuRadar}
            />

            <FeaturedItem
              title="Safe & compliant"
              description="Documentation and security checks handled at every border."
              Icon={LuShieldCheck}
            />

            <FeaturedItem
              title="Always-on support"
              description="A dedicated team ready to help, day and night."
              Icon={LuClock}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceTab({ id, Icon, label, onClick, isActive }: ServiceTabProps) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-4 border border-outline-variant py-5 pl-3 lg:pr-45 rounded-xl shadow-2xl cursor-pointer  ${isActive ? "bg-primary text-on-primary [&_svg]:text-on-primary" : "[&_svg]:text-primary"}`}
    >
      <span className="font-mono text-sm opacity-70">{id}</span>
      <Icon size={25} />
      <span className="font-bold text-md md:text-lg">{label}</span>
    </div>
  );
}

function ServicePanel({
  title,
  description,
  image,
  firstLabel,
  secondLabel,
  thirdLabel,
  to,
}: ServicePanelProps) {
  return (
    <div className="flex flex-col lg:grid lg:grid-rows-2 rounded-xl border border-outline-variant shadow-2xl">
      <div className="relative aspect-video lg:aspect-auto">
        <picture>
          <source srcSet={image.avif} type="image/avif" />
          <source srcSet={image.webp} type="image/webp" />
          <img
            src={image.webp}
            alt={image.alt}
            className="absolute inset-0 h-full w-full object-cover rounded-t-xl"
          />
        </picture>
      </div>

      <div className="flex flex-col gap-4 px-8 py-12">
        <h1 className="text-2xl font-black">{title}</h1>

        <p className="text-on-surface-variant tracking-normal mt-3">
          {description}
        </p>

        <div className="flex flex-col lg:flex-row gap-4 mt-3">
          <span className="border-t border-outline-variant pt-3 font-medium text-sm">
            {firstLabel}
          </span>
          <span className="border-t border-outline-variant pt-3 font-medium text-sm">
            {secondLabel}
          </span>
          <span className="border-t border-outline-variant pt-3 font-medium text-sm">
            {thirdLabel}
          </span>
        </div>

        <Link to={to} className="text-primary text-sm font-semibold mt-8">
          View service
        </Link>
      </div>
    </div>
  );
}

function FeaturedItem({ title, Icon, description }: FeaturedItemProps) {
  return (
    <div className="flex gap-4">
      <Icon size={22} className="mt-1 shrink-0" />

      <div>
        <h3 className="font-bold text-sm">{title}</h3>
        <p className="text-sm text-on-surface-variant">{description}</p>
      </div>
    </div>
  );
}

export { OurServices };
