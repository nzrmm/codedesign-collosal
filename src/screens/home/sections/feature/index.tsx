import cx from 'classnames';
import Image from 'next/image';

import {
  Typography,
} from '@/components'

import {features} from '@/data/home'

const Feature = () => {  
  return (
    <div className={cx('px-52 mb-14')}>
      <div className={cx('grid grid-cols-3 gap-5')}>
        {features.map((feature, index) => {
          return (
            <div key={index} className={cx('bg-white/5 rounded-md px-10 py-8')}>
              <div className={cx('flex items-center justify-center w-14 h-14 bg-white/5 rounded-md mb-7')}>
                <Image
                  width={24}
                  height={24}
                  src={feature.icon}
                  alt={feature.icon}
                />
              </div>
    
              <div>
                <Typography variant='textLg' customClassName='mb-2'>
                  {feature.title}
                </Typography>
                <Typography variant='textBase'>
                  {feature.description}
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Feature