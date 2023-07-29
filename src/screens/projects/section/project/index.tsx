import cx from 'classnames';

import {
  Button,
  CardProject,
} from '@/components';

import {projects} from '@/data/projects';

const Project = () => {
  return (
    <div className={cx('px-52 mb-16')}>
      <div className={cx('grid grid-cols-2 gap-x-5 gap-y-16 mb-24')}>
        {projects.map((project, index) => {
          return (
            <CardProject
              key={project.id}
              data={project}
            />
          )
        })}
      </div>

      <div className={cx('flex justify-center')}>
        <Button
          id='load-more-button'
          type='secondary'
          variant='medium'
          onClick={() => {}}
        >
          Load More
        </Button>
      </div>
    </div>
  )
}

export default Project