import cx from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

import {Typography, CardDevelopmentService} from '@/components';

import {developmentServices} from '@/data';

import styles from './development.module.css';

const Development = () => {
  return (
    <div className={cx('px-52 mb-36 relative')}>
      {/* Glassmorphism effect */}
      <div
        className={cx('glass-effect', styles['glass-effect-primary02'])}
      ></div>
      <div
        className={cx('glass-effect', styles['glass-effect-secondary03'])}
      ></div>

      <div className={cx('flex items-center')}>
        <div className={cx('flex-1')}>
          <Typography
            variant='textBase'
            customClassName='!font-semibold !text-primary03 tracking-widest mb-1'
          >
            DEVELOPMENT
          </Typography>

          <Typography variant='text3Xl' customClassName='mb-7'>
            Create solutions to repetitive <br />
            problems, design applications <br />
            and access anywhere!
          </Typography>

          <Typography variant='textBase' customClassName='mb-14'>
            Just tell us your repetitive problem or the primitive method used
            today, and we will create a digital solution.
          </Typography>

          <div className={cx('flex flex-col gap-5 mb-8')}>
            {developmentServices.map((developmentService, index) => {
              return (
                <CardDevelopmentService key={index} data={developmentService} />
              );
            })}
          </div>

          <div className={cx('flex justify-end')}>
            <Link href={'/'} className={cx('flex items-center gap-5')}>
              <Typography
                variant='textBase'
                customClassName='!font-semibold !text-white'
              >
                Service Detail
              </Typography>
              <Image
                width={20}
                height={20}
                src={'/svgs/arrow-right.svg'}
                alt={'arrow-right-icon'}
              />
            </Link>
          </div>
        </div>

        <div className={cx('flex-1 flex justify-center')}>
          <Image
            width={400}
            height={430}
            src={'/images/development.png'}
            alt='development-image'
          />
        </div>
      </div>
    </div>
  );
};

export default Development;
