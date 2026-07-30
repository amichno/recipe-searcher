import heroImage from '../images/image-home-hero-large.webp';

export function HeroImage() {
  return (
    <div className='max-w-4xl mx-auto px-6 mb-16'>
      <div className='bg-white rounded-2xl p-3 shadow-sm'>
        <img
          src={heroImage}
          alt='Osoba przygotowująca warzywa w jasnej, nowoczesnej kuchni'
          className='w-full h-72 md:h-96 object-cover rounded-xl'
        />
      </div>
    </div>
  );
}
