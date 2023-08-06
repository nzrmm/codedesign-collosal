import cx from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

import {Typography, CardMaintenanceService} from '@/components';

import {maintenanceServices} from '@/data';

import styles from './maintenance.module.css';

const Maintenance = () => {
  return (
    <div className={cx('px-52 mb-36 relative')}>
      {/* Glassmorphism effect */}
      <div
        className={cx('glass-effect', styles['glass-effect-secondary01'])}
      ></div>
      <div
        className={cx('glass-effect', styles['glass-effect-primary03'])}
      ></div>

      <div className={cx('flex items-center')}>
        <div className={cx('flex-1 flex justify-center')}>
          <Image
            width={560}
            height={542}
            src={'/images/maintenance.png'}
            alt='maintenance-image'
          />
        </div>

        <div className={cx('flex-1')}>
          <Typography
            variant='textBase'
            customClassName='!font-semibold !text-primary03 tracking-widest mb-1'
          >
            MAINTENANCE
          </Typography>

          <Typography variant='text3Xl' customClassName='mb-7'>
            Think of your server as your <br />
            own child, taking care of it <br />
            every day
          </Typography>

          <Typography variant='textBase' customClassName='mb-14'>
            We will back up your servers every day, clean them every week,
            upgrade them when there is an update.
          </Typography>

          <div className={cx('grid grid-cols-2 gap-x-12 gap-y-5 mb-8')}>
            {maintenanceServices.map((maintenanceService, index) => {
              return (
                <CardMaintenanceService key={index} data={maintenanceService} />
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
      </div>
    </div>
  );
};

export default Maintenance;
