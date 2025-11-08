import Hero from "@/components/sections/hero";
import BuildForGrowth from "@/components/sections/build-for-growth";
import WhyDifferent from "@/components/sections/why-different";
import Interface from "@/components/sections/interface";
import ValueDelivered from "@/components/sections/value-delivered";

import { BG } from "@/assets/bg";
import CURSOR from "@/assets/cursor.svg";

export default async function Home() {
  return (
    <main
      className="bg-[#F6F9FF] w-screen min-h-screen overflow-x-hidden md:space-y-32 space-y-18"
      style={{
        cursor: `url(${CURSOR.src}) 4 4, auto`,
      }}
    >
      <GridBG />
      <Hero />
      <BuildForGrowth />
      <WhyDifferent />
      <Interface />
      <ValueDelivered />
    </main>
  );
}

const GridBG = () => {
  return (
    <div
      className="fixed h-screen inset-0 bg-repeat pointer-events-none"
      style={{
        backgroundImage: `url(${BG.GRID.src})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    ></div>
  );
};
