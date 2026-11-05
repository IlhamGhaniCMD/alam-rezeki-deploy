import { cn } from "@/lib/utils";

type BreathingDotProps = {
  colorClassName?: string;
  pulseClassName?: string;
  size?: "sm" | "md";
  className?: string;
};

export function BreathingDot({
  colorClassName = "bg-[#25854a]",
  pulseClassName = "bg-[#25854a]/45",
  size = "md",
  className,
}: BreathingDotProps) {
  const dotSize = size === "sm" ? "size-2" : "size-2.5";

  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center",
        dotSize,
        className,
      )}
    >
      <span
        className={cn(
          "animate-breathing-out absolute inline-flex size-full rounded-full",
          pulseClassName,
        )}
      />
      <span
        style={{ animationDelay: "1.2s" }}
        className={cn(
          "animate-breathing-out absolute inline-flex size-full rounded-full",
          pulseClassName,
        )}
      />
      <span
        className={cn(
          "relative inline-flex size-full rounded-full",
          colorClassName,
        )}
      />
    </span>
  );
}
