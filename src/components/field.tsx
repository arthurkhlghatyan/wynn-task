import { PropsWithChildren } from "react";
import Image from "next/image";

type Props = {
  id: string;
  label: string;
  info?: string;
  required?: boolean;
  className?: string;
}

export function Field({
  id,
  label,
  info,
  required = false,
  className,
  children
}: PropsWithChildren<Props>) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        data-testid="field-label"
        className="text-sm mb-3 flex justify-between items-center w-full">
        <div>
          {label}
          &nbsp;
          {required && <span className="text-brown">*</span>}
        </div>
        {info && (
          <div>
            <Image
              src="svg/info.svg"
              role="tooltip"
              title={info}
              alt="Info"
              width={14}
              height={14}
            />
          </div>
        )}
      </label>
      {children}
    </div>
  );
}