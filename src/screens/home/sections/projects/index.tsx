import cx from 'classnames';

import {
  Button,
  Typography
} from '@/components';

import {projects} from '@/data/home';

import styles from './projects.module.css';

const Projects = () => {
  return (
    <div className={cx('px-52 mb-28 relative')}>
      {/* Glassmorphism effect */}
      <div className={cx('circle-glass-effect', styles['circle-glass-effect-gradient01'])}></div>
      <div className={cx('circle-glass-effect', styles['circle-glass-effect-gradient02'])}></div>
      <div className={cx('circle-glass-effect', styles['circle-glass-effect-primary02'])}></div>

      <div className={cx('flex flex-col items-center mb-16')}>
        <Typography variant='textBase' customClassName='!font-semibold !text-primary03 tracking-widest mb-1'>
          PROJECTS
        </Typography>

        <Typography variant='text3Xl' customClassName='mb-7 text-center'>
          We have completed many <br />
          amazing projects that you will <br />
          not believe
        </Typography>
      </div>

      <div className={cx('grid grid-cols-2 gap-5')}>
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <div className={cx('w-full h-[440px] rounded-md border border-white/10 bg-[#161629] mb-10')}>
              </div>
  
              <div className={cx('text-center')}>
                <Typography variant='textXl' customClassName='mb-2'>
                  {project.title}
                </Typography>
    
                <Typography variant='textBase' customClassName='mb-9'>
                  {project.description}
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
        })}
      </div>
    </div>
  )
}

export default Projects