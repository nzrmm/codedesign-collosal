import cx from 'classnames';
import Image from 'next/image';

import {Typography} from '@/components';

import styles from './step03.module.css';

const Step02 = () => {
  return (
    <div className={cx('px-52 mb-40')}>
      <div className={cx('flex items-center relative')}>
        {/* Glassmorphism effect */}
        <div
          className={cx('glass-effect', styles['glass-effect-primary03'])}
        ></div>
        <div
          className={cx('glass-effect', styles['glass-effect-secondary01'])}
        ></div>

        <div className={cx('flex-1 flex justify-center')}>
          <Image
            width={410}
            height={410}
            src={'/images/step-03.png'}
            alt='step-03-image'
          />
        </div>

        <div className={cx('flex-1')}>
          <Typography
            variant='textBase'
            customClassName='!font-semibold !text-primary03 tracking-widest mb-1'
          >
            STEP 03
          </Typography>

          <Typography variant='text3Xl' customClassName='mb-7'>
            The project is complete and we <br />
            ship all the project assets, and <br />
            access to the server
          </Typography>

          <Typography variant='textBase' customClassName='mb-6'>
            We will be responsible for delivering all the project assets to you,
            don&apos;t worry. These assets include, design files, source code,
            server access, and so on.
          </Typography>

          <Typography variant='textBase'>
            In this step, everything is done and the contract ends.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Step02;
