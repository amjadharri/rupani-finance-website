import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

export interface MediaProps {
  src: StaticImageData;
  alt: string;
  /**
   * Stretch to the container instead of using the image's own ratio. Use inside
   * grids where the tile has to match the height of its sibling cards.
   */
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

/**
 * Photography exported from the Figma boards. The assets are already duotoned
 * and cropped to their frame, so the intrinsic ratio matches the design exactly
 * — no aspect ratio needs restating here.
 *
 * Rule 03: 8px radius on images, same as cards.
 */
export function Media({
  src,
  alt,
  fill = false,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 620px",
  className,
}: MediaProps) {
  if (fill) {
    return (
      <div className={cn("relative overflow-hidden rounded-card bg-brand-rule", className)}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          placeholder="blur"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      sizes={sizes}
      priority={priority}
      placeholder="blur"
      className={cn("h-auto w-full rounded-card bg-brand-rule", className)}
    />
  );
}
