import cx from 'classnames';

import {Typography, CardProject} from '@/components';

import {projects} from '@/data';

const OtherProject = () => {
  return (
    <div className={cx('px-52 mb-32')}>
      <div className={cx('flex flex-col items-center mb-16')}>
        <Typography
          variant='textBase'
          customClassName='!font-semibold !text-primary03 tracking-widest mb-3'
        >
          PROJECTS
        </Typography>

        <Typography variant='text3Xl' customClassName='text-center'>
          Other Amazing Projects
        </Typography>
      </div>

      <div className={cx('grid grid-cols-2 gap-5')}>
        {projects.slice(0, 2).map((project) => {
          return <CardProject key={project.id} data={project} />;
        })}
      </div>
    </div>
  );
};

export default OtherProject;
