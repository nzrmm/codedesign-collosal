import cx from 'classnames';
import Image from 'next/image';

import {
  Typography
} from '@/components';

import {IFeature} from '@/types/home'

type ICardFeature = {
  data: IFeature,
}

const CardFeature = ({data}: ICardFeature) => {
  return (
    <div className={cx('bg-white/5 rounded-md px-10 py-8')}>
      <div className={cx('flex items-center justify-center w-14 h-14 bg-white/5 rounded-md mb-7')}>
        <Image
          width={24}
          height={24}
          src={data.icon}
          alt={data.icon}
        />
      </div>

      <div>
        <Typography variant='textLg' customClassName='mb-2'>
          {data.title}
        </Typography>
        <Typography variant='textBase'>
          {data.description}
        </Typography>
      </div>
    </div>
  )
}

export default CardFeature