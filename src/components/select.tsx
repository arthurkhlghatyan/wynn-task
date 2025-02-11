import { sen } from '@/fonts';

export type Option = {
  value: string
  label: string
}

type Props = React.InputHTMLAttributes<HTMLSelectElement> & {
  options: Option[]
}



export function Select({ className, options, ...rest }: Props) {
  return (
    <select
      {...rest}
      className={`${sen.className} ${className} rounded-sm border-2 border-solid border-darkGray outline-none appearance-none bg-[url(/svg/chevron.svg)] bg-no-repeat bg-[right_1.25rem_center] bg-[length: 16px] w-full px-5 py-4`}
    >
      {options.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
    </select>
  )
}