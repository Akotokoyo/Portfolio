import Image from "next/image";
import { studioConfig } from "@/data/mirage-games-data";

export function StudioLogo({
  size = 32,
  showText = true,
}: {
  size?: number;
  showText?: boolean;
}) {
  return (
    <span className="flex items-center gap-2.5">
      <Image
        src={studioConfig.logo}
        alt={studioConfig.name}
        width={size}
        height={size}
        className="shrink-0"
        priority
      />
      {showText && (
        <span className="hidden sm:block">
          <span className="block text-sm font-semibold leading-none">
            {studioConfig.name}
          </span>
          <span className="block text-xs text-muted">Indie Game Studio</span>
        </span>
      )}
    </span>
  );
}
