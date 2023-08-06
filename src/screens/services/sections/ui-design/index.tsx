import cx from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

import {Typography, CardUIDesignService} from '@/components';

import {uiDesignServices} from '@/data';

const UIDesign = () => {
  return (
    <div className={cx('px-52 mb-36')}>
      <div className={cx('flex')}>
        <div className={cx('flex-1 -ml-20')}>
          <Image
            width={510}
            height={400}
            src={'/images/ui-design.png'}
            alt='ui-design-image'
          />
        </div>

        <div className={cx('flex-1')}>
          <Typography
            variant='textBase'
            customClassName='!font-semibold !text-primary03 tracking-widest mb-1'
          >
            UI DESIGN
          </Typography>

          <Typography variant='text3Xl' customClassName='mb-7'>
            Don&apos;t let your idea get caught <br />
            by others, design a prototype <br />
            for your idea
          </Typography>

          <Typography variant='textBase' customClassName='mb-14'>
            Delegate your ideas as quickly as possible, create beautiful designs
            and vivid prototypes.
          </Typography>

          <div className={cx('flex items-center gap-5 mb-8')}>
            {uiDesignServices.map((uiDesignService, index) => {
              return <CardUIDesignService key={index} data={uiDesignService} />;
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

export default UIDesign;
