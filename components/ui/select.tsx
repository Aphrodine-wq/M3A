import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Select option type
 */
export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

/**
 * Select component
 * 
 * A styled select dropdown with consistent styling.
 * Supports options array or children for more control.
 * 
 * @example
 * <Select 
 *   options={[
 *     { value: "1", label: "Option 1" },
 *     { value: "2", label: "Option 2" }
 *   ]} 
 * />
 * 
 * @example
 * <Select error="Please select an option" label="Category">
 *   <option value="">Select...</option>
 *   <option value="healthcare">Healthcare</option>
 *   <option value="iot">IoT</option>
 * </Select>
 */
export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /**
   * Error message or boolean to indicate error state
   */
  error?: string | boolean;
  /**
   * Helper text displayed below select
   */
  helperText?: string;
  /**
   * Label text
   */
  label?: string;
  /**
   * Array of options for simple usage
   */
  options?: SelectOption[];
  /**
   * Placeholder text (first disabled option)
   */
  placeholder?: string;
  /**
   * Select size variant
   */
  size?: "sm" | "md" | "lg";
  /**
   * Full width select
   */
  fullWidth?: boolean;
  /**
   * Icon displayed on the left side
   */
  icon?: React.ReactNode;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      error,
      helperText,
      label,
      options,
      placeholder,
      size = "md",
      fullWidth = true,
      disabled,
      children,
      id,
      icon,
      ...props
    },
    ref
  ) => {
    const selectId = id || React.useId();
    const hasError = !!error;
    const errorMessage = typeof error === "string" ? error : undefined;

    // Size variants
    const sizeClasses = {
      sm: "h-9 pl-3 pr-9 text-sm",
      md: "h-11 pl-4 pr-10 text-sm",
      lg: "h-14 pl-5 pr-12 text-base",
    };

    // Icon padding adjustments
    const iconPaddingClasses = {
      sm: icon ? "pl-9" : "pl-3",
      md: icon ? "pl-11" : "pl-4",
      lg: icon ? "pl-12" : "pl-5",
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
            htmlFor={selectId}
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
                "absolute left-0 top-0 bottom-0 flex items-center justify-center text-[#6B7280] z-10 pointer-events-none",
                iconContainerSizes[size]
              )}
            >
              {icon}
            </div>
          )}
          <select
            id={selectId}
            ref={ref}
            disabled={disabled}
            className={cn(
              // Base styles
              "flex w-full appearance-none rounded-lg border bg-white transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/20 focus:border-[#3B82F6]",
              "disabled:cursor-not-allowed disabled:bg-[#F9FAFB] disabled:text-[#6B7280]",
              // Size
              sizeClasses[size],
              // Padding for icons
              iconPaddingClasses[size],
              // Error or default state
              hasError
                ? "border-red-300 focus:border-red-500 focus:ring-red-500/20 text-red-900"
                : "border-[#E5E7EB] text-[#111827]",
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options
              ? options.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                  >
                    {option.label}
                  </option>
                ))
              : children}
          </select>
          {/* Custom chevron icon */}
          <div
            className={cn(
              "absolute right-0 top-0 bottom-0 flex items-center justify-center pointer-events-none text-[#6B7280]",
              size === "sm" && "w-9",
              size === "md" && "w-10",
              size === "lg" && "w-12"
            )}
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
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

Select.displayName = "Select";

/**
 * SelectGroup component for grouping options
 */
interface SelectGroupProps extends React.OptgroupHTMLAttributes<HTMLOptGroupElement> {
  label: string;
}

const SelectGroup = React.forwardRef<HTMLOptGroupElement, SelectGroupProps>(
  ({ className, children, ...props }, ref) => (
    <optgroup
      ref={ref}
      className={cn("text-[#111827]", className)}
      {...props}
    >
      {children}
    </optgroup>
  )
);
SelectGroup.displayName = "SelectGroup";

/**
 * SelectItem component for individual options
 */
interface SelectItemProps extends React.OptionHTMLAttributes<HTMLOptionElement> {}

const SelectItem = React.forwardRef<HTMLOptionElement, SelectItemProps>(
  ({ className, children, ...props }, ref) => (
    <option
      ref={ref}
      className={cn("text-[#111827]", className)}
      {...props}
    >
      {children}
    </option>
  )
);
SelectItem.displayName = "SelectItem";

export { Select, SelectGroup, SelectItem };
