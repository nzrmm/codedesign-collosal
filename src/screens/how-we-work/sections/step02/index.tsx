import cx from 'classnames';
import Image from 'next/image';

import {Typography} from '@/components';

import styles from './step02.module.css';

const Step02 = () => {
  return (
    <div className={cx('px-52 mb-40')}>
      <div className={cx('flex items-center relative')}>
        {/* Glassmorphism effect */}
        <div
          className={cx('glass-effect', styles['glass-effect-primary02'])}
        ></div>
        <div
          className={cx('glass-effect', styles['glass-effect-secondary03'])}
        ></div>
        <div className={cx('flex-1')}>
          <Typography
            variant='textBase'
            customClassName='!font-semibold !text-primary03 tracking-widest mb-1'
          >
            STEP 02
          </Typography>

          <Typography variant='text3Xl' customClassName='mb-7'>
            Doing planning, design and <br />
            development until everything <br />
            is finished
          </Typography>

          <Typography variant='textBase' customClassName='mb-6'>
            When everything is agreed upon, our team will make plans related to
            the application that will be created. Starting from analysis,
            design, to development.
          </Typography>

          <Typography variant='textBase'>
            In this step, the application is 100% complete.
          </Typography>
        </div>

        <div className={cx('flex-1 flex justify-center')}>
          <Image
            width={410}
            height={410}
            src={'/images/step-02.png'}
            alt='step-02-image'
          />
        </div>
      </div>
    </div>
  );
};

export default Step02;
