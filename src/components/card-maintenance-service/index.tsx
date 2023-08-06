import cx from 'classnames';
import Image from 'next/image';

import {Typography} from '@/components';

import {IMaintenanceService} from '@/types';

type ICardMaintenanceService = {
  data: IMaintenanceService;
};

const CardMaintenanceService = ({data}: ICardMaintenanceService) => {
  return (
    <div className={cx('flex items-center gap-6')}>
      <div
        className={cx(
          'flex items-center justify-center',
          'w-[50px] h-[50px] bg-white/5 rounded-md',
        )}
      >
        <Image width={20} height={20} src={data.icon} alt={data.alt} />
      </div>

      <Typography variant='textBase' customClassName='!text-white'>
        {data.title}
      </Typography>
    </div>
  );
};

export default CardMaintenanceService;
