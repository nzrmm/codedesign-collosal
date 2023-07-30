import cx from 'classnames';
import Image from 'next/image';

import {Typography} from '@/components';

import {ITestimonial} from '@/types';

type ICardTestimonial = {
  isActive?: boolean;
  data: ITestimonial;
};

const CardTestimonial = ({isActive, data}: ICardTestimonial) => {
  return (
    <div
      className={cx(
        'bg-white/5 flex flex-col items-center rounded-md px-12 py-16',
        {
          '-translate-y-11 transition-all duration-500': isActive,
        },
      )}
    >
      <div className={cx('relative mb-5')}>
        <Image src={data.photo} width={90} height={90} alt={data.name} />
        <div
          className={cx(
            'absolute bottom-0 right-0 w-7 h-7',
            'flex justify-center items-center',
            'bg-primary02 rounded-full border-2 border-secondary06',
          )}
        >
          <Image src={'/images/quote.png'} width={9} height={7} alt={'quote'} />
        </div>
      </div>

      <div className={cx('mb-8')}>
        <Typography variant='textLg' customClassName='mb-2'>
          {data.name}
        </Typography>
        <Typography variant='textSm'>{data.company}</Typography>
      </div>

      <div>
        <Typography variant='textBase' customClassName='text-center'>
          {data.description}
        </Typography>
      </div>
    </div>
  );
};

export default CardTestimonial;
