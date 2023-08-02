import cx from 'classnames';

import {Typography, CardTeamPeople} from '@/components';

import {teamPeoples} from '@/data';

import styles from './our-team.module.css';

const OurTeam = () => {
  return (
    <div className={cx('px-52 mb-32 relative')}>
      {/* Glassmorphism effect */}
      <div
        className={cx(
          'circle-glass-effect',
          styles['circle-glass-effect-gradient01'],
        )}
      ></div>
      <div
        className={cx(
          'circle-glass-effect',
          styles['circle-glass-effect-gradient02'],
        )}
      ></div>
      <div
        className={cx(
          'circle-glass-effect',
          styles['circle-glass-effect-primary02'],
        )}
      ></div>

      <div className={cx('flex flex-col items-center mb-24')}>
        <Typography
          variant='textBase'
          customClassName='!font-semibold !text-primary03 tracking-widest mb-1'
        >
          OUR TEAM
        </Typography>

        <Typography variant='text3Xl' customClassName='text-center'>
          Meet the team! All creative <br />
          people are here
        </Typography>
      </div>

      <div className={cx('grid grid-cols-3 gap-x-5 gap-y-7')}>
        {teamPeoples.map((teamPeople, index) => {
          return <CardTeamPeople key={index} data={teamPeople} />;
        })}
      </div>
    </div>
  );
};

export default OurTeam;
