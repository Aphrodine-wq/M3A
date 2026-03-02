import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button variants using class-variance-authority
 * 
 * Variants:
 * - primary: Filled navy background (default)
 * - secondary: Outlined with navy border
 * - ghost: Transparent with hover background
 * 
 * Sizes:
 * - sm: Small button for compact UI
 * - md: Default medium size
 * - lg: Large button for CTAs
 */
const buttonVariants = cva(
  // Base styles applied to all buttons
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A3C6E] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        /**
         * Primary variant - filled navy background
         * Used for main CTAs and important actions
         */
        primary:
          "bg-[#1A3C6E] text-white hover:bg-[#152d52] active:bg-[#101f3a] shadow-sm hover:shadow-md",
        /**
         * Secondary variant - outlined with navy border
         * Used for secondary actions
         */
        secondary:
          "border-2 border-[#1A3C6E] bg-transparent text-[#1A3C6E] hover:bg-[#1A3C6E] hover:text-white active:bg-[#152d52]",
        /**
         * Ghost variant - transparent with hover background
         * Used for subtle actions, navigation items
         */
        ghost:
          "bg-transparent text-[#111827] hover:bg-[#F3F4F6] hover:text-[#1A3C6E] active:bg-[#E5E7EB]",
        /**
         * Accent variant - electric blue
         * Used for special CTAs
         */
        accent:
          "bg-[#3B82F6] text-white hover:bg-[#2563EB] active:bg-[#1D4ED8] shadow-sm hover:shadow-md",
        /**
         * Healthcare variant - teal accent
         * Used for healthcare-related CTAs
         */
        healthcare:
          "bg-[#14B8A6] text-white hover:bg-[#0D9488] active:bg-[#0F766E] shadow-sm hover:shadow-md",
        /**
         * Destructive variant - for dangerous actions
         */
        destructive:
          "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 shadow-sm",
        /**
         * Link variant - appears as text link
         */
        link: "text-[#1A3C6E] underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 py-2 text-xs",
        md: "h-11 px-6 py-2.5 text-sm",
        lg: "h-14 px-8 py-3 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

/**
 * Button component props
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * If true, the button will render its children as the component passed to asChild
   */
  asChild?: boolean;
  /**
   * Show loading spinner
   */
  isLoading?: boolean;
  /**
   * Loading text to display
   */
  loadingText?: string;
}

/**
 * Button component
 * 
 * A versatile button component with multiple variants and sizes.
 * Follows Mission 3A design system colors.
 * 
 * @example
 * // Primary button (default)
 * <Button>Click me</Button>
 * 
 * @example
 * // Secondary button
 * <Button variant="secondary">Learn more</Button>
 * 
 * @example
 * // Large ghost button
 * <Button variant="ghost" size="lg">Navigation</Button>
 * 
 * @example
 * // Loading state
 * <Button isLoading loadingText="Saving...">Save</Button>
 * 
 * @example
 * // As a link
 * <Button asChild><a href="/about">About</a></Button>
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading = false,
      loadingText,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            {loadingText || children}
          </>
        ) : (
          children
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
