import cx from 'classnames';
import Image from 'next/image';

import {Typography} from '@/components';

const Step01 = () => {
  return (
    <div className={cx('px-52 mb-40')}>
      <div className={cx('flex items-center')}>
        <div className={cx('flex-1 flex justify-center')}>
          <Image
            width={410}
            height={410}
            src={'/images/step-01.png'}
            alt='step-01-image'
          />
        </div>

        <div className={cx('flex-1')}>
          <Typography
            variant='textBase'
            customClassName='!font-semibold !text-primary03 tracking-widest mb-1'
          >
            STEP 01
          </Typography>

          <Typography variant='text3Xl' customClassName='mb-7'>
            Let&apos;s talk about your <br />
            company&apos;s problems first
          </Typography>

          <Typography variant='textBase' customClassName='mb-6'>
            After submitting the quote form, we will review the data, then we
            will contact you. You can discuss with our team regarding your
            problem and find a solution to that problem.
          </Typography>

          <Typography variant='textBase'>
            In this step, you will discuss what application to build.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Step01;
