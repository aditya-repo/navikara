import Image from "next/image";

type BrandMarkProps = {
  className?: string;
};

export default function BrandMark({ className = "h-11 w-11" }: BrandMarkProps) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} aria-hidden="true">
      <Image
        src="/favicon_io/apple-touch-icon.png"
        alt=""
        fill
        sizes="44px"
        className="object-contain"
        priority
      />
    </div>
  );
}
