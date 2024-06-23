import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

export default function HeroLogos(): JSX.Element {
  const [images, setImages] = useState<{ src: string; name: string }[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const contexts = require.context('../../assets/logos', false, /\.svg$/);
      const importPromises = contexts.keys().map(async (key) => {
        const module = await import(`../../assets/logos/${key.replace('./', '')}`);
        return {
          src: module.default,
          name: key.replace('./', '').replace('.svg', '')
        };
      });

      const importedImages = await Promise.all(importPromises);
      setImages(importedImages);
    };

    loadImages();
  }, []);

  return (
    <div className='relative'>
      <h2 className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 sm:text-5xl xxs:text-4xl text-3xl font-bold mx-1 text-center sm:pb-10 xl:pb-0">Companies our clients work at:</h2>
      
      <div className='bottom-0 left-0 right-0 mx-auto flex justify-center pb-4 sm:pb-8 md:pb-12 lg:pb-16 w-3/4 xxs:w-full'>   
        <Marquee className="lg:rounded-full bg-gray-100 py-2 opacity-70 w-full bg-slate-200 xxs:mt-10" gradient={false} loop={0} speed={100}>
          {images.map((image, index) => (
            !image.name.includes('exclude-pattern') && (
              <img className='p-2 mx-10' // Use Tailwind CSS for margin and padding
                key={index}
                src={image.src}
                alt={`${image.name} Logo`}
                style={{ width: '100px' }} // Removed inline margin
                loading='lazy'
              />
            )
          ))}
        </Marquee>
      </div>
    </div>
  );
}