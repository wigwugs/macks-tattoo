import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";

type BaseProps = {
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  as,
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-sans font-semibold uppercase tracking-widest text-xs transition-all duration-200 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold";

  const sizes = {
    sm: "px-6 py-2",
    md: "px-8 py-3.5",
    lg: "px-10 py-5",
  };

  const variants = {
    primary:
      "bg-gold text-black hover:brightness-110",
    ghost:
      "border border-white/20 text-on-surface hover:bg-white hover:text-black",
  };

  const classes = [base, sizes[size], variants[variant], className].join(" ");

  if (as === "a") {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
