import { cn } from "@/lib/utils";

export function Disc({
  color = "bg-black",
  className,
}: {
  color?: string;
  className?: string;
}) {
  return (
    <div className={cn("w-2 h-2 bg-black rounded-full shrink-0", color, className)} />
  );
}
