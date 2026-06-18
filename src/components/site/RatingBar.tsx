import { cn } from "@/lib/utils";

export function RatingBar({ value, className }: { value: number; className?: string }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className={cn("relative h-1.5 w-full overflow-hidden rounded-full bg-secondary", className)} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
      <div
        className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-mist-deep via-primary to-sage"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
