import { PropsWithChildren } from "react";

type Props = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant?: "primary" | "secondary";
};

const variantClasses: Record<string, string> = {
  primary: "text-2xl sm:text-4xl",
  secondary: "text-xl",
};

export function Heading({
  as = "h1",
  variant = "primary",
  className = "",
  children,
  ...props
}: PropsWithChildren<Props>) {
  const Tag = as;
  const classes = `${variantClasses[variant]} ${className}`;

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};
