import { forwardRef } from 'react';

type Props = React.FormHTMLAttributes<HTMLFormElement>;

export function Form({ children, ...rest }: Props) {
  return (
    <form className="group" {...rest}>
      {children}
    </form>
  );
}

export const FormWithRef = forwardRef<HTMLFormElement, Props>(
  ({ children, ...rest }, ref) => {
    return (
      <form ref={ref} className="group" {...rest}>
        {children}
      </form>
    );
  }
);
