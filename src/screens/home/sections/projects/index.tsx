import cx from 'classnames';

import {
  Typography,
  CardProject,
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
            <CardProject
              key={index}
              data={project}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Projects