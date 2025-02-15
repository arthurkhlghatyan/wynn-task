import { sen } from '@/fonts';

export type Option = {
  value: string;
  label: string;
};

type Props = React.InputHTMLAttributes<HTMLSelectElement> & {
  options: Option[];
};

export function Select({
  className,
  placeholder,
  defaultValue,
  options,
  ...rest
}: Props) {
  const validationClassName = '[&:user-invalid]:border-red invalid:text-placeholderGray';

  return (
    <select
      {...rest}
      defaultValue={defaultValue ?? ''}
      className={`${sen.className} ${validationClassName} rounded-sm border-2 border-solid border-darkGray outline-none appearance-none bg-[url(/svg/chevron.svg)] bg-no-repeat bg-[right_1.25rem_center] bg-[length: 16px] w-full px-5 py-4 ${className}`}
    >
      {placeholder && (
        <option key={-1} disabled value="">
          {placeholder}
        </option>
      )}
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
