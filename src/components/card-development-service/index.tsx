import cx from 'classnames';
import Image from 'next/image';

import {Typography} from '@/components';

import {IDevelopmentService} from '@/types';

type ICardDevelopmentService = {
  data: IDevelopmentService;
};

const CardDevelopment = ({data}: ICardDevelopmentService) => {
  return (
    <div
      className={cx(' bg-white/5 rounded-md border border-white/10 px-6 py-4')}
    >
      <div className={cx('flex gap-5')}>
        <Image width={30} height={30} src={data.icon} alt={data.alt} />
        <Typography
          variant='textBase'
          customClassName='!font-semibold !text-white'
        >
          {data.title}
        </Typography>
      </div>
    </div>
  );
};

export default CardDevelopment;
