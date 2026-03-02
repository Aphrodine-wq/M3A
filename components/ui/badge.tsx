import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Badge variants using class-variance-authority
 * 
 * Variants designed for Mission 3A portfolio categories:
 * - default: Navy (primary)
 * - healthcare: Teal accent for healthcare companies
 * - iot: Blue accent for IoT companies
 * - fintech: Electric blue for fintech
 * - secondary: Gray for general tags
 * - outline: Bordered style
 * - destructive: Red for alerts/warnings
 */
const badgeVariants = cva(
  // Base styles
  "inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#1A3C6E] focus:ring-offset-2",
  {
    variants: {
      variant: {
        /**
         * Default - Navy background (Mission 3A primary)
         */
        default: "bg-[#1A3C6E] text-white hover:bg-[#152d52]",
        /**
         * Healthcare - Teal accent
         */
        healthcare: "bg-[#14B8A6] text-white hover:bg-[#0D9488]",
        /**
         * IoT - Blue accent
         */
        iot: "bg-[#3B82F6] text-white hover:bg-[#2563EB]",
        /**
         * Fintech - Electric blue
         */
        fintech: "bg-[#6366F1] text-white hover:bg-[#4F46E5]",
        /**
         * Secondary - Gray for general tags
         */
        secondary: "bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]",
        /**
         * Outline - Bordered style
         */
        outline:
          "border border-[#E5E7EB] bg-transparent text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#374151]",
        /**
         * Destructive - For alerts
         */
        destructive: "bg-red-100 text-red-700 hover:bg-red-200",
        /**
         * Success - For success states
         */
        success: "bg-green-100 text-green-700 hover:bg-green-200",
        /**
         * Warning - For warning states
         */
        warning: "bg-amber-100 text-amber-700 hover:bg-amber-200",
        /**
         * Info - For informational tags
         */
        info: "bg-blue-100 text-blue-700 hover:bg-blue-200",
      },
      /**
       * Size variants
       */
      size: {
        sm: "px-2 py-0.5 text-[10px]",
        md: "px-3 py-1 text-xs",
        lg: "px-4 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

/**
 * Badge component props
 */
export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /**
   * Optional icon to display before text
   */
  icon?: React.ReactNode;
  /**
   * Remove button for dismissible badges
   */
  onRemove?: () => void;
}

/**
 * Badge component
 * 
 * Used for tags, labels, and category indicators.
 * Optimized for Mission 3A portfolio categories like "Healthcare", "IoT", "FinTech".
 * 
 * @example
 * // Default badge
 * <Badge>Healthcare</Badge>
 * 
 * @example
 * // Healthcare category
 * <Badge variant="healthcare">Healthcare</Badge>
 * 
 * @example
 * // IoT category
 * <Badge variant="iot">IoT</Badge>
 * 
 * @example
 * // With icon
 * <Badge icon={<BuildingIcon size={12} />}>Company</Badge>
 * 
 * @example
 * // Dismissible badge
 * <Badge onRemove={() => handleRemove()}>Filter</Badge>
 */
function Badge({
  className,
  variant,
  size,
  icon,
  onRemove,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {icon && <span className="mr-1 flex items-center">{icon}</span>}
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="ml-1.5 -mr-0.5 rounded-full p-0.5 hover:bg-black/10 focus:outline-none focus:ring-1 focus:ring-white"
          aria-label="Remove badge"
        >
          <svg
            className="h-3 w-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </span>
  );
}

/**
 * BadgeGroup component for displaying multiple badges
 */
interface BadgeGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Gap between badges
   */
  gap?: "sm" | "md" | "lg";
}

const BadgeGroup = React.forwardRef<HTMLDivElement, BadgeGroupProps>(
  ({ className, gap = "sm", children, ...props }, ref) => {
    const gapClasses = {
      sm: "gap-1.5",
      md: "gap-2",
      lg: "gap-3",
    };

    return (
      <div
        ref={ref}
        className={cn("flex flex-wrap items-center", gapClasses[gap], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
BadgeGroup.displayName = "BadgeGroup";

export { Badge, BadgeGroup, badgeVariants };
