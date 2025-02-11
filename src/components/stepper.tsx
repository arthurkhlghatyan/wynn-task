type Props = {
  total: number;
  current: number;
}

export function Stepper({ current, total }: Props) {
  return (
    <div data-testid="stepper" className="text-2xl">Step <span>{current}</span> of <span>{total}</span></div>
  );
}