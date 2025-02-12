import { useState } from 'react';
import { RadioButton } from './radio-button';

export type Option = {
  value: string;
  label: string;
};

type Props = {
  name: string;
  options: Option[];
  defaultValue?: string;
};

export function RadioGroup({ name, options, defaultValue }: Props) {
  const [checked, setChecked] = useState(defaultValue);

  return (
    <div className="flex flex-col gap-0 sm:justify-around sm:flex-row sm:gap-6">
      {options.map(({ value, label }) => (
        <div key={value} className="p-2 sm:p-5">
          <RadioButton
            name={name}
            label={label}
            value={value}
            checked={checked === value}
            onChange={() => setChecked(value)}
          />
        </div>
      ))}
    </div>
  );
}
