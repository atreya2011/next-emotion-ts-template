import { css } from "@emotion/react";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  backgroundColor?: string;
  children?: ReactNode;
}

export default function Button({ color, backgroundColor, children, ...rest }: ButtonProps) {
  const buttonStyle = css({
    backgroundColor,
    color,
  });
  return (
    <button css={buttonStyle} {...rest}>
      {children}
    </button>
  );
}
