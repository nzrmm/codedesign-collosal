import cx from 'classnames';
import Image from 'next/image';

import {Typography} from '@/components';

import {statistics, companyLogos} from '@/data';

const Statistic = () => {
  return (
    <div className={cx('px-52 mb-32')}>
      <div className={cx('flex flex-col items-center mb-24')}>
        <Typography
          variant='textBase'
          customClassName='!font-semibold !text-primary03 tracking-widest mb-1'
        >
          STATISTIC
        </Typography>

        <Typography variant='text3Xl' customClassName='text-center'>
          In 3 years we reached 8 <br />
          countries, 193 clients and earning <br />
          $100k USD
        </Typography>
      </div>

      <div
        className={cx(
          'grid grid-cols-3 divide-x divide-white/5 bg-white/10 p-11 rounded-md mb-14',
        )}
      >
        {statistics.map((statistic, index) => {
          return (
            <div
              key={index}
              className={cx('flex items-center justify-center gap-10')}
            >
              <div
                className={cx(
                  'flex justify-center items-center w-[70px] h-[70px] bg-white/5 rounded-md',
                )}
              >
                <Image
                  width={30}
                  height={30}
                  src={statistic.icon}
                  alt={statistic.alt}
                />
              </div>

              <div>
                <Typography variant='text4Xl'>{statistic.value}</Typography>
                <Typography
                  variant='textBase'
                  customClassName='!font-bold -mt-2'
                >
                  {statistic.type}
                </Typography>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className={cx(
          'flex items-center justify-center gap-11 border-y border-white/10 py-8',
        )}
      >
        {companyLogos.map((companyLogo, index) => {
          return (
            <Image
              key={index}
              src={companyLogo.src}
              width={120}
              height={32}
              alt={companyLogo.alt}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Statistic;
