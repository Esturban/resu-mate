/* creates hero image */
export function HeroImage(): JSX.Element {
  return (
    <picture>
    <img
      className="absolute object-cover w-full h-full"
      src="/hero.webp"
      alt="/"
    />
    </picture>
  );
}