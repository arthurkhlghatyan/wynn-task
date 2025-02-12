import { sen } from '@/fonts';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'solid' | 'outline';
  fullWidth?: boolean;
};


export function Button({ variant = 'solid', fullWidth, className, children, ...rest }: Props) {
  return (
    <button
      className={`${sen.className} uppercase border disabled:opacity-30 border-green focus:relative focus:top-1 rounded-sm h-[56px] font-medium transition-all
        ${variant === "solid"
          ? "bg-green text-white"
          : "text-green bg-transparent"
        }
        ${fullWidth ? "w-full" : "min-w-[217px]"} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}