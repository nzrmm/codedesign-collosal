import cx from 'classnames';
import Image from 'next/image';

import {
  Typography,
} from '@/components';

import styles from './how-we-work.module.css';

const HowWeWork = () => {
  return (
    <div className={cx('px-52')}>
      <div className={cx('flex items-center relative')}>
        {/* Glassmorphism effect */}
        <div className={cx('glass-effect', styles['glass-effect-secondary01'])}></div>
        <div className={cx('glass-effect', styles['glass-effect-secondary02'])}></div>

        <div className={cx('w-1/2 h-[525px] relative')}>
          <Image
            fill
            src={'/images/how-we-work.png'}
            alt='how-we-work'
          />
        </div>

        <div className={cx('w-1/2')}>
          <Typography variant='textBase' customClassName='!font-semibold !text-primary03 tracking-widest mb-1'>
            HOW WE WORK?
          </Typography>

          <Typography variant='text3Xl' customClassName='mb-7'>
            Everything is well planned, well<br />
            designed and developed <br />
            wholeheartedly
          </Typography>
          
          <Typography variant='textBase'>
            Careful planning makes us confident, developed with best <br />
            practices so that the project can be maintained. We always test <br />
            projects before they are shipped.      
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default HowWeWork