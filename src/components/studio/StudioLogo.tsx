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
        width={859}
        height={1021}
        className="h-auto shrink-0"
        style={{ width: size }}
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
