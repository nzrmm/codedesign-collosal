import cx from 'classnames';

import {CardFeature} from '@/components';

import {features} from '@/data';

const Feature = () => {
  return (
    <div className={cx('px-52 mb-14')}>
      <div className={cx('grid grid-cols-3 gap-5')}>
        {features.map((feature, index) => {
          return <CardFeature key={index} data={feature} />;
        })}
      </div>
    </div>
  );
};

export default Feature;
