import { Link } from 'react-router-dom';
import ForkIllustration from '../images/pattern-fork.svg';
import KnifeIllustration from '../images/pattern-knife.svg';

export function CtaBanner() {
  return (
    <section className='max-w-4xl mx-auto px-6 pb-14'>
      <div className='relative bg-[var(--neutral200)] py-12 px-6 text-center overflow-hidden'>
        <img
          src={ForkIllustration}
          className='hidden  sm:block  absolute
            left-[-18px] bottom-[-18px]
            w-auto h-[55%]
            opacity-70
            sm:left-[-48px] sm:bottom-auto
            sm:top-1/2 sm:-translate-y-1/2
            sm:h-[90%]'
        />
        <img
          src={KnifeIllustration}
          className='hidden absolute sm:block
            right-[-18px] top-[-18px]
            w-auto h-[55%]
            opacity-70
            sm:right-[-48px]
            sm:top-1/2 sm:-translate-y-1/2
            sm:h-[90%]'
        />
        <h2 className='font-display font-semibold text-2xl text-emerald-950 mb-2'>
          Ready to cook smarter?
        </h2>
        <p className='text-sm text-stone-500 mb-6 max-w-sm mx-auto'>
          Hit the button, pick a recipe, and get dinner on the table — fast.
        </p>
        <Link
          to='/recipes'
          className='inline-block text-sm font-semibold bg-emerald-950 text-stone-100 px-6 py-3 rounded-lg hover:bg-emerald-900'
        >
          Browse recipes
        </Link>
      </div>
    </section>
  );
}
