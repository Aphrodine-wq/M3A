import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Card component - Container for content
 * 
 * Features:
 * - Clean white background with subtle border
 * - Hover lift effect with shadow
 * - Consistent padding and border radius
 * - Subtle transition animations
 */
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    /**
     * Enable hover lift effect
     */
    hover?: boolean;
    /**
     * Make card clickable with cursor pointer
     */
    clickable?: boolean;
  }
>(({ className, hover = true, clickable = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      // Base styles
      "rounded-xl border border-[#E5E7EB] bg-white p-6",
      "transition-all duration-300 ease-out",
      // Hover effect
      hover && "hover:shadow-lg hover:-translate-y-1 hover:border-[#D1D5DB]",
      // Clickable cursor
      clickable && "cursor-pointer",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

/**
 * Card header - Contains title and optional description/subtitle
 */
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 pb-4", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

/**
 * Card title - Primary heading for the card
 */
const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-tight text-[#111827]",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

/**
 * Card description - Secondary text below title
 */
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-[#6B7280] leading-relaxed", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

/**
 * Card content - Main body content of the card
 */
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

/**
 * Card footer - Bottom section for actions or metadata
 */
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-4 mt-auto", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

/**
 * Card image - Image container with consistent sizing
 */
const CardImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    src?: string;
    alt?: string;
    aspectRatio?: "video" | "square" | "wide" | "auto";
    objectFit?: "cover" | "contain" | "fill";
  }
>(
  (
    {
      className,
      src,
      alt = "",
      aspectRatio = "video",
      objectFit = "cover",
      ...props
    },
    ref
  ) => {
    const aspectRatioClasses = {
      video: "aspect-video",
      square: "aspect-square",
      wide: "aspect-[21/9]",
      auto: "",
    };

    const objectFitClasses = {
      cover: "object-cover",
      contain: "object-contain",
      fill: "object-fill",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-lg mb-4",
          aspectRatioClasses[aspectRatio],
          className
        )}
        {...props}
      >
        {src && (
          <img
            src={src}
            alt={alt}
            className={cn(
              "w-full h-full transition-transform duration-500 group-hover:scale-105",
              objectFitClasses[objectFit]
            )}
          />
        )}
        {props.children}
      </div>
    );
  }
);
CardImage.displayName = "CardImage";

/**
 * Card action - Action buttons or links container
 */
const CardAction = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-2 ml-auto", className)}
    {...props}
  />
));
CardAction.displayName = "CardAction";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardImage,
  CardAction,
};
