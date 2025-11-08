import Footer from "./footer";
import {
  VALUE_DELIVERED,
  ValueDeliveredItem,
} from "@/lib/content/value-delivered";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ValueDelivered() {
  return (
    <section
      className={`relative w-full pt-36`}
      id="value-delivered"
    >
      <div className="container mx-auto h-full w-full flex flex-col gap-24">
        <h1 className="text-4xl md:text-5xl text-center font-bold text-[#333333] leading-tight">
          Value Delivered
        </h1>
        <ValueDeliveredGrid />
      </div>
      <Footer />
    </section>
  );
}

const ValueDeliveredGrid = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 place-items-center max-w-[1600px] mx-auto">
      {VALUE_DELIVERED.map((item) => (
        <ValueDeliveredGridItem key={item.title} item={item} />
      ))}
    </div>
  );
};

const ValueDeliveredGridItem = ({ item }: { item: ValueDeliveredItem }) => {
  const leadQualification = item.id === "lead-qualification";
  const leadAcceleration = item.id === "lead-acceleration";
  return (
    <div
      className={cn(
        "grid grid-rows-3 gap-4 min-h-[300px] border border-[#0563FF] bg-[#E2EDFF] rounded-4xl w-full md:pb-4 pb-10",
        item.classNames
      )}
    >
      <div
        className={cn(
          "relative h-full row-span-2 w-[70%] mx-auto flex items-start justify-start",
          leadQualification && "h-[70%] my-auto",
          leadAcceleration && "w-full"
        )}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className={cn("", !leadAcceleration && "object-center")}
        />
      </div>
      <div className="flex flex-col gap-4 px-8">
        <h1 className="text-2xl font-bold">{item.title}</h1>
        <p>{item.description}</p>
      </div>
    </div>
  );
};
