import cx from 'classnames';

import {Header} from '@/layouts'

type IContent = {
  children: React.ReactNode,
}

const Content = ({children}: IContent) => {
  return (
    <div className={cx('bg-transparent relative')}>
      <div className={cx('absolute -left-48 top-[60px] w-[785px] h-[770px] bg-[#FCA016] rounded-full z-0')}></div>
      <div className={cx('absolute right-1/3 -top-[40px] w-[785px] h-[770px] bg-[#16FCD2] rounded-full -z-10')}></div>
      <div className={cx('absolute right-6 -top-[140px] w-[785px] h-[770px] bg-[#FC165B] rounded-full z-0')}></div>

      <div className={cx('antialiased bg-primary01/90 backdrop-filter backdrop-blur-[175px] text-white')}>
        <Header />
        {children}
      </div>
    </div>
  )
}

export default Content