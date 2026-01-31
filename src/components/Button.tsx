"use client";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/fonts/utils";
import { Button as MantineButton } from "@mantine/core";

const buttonVariants = cva(
  "py-2 flex items-center justify-center font-medium shadow-button transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none",
  {
    variants: {
      variant: {
        primary: "text-white gap-3 px-8 py-4  w-38 rounded-4xl bg-secondary delay-150 hover:scale-105 transition-all",
        secondary:
          "bg-secondary text-white font-semibold rounded-full",
        outline:
          "bg-transparent text-custom-teal border border-custom-teal hover:bg-custom-teal/10 rounded-lg",
      },
      size: {
        sm: "text-sm py-1.5 px-4",
        md: "text-base py-2.5 px-7",
        lg: "text-base py-3.5 px-8",
        xl: "text-lg py-4 px-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  href?: string;
  target?: string;
  className?: string;
}

const Button = ({
  children,
  variant,
  size,
  href,
  target,
  className,
  ...props
}: ButtonProps) => {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    return (
      <Link href={href} target={target} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <MantineButton className={classes} {...props}>
      {children}
    </MantineButton>
  );
};
export default Button;
