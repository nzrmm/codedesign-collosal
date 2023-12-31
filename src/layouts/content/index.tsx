import cx from 'classnames';

import {Header, Footer} from '@/layouts';

type IContent = {
  children: React.ReactNode;
};

const Content = ({children}: IContent) => {
  return (
    <div className={cx('antialiased xl:w-[1440px] mx-auto')}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Content;
