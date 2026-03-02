import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Textarea component
 * 
 * A flexible textarea component with consistent styling.
 * Supports auto-resize, character count, and various states.
 * 
 * @example
 * <Textarea placeholder="Enter your message" />
 * 
 * @example
 * <Textarea error="Message is required" rows={6} />
 * 
 * @example
 * <Textarea showCount maxLength={500} />
 */
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Error message or boolean to indicate error state
   */
  error?: string | boolean;
  /**
   * Helper text displayed below textarea
   */
  helperText?: string;
  /**
   * Label text
   */
  label?: string;
  /**
   * Show character count
   */
  showCount?: boolean;
  /**
   * Auto-resize textarea based on content
   */
  autoResize?: boolean;
  /**
   * Minimum rows for auto-resize
   */
  minRows?: number;
  /**
   * Maximum rows for auto-resize
   */
  maxRows?: number;
  /**
   * Full width textarea
   */
  fullWidth?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      error,
      helperText,
      label,
      showCount = false,
      autoResize = false,
      minRows = 3,
      maxRows = 10,
      fullWidth = true,
      disabled,
      id,
      rows = 4,
      value,
      maxLength,
      onChange,
      ...props
    },
    ref
  ) => {
    const textareaId = id || React.useId();
    const hasError = !!error;
    const errorMessage = typeof error === "string" ? error : undefined;
    const [textLength, setTextLength] = React.useState(
      typeof value === "string" ? value.length : 0
    );

    // Handle auto-resize
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);
    
    React.useImperativeHandle(ref, () => textareaRef.current!);

    const adjustHeight = React.useCallback(() => {
      if (!autoResize || !textareaRef.current) return;

      const textarea = textareaRef.current;
      const lineHeight = parseInt(getComputedStyle(textarea).lineHeight) || 24;
      const minHeight = minRows * lineHeight;
      const maxHeight = maxRows * lineHeight;

      // Reset height to auto to get scrollHeight
      textarea.style.height = "auto";
      
      // Calculate new height
      const newHeight = Math.max(minHeight, Math.min(textarea.scrollHeight, maxHeight));
      textarea.style.height = `${newHeight}px`;
    }, [autoResize, minRows, maxRows]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setTextLength(e.target.value.length);
      adjustHeight();
      onChange?.(e);
    };

    // Initial height adjustment
    React.useEffect(() => {
      adjustHeight();
    }, [adjustHeight]);

    // Update text length when value changes externally
    React.useEffect(() => {
      if (typeof value === "string") {
        setTextLength(value.length);
      }
    }, [value]);

    return (
      <div className={cn("flex flex-col gap-1.5", fullWidth && "w-full")}>
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-medium text-[#111827]"
          >
            {label}
            {props.required && (
              <span className="text-red-500 ml-0.5">*</span>
            )}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={textareaRef}
          disabled={disabled}
          rows={autoResize ? minRows : rows}
          value={value}
          maxLength={maxLength}
          onChange={handleChange}
          className={cn(
            // Base styles
            "flex w-full rounded-lg border bg-white px-4 py-3 transition-all duration-200",
            "placeholder:text-[#9CA3AF]",
            "focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/20 focus:border-[#3B82F6]",
            "disabled:cursor-not-allowed disabled:bg-[#F9FAFB] disabled:text-[#6B7280]",
            "resize-none",
            // Error or default state
            hasError
              ? "border-red-300 focus:border-red-500 focus:ring-red-500/20 text-red-900 placeholder:text-red-300"
              : "border-[#E5E7EB] text-[#111827]",
            className
          )}
          {...props}
        />
        <div className="flex justify-between">
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
          {showCount && (
            <p
              className={cn(
                "text-xs ml-auto",
                maxLength && textLength >= maxLength
                  ? "text-red-500"
                  : "text-[#6B7280]"
              )}
            >
              {textLength}
              {maxLength && `/${maxLength}`}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
