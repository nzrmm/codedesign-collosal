import cx from 'classnames';

import {
  Selectbox,
  Typography,
} from '@/components';

import {categories} from '@/data/projects'

const Hero = () => {
  return (
    <div className={cx('px-52 pt-20 mb-24 relative')}>
      {/* Glassmorphism effect */}
      <div className={cx('glass-effect glass-effect-secondary01')}></div>
      <div className={cx('glass-effect glass-effect-primary03')}></div>
      <div className={cx('glass-effect glass-effect-secondary03')}></div>

      <div className={cx('flex justify-between items-center pb-24 border-b border-white/10 ')}>
        <div className={cx('flex-1')}>
          <Typography variant='textBase' customClassName='!font-semibold !text-primary03 tracking-widest mb-1'>
            PROJECTS
          </Typography>

          <Typography variant='text4Xl'>
            We have completed many <br />
            amazing projects that you  <br />
            will not believe
          </Typography>
        </div>
        
        <Selectbox
          options={categories}
          customClassName='w-[175px]'
          wrapperClassName='flex-1 flex justify-end'
          onChange={(option) => console.log(option)}
        />
      </div>
    </div>
  )
}

export default Hero