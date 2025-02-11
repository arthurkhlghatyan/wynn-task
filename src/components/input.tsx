import { sen } from '@/fonts';

type Props = React.InputHTMLAttributes<HTMLInputElement>

export function Input({ className, ...rest }: Props) {
  return (
    <input
      {...rest}
      className={`${sen.className} ${className} rounded-sm border-2 border-solid border-darkGray outline-none w-full px-5 py-4`}
    />
  )
}