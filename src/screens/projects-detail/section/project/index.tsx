import cx from 'classnames';

import {
  Typography,
} from '@/components';

import {IProject} from '@/types';

const Project = ({data}: {data: IProject}) => {
  return (
    <div className={cx('px-52 pt-20 mb-32 relative')}>
      {/* Glassmorphism effect */}
      <div className={cx('glass-effect glass-effect-secondary01')}></div>
      <div className={cx('glass-effect glass-effect-primary03')}></div>
      <div className={cx('glass-effect glass-effect-secondary03')}></div>

      <div className={cx('flex flex-col items-center pb-20 border-b border-white/10 mb-16')}>
        <Typography variant='textBase' customClassName='!font-semibold !text-primary03 tracking-widest mb-3'>
          PROJECT DETAIL
        </Typography>

        <Typography variant='text4Xl' customClassName='text-center mb-6'>
          {data.title}
        </Typography>
      </div>

      <div className={cx('flex items-center gap-10 pb-32 border-b border-white/10 mb-32')}>
        <div className={cx('flex-1')}>
          <div className={cx('w-full h-[440px] rounded-md border border-white/10 bg-[#161629]')}>
          </div>
        </div>

        <div className={cx('flex-1')}>
          <Typography variant='textBase' customClassName='mb-14'>
            {data.description}
          </Typography>

          <div className={cx('mb-10')}>
            <Typography variant='textSm' customClassName='tracking-widest mb-1'>
              CATEGORY
            </Typography>

            <Typography variant='textBase' customClassName='!text-white'>
              {data.category}
            </Typography>
          </div>

          <div className={cx('mb-10')}>
            <Typography variant='textSm' customClassName='tracking-widest mb-1'>
              CLIENT
            </Typography>

            <Typography variant='textBase' customClassName='!text-white'>
              {data.client}
            </Typography>
          </div>

          <div>
            <Typography variant='textSm' customClassName='tracking-widest mb-1'>
              TECHNOLOGY
            </Typography>

            <Typography variant='textBase' customClassName='!text-white'>
              {data.technologies.join(', ')}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project