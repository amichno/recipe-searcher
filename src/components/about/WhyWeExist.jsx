import { I18nProvider, useI18n } from '../../i18n/I18nContext';
import BulletPoint from '../icons/icon-bullet-point.svg';

export function WhyWeExist() {
  const { t } = useI18n();

  const whyWeExistList = [
    {
      id: 1,
      title: t('ui.about.whyWeExist.firstItem.title'),
      description: t('ui.about.whyWeExist.firstItem.description'),
    },
    {
      id: 2,
      title: t('ui.about.whyWeExist.secondItem.title'),
      description: t('ui.about.whyWeExist.secondItem.description'),
    },
    {
      id: 3,
      title: t('ui.about.whyWeExist.thirdItem.title'),
      description: t('ui.about.whyWeExist.thirdItem.description'),
    },
  ];

  return (
    <section className='divider grid grid-cols-1 sm:grid-cols-2  max-w-4xl mx-auto px-6 py-8 mb-16 mt-8'>
      <div>
        <h2 className='heading-primary'>{t('ui.about.whyWeExist.header')}</h2>
      </div>
      <div>
        {whyWeExistList.map((item, key) => {
          return (
            <div id={item.id} className='grid grid-cols-[10%_90%] pb-3'>
              <div className=''>
                <img src={BulletPoint} className='' />
              </div>
              <div className='grid grid-cols-1 pt-1'>
                <div className='font-bold'>{item.title}</div>
                <div className='py-2'>{item.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
