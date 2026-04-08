import { Star } from "@phosphor-icons/react/dist/ssr";

interface StarRatingProps {
  count?: number;
  className?: string;
}

export default function StarRating({ count = 5, className = "" }: StarRatingProps) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} weight="fill" className="text-[#D4956A]" />
      ))}
    </div>
  );
}
