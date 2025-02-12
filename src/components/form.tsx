type Props = React.FormHTMLAttributes<HTMLFormElement>;

export function Form({ children, ...rest }: Props) {
  return <form className="group" {...rest}>{children}</form>
}