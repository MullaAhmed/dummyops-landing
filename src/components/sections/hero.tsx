import Image from "next/image";
import Navbar from "./navbar";
import JoinWaitlist from "../join-waitlist";
import { Loader2, ShieldCheck } from "lucide-react";
import { Illustrations } from "@/assets/illustrations";
import { getRowCount } from "@/lib/server/actions/google/spreadsheet";
import { Suspense } from "react";

export const rowCount = async () => {
  const rowCount = await getRowCount();
  if (!rowCount || !rowCount.success) {
    return 1000;
  }
  return rowCount.data as number;
};

export default function Hero() {
  return (
    <section className={`relative w-full h-screen`}>
      <div className="container mx-auto h-full w-full z-[50]">
        <Navbar />
        <div className="md:grid md:grid-cols-2 gap-10 h-full pt-[100px]">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
}

const HeroContent = () => {
  return (
    <div className="flex flex-col h-full w-full justify-center items-start gap-16">
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl font-bold text-[#333333] leading-tight dummy-modify-abm">
          Understand your Visitors.
          <br /> Accelerate your Sales.
        </h1>
        <p className="text-lg text-[#333333] font-light max-w-lg leading-tight dummy-modify-abm">
          Transform every anonymous visitor into a complete customer profile
          that drives sales, support, and marketing.
        </p>
      </div>
      <div className="flex flex-col gap-6 w-full">
        <JoinWaitlist marginTop="mt-10" width="w-full max-w-lg" />
        <Suspense fallback={<Loader2 className="w-4 h-4 animate-spin" />}>
          <HeroCount />
        </Suspense>
      </div>
    </div>
  );
};

const HeroImage = () => {
  return (
    <div className="flex-col h-full w-full justify-center items-end hidden md:flex">
      <div className="relative h-full w-full">
        <Image
          src={Illustrations.HERO_WEBP}
          placeholder="blur"
          alt="Hero"
          fill
          quality={80}
          priority
          className="object-contain object-right"
        />
      </div>
    </div>
  );
};

const HeroCount = async () => {
  const count = await rowCount();
  return (
    <div className="max-w-sm w-fit text-sm text-[#333333] bg-background border border-[#0563FF] rounded-full font-light px-4 py-2 flex items-center gap-2">
      <ShieldCheck className="w-4 h-4 text-[#0563FF]" />
      <span>{count} in the Waitlist</span>
    </div>
  );
};
