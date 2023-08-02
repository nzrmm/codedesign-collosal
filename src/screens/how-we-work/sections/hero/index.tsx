import cx from 'classnames';

import {Typography} from '@/components';

const Hero = () => {
  return (
    <div className={cx('px-52 pt-20 mb-32 relative')}>
      {/* Glassmorphism effect */}
      <div className={cx('glass-effect glass-effect-secondary01')}></div>
      <div className={cx('glass-effect glass-effect-primary03')}></div>
      <div className={cx('glass-effect glass-effect-secondary03')}></div>

      <div
        className={cx(
          'flex flex-col items-center pb-24 border-b border-white/10',
        )}
      >
        <Typography
          variant='textBase'
          customClassName='!font-semibold !text-primary03 tracking-widest mb-3'
        >
          HOW WE WORK
        </Typography>

        <Typography variant='text4Xl' customClassName='text-center mb-6'>
          We have a workflow that <br />
          allows the job to be <br />
          delivered well
        </Typography>
      </div>
    </div>
  );
};

export default Hero;
