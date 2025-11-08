import Image from "next/image";

import { Illustrations } from "@/assets/illustrations";

export default function Interface() {
  return (
    <section className={`relative w-full h-screen pt-36`}>
      <div className="container mx-auto h-full w-full flex flex-col gap-24">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl text-center font-bold text-[#333333] leading-tight">
            The chatbot is just one interface.
          </h1>
          <span className="text-[#333333] text-xl font-light max-w-2xl mx-auto text-center">
            The real power lies in DummyOPS&apos;s ability to unify support,
            sales, and marketing intelligence in one seamless system.
          </span>
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src={Illustrations.INTERFACE}
            alt="Interface"
            width={1200}
            height={1200}
            className="w-full h-auto max-w-5xl object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
