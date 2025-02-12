import { sen } from '@/fonts';

type Props = React.InputHTMLAttributes<HTMLInputElement>

export function Input({ name, className, ...rest }: Props) {
  const validationClassName = '[&:user-invalid]:border-red';

  return (
    <input
      {...rest}
      id={name}
      name={name}
      className={`${sen.className} ${validationClassName} rounded-sm border-2 border-solid border-darkGray outline-none w-full px-5 py-4 ${className}`}
    />
  )
}