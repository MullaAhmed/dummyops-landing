import Image from "next/image";
import { BUILD_FOR_GROWTH } from "@/lib/content/build-for-growth";
import { Fragment } from "react";
import { Disc } from "../ui/disc";
import type { BuildForGrowthItem } from "@/lib/content/build-for-growth";
import { cn } from "@/lib/utils";

export default function BuildForGrowth() {
  return (
    <section className={`relative w-full pt-36`} id="build-for-growth">
      <div className="container mx-auto h-full w-full flex flex-col gap-28">
        <h1 className="text-4xl md:text-5xl text-center font-bold text-[#333333] leading-tight">
          Built for Growth
        </h1>
        <div className="grid md:grid-cols-2 gap-24 lg:gap-36 max-w-[1400px] mx-auto">
          {BUILD_FOR_GROWTH.map((item) => (
            <BuildForGrowthGrid key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

const BuildForGrowthGrid = ({ item }: { item: BuildForGrowthItem }) => {
  return (
    <>
      {item.direction === "left" ? (
        <Fragment key={item.title}>
          <div className={cn("w-full h-full items-center hidden md:flex")}>
            <Image
              src={item.image}
              alt={item.title}
              width={item.imageWidth || 400}
              height={item.imageHeight || 400}
              className="object-cover"
            />
          </div>
          <div key={item.title} className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-[#333333]">{item.title}</h1>
            <ul className="text-[#333333]">
              {item.list.map((listItem) => (
                <li key={listItem} className="flex gap-2 my-2 max-w-[600px]">
                  <Disc color={"bg-[#0563FF]"} className="mt-2" />
                  {listItem}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full h-full items-center flex md:hidden">
            <Image
              src={item.image}
              alt={item.title}
              width={item.imageWidth || 400}
              height={item.imageHeight || 400}
              className={cn("object-cover", item.classNames)}
            />
          </div>
        </Fragment>
      ) : (
        <Fragment key={item.title}>
          <div key={item.title} className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-[#333333]">{item.title}</h1>
            <ul className="text-[#333333]">
              {item.list.map((listItem) => (
                <li key={listItem} className="flex gap-2 my-2 max-w-[600px]">
                  <Disc color={"bg-[#0563FF]"} className="mt-2" />
                  {listItem}
                </li>
              ))}
            </ul>
          </div>
          <div className={cn("w-full h-full flex items-center justify-end")}>
            <Image
              src={item.image}
              alt={item.title}
              width={item.imageWidth || 400}
              height={item.imageHeight || 400}
              className={cn("object-cover", item.classNames)}
            />
          </div>
        </Fragment>
      )}
    </>
  );
};
