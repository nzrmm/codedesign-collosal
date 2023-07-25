import cx from 'classnames';
import Image from 'next/image';

import {
  Button,
  Typography,
} from '@/components';

import styles from './our-team.module.css';

const OurTeam = () => {
  return (
    <div className={cx('px-52 mb-32')}>
      <div className={cx('flex items-center relative')}>
        {/* Glassmorphism effect */}
        <div className={cx('glass-effect', styles['glass-effect-primary02'])}></div>
        <div className={cx('glass-effect', styles['glass-effect-secondary03'])}></div>

        <div className={cx('flex-1')}>
          <Typography variant='textBase' customClassName='!font-semibold !text-primary03 tracking-widest mb-1'>
            OUR TEAM
          </Typography>

          <Typography variant='text3Xl' customClassName='mb-7'>
            We are a team of designers, <br />
            engineers and analysts <br />
          </Typography>
          
          <Typography variant='textBase' customClassName='mb-12'>
            Our team consists of many creative people. We are  <br />
            committed to maintaining quality work as well as <br />
            speed. These creative people work together to create <br />
            maximum work results. 
          </Typography>

          <Button
            id='see-our-teams-button'
            type='secondary'
            variant='medium'
            onClick={() => {}}
          >
            See Our Teams
          </Button>
        </div>

        <div className={cx('w-[605px] h-[550px] relative')}>
          <Image
            fill
            src={'/images/our-team.png'}
            alt='our-team'
          />
        </div>
      </div>
    </div>
  )
}

export default OurTeam