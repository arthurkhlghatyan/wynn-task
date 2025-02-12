'use client';

import { PropsWithChildren, useState } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export function Checkbox({ children, ...rest }: PropsWithChildren<Props>) {
  const [checked, setChecked] = useState(false);

  return (
    <label className="inline-flex items-center gap-2">
      <div className="flex items-center cursor-pointer relative">
        <input name="terms" type="checkbox" onChange={() => setChecked(c => !c)} checked={checked} className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded border border-black checked:bg-green checked:border-green" {...rest} />
        <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </span>
      </div>
      {children}
    </label>
  );
}