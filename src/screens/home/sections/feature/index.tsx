import {useState} from 'react';
import cx from 'classnames';

import {
  Typography,
} from '@/components'

import {
  BoxIcon,
  CodeIcon,
  FigmaIcon,
} from '@/assets/svgs'

const Feature = () => {
  const [features] = useState([
    {
      icon: <FigmaIcon />,
      title: 'Design',
      description: 'The project interface will be designed first, our favorite tool is Figma.',
    },
    {
      icon: <CodeIcon />,
      title: 'Develop',
      description: 'Transform design and write business logic here. Choose the technology you want.',
    },
    {
      icon: <BoxIcon />,
      title: 'Ship',
      description: 'After the work is complete, we will send the project and all its assets to you.',
    }
  ])
  
  return (
    <div className={cx('px-52')}>
      <div className={cx('grid grid-cols-3 gap-5')}>
        {features.map((feature, index) => {
          return (
            <div key={index} className={cx('bg-white/5 rounded-md px-10 py-8')}>
              <div className={cx('flex items-center justify-center w-14 h-14 bg-white/5 rounded-md mb-7')}>
                {feature.icon}
              </div>
    
              <div>
                <Typography variant='textLg' customClassName='mb-2'>
                  {feature.title}
                </Typography>
                <Typography variant='textBase'>
                  {feature.description}
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Feature