import { PropsWithChildren } from 'react';

export function Main({ children }: PropsWithChildren) {
  return (
    <div className="bg-gray text-black min-h-screen px-4 md:px-0">
      {children}
    </div>
  );
}
