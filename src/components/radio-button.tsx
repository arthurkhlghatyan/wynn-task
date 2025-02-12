import { sen } from '@/fonts';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function RadioButton({ label, id, className, ...rest }: Props) {
  return (
    <label className="inline-flex items-center" htmlFor={id}>
      <input id={id} type="radio" className={`peer h-[16px] w-[16px] cursor-pointer appearance-none rounded-full border border-black checked:border-black checked:bg-green transition-all ${className}`} {...rest} />
      {label && <span className={`${sen.className} ml-2 text-black cursor-pointer text-base`} >{label}</span>}
    </label>
  )
}