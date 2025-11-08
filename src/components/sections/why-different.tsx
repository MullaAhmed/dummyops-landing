import Image from "next/image";

import { Illustrations } from "@/assets/illustrations";
import { Logos } from "@/assets/logo";

export default function WhyDifferent() {
  return (
    <section
      className={`relative w-full pt-36`}
      id="why-choose-us"
    >
      <div className="container mx-auto h-full w-full flex flex-col gap-24">
        <h1 className="text-4xl md:text-5xl text-center font-bold text-[#333333] leading-tight">
          Why DummyOPS Is Different
        </h1>
        <div
          className="md:h-[400px] w-full border border-[#0563FF] rounded-4xl md:grid md:grid-cols-2 md:px-20 px-8 gap-10"
          style={{
            background:
              "radial-gradient(99.57% 99.57% at 0% 28.38%, #2059B8 42.36%, #2469DD 63.22%, #5491F7 89.9%, #7FAFFF 100%)",
          }}
        >
          <div className="flex h-full w-full items-start flex-col gap-24 py-16">
            <Image src={Logos.WHITE} alt="Logo" width={48} height={48} />
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold text-white">
                Not just a chatbot
              </h1>
              <p className="text-xl text-white max-w-xl">
                A full intelligence + engagement engine, with chat as one
                interface.
              </p>
            </div>
          </div>
          <div className="h-full w-full items-center justify-end hidden md:flex">
            <Image
              src={Illustrations.WHY_DIFFERENT}
              alt="Why Different"
              width={400}
              height={400}
              className="-mt-[5px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
