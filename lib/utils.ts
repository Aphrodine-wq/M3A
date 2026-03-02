import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names and merges Tailwind CSS classes efficiently.
 * Uses clsx for conditional class joining and tailwind-merge for deduplication.
 * 
 * @param inputs - Class values to combine
 * @returns Merged class string
 * 
 * @example
 * cn("px-4 py-2", "bg-blue-500", isActive && "font-bold")
 * // Returns: "px-4 py-2 bg-blue-500 font-bold" (if isActive is true)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a number with commas as thousands separators
 * 
 * @param value - Number to format
 * @returns Formatted string
 * 
 * @example
 * formatNumber(1234567) // Returns: "1,234,567"
 */
export function formatNumber(value: number): string {
  return value.toLocaleString("en-US");
}

/**
 * Format a number as currency
 * 
 * @param value - Number to format
 * @param currency - Currency code (default: USD)
 * @returns Formatted currency string
 * 
 * @example
 * formatCurrency(1234.56) // Returns: "$1,234.56"
 */
export function formatCurrency(value: number, currency: string = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
}

/**
 * Delay execution for a specified duration
 * 
 * @param ms - Milliseconds to delay
 * @returns Promise that resolves after the delay
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Check if an element is in viewport
 * 
 * @param element - Element to check
 * @param offset - Offset to trigger earlier/later
 * @returns Boolean indicating if element is in viewport
 */
export function isInViewport(element: HTMLElement, offset: number = 0): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= -offset &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
