import cx from 'classnames';

import {
  Typography,
  CardService,
} from '@/components';

import {services} from '@/data/home';

const GetStarted = () => {
  return (
    <div className={cx('px-16 mb-32')}>
      <div className={cx('bg-primary04 px-36 py-24 rounded-[30px]')}>
        <div className={cx('flex flex-col items-center mb-20')}>
          <Typography variant='textBase' customClassName='!font-semibold !text-primary03 tracking-widest mb-1'>
            GET STARTED
          </Typography>

          <Typography variant='text3Xl' customClassName='mb-7 text-center'>
            What do you need? Choose a <br />
            service that can help you
          </Typography>
        </div>

        <div className={cx('grid grid-cols-3 gap-5')}>
          {services.map((service, index) => {
            return (
              <CardService
                key={index}
                data={service}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default GetStarted;