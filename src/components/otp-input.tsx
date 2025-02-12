import { sen } from '@/fonts';

type Props = {
  name: string;
  expectedDigits?: number;
  onComplete: () => void;
  onResend: () => void;
};

export function OTPInput({
  name,
  expectedDigits = 4,
  onComplete,
  onResend,
}: Props) {
  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = event.target;
    if (value.length === 1 && index < expectedDigits) {
      const nextInput = document.querySelector(
        `input[name='${name}']:nth-child(${index + 2})`
      ) as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      } else {
        onComplete();
      }
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === 'Backspace' && index > 0 && !event.currentTarget.value) {
      const prevInput = document.querySelector(
        `input[name='${name}']:nth-child(${index})`
      ) as HTMLInputElement;
      if (prevInput) prevInput.focus();
    }
  };

  return (
    <div>
      <div className="flex gap-3 mb-4">
        {Array.from({ length: expectedDigits }).map((_, index) => {
          return (
            <input
              type="number"
              key={index}
              name={`${name}`}
              required
              maxLength={1}
              min={0}
              max={9}
              onChange={(event) => handleInput(event, index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center outline-none border rounded-lg border-brown text-brown p-2 w-16 text-5xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
            />
          );
        })}
      </div>
      <p className={`${sen.className} text-lightGray`}>
        Didn't get a code?{' '}
        <a href="#" onClick={onResend} className="underline">
          Click to resend
        </a>
        .
      </p>
    </div>
  );
}
