import cx from 'classnames';
import Image from 'next/image';

import {Typography} from '@/components';

import {ITeamPeople} from '@/types';

type ICardTeamPeople = {
  data: ITeamPeople;
};

const CardTeamPeople = ({data}: ICardTeamPeople) => {
  return (
    <div className={cx('rounded-md bg-white/5 overflow-hidden')}>
      <div className={cx('relative w-full h-[356px]')}>
        <Image fill src={data.images} alt={data.alt} />
      </div>

      <div className={cx('px-10 py-9')}>
        <Typography variant='textLg' customClassName='mb-2'>
          {data.name}
        </Typography>
        <Typography variant='textSm' customClassName='!font-medium'>
          {data.jobPosition}
        </Typography>
      </div>
    </div>
  );
};

export default CardTeamPeople;
