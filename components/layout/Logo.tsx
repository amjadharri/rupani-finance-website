import Image from "next/image";
import { cn } from "@/lib/utils";
import mark from "@/assets/images/usif-logo.png";

/**
 * The USIF lockup, exported from the Figma nav. The circular plate is the one
 * place radius 100 is allowed (Rule 03); the mark itself sits inside it.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      data-logo
      className={cn(
        "grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-logo bg-logo-plate",
        className,
      )}
    >
      <Image
        src={mark}
        alt="U.S. Insurance Funding"
        width={56}
        height={56}
        priority
        className="h-[52px] w-[52px] object-contain"
      />
    </span>
  );
}
