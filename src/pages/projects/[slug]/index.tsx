import {useRouter} from 'next/router';
import type {
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next';

import {Project, OtherProject} from '@/screens/projects-detail';

import {projects} from '@/data';

import {IProject} from '@/types';

const ProjectDetail = ({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Project data={project} />
      <OtherProject />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      };
    }),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{
  project: IProject;
}> = async ({params}) => {
  const project = projects.find((project) => project.slug === params?.slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};

export default ProjectDetail;
