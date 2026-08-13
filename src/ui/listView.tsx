import { FC } from 'react';
import BulletPoint from '../components/icons/icon-bullet-point.svg';
//'../icons/icon-bullet-point.svg';

interface ListItem {
  id: string;
  title: string;
  description: string;
}

interface ListViewProps {
  list: ListItem[];
  title: string;
}

const ListView: FC<ListViewProps> = ({ list, title }) => {
  return (
    <section className='divider grid grid-cols-1 sm:grid-cols-2  max-w-4xl mx-auto px-6 py-8 mb-16 mt-8'>
      <div>
        <h2 className='heading-primary'>{title}</h2>
      </div>
      <div>
        {list.map((item) => {
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
};

export default ListView;
