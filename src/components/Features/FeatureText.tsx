/* populate element with text */
export function FeatureText(): JSX.Element {
  return (
    <div className="px-4 py-12">
      <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
        How It Works
      </h2>
      <h3 className="sm:text-5xl font-bold py-6 text-center capitalize">
        We make it easy to get your dream job
      </h3>
      <p className="py-4 sm:text-3xl text-slate-300">
        We designed this service to help people get their foot in the door. Knowing the experience of being 
        evaluated in a pool of candidates, we know what it takes to stand out. We've helped hundreds of people 
        in the process get a job they love. We're here to help you too. 
      </p>
    </div>
  );
}
