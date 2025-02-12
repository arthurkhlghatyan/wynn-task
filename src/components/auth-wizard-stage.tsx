import { sen } from '@/fonts';

import { Heading } from './heading';
import { PropsWithChildren } from 'react';

type Props = {
  title: string;
  description: string;
};

export function AuthWizardStage({
  title,
  description,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div className="rounded-sm bg-white w-full p-6 flex flex-col items-center gap-5">
      <Heading as="h2" variant="secondary">
        {title}
      </Heading>

      <p className={`${sen.className} text-lightGray`}>{description}</p>

      {children}
    </div>
  );
}
