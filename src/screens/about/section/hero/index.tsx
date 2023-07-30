import cx from 'classnames';
import Image from 'next/image';

import {
  Typography,
} from '@/components';

const Hero = () => {
  return (
    <div className={cx('px-52 pt-20 mb-20 relative')}>
      {/* Glassmorphism effect */}
      <div className={cx('glass-effect glass-effect-secondary01')}></div>
      <div className={cx('glass-effect glass-effect-primary03')}></div>
      <div className={cx('glass-effect glass-effect-secondary03')}></div>

      <div className={cx('flex items-center justify-between gap-8 pb-32 border-b border-white/10')}>
        <div className='flex-1 flex justify-center'>
          <Image
            width={362}
            height={480}
            src={'/images/about.png'}
            alt='about-image'
          />
        </div>
        <div className={cx('flex-1')}>
          <Typography variant='textBase' customClassName='!font-semibold !text-primary03 tracking-widest mb-1'>
            ABOUT
          </Typography>

          <Typography variant='text4Xl' customClassName='mb-8'>
            We are creative, smart and <br />
            hardworking people
          </Typography>

          <Typography variant='textBase'>
            Several creative people gather in the same place - that&apos;s Collosal.
            We collaborate to produce the best results, loved by clients and comfortable for users.
            Here we maintain togetherness even though with different backgrounds, all the people here are already experts in their respective fields.
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default Hero