import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "w-full rounded-xl py-3 font-semibold transition duration-200";

  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-lg",
    secondary:
      "bg-white border border-gray-300 hover:bg-gray-100",
  };

  return (
    <button
      className={`${base} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}