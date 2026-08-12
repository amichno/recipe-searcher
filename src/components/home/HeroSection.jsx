import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className='text-center max-w-2xl mx-auto pt-14 pb-10 px-6'>
      <h1 className='heading-primary'>
        <span className='relative inline-block'>
          <span className='bg-orange-200 absolute left-0 right-0 bottom-0 z-0 h-1/2 z-0 rounded-md px-2 py-0.5 inline-block'></span>
          <span className='relative z-10'>Healthy</span>
        </span>{' '}
        meals, zero fuss
      </h1>
      <p className='text-stone-500 text-base mb-7 max-w-lg mx-auto'>
        Discover eight quick, whole-food recipes you can cook tonight — no
        processed junk, no guesswork.
      </p>
      <Link
        to='/recipes'
        className='inline-block text-sm font-semibold bg-emerald-950 text-stone-100 px-6 py-3 rounded-lg hover:bg-emerald-900'
      >
        Start exploring
      </Link>
    </section>
  );
}
