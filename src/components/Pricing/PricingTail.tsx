interface PricingTailProps {
  text: string;
}

export function PricingTail({ text }: PricingTailProps): JSX.Element {
  return (
    <span className="text-xl text-slate-500 flex flex-col justify-end ml-2">
      {text}
    </span>
  );
}