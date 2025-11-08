import { StaticImageData } from "next/image";
import { Illustrations } from "@/assets/illustrations";

export type BuildForGrowthItem = {
  title: string;
  list: string[];
  image: StaticImageData | string;
  direction: "left" | "right";
  imageWidth?: number;
  imageHeight?: number;
  classNames?: string;
};

export const BUILD_FOR_GROWTH: BuildForGrowthItem[] = [
  {
    title: "Behavioral Intelligence",
    list: [
      "Tracks user actions in real time: clicks, scroll depth, time spent, navigation paths, and repeat visits.",
      "Identifies patterns that reveal purchase intent and interest.",
    ],
    image: Illustrations.BEHAVIORAL_INTELLIGENCE,
    direction: "right",
    classNames: "md:mr-4",
  },
  {
    title: "Customer Profiling & Enrichment",
    list: [
      "Builds rich customer profiles by combining on-site behavior with external data (e.g., LinkedIn, CRM, email).",
      "Turns fragmented interactions into a single, actionable customer view.",
    ],
    image: Illustrations.CUSTOMER_PROFILING,
    direction: "left",
    classNames: "md:ml-4",
  },
  {
    title: "Automated Lead Qualification",
    list: [
      "Assigns lead scores based on behavioral signals and enriched attributes.",
      "Helps sales teams focus energy on prospects most likely to convert.",
    ],
    image: Illustrations.AUTOMATED_LEAD_QUALIFICATION,
    direction: "right",
    imageHeight: 400,
    imageWidth: 500,
    classNames: "md:mr-4",
  },
  {
    title: "Seamless Integrations",
    list: [
      "Connects with CRMs, helpdesks, and marketing automation tools.",
      "Fully customizable and brandable for any business need.",
    ],
    image: Illustrations.SEAMLESS_INTEGRATIONS,
    direction: "left",
    classNames: "md:ml-4",
  },
];
