import { Heading } from './heading';
import { Stepper } from './stepper';
import { sen } from '@/fonts';

type Props = {
  title: string;
  total: number;
  current: number;
}

export function WizardHeader({ title, total, current }: Props) {
  return (
    <div className='mb-10'>
      <div className='flex justify-between items-center w-full mb-6'>
        <Heading>{title}</Heading>
        <Stepper current={current} total={total} />
      </div>
      <div className={`${sen.className} text-sm sm:text-base`}>
        Please enter below information to create your account
      </div>
    </div>
  );
}