import cx from 'classnames';

import {Button, Typography} from '@/components';

import {IService} from '@/types';

type ICardService = {
  data: IService;
};

const CardService = ({data}: ICardService) => {
  return (
    <div className={cx('rounded-xl px-12 pt-14 pb-7', data.backgroundColor)}>
      <div
        className={cx(
          'flex items-start justify-between pb-9 border-b border-white/5 mb-9',
        )}
      >
        <Typography variant='textBase' customClassName='!font-bold !text-white'>
          {data.name}
        </Typography>
        <div>
          <Typography variant='textXs'>Starting from</Typography>
          <Typography variant='text4Xl'>{data.price}</Typography>
        </div>
      </div>

      <div className={cx('flex flex-col gap-2 mb-12')}>
        {data.descriptions.map((item, index) => {
          return (
            <Typography
              key={index}
              variant='textBase'
              customClassName='!text-white text-center'
            >
              {item}
            </Typography>
          );
        })}
      </div>

      <Button
        id='learn-more-button'
        type='primary-white'
        variant='medium'
        customClassName={`w-full ${data.textColor}`}
        onClick={() => {}}
      >
        Learn More
      </Button>
    </div>
  );
};

export default CardService;
