import wholeFoodIcon from '../icons/icon-whole-food-recipes.svg';
import minimumFussIcon from '../icons/icon-minimum-fuss.svg';
import searchInSecondsIcon from '../icons/icon-search-in-seconds.svg';
//import search from '../'

const FEATURES = [
  {
    icon: wholeFoodIcon,
    title: 'Whole-food recipes',
    description: 'Each dish uses everyday, unprocessed ingredients.',
    boxClass: 'bg-orange-50',
  },
  {
    icon: minimumFussIcon,
    title: 'Minimum fuss',
    description:
      'All recipes are designed to make eating healthy quick and easy.',
    boxClass: 'bg-emerald-50',
  },
  {
    icon: searchInSecondsIcon,
    title: 'Search in seconds',
    description:
      'Filter by name or ingredient and jump straight to the recipe you need.',
    boxClass: 'bg-violet-50',
  },
];

export function FeatureGrid() {
  return (
    <section className='max-w-4xl mx-auto px-6 py-14 text-center  border-stone-200'>
      <h2 className='font-display font-semibold text-2xl text-emerald-950 mb-10'>
        What you'll get
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
        {FEATURES.map(({ icon, title, description, boxClass }) => (
          <div key={title}>
            <div
              className={
                'w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center mx-auto mb-4 ' +
                boxClass
              }
            >
              <img src={icon} alt='' className='w-5 h-5' />
            </div>
            <p className='font-semibold text-sm text-emerald-950 mb-1.5'>
              {title}
            </p>
            <p className='text-xs text-stone-500 leading-relaxed max-w-[190px] mx-auto'>
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
