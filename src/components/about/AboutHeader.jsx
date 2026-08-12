import ImageAbout from '../images/image-about-our-mission-large.webp';
import { I18nProvider, useI18n } from '../../i18n/I18nContext';

export function AboutHeader() {
  const { t } = useI18n();

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2  max-w-4xl mx-auto px-6 mb-16 mt-8'>
      <div className='grid grid-cols-1 pr-3'>
        <div>
          <h1 className='heading-primary'>{t('ui.about.header')}</h1>
        </div>
        <div>{t('ui.about.descriptionLineOne')}</div>
        <div className='py-3'>{t('ui.about.descriptionLineTwo')}</div>
      </div>
      <div className=''>
        <img
          src={ImageAbout}
          alt='Osoba przygotowująca warzywa w jasnej, nowoczesnej kuchni'
          className='w-full h-72 md:h-96 object-cover rounded-xl'
        />
      </div>
    </div>
  );
}
