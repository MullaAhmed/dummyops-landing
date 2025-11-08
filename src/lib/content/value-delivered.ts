import { StaticImageData } from "next/image";

import { Illustrations } from "@/assets/illustrations";

export type ValueDeliveredItem = {
  id: "customer-intelligence" | "lead-qualification" | "lead-acceleration" | "marketing-precision";
  title: string;
  description: string;
  image: StaticImageData | string;
  classNames?: string;
};

export const VALUE_DELIVERED: ValueDeliveredItem[] = [
  {
    id: "customer-intelligence",
    title: "Customer Intelligence",
    description: "Deep insights into who visitors are and what they want.",
    image: Illustrations.CUSTOMER_INTELLIGENCE,
  },
  {
    id: "lead-qualification",
    title: "Lead Qualification",
    description:
      "Automatic qualification and prioritization of high-value leads.",
    image: Illustrations.LEAD_QUALIFICATION,
  },
  {
    id: "lead-acceleration",
    title: "Lead Acceleration",
    description: "Conversational interface reduces repetitive queries.",
    image: Illustrations.LEAD_ACCELERATION,
  },
  {
    id: "marketing-precision",
    title: "Marketing Precision",
    description: "Behavioral data powers hyper-targeted outreach campaigns.",
    image: Illustrations.MARKETING_PRECISION,
  },
];
