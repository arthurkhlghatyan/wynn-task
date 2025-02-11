import { PropsWithChildren } from "react";
import { Heading } from './heading';

type Props = {
  title: string;
}

export function WizardSection({ title, children }: PropsWithChildren<Props>) {
  return (
    <div className="mb-10">
      <div className="w-fit mb-10">
        <Heading as="h2" variant="secondary" className="mb-4">{title}</Heading>
        <hr />
      </div>
      {children}
    </div>
  );
}