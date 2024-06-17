/* populate element with text */
export function FeatureText(): JSX.Element {
  return (
    <div className="px-4 py-12">
      <h2 className="text-3xl xxs:text-4xl pt-8 text-slate-300 uppercase text-center mb-3">
        How It Works
      </h2>
      <hr></hr>
      <h3 className="sm:text-4xl xs:text-3xl xxs:text-3xl text-4xl font-bold py-6 text-center capitalize">
        We make it easy to get your dream job
      </h3>
      <p className="py-4 text-3xl text-slate-300 text-center">
        We designed this service to help people get their foot in the door. 
      </p>
      
      <p className="py-4 text-3xl text-slate-300 text-center">
      Knowing the experience of being evaluated in a pool of candidates, we know what it takes to stand out. We've helped hundreds of people 
        in the process get a job they love. We're here to help you too. 
      </p>
      
    </div>
  );
}
