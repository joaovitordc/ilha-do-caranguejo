interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#C44B2B]/10 text-[#C44B2B] border border-[#C44B2B]/20 ${className}`}
    >
      {children}
    </span>
  );
}
