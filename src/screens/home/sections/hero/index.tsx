import cx from 'classnames';

import {
  Button,
  Typography,
} from '@/components';

import styles from './hero.module.css';

const Hero = () => {
  return (
    <div className={cx('px-52 pt-20 mb-24 relative')}>
      {/* Glassmorphism effect */}
      <div className={cx('glass-effect', styles['glass-effect-secondary01'])}></div>
      <div className={cx('glass-effect', styles['glass-effect-primary03'])}></div>
      <div className={cx('glass-effect', styles['glass-effect-secondary03'])}></div>

      <div className={cx('flex flex-col items-center')}>
        <Typography variant='textBase' customClassName='!font-semibold !text-primary03 tracking-widest mb-3'>
          CLIENT-DEVELOPMENT DRIVEN
        </Typography>

        <Typography variant='text4Xl' customClassName='text-center mb-6'>
          We Design. We Develop. We Ship. <br />
          In The Same Day.
        </Typography>

        <Typography variant='textBase' customClassName='text-center mb-10'>
          We are committed to not making clients wait. We will deliver the work <br />
          as quickly as possible. Even on the same day. Even so, we do not <br />
          reduce the quality of our work.
        </Typography>

        <div className={cx('flex items-center gap-6')}>
          <Button
            id='send-quote-button'
            type='primary'
            variant='medium'
            onClick={() => {}}
          >
            Send Quote
          </Button>
          <Button
            id='learn-more-button'
            type='secondary'
            variant='medium'
            onClick={() => {}}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero