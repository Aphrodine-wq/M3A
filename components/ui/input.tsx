import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Input component
 * 
 * A flexible input component with consistent styling.
 * Supports various states: error, disabled, and sizes.
 * 
 * @example
 * <Input placeholder="Enter your name" />
 * 
 * @example
 * <Input type="email" error="Invalid email address" />
 * 
 * @example
 * <Input icon={<SearchIcon />} placeholder="Search..." />
 */
export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Error message or boolean to indicate error state
   */
  error?: string | boolean;
  /**
   * Helper text displayed below input
   */
  helperText?: string;
  /**
   * Label text
   */
  label?: string;
  /**
   * Icon displayed on the left side
   */
  icon?: React.ReactNode;
  /**
   * Icon displayed on the right side
   */
  rightIcon?: React.ReactNode;
  /**
   * Input size variant
   */
  size?: "sm" | "md" | "lg";
  /**
   * Full width input
   */
  fullWidth?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      error,
      helperText,
      label,
      icon,
      rightIcon,
      size = "md",
      fullWidth = true,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    // Generate unique ID if not provided
    const inputId = id || React.useId();
    const hasError = !!error;
    const errorMessage = typeof error === "string" ? error : undefined;

    // Size variants
    const sizeClasses = {
      sm: "h-9 px-3 text-sm",
      md: "h-11 px-4 text-sm",
      lg: "h-14 px-5 text-base",
    };

    // Icon padding adjustments
    const iconPaddingClasses = {
      sm: icon ? "pl-9" : "pl-3",
      md: icon ? "pl-11" : "pl-4",
      lg: icon ? "pl-12" : "pl-5",
    };

    const rightIconPaddingClasses = {
      sm: rightIcon ? "pr-9" : "pr-3",
      md: rightIcon ? "pr-11" : "pr-4",
      lg: rightIcon ? "pr-12" : "pr-5",
    };

    // Icon container sizes
    const iconContainerSizes = {
      sm: "w-9",
      md: "w-11",
      lg: "w-12",
    };

    return (
      <div className={cn("flex flex-col gap-1.5", fullWidth && "w-full")}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-[#111827]"
          >
            {label}
            {props.required && (
              <span className="text-red-500 ml-0.5">*</span>
            )}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div
              className={cn(
                "absolute left-0 top-0 bottom-0 flex items-center justify-center text-[#6B7280]",
                iconContainerSizes[size]
              )}
            >
              {icon}
            </div>
          )}
          <input
            type={type}
            id={inputId}
            ref={ref}
            disabled={disabled}
            className={cn(
              // Base styles
              "flex w-full rounded-lg border bg-white transition-all duration-200",
              "placeholder:text-[#9CA3AF]",
              "focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/20 focus:border-[#3B82F6]",
              "disabled:cursor-not-allowed disabled:bg-[#F9FAFB] disabled:text-[#6B7280]",
              // Size
              sizeClasses[size],
              // Padding for icons
              iconPaddingClasses[size],
              rightIconPaddingClasses[size],
              // Error or default state
              hasError
                ? "border-red-300 focus:border-red-500 focus:ring-red-500/20 text-red-900 placeholder:text-red-300"
                : "border-[#E5E7EB] text-[#111827]",
              className
            )}
            {...props}
          />
          {rightIcon && (
            <div
              className={cn(
                "absolute right-0 top-0 bottom-0 flex items-center justify-center text-[#6B7280]",
                iconContainerSizes[size]
              )}
            >
              {rightIcon}
            </div>
          )}
        </div>
        {(errorMessage || helperText) && (
          <p
            className={cn(
              "text-xs",
              hasError ? "text-red-600" : "text-[#6B7280]"
            )}
          >
            {errorMessage || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
