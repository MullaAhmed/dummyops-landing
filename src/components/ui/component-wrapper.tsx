import { cn } from "@/lib/utils";

export default function ComponentWrapper({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div
      className={cn(
        "container max-w-[1600px] mx-auto overflow-hidden transition-all duration-300 px-4 sm:px-6 lg:px-8",
        className
      )}
      id={id}
    >
      {children}
    </div>
  );
}
