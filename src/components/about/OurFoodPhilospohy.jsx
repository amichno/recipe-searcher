import { useI18n } from '../../i18n/I18nContext';
import ListView from '../../ui/listView';

export function OurFoodPhilospohy() {
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
    <ListView list={whyWeExistList} title={t('ui.about.whyWeExist.header')} />
  );
}
