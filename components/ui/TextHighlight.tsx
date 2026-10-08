type TextHighlightProps = {
  children: React.ReactNode;
  className?: string;
};

export default function TextHighlight({
  children,
  className = "",
}: TextHighlightProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      {/* Pink selection */}
      <span
        aria-hidden="true"
        className="absolute inset-x-[-0.08em] top-[0.12em] bottom-[0.08em] z-0 bg-[#f4a8c7]/40"
      />

      {/* Left selection line */}
      <span
        aria-hidden="true"
        className="absolute left-[-0.08em] top-[-0.18em] bottom-[-0.08em] z-0 w-[2px] bg-[#f4a8c7]"
      />

      {/* Left handle */}
      <span
        aria-hidden="true"
        className="absolute left-[-0.05em] top-[-0.34em] z-0 h-[0.35em] w-[0.35em] -translate-x-1/2 rounded-full bg-[#f4a8c7]"
      />

      {/* Right selection line */}
      <span
        aria-hidden="true"
        className="absolute right-[-0.08em] top-[0.18em] bottom-[-0.08em] z-0 w-[2px] bg-[#f4a8c7]"
      />

      {/* Right handle */}
      <span
        aria-hidden="true"
        className="absolute right-[-0.05em] bottom-[-0.34em] z-0 h-[0.35em] w-[0.35em] translate-x-1/2 rounded-full bg-[#f4a8c7]"
      />

      {/* Text */}
      <span className="relative z-10">{children}</span>
    </span>
  );
}