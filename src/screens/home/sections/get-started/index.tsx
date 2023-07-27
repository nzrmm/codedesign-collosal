import {useState} from 'react';
import cx from 'classnames';

import {
  Button,
  Typography,
} from '@/components';

const GetStarted = () => {
  const [services] = useState([
    {
      name: 'UI Design',
      price: '1200$',
      descriptions: ['10 design pages', 'Well-documented', '4 revisions', '$100/additional page'],
      textColor: '!text-primary05',
      backgroundColor: 'bg-primary05',
    },
    {
      name: 'Development',
      price: '5000$',
      descriptions: ['Web & Mobile', 'Well-documented', '8 revisions', '$1000/additional feature'],
      textColor: '!text-primary06',
      backgroundColor: 'bg-primary06'
    },
    {
      name: 'Maintenance',
      price: '3000$',
      descriptions: ['Daily backup', '3 hourse of maintenance', 'Including fixing', '$50/additional hour'],
      textColor: '!text-primary07',
      backgroundColor: 'bg-primary07'
    },
  ]);

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
              <div key={index} className={cx('rounded-xl px-12 pt-14 pb-7', service.backgroundColor)}>
                <div className={cx('flex items-start justify-between pb-9 border-b border-white/5 mb-9')}>
                  <Typography variant='textBase' customClassName='!font-bold !text-white'>
                    {service.name}
                  </Typography>
                  <div>
                    <Typography variant='textXs'>
                      Starting from
                    </Typography>
                    <Typography variant='text4Xl'>
                      {service.price}
                    </Typography>
                  </div>
                </div>

                <div className={cx('flex flex-col gap-2 mb-12')}>
                  {service.descriptions.map((item, index) => {
                    return (
                      <Typography key={index} variant='textBase' customClassName='!text-white text-center'>
                        {item}
                      </Typography>
                    )
                  })}
                </div>

                <Button
                  id='learn-more-button'
                  type='primary-white'
                  variant='medium'
                  customClassName={`w-full ${service.textColor}`}
                  onClick={() => {}}
                >
                  Learn More
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default GetStarted;