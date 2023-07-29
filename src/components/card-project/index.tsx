import cx from 'classnames';

import {
  Button,
  Typography
} from '@/components';

import {IProject} from '@/types/home';

type ICardProject = {
  data: IProject,
}

const CardProject = ({data}: ICardProject) => {
  return (
    <div>
      <div className={cx('w-full h-[440px] rounded-md border border-white/10 bg-[#161629] mb-10')}>
      </div>

      <div className={cx('text-center')}>
        <Typography variant='textXl' customClassName='mb-2'>
          {data.title}
        </Typography>

        <Typography variant='textBase' customClassName='mb-9'>
          {data.description}
        </Typography>

        <Button
          id='detail-button'
          type='outline'
          variant='small'
          customClassName='!rounded-full'
          onClick={() => {}}
        >
          Detail
        </Button>
      </div>
    </div>
  )
}

export default CardProject