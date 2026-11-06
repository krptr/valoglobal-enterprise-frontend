import React from "react";
import containerShipAvif from "../../../../assets/service/container-ship-light.avif";
import containerShipWebp from "../../../../assets/service/container-ship-light.webp";
import wareHousingAvif from "../../../../assets/service/warehouseracking-light.avif";
import wareHousingWebp from "../../../../assets/service/warehouseracking-light.webp";
import truckHighwayAvif from "../../../../assets/service/truck-highway-light.avif";
import truckHighwayWebp from "../../../../assets/service/truck-highway-light.webp";
import type { IconType } from "react-icons";

interface ServiceTabProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  Icon: React.ComponentType<{ size?: number }>;
  label: string;
  onClick: () => void;
  isActive: boolean;
}

interface ServicePanelProps {
  title: string;
  description: string;
  image: {
    avif: string;
    webp: string;
    alt: string;
  };
  firstLabel: string;
  secondLabel: string;
  thirdLabel: string;
  to: string;
}

interface FeaturedItemProps {
  title: string;
  Icon: IconType;
  description: string;
}

const services: ServicePanelProps[] = [
  // For Freight
  {
    title: "Cross-Border Freight",
    description:
      "Global shipping by air, ocean and road, with customs clearance handled for you from start to finish.",
    image: {
      avif: containerShipAvif,
      webp: containerShipWebp,
      alt: "Container ship at sea",
    },
    firstLabel: "Air, ocean and road options",
    secondLabel: "Customs paperwork handled for you",
    thirdLabel: "One point of contact per shipment",
    to: "/service/freight",
  },

  // For Warehousing
  {
    title: "Contract Warehousing",
    description:
      "Secure, flexible storage with temperature control to protect your inventory as your business grows.",
    image: {
      avif: wareHousingAvif,
      webp: wareHousingWebp,
      alt: "Warehouse aisle with stocked racking",
    },
    firstLabel: "Space that scales with demand",
    secondLabel: "Temperature-controlled zones",
    thirdLabel: "Clear stock counts at every site",
    to: "/service/warehousing",
  },

  // For Last-Mile Distribution
  {
    title: "Last-Mile Distribution",
    description:
      "Fast, reliable delivery to your stores, distribution centres or directly to your customers.",
    image: {
      avif: truckHighwayAvif,
      webp: truckHighwayWebp,
      alt: "Delivery truck on a highway",
    },
    firstLabel: "Proof of delivery on every drop",
    secondLabel: "Careful handling for fragile goods",
    thirdLabel: "Same-day and scheduled delivery",
    to: "/service/lastmile",
  },
];

export {
  type ServicePanelProps,
  type ServiceTabProps,
  services,
  type FeaturedItemProps,
};
