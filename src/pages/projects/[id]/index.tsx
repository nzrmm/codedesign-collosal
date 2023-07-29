import cx from 'classnames';
import {useRouter} from "next/router";
import type {
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next'

import {
  Typography,
  CardProject,
} from '@/components';

import {projects} from '@/data/projects';

import {IProject} from '@/types/projects';

const ProjectDetail = ({project}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if(router.isFallback) {
    return (
      <div>Loading...</div>
    )
  }
  return (
    <div className={cx('px-52 pt-20 pb-32 relative')}>
      {/* Glassmorphism effect */}
      <div className={cx('glass-effect glass-effect-secondary01')}></div>
      <div className={cx('glass-effect glass-effect-primary03')}></div>
      <div className={cx('glass-effect glass-effect-secondary03')}></div>

      <div className={cx('flex flex-col items-center pb-20 border-b border-white/10 mb-16')}>
        <Typography variant='textBase' customClassName='!font-semibold !text-primary03 tracking-widest mb-3'>
          PROJECT DETAIL
        </Typography>

        <Typography variant='text4Xl' customClassName='text-center mb-6'>
          {project.title}
        </Typography>
      </div>

      <div className={cx('flex items-center gap-10 pb-32 border-b border-white/10 mb-32')}>
        <div className={cx('flex-1')}>
          <div className={cx('w-full h-[440px] rounded-md border border-white/10 bg-[#161629]')}>
          </div>
        </div>

        <div className={cx('flex-1')}>
          <Typography variant='textBase' customClassName='mb-14'>
            {project.description}
          </Typography>

          <div className={cx('mb-10')}>
            <Typography variant='textSm' customClassName='tracking-widest mb-1'>
              CATEGORY
            </Typography>

            <Typography variant='textBase' customClassName='!text-white'>
              Development
            </Typography>
          </div>

          <div className={cx('mb-10')}>
            <Typography variant='textSm' customClassName='tracking-widest mb-1'>
              CLIENT
            </Typography>

            <Typography variant='textBase' customClassName='!text-white'>
              Acme, Inc
            </Typography>
          </div>

          <div>
            <Typography variant='textSm' customClassName='tracking-widest mb-1'>
              TECHNOLOGY
            </Typography>

            <Typography variant='textBase' customClassName='!text-white'>
              JavaScript, HTML, CSS
            </Typography>
          </div>
        </div>
      </div>

      <div>
        <div className={cx('flex flex-col items-center mb-16')}>
          <Typography variant='textBase' customClassName='!font-semibold !text-primary03 tracking-widest mb-3'>
            PROJECTS
          </Typography>

          <Typography variant='text3Xl' customClassName='text-center'>
            Other Amazing Projects
          </Typography>
        </div>

        <div className={cx('grid grid-cols-2 gap-5')}>
          {projects.slice(0, 2).map((project) => {
            return (
              <CardProject
                key={project.id}
                data={project}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: projects.map((project) => {
      return {
        params: {
          id: project.id
        }
      }
    }),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<{
  project: IProject
}> = async ({params}) => {
  const project = projects.find((project) => project.id === params?.id);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    }
  }
}

export default ProjectDetail