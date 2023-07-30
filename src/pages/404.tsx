import cx from 'classnames';
import {useRouter} from 'next/navigation';

import {Button, Typography} from '@/components';

const NotFound = () => {
  const router = useRouter();

  return (
    <div className={cx('px-52 pt-24 pb-32 relative')}>
      {/* Glassmorphism effect */}
      <div className={cx('glass-effect glass-effect-secondary01')}></div>
      <div className={cx('glass-effect glass-effect-primary03')}></div>
      <div className={cx('glass-effect glass-effect-secondary03')}></div>

      <div className={cx('flex flex-col items-center')}>
        <Typography
          variant='textBase'
          customClassName='!font-semibold !text-secondary03 tracking-widest mb-3'
        >
          ERROR
        </Typography>

        <Typography variant='text4Xl' customClassName='text-center mb-6'>
          The page you are looking <br />
          for is not on this website, <br />
          please check again
        </Typography>

        <Typography variant='textBase' customClassName='text-center mb-8'>
          The system cannot find the page you are looking for, maybe you <br />
          have the wrong path or the page has been deleted. <br />
        </Typography>

        <Button
          id='back-to-home-button'
          type='secondary'
          variant='medium'
          onClick={() => router.back()}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
