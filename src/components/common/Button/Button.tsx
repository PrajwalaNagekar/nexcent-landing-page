import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

const variants = {
  primary:
    "bg-[#4CAF4F] text-white hover:bg-[#43A047]",

  secondary:
    "bg-transparent text-[#4CAF4F] hover:bg-[#F5F7FA]",
};

const sizes = {
  sm: "px-4 py-2 text-[14px] leading-[20px]",

  md: "px-5 py-2.5 text-[14px] leading-[20px]",

  lg: "h-[52px] min-w-[128px] px-8 py-[14px] text-[16px] leading-[24px]",
};
export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center",
        "font-medium",
        "transition-colors duration-200",
        "focus:outline-none focus-visible:ring-2",
        "focus-visible:ring-[#4CAF4F]",
        "focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        size === "lg"
          ? "rounded-[4px]"
          : "rounded-[6px]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}