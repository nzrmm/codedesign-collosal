import cx from 'classnames';
import Image from 'next/image';

import {Typography} from '@/components';

import {IUIDesignService} from '@/types';

type ICardUIDesignService = {
  data: IUIDesignService;
};

const CardUIDesignService = ({data}: ICardUIDesignService) => {
  return (
    <div
      className={cx(
        'flex-1 bg-white/5 rounded-md border border-white/10 px-5 py-6',
      )}
    >
      <div className={cx('flex items-center gap-4 mb-4')}>
        <Image width={30} height={30} src={data.icon} alt={data.alt} />
        <Typography
          variant='textBase'
          customClassName='!font-semibold !text-white'
        >
          {data.title}
        </Typography>
      </div>

      <Typography variant='textBase'>{data.description}</Typography>
    </div>
  );
};

export default CardUIDesignService;
